import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { RestApiService } from '../../../common/restapi.service';
import { Game } from "../../../common/games/game";
import { SlideShowComponent } from '../slide-show/slide-show.component';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-home-video',
  templateUrl: './home-video.component.html',
  styleUrls: ['./home-video.component.scss']
})

@Pipe({ name: 'safe' })
export class HomeVideoComponent implements OnInit {


    game: Game;
    // urllink: SafeResourceUrl
    // str: string
    constructor(private _restApiService: RestApiService, private sanitizer: DomSanitizer) { }

    ngOnInit() {
      this.getGame();
      console.log("video")
    }

  getGame(): void {
    this.getGameFromDB(0)
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
