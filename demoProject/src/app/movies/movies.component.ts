import { fakeMovies } from './../fake-movie';
import { Component, OnInit } from '@angular/core';
import { Movies } from '../../models/movies';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie: Movies = {
    id: 1,
    name: 'Duong Nguyen',
    releaseYear: 1996
  };
  movies = fakeMovies;
  constructor() { }

  ngOnInit() {
  }
// Action when select a movie in list

// tslint:disable-next-line:member-ordering
selectedMovie: Movies;
onSelectsss(movie: Movies): void {
    this.selectedMovie = movie;
    console.log(`selectedMovie = ${JSON.stringify(this.selectedMovie)} `);
  }
}
