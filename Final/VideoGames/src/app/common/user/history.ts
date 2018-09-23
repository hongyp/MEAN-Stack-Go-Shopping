import { GameWithQuality } from "../../games/game";


export class History {
    constructor(
        public time: Date,
        public orderedGamesList: GameWithQuality[],
    ) {}
    
}