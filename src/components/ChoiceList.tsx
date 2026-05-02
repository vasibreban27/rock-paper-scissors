import type {Choice} from "../types"
import {choices} from "../data/choices"
import {ChoiceButton} from "./ChoiceButton"


type ChoiceListProps = {
    onChoose: (choice: Choice) => void;
};

export function ChoiceList({onChoose}:ChoiceListProps) {
    return(
        <div className="choice-list">
            {choices.map((choice)=>(
                <ChoiceButton key={choice.name}
                              choice={choice}
                              onChoose={onChoose}/>
            ))}
        </div>
    );
}
