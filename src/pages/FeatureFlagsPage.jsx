import FeatureFlagGlobalState from './components/feature-flag/context';
import FeatureFlags from './components/feature-flag/FeatureFlags';

export default function FeatureFlagsPage() {

    return (
        <FeatureFlagGlobalState>
            <FeatureFlags />
        </FeatureFlagGlobalState>
    );
}