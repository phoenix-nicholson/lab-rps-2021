export function getRandomRoll(){
    return ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];
    
}


export function didUserWin(userRoll, actualRoll){
    // console.log(userRoll, actualRoll)
    if (userRoll === actualRoll){
        return 'Tie!' ;
    }
    if (userRoll === 'Rock' && actualRoll === 'Scissors') {
        return true;
    }
    else if (userRoll === 'Paper' && actualRoll === 'Rock') {
        return true;
    }
    else if (userRoll === 'Scissors' && actualRoll === 'paper') {
        return true;
    }
    else {
        return false;
    }


}
