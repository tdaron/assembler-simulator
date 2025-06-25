export default function Memory() {
    return (
        <div class="ram">
            <h4>Memory (RAM)</h4>
            <div
                class="memory-block"
                ng-repeat="m in memory.data track by $index"
                ng-class="getMemoryCellCss($index)"
            ></div>
            <div
                ng-class="getMemoryInnerCellCss($index)"
                ng-switch="isInstruction($index)"
            ></div>
        </div>
    )
};