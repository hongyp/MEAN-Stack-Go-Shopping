import { GamesJson } from './../games/mock-games';
import { Game } from '../games/game';
import { CartEntity } from './cart.entity';

let game1 = GamesJson[0];
let game2 = GamesJson[3];
let game3 = GamesJson[1];
let game4 = GamesJson[2];
            
export class CartEntityJson {
    public static items: CartEntity[] = [
        {
            quantity: 10,
            game:  game1
        }, 
        {
            quantity: 20,
            game:  game2
        },
        {
            quantity: 30,
            game:  game3
        },
        {
            quantity: 40,
            game:  game4
        }
    ]

    public static getItems() {
        return this.items;
    }
}
