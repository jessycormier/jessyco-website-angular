import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JessyCormierComponent } from '../jessy-cormier/jessy-cormier.component';
import { LogoComponent } from '../logo/logo.component';

// TODO: Change Name to Brand
@Component({
  selector: 'app-logo-text',
  standalone: true,
  imports: [CommonModule, JessyCormierComponent, LogoComponent],
  templateUrl: './logo-text.component.html',
  styles: [
  ]
})
export class LogoTextComponent {
  
  @Input()  cssClasses = 'text-3xl';
  
  readonly bracketColorCss = 'fill-blue-800 group-hover:fill-amber-500 group-focus:fill-amber-500 duration-700 group-hover:animate-pulse group-focus:animate-pulse';
	readonly letterColorCss = 'duration-75';
  
}
