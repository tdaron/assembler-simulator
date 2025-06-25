import { createContext } from 'solid-js';
import { createStateStore } from "./stores/state.ts"
import './App.css'
import "./stores/state.ts"
import type { SetStoreFunction } from 'solid-js/store';
import type { CpuState } from './stores/state.ts';

import Navbar from './navbar.tsx';
import CodeActions from './code-actions.tsx';
import Editor from './editor.tsx';
import Memory from './memory.tsx';
import Settings from './settings.tsx';
import Flags from './Flags.tsx';

function App() {
    const [state, setState] = createStateStore();
    const StateContext = createContext<[CpuState, SetStoreFunction<CpuState>]>();
    return (
        <StateContext.Provider value={[state, setState]}>
            <Navbar></Navbar>
            <CodeActions></CodeActions>
            <div class="row main">
                <Editor></Editor>
                <div class="col1">
                    <div>
                        
                    </div>
                    <Memory></Memory>
                </div>
                <div class="col2">
                    <Settings></Settings>

                    <h4>Screen Display</h4>
                    <div class="screen-container">
                        <div tabindex="0"
                            record-keys
                            ng-class="{'screen': true, 'screen-recording': recordingKeys}"
                            ng-mouseenter="recordingKeys = true; focusScreen()"
                            ng-mouseleave="recordingKeys = false; focusScreen()"
                        >
                            <table class="screen-table">
                                <tbody>
                                    <tr ng-repeat="row in screenPixels track by $index">
                                        <td ng-repeat="pixel in row track by $index">
                                            <div
                                                class="screen-pixel"
                                                ng-class="{
                'screen-pixel-on': pixel === 1,
                'screen-pixel-off': pixel === 0,
                'screen-pixel-ascii': pixel !== 1 && pixel !== 0
                }"
                                            ></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
        <Flags></Flags>


                        </div>
                    </div>
        </StateContext.Provider>
    )
}

export default App
