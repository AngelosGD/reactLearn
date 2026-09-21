export interface ScrambeWordsState {
  currentWord: string;
  errorCounter: number;
  guess: string;
  isGameOver: boolean;
  maxAllowErrors: number;
  maxSkips: number;
  points: number;
  scrambledWord: string;
  skipCounter: number;
  words: string[];
  // ? para las game words
  totalWords: number;
}

export type ScrambledWordsActions = {
  type: "NO_TENGO_LA_MENOR_IDEA_DE_CUALES_ACCIONES_NECESITO";
};

const GAME_WORDS = [
  "REACT",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "HTML",
  "ANGULAR",
  "SOLID",
  "NODE",
  "VUEJS",
  "SVELTE",
  "EXPRESS",
  "MONGODB",
  "POSTGRES",
  "DOCKER",
  "KUBERNETES",
  "WEBPACK",
  "VITE",
  "TAILWIND",
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = "") => {
  return word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};

export const getInitialState = (): ScrambeWordsState => {
  const shuffledWords = shuffleArray([...GAME_WORDS]);

  return {
    currentWord: shuffledWords[0],
    errorCounter: 0,
    guess: "",
    isGameOver: false,
    maxAllowErrors: 3,
    maxSkips: 3,
    points: 0,
    scrambledWord: scrambleWord(shuffledWords[0]),
    skipCounter: 0,
    words: shuffledWords,
    totalWords: shuffledWords.length,
  };
};

export type ScrambleWordAction =
  | { type: "SET_GUESS"; payload: string }
  | {
      type: "CHECK_ANSWER";
    }
  | { type: "NO_TENGO_LA_MENOR_IDEA_DE_QUE_ACCIONES_NECESITO3" };

export const scrambleWordsReducer = (
  state: ScrambeWordsState,
  action: ScrambleWordAction,
): ScrambeWordsState => {
  switch (action.type) {
    // ? action para el input deje escribir
    case "SET_GUESS":
      return {
        ...state,
        guess: action.payload.trim().toUpperCase(),
      };

    case "CHECK_ANSWER": {
      // ? si el guess es correcto
      if (state.currentWord === state.guess) {
        const remaingWords = state.words.filter(
          (word) => word !== state.currentWord,
        );

        return {
          ...state,
          words: remaingWords,
          points: state.points + 1,
          guess: "",
          currentWord: remaingWords[0],
          scrambledWord: scrambleWord(remaingWords[0]),
        };
      } else {
        return {
          ...state,
          errorCounter: state.errorCounter + 1,
          guess: "",
          isGameOver: state.errorCounter >= state.maxAllowErrors - 1,
        };
      }
    }

    default:
      return state;
  }
};
