import { createEffect, createSignal, Show } from "solid-js";
import { CPU } from "./ReactiveCPU";
import { getStateContext } from "./stateContext";

export default function CodeActions() {
    let [state, setState] = getStateContext();
    let [interval, _SetInterval] = createSignal(0);
    let [currentSpeed, setCurrentSpeed] = createSignal(0);

    const run = () => {
        _SetInterval(setInterval(() => {
            CPU.step()
        }, 1000 / state.speed))
        setCurrentSpeed(state.speed)
    }
    const runQuickly = () => {
        _SetInterval(setInterval(() => {
            CPU.step()
        }, 1000 / 1024))
        setCurrentSpeed(0)

    }
    const stop = () => {
        clearInterval(interval())
        _SetInterval(0);
    }

    createEffect(() => {
        if (state.speed != currentSpeed() && currentSpeed() != 0) {
            clearInterval(interval())
            run()
        }
    })
    return (
       <div class="code_buttons">
            <button type="button" class="btn btn-success" onClick={run} disabled={interval() != 0} title="Run">
                &#x25B6
            </button>
            <button type="button" class="btn btn-success" onClick={runQuickly} disabled={interval() != 0} title="Run quickly">
                &#x25B6<span style="margin-left:-0.3em;">&#x25B6</span>
            </button>
            <Show when={interval() != 0}>
                <button type="button" class="btn btn-stop btn-default" onClick={stop} title="Stop">
                &#x23F8
            </button>
            </Show>
       
            <button type="button" class="btn btn-step btn-default" onClick={() => CPU.step()} title="Step">
                <span class="glyphicon glyphicon-forward"></span>
                &#x2B95
            </button>
            <button type="button" class="btn btn-default btn-reset" ng-click="reset()" title="Reset">
                &#x21BB
            </button>
        </div>
)};