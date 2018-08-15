import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


  constructor(private router: Router, private httpClient: HttpClient) {
  }
  credentials = [];
  ngOnInit() {
  }

  LoginUser(form: NgForm) {
    this.httpClient.get('/api/credentials')
      .subscribe((data: any[]) => {
          this.credentials = data;
          for ( let i = 0; i < data.length ; i++) {
            if (form.value.username === data[i].userName.toString() && form.value.password === data[i].password.toString()) {
              this.router.navigate(['']);
              localStorage.setItem('username', form.value.username);
              break;
            }
          }
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof  Error) {
            console.log('Client-Side Error Occured!.');
          }else {
            console.log('Server-Side Error Occured!.');
          }
        }
      );



  }
}
