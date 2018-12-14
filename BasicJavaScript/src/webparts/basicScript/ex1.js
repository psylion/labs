


function check(){
    let userVal = prompt('Enter a value between 0 and 10');
    let num = Math.floor(Math.random()*10);
    (userVal === num)? alert('Good Job!'):alert('not match');
}
check();