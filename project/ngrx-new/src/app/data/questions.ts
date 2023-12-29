import { Question } from "../models/question.model";

export const QUESTIONS: Question[] =  [
    {
      caption: ['red', 'lime', 'blue'],
      answers: ['black', 'gray', 'white', 'brown'],
      correctIndex: 2,
    },
    {
      caption: ['red', 'black'],
      answers: ['darkred', 'Red', 'black', 'gray'],
      correctIndex: 1,
    },
    {
      caption: ['blue', 'red'],
      answers: ['Magenta', 'Cyan', 'Purple', 'White'],
      correctIndex: 0,
    },
    {
      caption: ['blue', 'lime'],
      answers: ['Magenta', 'Cyan', 'White', 'Teal'],
      correctIndex: 1,
    },
    {
      caption: ['lime', 'red'],
      answers: ['Brown', 'White', 'Orange', 'Yellow'],
      correctIndex: 3,
    },
    {
      caption: ['cyan', 'red'],
      answers: ['Magenta', 'Blue', 'White', 'Purple'],
      correctIndex: 2,
    },
    {
      caption: ['blue', 'yellow'],
      answers: ['Green', 'Cyan', 'White', 'Lime'],
      correctIndex: 2,
    },
    {
      caption: ['lime', 'magenta'],
      answers: ['Brown', 'Yellow', 'White', 'Orange'],
      correctIndex: 2,
    }
  ]