$(document).ready(function() {

    $(".questionArea").hide();
    $(".endScreen").hide();

    const showQuestionArea = function() {
        $(".startScreen").hide();
        $(".questionArea").show();
        $(".endScreen").hide();
    }

    const showEndScreen = function() {
        $(".endScreen").show();
        $(".questionArea").hide();
    }

    let questionIndex = 0;
    let score = 0;
    $('.start').on('click', firstQuestion = function(){
        questionIndex = 0;
        score = 0;
        $("#question").html(questionBank[0]["q"]);
        $("#ansA").html(questionBank[questionIndex]["a"]);
        $("#ansB").html(questionBank[questionIndex]["b"]);
        $("#ansC").html(questionBank[questionIndex]["c"]);
        $("#ansD").html(questionBank[questionIndex]["d"]);
        showQuestionArea();
    });
    
    $('.next').on('click', nextQuestion = function(){
        $(".answer").prop("disabled", false);
        $(".answer").removeClass("correct");
        $(".answer").removeClass("incorrect");
        questionIndex++;
        if (questionIndex <= 9) {
            $("#question").html(questionBank[questionIndex]["q"]);
            $("#ansA").html(questionBank[questionIndex]["a"]);
            $("#ansB").html(questionBank[questionIndex]["b"]);
            $("#ansC").html(questionBank[questionIndex]["c"]);
            $("#ansD").html(questionBank[questionIndex]["d"]);
            if (questionIndex == 9) {
                $(".next").html("Complete");
                $(".next").addClass("complete");
            };
        } else if (questionIndex >= 10) {
            endScreen();
        };
    });

    let selectedAns;

    const checkAns = function() {
        let correctAns = questionBank[questionIndex]["correct"];
        if (correctAns == $("#ansA").text()) {
            $("#ansA").addClass ("correct");
        } else if (correctAns == $("#ansB").text()) {
            $("#ansB").addClass ("correct");
        } else if (correctAns == $("#ansC").text()) {
            $("#ansC").addClass ("correct");
        } else if (correctAns == $("#ansD").text()) {
            $("#ansD").addClass ("correct");
        };
    };

    $(".answer").on("click", function(){
        selectedAns = $(this).text();
        $(".answer").prop("disabled", true);
        if (selectedAns == questionBank[questionIndex]["correct"]) {
            score++;
            $(this).addClass("correct");
        } else {
            $(this).addClass("incorrect");
            checkAns();
        };
    });


    $(".complete").on("click", endScreen = function(){
        showEndScreen();
        $(".endScreen .score").html(`You scored ${score}/10!`);
        if (score >= 8) {
            $(".message").html("You are amazing :D");
        } else if (score >= 5 && score < 8) {
            $(".message").html("mediocre");
        } else if (score < 5) {
            $(".message").html("Better luck next time :<");
        } 
    });

    $(".restart").on("click", function(){
        questionIndex = 0;
        $(".complete").html("Next");
        $(".next").removeClass("complete");
        $(".startScreen").show();
        $(".questionArea").hide();
        $(".endScreen").hide();

    });
    
    const questionBank = [
        //Q1
        {
            q: "How many bones are in the human body?",
            a: "124",
            b: "206",
            c: "189",
            d: "234",
            correct: "206"
        },
        //Q2
        {
            q: "What does the A in DNA stand for?",
            a: "acid",
            b: "artery",
            c: "arteriole",
            d: "alloy",
            correct: "acid"
        },
        //Q3
        {
            q: "Which blood type is considered to be an universal donor?",
            a: "AB+",
            b: "B-",
            c: "O+",
            d: "O-",
            correct: "O-"
        },
        //Q4
        {
            q: "What is considered to be the powerhouse of the cell?",
            a: "mitochondria",
            b: "cytoplasm",
            c: "chloroplast",
            d: "nucleus",
            correct: "mitochondria"
        },
        //Q5
        {
            q: "Which organ in the body is responsible for pumping blood?",
            a: "brain",
            b: "kidney",
            c: "liver",
            d: "heart",
            correct: "heart"
        },
        //Q6
        {
            q: "How many teeth does the adult human have?",
            a: "24",
            b: "28",
            c: "32",
            d: "36",
            correct: "32"
        },
        //Q7
        {
            q: "Which of these systems are responsible for fighting off disease?",
            a: "immune",
            b: "digestive",
            c: "endocrine",
            d: "circulatory",
            correct: "immune"
        },
        //Q8
        {
            q: "How many pairs of chromosomes are in the human body?",
            a: "17",
            b: "23",
            c: "24",
            d: "48",
            correct: "23"
        },
        //Q9
        {
            q: "What gives blood its red color?",
            a: "hemoglobin",
            b: "iron",
            c: "renin",
            d: "platelets",
            correct: "hemoglobin"
        },
        //Q10
        {
            q: "What organ helps maintain the body's balance?",
            a: "gallbladder",
            b: "eyes",
            c: "diaphragm",
            d: "ears",
            correct: "ears"
        },
    ];
});
