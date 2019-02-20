//console.log("Script loaded");
//class Quiz
class Quiz {
  constructor(name) {
    this.name = name;
  }

  //method for fetching Questions and returning promise
  fetchQuestions() {
    return fetch(
      "https://gist.githubusercontent.com/benna100/c9c38faebea1526fb4e6b6b896a1dc94/raw/9468c385bfb422620676b3669509b0a59b326c42/quiz-questions.json"
    ).then(questionsResponse => questionsResponse.json());
  }

  //method for rendering  questions on to the page
  renderQuestions(questions) {
    //selecting Ul
    const ulQuestions = document.querySelector(".questions > ul");
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
      //creating p element to render result is correct or in correct
      const indicateIsCorrect = document.createElement("p");
      indicateIsCorrect.setAttribute("class", "isCorrect");
      li.appendChild(indicateIsCorrect);
      ulQuestions.appendChild(li);
    });
  }

  //method to calculate final score
  getScore() {
    return document.querySelectorAll("option:checked[data-is-answer=true]")
      .length;
  }

  //method to render option of each question is correct or incorrect
  isCorrect() {
    const selectedOptions = document.querySelectorAll("option:checked");
    //console.log(selectedOptions);

    selectedOptions.forEach(selectedOption => {
      //console.log(index);
      const pTagForIsCorrect = document.querySelector(".isCorrect");

      if (selectedOption.getAttribute("data-is-answer") === "true") {
        console.log(selectedOption.getAttribute("data-is-answer"));
        pTagForIsCorrect.innerHTML = "correct";
      } else {
        console.log(selectedOption.getAttribute("data-is-answer"));
        pTagForIsCorrect.innerHTML = "incorrect";
      }
    });
  }

  //method to render final score on to the screen
  renderScore(score) {
    const result = document.querySelector(".result");
    //check for confetti
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
  /* stopwatch() {
    const spanElementForStopWatch = document.createElement("span");
    spanElementForStopWatch.style = "backgroundColor = gray";
    spanElementForStopWatch.setAttribute("class", "stopwatch");
    let i = 1;
    let stopwatchInterval = setInterval(() => {

      //stopwatch for 1 minute
      if (i <= 60) {
        spanElementForStopWatch.innerHTML = i;
        i++;
      }
    }, 1000);

    header.appendChild(spanElementForStopWatch);
   return stopwatchInterval;
  } */

  //method to stop stopwatch
 /*  stopStopwatch() {
    const timeTakenToFinishQuiz = document.querySelector(".stopwatch").innerHTML;
    console.log(timeTakenToFinishQuiz);
    document.querySelector(".stopwatch").innerHTML = timeTakenToFinishQuiz;
    clearInterval(stopwatchInterval);
  } */
} //end of class

//Instance of the class
const myFirstQuiz = new Quiz("quiz");

//selecting button for getscore
const buttonGetScore = document.querySelector("button");

//selecting header to render button for stopwatch
const header = document.querySelector("header");

//creating button for stopwatch
const buttonStopWatch = document.createElement("button");
buttonStopWatch.innerHTML = " click for stopwatch";
header.appendChild(buttonStopWatch);

//adding eventlistener to stopwatch button
/* buttonStopWatch.addEventListener("click", () => {
   myFirstQuiz.stopwatch();
 
}); */

//console.log(myFirstQuiz);
//console.log(myFirstQuiz.fetchQuestions());

//calling method fetch questions then rendering questions to the browser
myFirstQuiz.fetchQuestions().then(questions => {
  //console.log(questions)

  //removing loading P element
  document.querySelector(".loading").remove();
  myFirstQuiz.renderQuestions(questions);
});

//adding event listener to button 'getscore'
buttonGetScore.addEventListener("click", questions => {
  //checking each question 'iscorrect' after 'getscore' button is pressed
  myFirstQuiz.isCorrect();

  //calling method getscore after button pressed
  const finalScore = myFirstQuiz.getScore();
  //console.log(finalScore);

  //calling stopstopwatch method to stop stopwatch
  /* myFirstQuiz.stopStopwatch(); */

  //calling method renderScore to render score on displayscreen
  myFirstQuiz.renderScore(finalScore);
});
