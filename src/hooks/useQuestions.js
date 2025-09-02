import { useEffect, useState } from "react";
import { get, getDatabase, orderByKey, query, ref } from "firebase/database";

export default function useQuestions(videoID) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function fetchQuestions() {
            //database related works
            const db = getDatabase();
            const quizRef = ref(db, "quiz/" + videoID + "/questions");
            const quizQuery = query(
                quizRef,
                orderByKey()
            );

            try {
                setError(false);
                setLoading(true);

                //Request firebase database
                const snapshot = await get(quizQuery);
                setLoading(false);
                // console.log(snapshot.val());
                if (snapshot.exists()) {
                    setQuestions((prevQuestions) => {
                        return [...prevQuestions, ...Object.values(snapshot.val())];
                    });
                } else {
                    // console.log('Firebase DB Videos Fetch PBLM');
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }
        fetchQuestions();
    }, [videoID]);

    return {
        loading,
        error,
        questions,
    };
}