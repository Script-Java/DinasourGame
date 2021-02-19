var character = document.querySelector('#character');
var block = document.querySelector('#block');

function jump() {
    if(character.classList != 'animate') {
        character.classList.add('animate');
    }
    character.classList.add('animate');
    setTimeout(function(){
        character.classList.remove('animate');
    },1000)
}


var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    

if(blockLeft < 20 && blockLeft > 0 && characterTop > 300) {
    alert("GAME OVER YOU LOSE")
    block.style.animation = 'none';
    block.style.display = 'none';

}
  },10)
