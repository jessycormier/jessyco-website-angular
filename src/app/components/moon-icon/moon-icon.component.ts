import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-moon-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moon-icon.component.html',
  styles: [
  ]
})
export class MoonIconComponent {
  @Input() colorClasses = 'dark:text-gray-200 text-gray-800';
	@Input() widthClasses = 'w-4 h-4';
}
