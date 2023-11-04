class Professional {
    constructor(photo, name, age, weight, height, isRetired, nationality, 
        oscarsNumber, profession) {
            this.photo = photo;
            this.name = name;
            this.age = age;
            this.weight = weight;
            this.height = height;
            this.isRetired = isRetired;
            this.nationality = nationality;
            this.oscarsNumber = oscarsNumber;
            this.profession = profession;
    }
}

class Movie {
    constructor(photo, title, releaseYear, actors, nationality, director, writer, language, 
        platform, isMCU, mainCharacterName, producer, distributor, genre) {
        this.photo = photo;
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors = actors;
        this.nationality = nationality;
        this.director = director;
        this.writer = writer;
        this.language = language;
        this.platform = platform;
        this.isMCU = isMCU;
        this.mainCharacterName = mainCharacterName;
        this.producer = producer;
        this.distributor = distributor;
        this.genre = genre;
    }

    getActorsNames() {
        for (let actor of this.actors) {
            return this.actors.map((actor) => actor.name).join(', ');
        }
    }
}

let directorGuyRitchie = new Professional('https://variety.com/wp-content/uploads/2018/05/guy-ritchie.jpg?w=1000', 'Guy Ritchie', 55, 84, 183, false, 'British', 0, 'director');
let directorJonathanLynn = new Professional(
    'https://m.media-amazon.com/images/M/MV5BNTgwNzUyNzMxN15BMl5BanBnXkFtZTgwODQwNzY1MzE@._V1_.jpg',
    'Jonathan Lynn',
    80,
    70,
    175,
    false,
    'British',
    0,
    'director'
);

let actorJasonStatham = new Professional('https://img2.rtve.es/i/?w=1600&i=1668681993007.jpg', 'Jason Statham', 56, 77, 175, false, 'British', 0, 'actor');
let actorBradPitt = new Professional('https://ychef.files.bbci.co.uk/976x549/p0cr3znc.jpg', 'Brad Pitt', 59, 78, 180, false, 'American', 2, 'actor');
let actorVinnieJones = new Professional('https://images.bauerhosting.com/legacy/empire-images/articles/57747a90823490d06265b335/vinnie-jones.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=undefined&q=80', 'Vinnie Jones', 58, 93, 185, true, 'British', 0, 'actor');
let actorBruceWillis = new Professional(
    'https://d.newsweek.com/en/full/2301474/bruce-willis.webp?w=1600&h=900&q=88&f=710ca498494882be86df815695f8dd92',
    'Bruce Willis',
    68,
    84,
    183,
    true,
    'American',
    1,
    'actor'
);
let actorMatthewPerry = new Professional(
    'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2023/11/896/500/matthew-perry-remembered-friends.jpg?ve=1&tl=1',
    'Matthew Perry',
    54,
    75,
    183,
    true,
    'American',
    0,
    'actor'
);

let movieSnatch = new Movie(
    'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/0726f9d65e59ddf45dc501f12050de00c38e71848c9bfd1ddc092a459587928c._RI_TTW_SX720_FMjpg_.jpg',
    'Snatch',
    2000,
    [actorJasonStatham, actorBradPitt, actorVinnieJones],
    'UK',
    directorGuyRitchie,
    directorGuyRitchie,
    'English',
    'Netflix',
    false,
    'Turkish',
    'Ska Films',
    'Columbia Pictures',
    'Black Comedy'
);

let movieTheWholeNineYards = new Movie(
    'https://m.media-amazon.com/images/S/pv-target-images/5b1e27b4c3c6c50a3ae818070f8027dc2c778ac2680a585b3736cfb4729181d9.jpg',
    'The Whole Nine Yards',
    2000,
    [actorBruceWillis, actorMatthewPerry],
    'USA',
    directorJonathanLynn,
    directorJonathanLynn,
    'English',
    'Netflix',
    false,
    'Oz Oseransky',
    'Franchise Pictures',
    'Warner Bros. Pictures',
    'Comedy'
);

let profesionales = [actorBradPitt, actorJasonStatham, actorVinnieJones, directorGuyRitchie,
                    directorJonathanLynn, actorBruceWillis, actorMatthewPerry];

