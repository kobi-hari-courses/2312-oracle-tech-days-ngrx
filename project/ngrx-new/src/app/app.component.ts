import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SharedModule } from './shared.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { QuestionPresenterComponent } from './components/question-presenter/question-presenter.component';
import { Question } from './models/question.model';
import { ProgressComponent } from './components/progress/progress.component';
import { DoneComponent } from './components/done/done.component';
import { randomColorQuestion } from './services/helpers';
import { Store } from '@ngrx/store';
import { quizFeature } from './redux/quiz.feature';
import { userActions } from './redux/users.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [SharedModule, ToolbarComponent, QuestionPresenterComponent, ProgressComponent, DoneComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  store = inject(Store);
  question$ = this.store.select(quizFeature.selectCurrentQuestion);

  indexOfCurrent$ = this.store.select(quizFeature.selectCurrentQuestionIndex);
  total$ = this.store.select(quizFeature.questionsCount);

  isDone$ = this.store.select(quizFeature.isQuizDone);
  correct$ = this.store.select(quizFeature.correctCount);

  constructor() {
  }

  restart() {
    const action = userActions.restart();
    this.store.dispatch(action);
  }

  answer(index: number) {
    const action = userActions.answerCurrentQuestion({userAnswer: index});
    this.store.dispatch(action);
  }


}
