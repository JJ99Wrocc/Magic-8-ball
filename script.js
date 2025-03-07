const ball = document.querySelector('.ball')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')


ball.addEventListener('click', () => {
    shakeBall();
    errorMsg(); 
    const trimmedValue = input.value.trim();
    
    if (input.value !== '' && trimmedValue.endsWith('?')) {
       
        error.textContent = '';

        answerArr.forEach(element => {
            const number = Math.floor(Math.random() * answerArr.length); 
            answer.textContent = `Odpowiedź:  ${answerArr[number]}`

        input.value = '';
        });
    }
});

const shakeBall = e => {
    ball.classList.toggle('shake-animation')
}

const errorMsg = e => {
    const trimmedValue = input.value.trim(); // Usuń spacje

    if (trimmedValue === '') {
        error.textContent = 'Zadaj pytanie, żeby poznać odpowiedź!!';
        answer.textContent = '';
    } else if (trimmedValue.endsWith('?')) {
        error.textContent = ''; 
    } else {
        error.textContent = 'Pytanie musi kończyć się znakiem "?".';
        answer.textContent = '';
    }
};

const answerArr =  ['tak', 'niechcesz znać odpowiedzi na to pytanie', 'dziś się tego nie dowiesz', 'Będzie dobrze',
    'Tak, ale musisz poczekać', 'Wątpię', 'Odpowiedź nie jest jasna.', 'To bardzo mało prawdopodobne','Może, ale jest to mało prawdopodobne','Niewielka szansa, ale możliwa', 'Odpowiedź jest pozytywna.', 'To nie jest czas na odpowiedź.',
    'Jest duża szansa, że tak.','Tak, ale musisz być ostrożny.', 'Przewiduję, że tak.','Przyszłość jest niepewna.',    'Odpowiedź brzmi nie.', 'Twoje pytanie jest zbyt trudne, spróbuj ponownie.', 'To możliwe, ale niewielkie',
    'Tak, ale z pewnymi trudnościami', 'Nie, ale nie poddawaj się', 'To nie jest najlepszy czas', 'Tak, ale wymaga to wysiłku', 'Bardzo prawdopodobne','Odpowiedź to "może"', 'Może się udać','Nie jestem pewny', 'Odpowiedź będzie wymagała czasu.',  'Odpowiedź brzmi nie','Twoje pytanie jest zbyt trudne, spróbuj ponownie', 'To możliwe, ale niewielkie','Tak, ale z pewnymi trudnościami', 'Nie, ale nie poddawaj się','To nie jest najlepszy czas','Tak, ale wymaga to wysiłku','Bardzo prawdopodobne',  'Odpowiedź to "może"', 'Może się udać',  'Nie jestem pewny', 'Odpowiedź będzie wymagała czasu',  'Tak, ale musisz być ostrożny', 'Przewiduję, że tak.', 'Przyszłość jest niepewna.', 'Odpowiedź brzmi nie',
    'Twoje pytanie jest zbyt trudne, spróbuj ponownie', 'To możliwe, ale niewielkie',  'Tak, ale z pewnymi trudnościami',
    'Nie, ale nie poddawaj się', 'To nie jest najlepszy czas', 'Tak, ale wymaga to wysiłku',  'Bardzo prawdopodobne',
    'Odpowiedź to "może"', 'Może się udać', 'Nie jestem pewny','Odpowiedź będzie wymagała czasu.']



