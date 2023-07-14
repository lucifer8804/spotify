var songindex=0;
var audioelement=new Audio('./songs/1.mp3');
var masterplay=document.getElementById('masterplay');
var nextbutton=document.getElementById('next');
var backbutton=document.getElementById('back')
var progress=document.getElementById('progress');
var gif=document.getElementById('gif');
var pr;
let songitem=Array.from(document.getElementsByClassName('songItem'));

let songs=[
{songName:"Tum hi ho",filePath:"./songs/1.mp3",coverPath:"./covers/1.jpg"},
{songName:"Kahani suno ",filePath:"./songs/2.mp3",coverPath:"./covers/2.jpg"},
{songName:"Man meri jaan",filePath:"./songs/3.mp3",coverPath:"./covers/3.jpg"},
{songName:"Phir aur kya chahiye",filePath:"./songs/4.mp3",coverPath:"./covers/4.jpg"},
{songName:"Lali bindiya",filePath:"./songs/5.mp3",coverPath:"./covers/5.webp"},
{songName:"Kaise btaoon tumhe",filePath:"./songs/6.mp3",coverPath:"./covers/6.jpg"},
{songName:"Kabhi na kabhi to miloge",filePath:"./songs/7.mp3",coverPath:"./covers/7.jpg"},
{songName:"Yu hi re",filePath:"./songs/8.mp3",coverPath:"./covers/8.jpg"}

]
songitem.forEach((element,i) => {
   
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songnames")[0].innerText=songs[i].songName;
    
});



masterplay.addEventListener('click',()=>{
    if(audioelement.paused||audioelement.currentTime<=0)
    {
        audioelement.play();
       masterplay.src=('./images/pause.svg')
        gif.style.opacity=1;
       
    }
    else{
     audioelement.pause();
     masterplay.src=('./images/play.svg')
     gif.style.opacity=0;   
     
    }
})


audioelement.addEventListener('timeupdate',()=>{
     pr=parseInt((audioelement.currentTime/audioelement.duration)*100);
     
    progress.value=pr;
    if(pr==100)
    {
     songindex++;
     audioelement.src="./songs/"+songindex+".mp3"
     mastersong.innerText=songs[songindex-1].songName;
     audioelement.currentTime=0;
     audioelement.play();
     masterplay.src=('./images/pause.svg')
     gif.style.opacity=1;
    }

})


progress.addEventListener('change',()=>{
    audioelement.currentTime=(progress.value*audioelement.duration)/100;
})

const makeallplay=()=>
{
    Array.from(document.getElementsByClassName("playsvg")).forEach((element)=>{
        element.querySelector(".playsvg img").src=('./images/play.svg');


    })

}

Array.from(document.getElementsByClassName("playsvg")).forEach((element)=>{
        element.addEventListener('click',(e)=>{
            makeallplay();
            songindex=parseInt(e.target.id)+1;
           
        
            e.target.src=('./images/pause.svg')
            audioelement.src="./songs/"+songindex+".mp3"
            mastersong.innerText=songs[songindex-1].songName;
            audioelement.currentTime=0;
            audioelement.play();
            masterplay.src=('./images/pause.svg')
            gif.style.opacity=1;


        })
})

nextbutton.addEventListener('click',()=>{
    
    if(songindex>7)
    {
        songindex=1;
    }
    else{
        songindex+=1;
    }
   
    audioelement.src="./songs/"+songindex+".mp3"
    mastersong.innerText=songs[songindex-1].songName;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.src=('./images/pause.svg')
    gif.style.opacity=1;
})
backbutton.addEventListener('click',()=>{
    
    if(songindex<1)
    {
        songindex=8;
    }
    else{
        songindex-=1;
    }
    audioelement.src="./songs/"+songindex+".mp3"
    mastersong.innerText=songs[songindex-1].songName;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.src=('./images/pause.svg')
    gif.style.opacity=1;
})
