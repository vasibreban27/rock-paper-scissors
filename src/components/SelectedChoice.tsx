import type {Choice} from "../types";

type SelectedChoicesProps = {
    userChoice:Choice|null;
    computerChoice:Choice|null;
};

export function SelectedChoice({userChoice, computerChoice}:SelectedChoicesProps) {
    if(!userChoice || !computerChoice) return;

    return(
       <div className="choices">
           <p>
               You chose: <strong>{userChoice.label}</strong>
           </p>
           <p>
               Computer chose: <strong>{computerChoice.label}</strong>
           </p>
       </div>
    );
}