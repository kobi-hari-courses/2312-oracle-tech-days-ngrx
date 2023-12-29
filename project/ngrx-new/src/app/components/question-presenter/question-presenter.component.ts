import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../models/question.model';
import { SharedModule } from '../../shared.module';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-presenter',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './question-presenter.component.html',
  styleUrl: './question-presenter.component.scss'
})
export class QuestionPresenterComponent {
  @Input({required: true})
  set question(value: Question) {
    this._question = value;
    this.reset();
  }

  @Output()
  answered = new EventEmitter<number>();

  form = new FormControl<number | null>(null, Validators.required);
  submittedAnswer: number | null = null;

  get isAnswered() { return this.submittedAnswer !== null}

  protected _question!: Question;

  reset() {
    this.form.reset(null);
    this.form.enable();
    this.submittedAnswer = null;
  }

  submit() {
    const res = this.form.value;
    if (res === null) return;

    this.submittedAnswer = res;
    this.form.disable();
    setTimeout(() => {
      this.answered.emit(res);
      this.reset();
      
    }, 1500);


  }


}
