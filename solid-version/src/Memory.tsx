
import { CPU } from "./core/cpu";
import { getStateContext } from "./stateContext";

export default function Memory() {
    let [state, setState] = getStateContext();
    return (
        <>
            <h4>Memory (RAM)</h4>

            <div class="ram">

                {CPU.memory.data.map(_ =>
                    <div
                        class="memory-block"
                        ng-class="getMemoryCellCss($index)"
                    >
                        <div class="marker">
                            <small>00</small>
                        </div>
                    </div>
                )}


            </div>
        </>
    )
};