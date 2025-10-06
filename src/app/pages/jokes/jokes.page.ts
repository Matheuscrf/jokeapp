import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { JokeService } from '../../services/joke.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.page.html',
  styleUrls: ['./jokes.page.scss'],
  imports: [IonicModule, RouterModule],
  providers: [JokeService],
})
export class JokesPage {
  question = '';
  response = '';

  constructor(private jokeService: JokeService) {}

  async getJoke() {
    this.question = '';
    this.response = '';
    const data = await this.jokeService.getRandomJoke();
    this.question = data.setup;
    this.response = data.punchline;
  }
}
