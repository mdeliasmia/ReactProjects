import Answers from '../Answers';
import ProgressBar from '../ProgressBar';
import MiniPlayer from '../MiniPlayer';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useReducer, useState } from 'react';
import useQuestions from '../../hooks/useQuestions';
import _ from 'lodash';
import { useAuth } from '../../contexts/AuthContext';
import { getDatabase, ref, set } from 'firebase/database';

const initialState = null;
const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach(option => {
          option.checked = false;
        })
      });
      return action.value;

    case "answer":
      const cloneQuestions = _.cloneDeep(state);
      cloneQuestions[action.questionID].options[action.optionIndex].checked = action.value;
      return cloneQuestions;

    default:
      return state;
  }
}

export default function Quiz() {
  const { id } = useParams();
  const { loading, error, questions } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [qna, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  // console.log("Quiz Page searchParams = " + searchParams);
  const videoTitle = searchParams.get('videoTitle');
  // console.log("Quiz Page VideoTitle from URL = " + videoTitle);
  // console.log("Quiz Page VideoTitle from State = " + location.state.videoTitle);

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  function handleAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }

  //Handle when user clicks the (NEXT QUESTION) Button to get next question 
  function nextQuestion() {
    //console.log("Next Button WOrked");
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(prevCurrent => prevCurrent + 1);
    }
  }
  //Handle when user clicks the (PREV QUESTION) Button to get prev question 
  function prevQuestion() {
    //console.log("Prev Button WOrked");
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion(prevCurrent => prevCurrent - 1);
    }
  }

  //handle Submit Quiz
  async function submit() {
    //console.log(currentUser);
    const { uid } = currentUser;

    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna
    });

    navigate(`/result/${id}`, { state: { qna } });
  };

  //calculate persentage of progress

  const percentage = questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;
  return (
    <div>
      {loading && <div>Loading.......</div>}
      {error && <div>There was Error.......</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <div>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers input={true} options={qna[currentQuestion].options} handleChange={handleAnswerChange} />
          <ProgressBar nextClick={nextQuestion} prev={prevQuestion} progres={percentage} submit={submit} />
          {/* <MiniPlayer id={id} title={qna[currentQuestion].title} /> */}
          <MiniPlayer id={id} title={videoTitle} />
        </div>
      )}
    </div>
  );
}