import LightDarkMode from "../light-dark-theme-switch/LightDarkMode";
import RandomColor from "../random-color/RandomColor";
import TicTacToe from "../tic-tact-toe/TicTacToe";
import Accordian from '../accordian/Accordian';
import TreeView from '../tree-view/TreeView';
import Tabs from '../custom-tabs/tabs-test';
import { useContext } from "react";
import { FeatureFlagsContext } from "./context";
import menus from "../tree-view/data";


export default function FeatureFlags() {

    const { loading, enabledFlags } = useContext(FeatureFlagsContext)
    const componentsToRender = [
        {
            key: 'showLightAndDarkMode',
            component: <LightDarkMode key={'as1'} />
        },
        {
            key: 'showTicTacToeBoard',
            component: <TicTacToe key={'vs1'} />
        },
        {
            key: 'showRandomColorGenerator',
            component: <RandomColor key={'ass1'} />
        },
        {
            key: 'showAccordian',
            component: <Accordian key={'aas1'} />
        },
        {
            key: 'showTreeView',
            component: <TreeView key={'aqs1'} menus={menus} />
        },
        {
            key: 'showTabs',
            component: <Tabs key={'aws1'} />
        }
    ]

    function checkEnabledFlags(getCurrentKey) {
        return enabledFlags[getCurrentKey];
    }

    if (loading) return <>Featured Data Loading...</>

    return (
        <div>
            <h1>Feature Flag Implementation</h1>
            {
                componentsToRender.map((componentItem) => checkEnabledFlags(componentItem.key) ? componentItem.component : null)
            }
        </div>
    );
}