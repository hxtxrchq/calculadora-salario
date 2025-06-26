import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryCalculatorComponent } from './components/salary-calculator/salary-calculator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, SalaryCalculatorComponent]
})
export class AppComponent {
  title = 'salary-calculator-app';
}
