import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homw',
  imports: [],
  templateUrl: './homw.component.html',
  styleUrl: './homw.component.scss'
})
export class HomwComponent {
  constructor(private router: Router) {} 
  handleClick()
  {
    this.router.navigate(['forgot_pass'])
  }

}
