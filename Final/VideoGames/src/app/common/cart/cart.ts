export class Cart {
    id: String;
    title: String;
    price: String;
    url: String;
    platform: String;
    score: String;
    scorePhrase: String;
    genre: String;
    releaseYear: String;
    releaseMonth: String;
    releaseDay: String;
    editorsChoice: String;

    constructor(id: String,
                scorePhrase: String, 
                title: String, 
                url: String, 
                platform: String,
                score: String, 
                genre: String, 
                editorsChoice: String,
                releaseYear: String, 
                releaseMonth: String,
                releaseDay: String,
                price: String) {
        this.id = id;
        this.scorePhrase = scorePhrase;
        this.title = title;
        this.url = url;
        this.platform = platform;
        this.score = score;
        this.genre = genre;
        this.editorsChoice = editorsChoice;
        this.releaseYear = releaseYear;
        this.releaseMonth = releaseMonth;
        this.releaseDay = releaseDay;
        this.price = price;
    }

}