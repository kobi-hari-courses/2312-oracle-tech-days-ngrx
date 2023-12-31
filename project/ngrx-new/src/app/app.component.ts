import { Component, inject } from '@angular/core';
import { SharedModule } from './shared.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { QuestionPresenterComponent } from './components/question-presenter/question-presenter.component';
import { Question } from './models/question.model';
import { ProgressComponent } from './components/progress/progress.component';
import { DoneComponent } from './components/done/done.component';
import { randomColorQuestion } from './services/helpers';
import { Store } from '@ngrx/store';
import { quizFeature } from './redux/quiz.feature';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [SharedModule, ToolbarComponent, QuestionPresenterComponent, ProgressComponent, DoneComponent],
})
export class AppComponent {
  store = inject(Store);
  question$ = this.store.select(quizFeature.selectCurrentQuestion);
  constructor() {
  }


}
