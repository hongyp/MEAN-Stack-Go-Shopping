import { Game } from "../common/games/game";

export class GameWithQuality {
  game: Game;
  quantity: number;

  constructor(
    game: Game,
    quantity: number
  ) {
    this.game = game;
    this.quantity = quantity;
  }
}

