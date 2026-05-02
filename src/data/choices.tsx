import type {Choice} from "../types.ts";
import {FaHandPaper, FaHandRock, FaHandScissors} from "react-icons/fa";

export const choices: Choice[] = [
    {
        name:"rock",
        label:"Rock",
        icon:<FaHandRock/>,
    },
    {
        name:"paper",
        label:"Paper",
        icon:<FaHandPaper/>,
    },
    {
        name: "scissors",
        label: "Scissors",
        icon: <FaHandScissors />,
    },
];

