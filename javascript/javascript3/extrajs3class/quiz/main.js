//console.log("Script loaded");
//class Quiz
class Quiz {
  constructor(name) {
    this.name = name;
  }

  //method for fetching Questions and returning promise
  fetchQuestions() {
    return fetch(
      "https://gist.githubusercontent.com/benna100/13f5850bf78f59d9baea915cbbe9f258/raw/ef8f2b137b07b05e8f593cef0281b4f1f0aba79a/JS-3%2520questions"
    ).then(questionsResponse => questionsResponse.json());
  }

  //method for rendering  questions on to the page
  renderQuestions(questions) {
    //selecting Ul
    const ulQuestions = document.querySelector(".questions > ul");
    ulQuestions.innerHTML = "";
    //creating li's for rendering title , question and options by looping
    questions.forEach(question => {
      const li = document.createElement("li");
      const h3 = document.createElement("h3");
      h3.innerHTML = question.title;
      li.appendChild(h3);
      const h4 = document.createElement("h4");
      h4.innerHTML = question.content;
      li.appendChild(h4);
      const selectElement = document.createElement("select");

      //creatiing options for each question
      question.options.forEach(option => {
        const optionsToSelectAnswer = document.createElement("option");
        optionsToSelectAnswer.innerHTML = option.content;
        optionsToSelectAnswer.setAttribute("data-is-answer", option.correct);
        selectElement.appendChild(optionsToSelectAnswer);
      });
      li.appendChild(selectElement);
      ulQuestions.appendChild(li);
    });
  }

  //method to calculate final score
  getScore() {
    return document.querySelectorAll("option:checked[data-is-answer=true]")
      .length;
  }

  //method to render final score on to the screen
  renderScore(score) {
    const result = document.querySelector(".result");

    //method to render option of each question is correct or incorrect
    const selectedOptions = document.querySelectorAll("option:checked");
    //console.log(selectedOptions);
    const liArray = document.querySelectorAll("li");

    selectedOptions.forEach((selectedOption, index) => {
      //console.log(index);

      //creating p element to render result is correct or in correct
      const pTagForIsCorrect = document.createElement("p");
      pTagForIsCorrect.setAttribute("class", "isCorrect");

      if (selectedOption.getAttribute("data-is-answer") == "true") {
        console.log(selectedOption.getAttribute("data-is-answer"));
        pTagForIsCorrect.innerHTML = "correct";
      } else {
        console.log(selectedOption.getAttribute("data-is-answer"));
        pTagForIsCorrect.innerHTML = "incorrect";
      }
      liArray[index].appendChild(pTagForIsCorrect);
    });

    //check for confetti with score
    if (score > 0) {
      result.innerHTML =
        "Congratulations you got " + score + "/2 question right, well done";
      let confettiSettings = { target: "confetti" };
      let confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();
      let audio = new Audio("careless-whisper.mp3");
      audio.play();
    } else {
      result.innerHTML = "Sorry ...You failed,Try again";
      let audio = new Audio("fail-trombone-01.mp3");
      audio.play();
    }
  }

  //method for stopwatch
  stopwatch() {
    stopwatchInterval = setInterval(() => {
      //stopwatch for 1 minute
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }
      spanElementForStopWatch.textContent =
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
        ":" +
        (seconds > 9 ? seconds : "0" + seconds);
    }, 1000);

    displyTime.appendChild(spanElementForStopWatch);
    return stopwatchInterval;
  }

  //method to stop stopwatch
  stopStopwatch() {
    const timeTakenToFinishQuiz = document.querySelector(".stopwatch")
      .innerHTML;
    console.log(timeTakenToFinishQuiz);
    document.querySelector(".stopwatch").innerHTML = timeTakenToFinishQuiz;
    clearInterval(stopwatchInterval);
  }
} //end of class

//Instance of the class
const myFirstQuiz = new Quiz("quiz");

//selecting button for getscore
const buttonGetScore = document.querySelector("button");

//selecting header to render button for stopwatch
const header = document.querySelector("header");

//creating button for stopwatch

//calling method fetch questions then rendering questions to the browser
myFirstQuiz.fetchQuestions().then(questions => {
  //console.log(questions)
  //removing loading P element
  document.querySelector(".loading").remove();
  myFirstQuiz.renderQuestions(questions);
  const radioButtonsCheckedList = document.querySelectorAll(
    "input[type=radio]"
  );
  console.log(radioButtonsCheckedList);
  radioButtonsCheckedList.forEach(eachRadioButton => {
    eachRadioButton.addEventListener("change", event => {
      let selectedQuestions = questions.filter(question => {
        return question.difficulty == event.target.value;
      });
      myFirstQuiz.renderQuestions(selectedQuestions);
    });
  });
});

//adding event listener to button 'getscore'
buttonGetScore.addEventListener("click", questions => {
  //calling stopstopwatch method to stop stopwatch
  myFirstQuiz.stopStopwatch(stopwatchInterval);

  //calling method getscore after button pressed
  const finalScore = myFirstQuiz.getScore();
  //console.log(finalScore);

  //calling method renderScore to render score on displayscreen
  myFirstQuiz.renderScore(finalScore);
});
const displyTime = document.querySelector(".displyTime");
const buttonStopWatch = document.createElement("button");
buttonStopWatch.innerHTML = " start stopwatch";
displyTime.appendChild(buttonStopWatch);

//selections and declarations for stopwatch
const spanElementForStopWatch = document.createElement("span");
spanElementForStopWatch.textContent = "00:00";
spanElementForStopWatch.setAttribute("class", "stopwatch");
displyTime.appendChild(spanElementForStopWatch);
let seconds = 0,
  minutes = 0;
let stopwatchInterval;

//adding eventlistener to stopwatch button
buttonStopWatch.addEventListener("click", () => {
  myFirstQuiz.stopwatch();
});

document.querySelector("#tryagain").addEventListener("click",()=>{
  location.reload(true);
})
