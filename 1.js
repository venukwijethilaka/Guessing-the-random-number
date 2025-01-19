const min = 0;
const max = 10;
let guess;
let rand = Math.floor(Math.random()*(max-min+1)+min);
guess = window.prompt(`Guess a number between ${min} - ${max}`);

    let run = true;
    console.log(rand);
    while(run)
    {
        if(isNaN(guess)){
            window.alert('Enter a number....!!!');
            guess = window.prompt(`Guess a number between ${min} - ${max}`);
        }else if(guess<0 || guess>100){
            window.alert('Enter a valid number within range..!');
            guess = window.prompt(`Guess a number between ${min} - ${max}`);
        }else{
            
                guess = Number(guess);
                if(rand == guess){
                    window.alert('Congratulation!...You won!...');
                    run = false;
                }else if(rand>guess)
                {
                    window.alert('Too Low! Try Again...');
                    guess = window.prompt(`Guess a number between ${min} - ${max}`);
                }else
                {
                    window.alert('Too High! Try Again...');
                    guess = window.prompt(`Guess a number between ${min} - ${max}`);
                }
        }
    }   



