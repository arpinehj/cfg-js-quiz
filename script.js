// Create a web app that takes input from the user and updates the web page based on the input.
// You should:
// + Get input from the user on a web page
// + Make changes to the HTML and/or CSS using JavaScript
// + Use an event to trigger a change to a web page
// Bonus?
// + Add HTML elements to a web page using the DOM
// + Remove HTML elements from a web page using the DOM
// + Research and use other DOM events such as onmouseover
// + Use arrays, loops and/or conditional logic in JavaScript

function userInputName() {
  const greeting = "Welcome";
  const year = document.createElement("h3");
  year.innerHTML = "2023";
  document.getElementById("header").appendChild(year);
  const userInput = prompt("What is your name?");
  document.getElementById("userInput").innerHTML = `${greeting} ${userInput} 👋!`;
  let nameStyle = document.getElementById("userInput");
  nameStyle.style.color = "red";
  nameStyle.style.fontSize = "30px";
  nameStyle.style.textAlign = "center";
  nameStyle.style.fontWeight = "400";
}

userInputName();

function createQuiz1() {
  const button1 = document.getElementById("sport");
  button1.textContent = "Football ⚽";
  button1.style.fontSize = "20px";
  button1.style.padding = "10px";
  button1.style.fontFamily = "'Barlow', sans-serif";
  button1.style.backgroundColor = "lightblue";
  button1.style.border = "2px solid black";
  button1.style.borderRadius = "5px";
  button1.onmouseover = function () {
    mouseOver();
  };
  button1.onmouseout = function () {
    mouseOut();
  };
  function mouseOver() {
    button1.style.color = "red";
  }
  function mouseOut() {
    button1.style.color = "black";
  }
  button1.style.cursor = "pointer";
  button1.addEventListener("click", function () {
    alert("Questions on the 2022-23 season of Premier League ⚽")
    const questionsForSport = [
      ["What links the five teams that finished eight, ninth, 10th, 11th and 12th?\na - Their names all start with the same letter\nb - They are all London clubs\nc - They all won the same number of points",
        "b",
        "Tottenham, Brentford, Fulham, Crystal Palace and Chelsea are the five teams that finished eight, ninth, 10th, 11th and 12th.",
      ],
      ["Which team stayed up after being bottom of the table on Christmas Day?\na - Bournemouth\nb - Everton\nc - Wolves",
        "c",
        "Wolves only won two games before Christmas but pulled things around under Julen Lopetegui in the new year.",
      ],
      [`Who set a new record for the most left-footed goals in Premier League history, overtaking Robbie Fowler’s previous record of 105?\na - Mohamed Salah\nb - Harry Kane\nc - Riyad Mahrez`, 
        "a", 
        "Salah scored 19 league goals this season, quite the achievement given Liverpool's topsy-turvy form."
      ],
      ["Which of these Liverpool players didn’t score in the record-equalling 9-0 victory against AFC Bournemouth?\na - Roberto Firmino\nb - Luis Diaz\nc - Mohamed Salah", 
        "c", 
        "Salah failed to score or assist in Liverpool's 9-0 victory against newly promoted AFC Bournemouth."
      ]
    ];


    let result = null

    for (let i = 0; i < questionsForSport.length; i++) {
      let answer = prompt(questionsForSport[i][0]);
      if (answer.toLowerCase() == questionsForSport[i][1]) {
        alert("Correct! " + questionsForSport[i][2]);
        result += 5;
      } else {
        alert("Incorrect!")
        result += 0;
      }
    }
    switch (true) {
      case (result >= 20):
        // alert('Congratulations! You won the game! 🥳');
        const wonTheGameFootball = document.getElementById("result");
        wonTheGameFootball.textContent = "Congratulations! You won the game! 🥳";
        wonTheGameFootball.style.fontSize = "70px";
        wonTheGameFootball.style.color = "red";
        wonTheGameFootball.style.fontWeight = "400";
        wonTheGameFootball.style.fontFamily = "'Barlow', sans-serif";
        wonTheGameFootball.style.textAlign = "center";
        break;
      case (result > 10 && result < 20):
        // alert('Keep going! You got 15 points! 👏');
        const keepGoingFootball = document.getElementById("result");
        keepGoingFootball.textContent = 'Keep going! You got 15 points! 👏';
        keepGoingFootball.style.fontSize = "70px";
        keepGoingFootball.style.color = "red";
        keepGoingFootball.style.fontWeight = "400";
        keepGoingFootball.style.fontFamily = "'Barlow', sans-serif";
        keepGoingFootball.style.textAlign = "center";
        break;
      case (result >= 6 && result <= 10):
        // alert('Halfway there!')
        const halfwayThereFootball = document.getElementById("result");
        halfwayThereFootball.textContent = "Halfway there!";
        halfwayThereFootball.style.fontSize = "70px";
        halfwayThereFootball.style.color = "red";
        halfwayThereFootball.style.fontWeight = "400";
        halfwayThereFootball.style.fontFamily = "'Barlow', sans-serif";
        halfwayThereFootball.style.textAlign = "center";
      case (result = 5):
        // alert("You need to watch football! ⚽");
        const watchFootball = document.getElementById("result");
        watchFootball.textContent = "You need to watch football ⚽!";
        watchFootball.style.fontSize = "70px";
        watchFootball.style.color = "red";
        watchFootball.style.fontWeight = "400";
        watchFootball.style.fontFamily = "'Barlow', sans-serif";
        watchFootball.style.textAlign = "center";
        break;
      default:
        alert('Error.');
    }
  });
}

