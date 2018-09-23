import { GameWithQuality } from "../../games/game";


export class OrderedListWithStatus {
    constructor(
        public orderedItem: GameWithQuality,
        public receiveItem: false
    ) {}
    
}