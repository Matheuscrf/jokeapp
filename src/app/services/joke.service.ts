import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class JokeService {
  private API_URL = 'https://official-joke-api.appspot.com/random_joke';

  async getRandomJoke(): Promise<any> {
    const res = await fetch(this.API_URL);
    return await res.json();
  }
}
