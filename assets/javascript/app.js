var allQuestions = [{
    question: "What song did Taylor Swift originally write for a high school talent show?",
    choices: ["Our Song", "Love Song", "You Belong With Me", "Tim McGraw"],
    correctAnswer: 0,
  },

  {
    question: "Which '00s pop hit did Paramount Pictures want to turn into a movie?",
    choices: ["Britney Spears' 'Lucky'", "Ashlee Simpson's 'Autobiography'", "Jennifer Lopez's 'Jenny From The Block'", "Avril Lavigne's 'Sk8r Boi'"],
    correctAnswer: 3,
  },

  {
    question: "How many MTV reality shows used Hilary Duff songs as their theme music?",
    choices: ["One", "Two", "Three", "Four"],
    correctAnswer: 1,
  },

  {
    question: "Which Britney Spears single was co-written by Shania Twain?",
    choices: ["'Don't Let Me Be The Last To Know'", "'Everytime'", "'I'm Not A Girl, Not Yet A Woman'", "'Overprotected'"],
    correctAnswer: 0,
  },

  {
    question: "How did the Spice Girls get their names?",
    choices: ["A record executive", "The host of a late night show", "A magazine editor", "They picked their own"],
    correctAnswer: 2,
  },

  {
    question: "Lady Gaga dyed her hair blonde because an interviewer once mistook her for...",
    choices: ["Ashlee Simpson", "Katy Perry", "Amy Winehouse", "Jessie J"],
    correctAnswer: 2,
  },

  {
    question: "Which of the following songs was NOT written by Sia?",
    choices: ["Beyoncé's 'Pretty Hurts'", "Rihanna's 'Diamonds'", "Britney Spears' 'Perfume'", "Miley Cyrus' 'Wrecking Ball'"],
    correctAnswer: 3,
  },

  {
    question: "Who did The-Dream and Tricky Stewart originally write Rihanna's 'Umbrella' for?",
    choices: ["Britney Spears", "Beyoncé", "Fergie", "Gwen Stefani"],
    correctAnswer: 0,
  },

  {
    question: "Whose famous lips inspired Katy Perry to write 'I Kissed A Girl'?",
    choices: ["Angelina Jolie", "Scarlett Johansson", "Brigitte Bardot", "Rihanna"],
    correctAnswer: 1,
  },

  {
    question: "What album was Kelly Clarkson's 'Breakaway' originally intended for?",
    choices: ["Hilary Duff's Metamorphosis", "Avril Lavigne's Let Go", "Ashlee Simpson's Autobiography", "Christina Aguilera's Stripped"],
    correctAnswer: 1,
  },

  {
    question: "Which of the following songs did Katy Perry help write?",
    choices: ["Demi Lovato's 'Really Don't Care'", "Rihanna's 'Stay'", "Selena Gomez's 'Same Old Love'", "Iggy Azalea's 'Black Widow'"],
    correctAnswer: 3,
  },

  {
    question: "Which Miley Cyrus song did Kesha help write?",
    choices: ["'We Can't Stop'", "'The Time Of Our Lives''", "'Can't Be Tamed'", "'7 Things'"],
    correctAnswer: 1,
  },

  {
    question: "Who was the first female artist to replace herself at #1 on the Billboard Hot 100?",
    choices: ["Beyoncé", "Lady Gaga", "Taylor Swift", "Mariah Carey"],
    correctAnswer: 2,
  },

  {
    question: "Who was MTV's first choice to perform alongside Madonna at the 2003 VMAs?",
    choices: ["Beyoncé", "Gwen Stefani", "Jennifer Lopez", "P!nk"],
    correctAnswer: 2,
  },

  {
    question: "Which pop queen worte their actual wedding dress in a music video?",
    choices: ["Madonna", "Katy Perry", "Beyoncé", "Mariah Carey"],
    correctAnswer: 3,
  }
];
var correctAnswers = 0;
var incorrectAnswers = 0;

var numberOfSeconds = 75;
var intervalId;

function setupOptions() {
    for(i = 0; i < allQuestions.length; i++) {
        $(".questions").append("<div class='questionDivs' id='div"+ i + "'>");
        $("#div" + i).append(allQuestions[i].question);
        var options = allQuestions[i].choices;
        var formHtml = '';
        for (var j = 0; j < options.length; j++) {
            formHtml += '<div><input type="radio" name="option' + i + '" value="'+ j +'" id="option' + j + '"><label for="option' + j + '">' + allQuestions[i].choices[j] + '</label></div><br/>';
        }
        $("#div" + i).append(formHtml);
    };
};

function checkAns() {
    var answerDivsArray = $(".questionDivs")
    for(i = 0; i < answerDivsArray.length; i++) {
        var checkedValue = $("input[name = option" + i + "]:checked").val()
        if (allQuestions[i].correctAnswer == checkedValue) {
            correctAnswers++;
        }   
        else {
            incorrectAnswers++;
        };
    }
};

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function stop() {
    clearInterval(intervalId);
 }

function decrement() {
    numberOfSeconds--;
    $(".timer").html("<h2>" + numberOfSeconds + " seconds remaining</h2>");
    if (numberOfSeconds === 0) {
        stop();
        checkAns();
        $(".timer").html("Number correct: " + correctAnswers + "<br>");
        $(".timer").append("Number incorrect: " + incorrectAnswers);
        $(".startButton").show();
        $(".startButton").text("Try again");
        $(".startButton").click(function () {
            numberOfSeconds = 75;
            $(".timer").html("<h2>" + numberOfSeconds + " seconds remaining</h2>");
            run();
            $(".startButton").hide();
            $(".questions").empty();
            correctAnswers = 0;
            incorrectAnswers = 0;
            setupOptions();
        })
    }
}

window.onload = function() {
    $(".timer").html("<h2>" + numberOfSeconds + " seconds remaining</h2>");
};

$(".startButton").click(function() {
    run();
    $(".startButton").hide();
    setupOptions();
});