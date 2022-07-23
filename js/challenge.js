document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    
   
    //let timerInterval = setInterval(startTimer, 1000);
    startTimer()
    //let clear = clearInterval(timerInterval)
    pauseListener()
   
});


let timerInterval = setInterval(startTimer, 1000);



let seconds = 0;


function startTimer() {
++seconds;
document.getElementById('counter').textContent = seconds;
return seconds;
}
//startTimer();

const minusBtn = document.getElementById('minus');

const plusBtn = document.getElementById('plus');

const heartBtn = document.getElementById('heart');

const pauseBtn = document.getElementById('pause');
 
const counterBtn = document.getElementById('counter');

const submitBtn = document.getElementById('submit');


function pauseHandler(){
if (pauseBtn.textContent === ' resume '){
pauseBtn.textContent = ' pause ';
  let timerInterval = setInterval(startTimer, 1000);
  //console.log(timerInterval)

} else{
    pauseBtn.textContent = ' resume '
    clearInterval(timerInterval)
    console.log(clearInterval(timerInterval))
}

minusBtn.disabled = !minusBtn.disabled;
plusBtn.disabled = !plusBtn.disabled;
heartBtn.disabled = !heartBtn.disabled;
submitBtn.disabled = !submitBtn.disabled;
}

function pauseListener(){
return pauseBtn.addEventListener('click', pauseHandler);
}
//pauseListener();



function incrementHandler(){
 counterBtn.textContent = seconds;
return ++seconds;
}

function incrementListener(){
return plusBtn.addEventListener('click', incrementHandler);
}
incrementListener();

function decrementHandler(){
 counterBtn.textContent = seconds;
return --seconds;
}

function decrementListener(){
return minusBtn.addEventListener('click', decrementHandler);
}
decrementListener();
let likeObj = {}
function likeHandler(){
let li2 = document.createElement('li')

let likeValue = document.getElementById('counter').textContent

if(likeObj[likeValue] >= 1){
    likeObj[likeValue] += 1
} else {
    likeObj[likeValue] = 1
}
console.log(likeObj)

 li2.className = 'likes-comment'
li2.textContent =  `${likeValue} was liked ${likeObj[likeValue]} times` 
document.querySelector('.likes').appendChild(li2)
}

function likeListener(){
return heartBtn.addEventListener('click', likeHandler);
}
likeListener();


let ul = document.createElement('ul');
ul.id = 'comments-unordered'
document.getElementById('list').appendChild(ul);

function submitHandler(event){
event.preventDefault();
let comment = document.getElementById('comment-input').value;
let li = document.createElement('li');
li.className = 'comments-list';
document.getElementById('comments-unordered').appendChild(li)
li.textContent = comment;
document.getElementById('comment-form').reset();
}

function submitListener(){
return document.getElementById('comment-form').addEventListener('submit', submitHandler)
}
submitListener()

