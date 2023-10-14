
/****** screen click *******/
for(let i=0;i<document.querySelectorAll('.drum').length;i++)
 {
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    let key = this.innerHTML;
     Events(key);
     animation(key);
});
}


/****** keyborad click *******/
document.addEventListener("keypress" ,function (event) {

  let key=event.key;
  Events(key.toLowerCase());
  animation(key);

})


/****** play audio *******/
function Events(key){

    if(key==='w'){
        var audio=new Audio('./sounds/crash.mp3');
        audio.play();
        }
        else if(key==='a'){
            var audio=new Audio('./sounds/kick-bass.mp3');
            audio.play();
        }
        else if(key==='s'){
            var audio=new Audio('./sounds/snare.mp3');
            audio.play();
        }
        else if(key==='d'){
            var audio=new Audio('./sounds/tom-1.mp3');
            audio.play();
        }
        else if(key==='j'){
            var audio=new Audio('./sounds/tom-2.mp3');
            audio.play();
        }
        else if(key==='k'){
            var audio=new Audio('./sounds/tom-3.mp3');
            audio.play();
        }
        else if(key==='l'){
            var audio=new Audio('./sounds/tom-4.mp3');
            audio.play();
        }
}

function animation(event){
   let ani = document.querySelector("."+event);
   ani.classList.add("pressed");

   setTimeout(function(){
    ani.classList.remove("pressed");
   },100)
}