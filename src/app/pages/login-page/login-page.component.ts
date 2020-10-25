import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { delay, first } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }


  onSubmit() {
    this.authService.login(this.username, this.password).pipe(first())
  .subscribe(data => this.router.navigate(['/']), error => console.log(error));
  }

  btnClick= function () {
    this.router.navigateByUrl('/register');
};
}
