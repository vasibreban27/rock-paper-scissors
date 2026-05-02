export type ChoiceName = "rock" | "paper" | "scissors";

export type Choice = {
    name: ChoiceName;
    label: string;
    icon: React.ReactNode;
}