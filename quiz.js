var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var myQuestions = [
    {
    question: "What does RAM stand For?",
    answers: {
    a: 'Random Access Memory',
    b: 'Read Access Memory',
    c: 'Realtime Access Memory'
    },
    correctAnswer: 'a'
    },
    {
    question: "What is the full name of the CPU?",
    answers: {
    a: 'Central Process Unit',
    b: 'Central Processing Unit',
    c: 'Central Progressive Unit'
    },
    correctAnswer: 'b'
    }
    ,
    {
    question: "What is the full name of the  ALU?",
    answers: {
    a: 'Arithmetic Logic Unit',
    b: 'Advance Logical Unit',
    c: 'Arithmetic Local Unit'
    },
    correctAnswer: 'a'
    }
    ,
    {
    question: "what does ROM stand for?",
    answers: {
    a: 'Read Only Memory',
    b: 'Random Only memory',
    c: 'Random Online Memory'
    },
    correctAnswer: 'a'
    }
    ,
    {
    question: "Which part of the computer is considered as Brain of the Computer?",
    answers: {
    a: 'RAM',
    b: 'CPU',
    c: 'SSD'
    },
    correctAnswer: 'b'
    }
    ,
    {
    question: "What does OCR stand for?",
    answers: {
    a: 'Optical Character Reader',
    b: 'Optimized Character Reader',
    c: 'Optical Character Response'
    },
    correctAnswer: 'a'
    }
    ,
    {
    question: "What is a Mouse?",
    answers: {
    a: 'An Input Device',
    b: 'An Output Device',
    c: 'A Register'
    },
    correctAnswer: 'a'
    }
    ,
    {
    question: "What is a PCB?",
    answers: {
    a: 'Printed Circuit Board',
    b: 'Processing Circuit Board',
    c: 'Pilot Circuit Board'
    },
    correctAnswer: 'a'
    }
    
    
    ];
    
    
    
    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
    
    function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
    
    function showQuestions(questions, quizContainer){           // we'll need a place to store the output and the answer choices
    
    var output = [];
    var answers;
    
    // for each question...
    for(var i=0; i<questions.length; i++){
    
    // first reset the list of answers
    answers = [];
    
    // for each available answer...
    for(letter in questions[i].answers){
    
    // ...add an html radio button
    answers.push(
    '<label>'
    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
    + letter + ': '
    + questions[i].answers[letter]
    + '</label>'
    );
    }
    
    // add this question and its answers to the output
    output.push(
    '<div class="question">' + questions[i].question + '</div>'
    + '<div class="answers">' + answers.join('') + '</div>'
    );
    }
    
    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
    }
    
    
    function showResults(questions, quizContainer, resultsContainer){
    
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;
    
    // for each question...
    for(var i=0; i<questions.length; i++){
    
    // find selected answer
    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
    
    // if answer is correct
    if(userAnswer===questions[i].correctAnswer){  // add to the number of correct answers
   
    numCorrect=numCorrect+1;
    }
    }
    
    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
    
    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
    }
    
    }

    function refreshPage(){
        window.location.reload();
    }   

