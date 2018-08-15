import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';

interface UserResponse {
  title: string;
  genre: string;
  language: string;
  year: string;
}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit {
 constructor(private router: Router, private httpClient: HttpClient ) {
  }
  movies = [];
  ngOnInit() {
    console.log('Populate Table with movies list..');
    this.httpClient.get('/api/findall')
      .subscribe((data: any[]) => {
        console.log(data);
         this.movies = data;
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
  back() {
    this.router.navigate(['']);
  }

  edit(movieId, title, genre, language, year) {
    console.log('MovieId:' + movieId);
    console.log('title:' + title);
    console.log('genre:' + genre);
    console.log('language:' + language);
    console.log('year:' + year);
    localStorage.setItem('movieId', movieId );
    localStorage.setItem('title', title );
    localStorage.setItem('genre', genre );
    localStorage.setItem('language', language );
    localStorage.setItem('year', year );
    this.router.navigate(['edit']);
  }

}
