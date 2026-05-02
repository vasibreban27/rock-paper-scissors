type GameResultProps = { message: string };

export function GameResult({ message }: GameResultProps) {
    return (
        <h2>{message}</h2>
    )
}