import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-done',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './done.component.html',
  styleUrl: './done.component.scss'
})
export class DoneComponent {
  @Input({required: true})
  correct!: number;

  @Input({required: true})
  total!: number;

  get score() {
    return this.correct / this.total;
  }

}
