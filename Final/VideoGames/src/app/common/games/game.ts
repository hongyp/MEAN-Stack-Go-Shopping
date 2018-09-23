export class Game {
    id: Number;
    title: String;
    price: Number;
    url: String;
    platform: String;
    score: String;
    scorePhrase: String;
    genre: String;
    releaseYear: String;
    releaseMonth: String;
    releaseDay: String;
    editorsChoice: String;
    img: String;
    img1: String;
    img2: String;
    img3: String;
    img4: String;
    video: String;

    constructor(id: Number,
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
                price: Number,
                img: String,
                img1: String,
                img2: String,
                img3: String,
                img4: String,
                video: String) {
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
        this.img = img;
        this.img1 = img1;
        this.img2 = img2;
        this.img3 = img3;
        this.img4 = img4;
        this.video = video;
    }

}
