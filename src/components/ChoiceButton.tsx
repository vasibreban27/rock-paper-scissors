import type {Choice} from "../types"

type ChoiceButtonProps = {
    choice: Choice,
    onChoose: (choice:Choice) => void;
};

export function ChoiceButton({choice, onChoose}: ChoiceButtonProps) {
    return (
        <button onClick={() => onChoose(choice)}>
            {choice.icon}
            {choice.label}
        </button>
    )
}