document.addEventListener("DOMContentLoaded", function() {

    const sectionProfesionales = document.getElementById("section-profesionales");

    for (let profesional of profesionales) {

        const profesionalCard = document.createElement("div");
        profesionalCard.className = "card mx-3 mb-4";
        profesionalCard.style.width = "18rem";
    
        const cardPhoto = document.createElement("img");
        cardPhoto.style.width = "18rem";
        cardPhoto.src = profesional.photo;
        cardPhoto.alt = `${profesional.name} photo`;
    
        const cardHeader = document.createElement("div");
        cardHeader.className = "card-header";
        cardHeader.textContent = profesional.name;
    
        const cardData = document.createElement("ul");
        cardData.className = "list-group list-group-flush";

        const dataAge = document.createElement("li");
        dataAge.className = "list-group-item";
        dataAge.textContent = `Age: ${profesional.age}`;

        const dataWeight = document.createElement("li");
        dataWeight.className = "list-group-item";
        dataWeight.textContent = `Weight: ${profesional.weight}`;

        const dataHeight = document.createElement("li");
        dataHeight.className = "list-group-item";
        dataHeight.textContent = `Height: ${profesional.height}`;

        const dataRetired = document.createElement("li");
        dataRetired.className = "list-group-item";
        dataRetired.textContent = `Retired: ${profesional.isRetired}`;

        const dataNationality = document.createElement("li");
        dataNationality.className = "list-group-item";
        dataNationality.textContent = `Nationality: ${profesional.nationality}`;

        const dataOscars = document.createElement("li");
        dataOscars.className = "list-group-item";
        dataOscars.textContent = `Oscars: ${profesional.oscarsNumber}`;

        const dataProfession = document.createElement("li");
        dataProfession.className = "list-group-item";
        dataProfession.textContent = `Profession: ${profesional.profession}`;

        cardData.appendChild(dataAge);
        cardData.appendChild(dataWeight);
        cardData.appendChild(dataHeight);
        cardData.appendChild(dataRetired);
        cardData.appendChild(dataNationality);
        cardData.appendChild(dataOscars);
        cardData.appendChild(dataProfession);

        profesionalCard.appendChild(cardPhoto);
        profesionalCard.appendChild(cardHeader);
        profesionalCard.appendChild(cardData);

        sectionProfesionales.appendChild(profesionalCard);
    }
});

let movies = [movieSnatch, movieTheWholeNineYards];

document.addEventListener("DOMContentLoaded", () => {

    const sectionPeliculas = document.getElementById("section-peliculas");

    for (let movie of movies) {

        const movieCard = document.createElement("div");
        movieCard.className = "card mx-3 mb-4";
        movieCard.style.width = "18rem";
    
        const cardPhoto = document.createElement("img");
        cardPhoto.style.width = "18rem";
        cardPhoto.src = movie.photo;
        cardPhoto.alt = `${movie.name} photo`;
    
        const cardHeader = document.createElement("div");
        cardHeader.className = "card-header";
        cardHeader.textContent = movie.title;
    
        const cardData = document.createElement("ul");
        cardData.className = "list-group list-group-flush";

        const dataReleaseYear = document.createElement("li");
        dataReleaseYear.className = "list-group-item";
        dataReleaseYear.textContent = `Year: ${movie.releaseYear}`;

        const dataActors = document.createElement("li");
        dataActors.className = "list-group-item";
        dataActors.textContent = `Actors: ${movie.getActorsNames()}`;

        const dataNationality = document.createElement("li");
        dataNationality.className = "list-group-item";
        dataNationality.textContent = `Nationality: ${movie.nationality}`;

        const dataDirector = document.createElement("li");
        dataDirector.className = "list-group-item";
        dataDirector.textContent = `Director: ${movie.director.name}`;

        const dataWriter = document.createElement("li");
        dataWriter.className = "list-group-item";
        dataWriter.textContent = `Writer: ${movie.director.name}`;

        const dataLanguage = document.createElement("li");
        dataLanguage.className = "list-group-item";
        dataLanguage.textContent = `Language: ${movie.language}`;

        const dataPlatform = document.createElement("li");
        dataPlatform.className = "list-group-item";
        dataPlatform.textContent = `Platform: ${movie.platform}`;

        const dataIsMCU = document.createElement("li");
        dataIsMCU.className = "list-group-item";
        dataIsMCU.textContent = `MCU: ${movie.isMCU}`;

        const dataMainCharacterName = document.createElement("li");
        dataMainCharacterName.className = "list-group-item";
        dataMainCharacterName.textContent = `Main character: ${movie.mainCharacterName}`;

        const dataProducer = document.createElement("li");
        dataProducer.className = "list-group-item";
        dataProducer.textContent = `Producer: ${movie.producer}`;

        const dataDistributor = document.createElement("li");
        dataDistributor.className = "list-group-item";
        dataDistributor.textContent = `Distributor: ${movie.distributor}`;

        const dataGenre = document.createElement("li");
        dataGenre.className = "list-group-item";
        dataGenre.textContent = `Writer: ${movie.genre}`;

        cardData.appendChild(dataReleaseYear);
        cardData.appendChild(dataActors);
        cardData.appendChild(dataNationality);
        cardData.appendChild(dataDirector);
        cardData.appendChild(dataWriter);
        cardData.appendChild(dataLanguage);
        cardData.appendChild(dataPlatform);
        cardData.appendChild(dataIsMCU);
        cardData.appendChild(dataMainCharacterName);
        cardData.appendChild(dataProducer);
        cardData.appendChild(dataDistributor);
        cardData.appendChild(dataGenre);

        movieCard.appendChild(cardPhoto);
        movieCard.appendChild(cardHeader);
        movieCard.appendChild(cardData);

        sectionPeliculas.appendChild(movieCard);
    }
});

