import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from '../data';


export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {

    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});

    async function fetchFeatureFlags() {
        try {
            setLoading(true);
            //Original Service call
            const response = await featureFlagsDataServiceCall();
            // console.log(response);
            setEnabledFlags(response);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log(err);
            throw new Error(err);

        }
    }

    useEffect(() => {
        fetchFeatureFlags();
    }, []);

    if (loading) return <h1>Fearured Flags Loadin...</h1>
    return (
        <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
            {children}
        </FeatureFlagsContext.Provider>
    );
}