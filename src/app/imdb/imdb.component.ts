import { Component } from '@angular/core';
import { ImdbService } from '../imdb.service';

@Component({
  selector: 'app-imdb',
  templateUrl: './imdb.component.html',
  styleUrls: ['./imdb.component.css']
})
export class ImdbComponent {
movies: any=[];

constructor(private _imdbService:ImdbService){
  this._imdbService.getMovies().subscribe((data:any) => {
  this.movies=data;
  console.log(this.movies);
  },(err:any)=>{
    alert("Internal Server Error")
  }

  )
}

getStars(rating: number): string[] {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push('★'); // Full star
  }

  // Add half star if applicable
  if (halfStar) {
    stars.push('☆'); // Half star (you can use a different character for half star)
  }

  // Add empty stars to make a total of 5 stars
  while (stars.length < 5) {
    stars.push('☆'); // Empty star
  }

  return stars;
}

}
