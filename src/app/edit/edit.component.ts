import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  movieId;
  title;
  year;
  language;
  genre;
  constructor(private router: Router, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.title = localStorage.getItem('title' );
    this.genre = localStorage.getItem('genre' );
    this.language = localStorage.getItem('language');
    this.year = localStorage.getItem('year' );
    this.movieId = localStorage.getItem('movieId');
  }
  back() {
    this.router.navigate(['']);
  }
  submit(form: NgForm) {
    console.log(form.value);
    if (form.value.title !== undefined && form.value.genre !== undefined
      && form.value.language !== undefined && form.value.year !== undefined) {
      this.httpClient.put('/api/edit/' + this.movieId, form.value)
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
