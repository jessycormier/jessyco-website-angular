import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo.component.html',
  styles: [
  ]
})
export class LogoComponent {
	@Input() svgClasses: string = '';
	@Input() lbClasses: string = '';
	@Input() jClasses: string = '';
	@Input() cClasses: string = '';
	@Input() rbClasses: string = '';
}
