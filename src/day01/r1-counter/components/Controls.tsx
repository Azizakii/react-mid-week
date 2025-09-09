import React from "react";

interface ControlsProps {
	onIncrement: () => void;
	onDecrement: () => void;
	onReset: () => void;
	canUndo: boolean;
	onUndo: () => void;
}

export const Controls = React.memo(({
	onIncrement,
	onDecrement,
	onReset,
	canUndo,
	onUndo,
}: ControlsProps) => {
	return (<div>
		<button onClick={onIncrement}>+</button>
		<button onClick={onDecrement}>-</button>
		<button onClick={onReset}>Reset</button>
		<button
			onClick={onUndo}
			disabled={!canUndo}
			className={!canUndo ? "disabled" : ""}
		>
			Undo(возврат предыдущего)
		</button>
	</div>);
})