createQuiz1();

function createQuiz2() {
  const button2 = document.getElementById("tvshows");
  button2.textContent = "TV Shows 📺";
  button2.style.fontSize = "20px";
  button2.style.padding = "10px";
  button2.style.fontFamily = "'Barlow', sans-serif";
  button2.style.backgroundColor = "lightblue";
  button2.style.border = "2px solid black";
  button2.style.borderRadius = "5px";
  button2.onmouseover = function () {
    mouseOver();
  };
  button2.onmouseout = function () {
    mouseOut();
  };
  function mouseOver() {
    button2.style.color = "red";
  }
  function mouseOut() {
    button2.style.color = "black";
  }
  button2.style.cursor = "pointer";
  button2.addEventListener("click", function () {
    alert("Questions on 2000s TV Shows 📺")
    const questionsForTVShows = [
      ["What was the name of the private school Rory was accepted into?\na - Sumners\nb - Durdan\nc - Sook\nd - Chilton",
        "d",
        "Chilton",
      ],
      ["Where did Ryan, Seth, Marissa, and Summer go to high school?\na - The Harbor School\nb - Orange County Prep\nc - Constance Billard\nd - Harbor Heights High",
        "a", 
        "The Harbor School",     
      ],
      [`In what Massachusetts town is 'Dawson's Creek' located?\na - Fall River, MA\nb - Quincy, MA\nc - Cambridge, MA\nd - Capeside, MA`, 
        "d", 
        "Capeside, MA",
      ],
      ["Which basketball team do Lucas and Nathan play for?\na - Tree Hill Falcons\nb - Tree Hill Ravens\nc - Tree Hill Crows\nd - Tree Hill Eagles", 
        "b", 
        "Tree Hill Ravens",
      ],
      ["Which actor stars in Gilmore Girls, Dawson's Creek and One Tree Hill?\na - Jake Gyllenhaal\nb - Brad Pitt\nc - Chad Michael Murray\nd - Leonardo DiCaprio", 
        "c", 
        "Chad Michael Murray",
      ],
      ["Which town Dawson's Creek and One Tree Hill were filmed in?\na - Wilmington, North Carolina\nb - Nags Head, North Carolina\nc - Virginia Beach, Virginia\nd - Newport, Rhode Island", 
        "a", 
        "Wilmington, North Carolina",
      ],
      ["Which famous actress originally played Marissa’s younger sister Kaitlin?\na - AnnaSophia Robb\nb - Shailene Woodley\nc - Brie Larson\nd - Jennifer Lawrence", 
        "b",
        "Shailene Woodley",
      ],
      [`Which one of these is NOT an Uncle Jesse catch phrase?\na - "Have mercy."\nb - "Watch the hair!"\nc - "Capiche?"\nd - "Not on my watch!"`, 
        "d",
        `"Not on my watch!"`,
      ],
      [`What's the name of the show that Danny and Becky host?\na - Good morning, San Francisco!\nb - Greetings, San Francisco!\nc - Wake up, San Francisco!\nd - Hey there, San Francisco!`, 
        "c",
        `Wake up, San Francisco!`,
      ]
    ];
    let resultForTVShows = null

    for (let i = 0; i < questionsForTVShows.length; i++) {
      let answer = prompt(questionsForTVShows[i][0]);
      if (answer.toLowerCase() == questionsForTVShows[i][1]) {
        alert("Correct! It's " + questionsForTVShows[i][2]);
        resultForTVShows += 5;
      } else {
        alert("Incorrect!")
        resultForTVShows += 0;
      }
    }

    if (resultForTVShows >= 45) {
      // alert('Congratulations! You won the game! 🥳');
      const wonTheGame = document.getElementById("result");
      wonTheGame.textContent = "Congratulations! You won the game! 🥳";
      wonTheGame.style.fontSize = "70px";
      wonTheGame.style.color = "red";
      wonTheGame.style.fontWeight = "400";
      wonTheGame.style.fontFamily = "'Barlow', sans-serif";
      wonTheGame.style.textAlign = "center";
    } else if (resultForTVShows > 25 && resultForTVShows <= 44) {
      // alert('Keep going! 👏')
      const keepGoing = document.getElementById("result");
      keepGoing.textContent = "Keep going! 👏";
      keepGoing.style.fontSize = "70px";
      keepGoing.style.color = "red";
      keepGoing.style.fontWeight = "400";
      keepGoing.style.fontFamily = "'Barlow', sans-serif";
      keepGoing.style.textAlign = "center";
      document.getElementById("gifFrame").innerHTML +=
  '<iframe width="1263" height="480" src="https://giphy.com/embed/xUySTxs9O1VAgBLRbG" frameborder="0" alt="Gilmore Girls Gif"></iframe>';
      const keepGoingGIFLink = document.getElementById("gifLink");
      keepGoingGIFLink.setAttribute("href", "https://giphy.com/gifs/gilmoregirls-netflix-gilmore-girls-xUySTxs9O1VAgBLRbG");
      keepGoingGIFLink.textContent = "via GIPHY";
      keepGoingGIFLink.style.fontFamily = "'Barlow', sans-serif";
      keepGoingGIFLink.style.color = "red";
      keepGoingGIFLink.style.float = "right";
      keepGoingGIFLink.style.margin = "30px 25px";
    } else if (resultForTVShows > 15 && resultForTVShows <= 25) {
      // alert('Halfway there!')
      const halfwayThere = document.getElementById("result");
      halfwayThere.textContent = "Halfway there!";
      halfwayThere.style.fontSize = "70px";
      halfwayThere.style.color = "red";
      halfwayThere.style.fontWeight = "400";
      halfwayThere.style.fontFamily = "'Barlow', sans-serif";
      halfwayThere.style.textAlign = "center";
    } else if (resultForTVShows <= 15) {
      // alert("You need to watch some TV shows! 📺");
      const watchSomeTVShows = document.getElementById("result");
      watchSomeTVShows.textContent = "You need to watch some TV shows 📺!";
      watchSomeTVShows.style.fontSize = "70px";
      watchSomeTVShows.style.color = "red";
      watchSomeTVShows.style.fontWeight = "400";
      watchSomeTVShows.style.fontFamily = "'Barlow', sans-serif";
      watchSomeTVShows.style.textAlign = "center";
    } else {
      alert("Error")
    }

  });
}

createQuiz2();
