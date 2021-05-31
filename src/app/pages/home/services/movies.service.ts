import { Injectable } from '@angular/core';
import * as faker from 'faker';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies = Array(10).fill(0);

  constructor() {
    this.movies = this.movies.map(() => ({
      id: faker.datatype.uuid(),
      image: `${faker.image.image()}?random=${Date.now()}`,
      title: faker.lorem.sentence(4),
      info: faker.lorem.lines(2),
      isFavorite: false,
    }));
  }
}
