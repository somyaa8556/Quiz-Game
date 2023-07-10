const startButton = document.getElementById('start-btn')

const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')

const answerButtonElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click' , startGame)
nextButton.addEventListener('click',() =>{
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    // console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = question.sort(() => Math.random() - .5 )
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click' ,selectAnswer )
        answerButtonElement.appendChild(button)
    })
}

function resetState(){
    nextButton.classList.add('hide')
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct  = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
         nextButton.classList.remove('hide')
    }else{
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

function  clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const question = [
    {
        question: 'What is 2 + 2=?',
        answer:[
           {text: '22',correct: false},
           {text: '4',correct: true} ,
           {text: '8',correct: false},
           {text: '12',correct: false}
        ]
    },
    {
        question: 'What is 4 + 4=?',
        answer:[          
           {text: '44',correct: false},
           {text: '32',correct: false},
            {text: '8',correct: true} ,
           {text: '40',correct: false}
        ]
    },
    {
        question: 'What is 6 + 6=?',
        answer:[
           {text: '66',correct: false},
           {text: '24',correct: false},
           {text: '36',correct: false},
           {text: '12',correct: true}
           
        ]
    },
    {
        question: 'What is 8 + 8=?',
        answer:[
           {text: '16',correct: true} ,
           {text: '88',correct: false},
           {text: '32',correct: false},
           {text: '46',correct: false}
        ]
    },
    {
        question: 'What is 9 + 9=?',
        answer:[
           {text: '99',correct: false},
           {text: '18',correct: true},
           {text: '36',correct: false},
           {text: '102',correct: false}
        ]
    },
    {
        question: 'Is web development fun?',
        answer:[
           {text: 'Yes',correct: true} ,
           {text: 'No',correct: false},
           {text: 'dont no',correct: false},
           {text: 'Not sure',correct: false}

        ]
    },
]