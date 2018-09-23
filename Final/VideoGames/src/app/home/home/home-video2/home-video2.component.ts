import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { RestApiService } from '../../../common/restapi.service';
import { Game } from "../../../common/games/game";
import { SlideShowComponent } from '../slide-show/slide-show.component';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-home-video2',
  templateUrl: './home-video2.component.html',
  styleUrls: ['./home-video2.component.scss']
})
export class HomeVideo2Component implements OnInit {


  game: Game;
  // urllink: SafeResourceUrl
  // str: string
  constructor(private _restApiService: RestApiService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getGame();
  }

getGame(): void {
  this.getGameFromDB(1)
}

getGameFromDB(id: number):void {
  this._restApiService.getGameFormDB(id)
  .then(game => this.game = game[0])
}

// getLink(): void {
//   this.getGame();
//   console.log(this.game);
//   console.log((String(this.game.video)))
//   this.urllink = this.sanitizer.bypassSecurityTrustResourceUrl(String(this.game.video));
//   }
}
