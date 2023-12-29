import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss'
})
export class ProgressComponent {
  @Input({required: true})
  value!: number;

  @Input({required: true})
  of!: number;

  get ratio() {
    return this.value / this.of;
  }

}
