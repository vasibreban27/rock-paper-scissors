# Rock Paper Scissors

A simple Rock Paper Scissors game built with React, TypeScript and Vite.

The user can choose between Rock, Paper and Scissors. The computer randomly selects one option, then the game displays whether the user won, lost or got a draw.

## Features

- Play Rock Paper Scissors against the computer
- Random computer choice
- Display game result after each round
- Show the user's choice
- Show the computer's choice
- Component-based React structure
- Icons using React Icons
- Built with Vite for fast development

## Technologies Used

- React
- TypeScript
- Vite
- pnpm
- React Icons
- CSS

## Game Rules

The game uses the classic Rock Paper Scissors rules:

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock
- If both players choose the same option, the result is a draw

## Project Structure

```text
src/
├── components/
│   ├── Game.tsx
│   ├── ChoiceButton.tsx
│   ├── ChoiceList.tsx
│   ├── GameResult.tsx
│   └── SelectedChoices.tsx
├── data/
│   └── choices.tsx
├── utils/
│   └── gameLogic.ts
├── App.tsx
├── App.css
├── main.tsx
└── types.ts
```

## Components Overview

### App.tsx

The main application component. It renders the `Game` component.

### Game.tsx

The main game component. It manages the game state:

- user choice
- computer choice
- result message

### ChoiceList.tsx

Displays the list of available choices.

### ChoiceButton.tsx

Displays a single button for one choice: Rock, Paper or Scissors.

### GameResult.tsx

Displays the result message.

### SelectedChoices.tsx

Displays what the user chose and what the computer chose.

### choices.tsx

Stores the available game choices together with their labels and icons.

### gameLogic.ts

Contains the game logic:

- generating a random computer choice
- deciding the winner
- creating the result message

## Getting Started

Follow the steps below to clone and run the project locally.

## Prerequisites

Make sure you have Node.js and pnpm installed.

Check Node.js version:

```bash
node -v
```

Check pnpm version:

```bash
pnpm -v
```

If pnpm is not installed, you can install it with:

```bash
npm install -g pnpm
```

## Clone the Repository

Clone the project from GitHub:

```bash
git clone https://github.com/vasibreban27/rock-paper-scissors.git
```

Go into the project folder:

```bash
cd rock-paper-scissors
```

## Install Dependencies

Install all project dependencies:

```bash
pnpm install
```

## Run the Project

Start the development server:

```bash
pnpm dev
```

After running the command, Vite will show a local development URL in the terminal.

Usually, the app will be available at:

```text
http://localhost:5173
```

Open this URL in your browser to use the application.

## Build the Project

To create a production build, run:

```bash
pnpm build
```

The build files will be generated in the `dist` folder.

## Preview Production Build

To preview the production build locally, run:

```bash
pnpm preview
```

## How to Play

1. Open the application in the browser.
2. Click one of the available buttons:
   - Rock
   - Paper
   - Scissors
3. The computer will randomly choose one option.
4. The result will be displayed on the page.
5. Click another option to play again.

## Author

Created by **Vasi Breban**.
