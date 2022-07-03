let songIndex =0;
let audioElement = new Audio('songs/1.mp3');
let myplay = document.getElementById('masterji');
let mypro = document.getElementById('mypro');
let mastercall = document.getElementById('mastercall')
let songitem= Array.from(document.getElementsByClassName('songIeam'));
let songs=[
    {songName:"Dil kyu yeh mera",filePath:"songs/1.mp3",Path:"covers/zindgi.jpg"},
    {songName:"zindgi do pal ki",filePath:"songs/2.mp3",Path:"covers/2.jpg"},
    {songName:"Gulabi",filePath:"songs/3.mp3",Path:"covers/3.jpg"},
    {songName:"Haule Haule",filePath:"songs/4.mp3",Path:"covers/4.jpg"},
    {songName:"Likhe jo khat tujhe",filePath:"songs/4.mp3",Path:"covers/5.jpg"},
    {songName:"O mere dil ke chain",filePath:"songs/5.mp3",Path:"covers/6.jpg"},
    {songName:"kabhi jo badal ",filePath:"songs/7.mp3",Path:"covers/7.jpg"},
    {songName:"Ajab si",filePath:"songs/8.mp3",Path:"covers/8.jpg"},
]

songitem.forEach((Element, i)=>{
  Element.getElementsByClassName('pikabo')[0].src =songs[i].Path
  Element.getElementsByClassName('songname')[0].innerText = songs[i].songName
 });
 myplay.addEventListener('click',function(){
    if(audioElement.paused|| audioElement.currentTime<=0){
    audioElement.play()
    myplay.classList.remove('fa-circle-play');
    myplay.classList.add('fa-circle-pause');
}
else{
    audioElement.pause()
        myplay.classList.remove('fa-circle-pause');  
        myplay.classList.add('fa-circle-play');
     }
    });
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
   var progess = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    mypro.value=progess;
});
mypro.addEventListener('change',()=>{
    audioElement.currentTime = mypro.value *audioElement.duration/100;
});
const  makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songl')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songl')).forEach((Element)=>{
Element.addEventListener('click',(e)=>{
        makeAllplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        mastercall.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        myplay.classList.remove('fa-circle-play');
        myplay.classList.add('fa-circle-pause');
     })
    });
    document.getElementById('pre').addEventListener('click',()=>{
        if(songIndex>=8){
            songIndex =0
        }else{
            songIndex+=1;
        } 
         audioElement.src = `songs/${songIndex+1}.mp3`;
         mastercall.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        myplay.classList.remove('fa-circle-play');
        myplay.classList.add('fa-circle-pause');
     });
    document.getElementById('next').addEventListener('click',()=>{
        if(songIndex<=0){
            songIndex =0
        }else{
            songIndex-=1;
        } 
         audioElement.src = `songs/${songIndex+1}.mp3`;
         mastercall.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        myplay.classList.remove('fa-circle-play');
        myplay.classList.add('fa-circle-pause');
     });
    

    
 