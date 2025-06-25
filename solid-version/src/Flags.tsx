import { getStateContext } from "./stateContext";

export default function Flags() {
    let [state, setState] = getStateContext();
    return (
        <div>
            <h4>Registers / Flags</h4>
            <table>
                <thead>
                <tr class="registers-header">
                    <th style="text-align: center">A</th>
                    <th style="text-align: center">B</th>
                    <th style="text-align: center">C</th>
                    <th style="text-align: center">D</th>
                    <th style="text-align: center">PC</th>
                    <th style="text-align: center">SP</th>
                    <th style="text-align: center">DP</th>
                    <th style="text-align: center">Z</th>
                    <th style="text-align: center">C</th>
                    <th style="text-align: center">F</th>
                    <th style="text-align: center">SM</th>
                </tr>
                </thead>
                <tbody>
                <tr style="text-align: center">
                    <td>
                        <div
                            class="marker marker-a"
                            onClick={() => setState((prev: any) => ({ ...prev, displayA: !prev.displayA }))}
                        >
                            <small>{state.settings.displayA ? state.cpuState.a : state.cpuState.a}</small>
                        </div>
                    </td>
                    <td>
                        <div class="marker marker-b"
                            ng-class="{'marker': true, 'marker-b': displayB}"
                            ng-click="displayB = !displayB"
                        >
                            <small>{state.settings.displayHex ? state.cpuState.b : state.cpuState.b}</small>
                        </div>
                    </td>
                    <td>
                        <div class="marker marker-c"
                            ng-class="{'marker': true, 'marker-c': displayC}"
                            ng-click="displayC = !displayC"
                        >
                            <small>{state.settings.displayHex ? state.cpuState.c : state.cpuState.c}</small>
                        </div>
                    </td>
                    <td>
                        <div class="marker marker-d"
                            ng-class="{'marker': true, 'marker-d': displayD}"
                            ng-click="displayD = !displayD"
                        >
                            <small>{state.settings.displayHex ? state.cpuState.d : state.cpuState.d}</small>
                        </div>
                    </td>
                    <td>
                        <div class="marker marker-ip">
                            <small>{state.settings.displayHex ? state.cpuState.ip : state.cpuState.ip}</small>
                        </div>
                    </td>
                    <td>
                        <div class="marker marker-sp">
                            <small>{state.settings.displayHex ? state.cpuState.sp : state.cpuState.sp}</small>
                        </div>
                    </td>
                    <td>
                        <div class="marker marker-dp">
                            <small>{state.settings.displayHex ? state.cpuState.dp : state.cpuState.dp}</small>
                        </div>
                    </td>
                    <td><small>{state.cpuState.flags.sm.valueOf() ? '1' : '0'}</small></td>
                    <td><small>{state.cpuState.flags.sm.valueOf() ? '1' : '0'}</small></td>
                    <td><small>{state.cpuState.flags.sm.valueOf() ? '1' : '0'}</small></td>
                    <td><small>{state.cpuState.flags.sm.valueOf() ? '1' : '0'}</small></td>
                </tr>
                </tbody>
            </table>
        </div>
    )   
}