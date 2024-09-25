var answer = document.getElementById('answer');
var text = document.getElementById('write1');


setInterval(a, 1000);


function a(){
    if(text.value.length >= 350){
        answer.textContent = 'bro, shut up please >:('
    }
}