let submit = document.getElementById("submit");

submit.addEventListener("click", (event) => {

    event.preventDefault();

    let inputPhoto = document.getElementById("photo").value;
    let inputTitle = document.getElementById("title").value;
    let inputReleaseYear = document.getElementById("releaseYear").value;
    let inputNationality = document.getElementById("nationality").value;
    let inputLanguage = document.getElementById("language").value;
    let inputPlatform = document.getElementById("platform").value;
    let inputIsMCU = document.getElementById("isMCU").checked;
    let inputMainCharacterName = document.getElementById("mainCharacterName").value;
    let inputProducer = document.getElementById("producer").value;
    let inputDistributor = document.getElementById("distributor").value;
    let inputGenre = document.getElementById("genre").value;

    const sectionPeliculas = document.getElementById("section-peliculas");

    const movieCard = document.createElement("div");
    movieCard.className = "card mx-3 mb-4";
    movieCard.style.width = "18rem";

    const cardPhoto = document.createElement("img");
    cardPhoto.style.width = "18rem";
    cardPhoto.src = inputPhoto;
    cardPhoto.alt = `${inputTitle} photo`;

    const cardHeader = document.createElement("div");
    cardHeader.className = "card-header";
    cardHeader.textContent = inputTitle;

    const cardData = document.createElement("ul");
    cardData.className = "list-group list-group-flush";

    const dataReleaseYear = document.createElement("li");
    dataReleaseYear.className = "list-group-item";
    dataReleaseYear.textContent = `Year: ${inputReleaseYear}`;

    const dataNationality = document.createElement("li");
    dataNationality.className = "list-group-item";
    dataNationality.textContent = `Nationality: ${inputNationality}`;

    const dataLanguage = document.createElement("li");
    dataLanguage.className = "list-group-item";
    dataLanguage.textContent = `Language: ${inputLanguage}`;

    const dataPlatform = document.createElement("li");
    dataPlatform.className = "list-group-item";
    dataPlatform.textContent = `Platform: ${inputPlatform}`;

    const dataIsMCU = document.createElement("li");
    dataIsMCU.className = "list-group-item";
    dataIsMCU.textContent = `MCU: ${inputIsMCU}`;

    const dataMainCharacterName = document.createElement("li");
    dataMainCharacterName.className = "list-group-item";
    dataMainCharacterName.textContent = `Main character: ${inputMainCharacterName}`;

    const dataProducer = document.createElement("li");
    dataProducer.className = "list-group-item";
    dataProducer.textContent = `Producer: ${inputProducer}`;

    const dataDistributor = document.createElement("li");
    dataDistributor.className = "list-group-item";
    dataDistributor.textContent = `Distributor: ${inputDistributor}`;

    const dataGenre = document.createElement("li");
    dataGenre.className = "list-group-item";
    dataGenre.textContent = `Writer: ${inputGenre}`;

    cardData.appendChild(dataReleaseYear);
    cardData.appendChild(dataNationality);
    cardData.appendChild(dataLanguage);
    cardData.appendChild(dataPlatform);
    cardData.appendChild(dataIsMCU);
    cardData.appendChild(dataMainCharacterName);
    cardData.appendChild(dataProducer);
    cardData.appendChild(dataDistributor);
    cardData.appendChild(dataGenre);

    movieCard.appendChild(cardPhoto);
    movieCard.appendChild(cardHeader);
    movieCard.appendChild(cardData);

    sectionPeliculas.appendChild(movieCard);
});
