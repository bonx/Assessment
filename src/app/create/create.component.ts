import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  constructor(private router: Router, private httpClient: HttpClient ) {
  }

  ngOnInit() {
  }
  back() {
    this.router.navigate(['']);
  }
  submit(form: NgForm) {
      console.log(form.value);
    if (form.value.title !== undefined && form.value.genre !== undefined
      && form.value.language !== undefined && form.value.year !== undefined) {
      this.httpClient.post('/api/add', form.value)
        .subscribe((data: any[]) => {
            console.log(data);
           this.back();
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
}
