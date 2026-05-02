import {choices} from "../data/choices";
import type {Choice} from "../types";

export function getComputerChoice():Choice {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

export function getResultMessage(userChoice:Choice, computerChoice:Choice):string {
    if (userChoice.name === computerChoice.name) {
        return `It's a tie! Both chose ${userChoice.label}.`;
    }

    const userWins = (userChoice.name === 'rock' && computerChoice.name === 'scissors') ||
        (userChoice.name === 'paper' && computerChoice.name === 'rock') ||
        (userChoice.name === 'scissors' && computerChoice.name === 'paper');

    if(userWins) {
        return `You won! Your choice:${userChoice.label} beats computer's choice:${computerChoice.label}.`;
    }
    return `You lost! Computer's choice:${computerChoice.label} beats your choice:${userChoice.label}.`;

}