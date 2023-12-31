import { Injectable } from "@angular/core";
import { Observable, delay, map, of, tap } from "rxjs";
import { Question } from "../models/question.model";
import { randomColorQuiz } from "./helpers";

@Injectable({providedIn: 'root'})
export class ColorQuizGeneratorService {
    createRandomQuiz(): Observable<Question[]> {
        return of(1).pipe(
            tap(_ => console.log('starting to generate questions')),
            map(_ => randomColorQuiz()), 
            delay(2000)
        );        
    }    
}