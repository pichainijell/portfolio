import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInnitial = 0;
  enteredAnnual = 0;
  enteredExpectedReturn = 5;
  enteredDuration = 10;

  constructor( private investmentService: InvestmentService){}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInnitial,
      annualInvestment: +this.enteredAnnual,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration
    })
  }
}
