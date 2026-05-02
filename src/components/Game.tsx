import {useState} from 'react';
import type {Choice} from "../types.ts";
import {getComputerChoice, getResultMessage} from "../utils/gameLogic.ts";
import {ChoiceList} from "./ChoiceList.tsx";
import {GameResult} from "./GameResult.tsx";
import {SelectedChoice} from "./SelectedChoice.tsx";

export function Game(){
    const [userChoice, setUserChoice] = useState<Choice|null>(null);
    const [computerChoice, setComputerChoice] = useState<Choice|null>(null);
    const [resultMessage, setResultMessage] = useState( "Choose Rock, Paper or Scissors!");

    function handleChoose(choice:Choice) {
        const computer = getComputerChoice();
        const message = getResultMessage(choice, computer);

        setUserChoice(choice);
        setComputerChoice(computer);
        setResultMessage(message);
    }

    return(
        <main className="game">
            <h1>Rock, Paper, Scissors</h1>
            <ChoiceList onChoose={handleChoose}/>
            <GameResult message={resultMessage}/>
            <SelectedChoice userChoice={userChoice} computerChoice={computerChoice}/>
        </main>
    )
}