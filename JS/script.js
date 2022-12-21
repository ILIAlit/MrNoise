
    function soundClick(index) 
        {
            switch (index)
            {
                case 1:
                    var audio = new Audio();
                    audio.src = 'Res/Audio/C4.mp3';  
                    audio.play();
                    break;
                case 2:
                    var audio = new Audio();
                    audio.src = 'Res/Audio/D4.mp3';  
                    audio.play();
                    break;
                case 3:
                    var audio = new Audio();
                    audio.src = 'Res/Audio/E4.mp3';  
                    audio.play();
                    break;
                case 4:
                    var audio = new Audio();
                    audio.src = 'Res/Audio/F4.mp3';  
                    audio.play();
                    break;
                case 5:
                    var audio = new Audio();
                    audio.src = 'Res/Audio/G4.mp3';  
                    audio.play();
                    break;
                case 6:
                    var audio = new Audio();
                    audio.src = 'Res/Audio/A4.mp3';  
                    audio.play();
                    break;
                case 7:
                    var audio = new Audio();
                    audio.src = 'Res/Audio/B4.mp3';  
                    audio.play();
                    break;
                case 8:
                    var audio = new Audio();
                    audio.src = 'Res/Audio/Db4.mp3';  
                    audio.play();
                    break;
                case 9:
                    var audio = new Audio();
                    audio.src = 'Res/Audio/Eb4.mp3';  
                    audio.play();
                    break;
                case 10:
                    var audio = new Audio();
                    audio.src = 'Res/Audio/Gb4.mp3';  
                    audio.play();
                    break;
                case 11:
                    var audio = new Audio();
                    audio.src = 'Res/Audio/Ab4.mp3';  
                    audio.play();
                    break;
                case 12:
                    var audio = new Audio();
                    audio.src = 'Res/Audio/Bb4.mp3';  
                    audio.play();
                    break;
            }  
        }


function playnotes(index)
{
    switch (index)
    {
        case "До":
            var audio = new Audio();
            audio.src = 'Res/Audio/C4.mp3';  
            audio.play();
            break;
        case "Ре":
            var audio = new Audio();
            audio.src = 'Res/Audio/D4.mp3';  
            audio.play();
            break;
        case "Ми":
            var audio = new Audio();
            audio.src = 'Res/Audio/E4.mp3';  
            audio.play();
            break;
        case "Фа":
            var audio = new Audio();
            audio.src = 'Res/Audio/F4.mp3';  
            audio.play();
            break;
        case "Соль":
            var audio = new Audio();
            audio.src = 'Res/Audio/G4.mp3';  
            audio.play();
            break;
        case "Ля":
            var audio = new Audio();
            audio.src = 'Res/Audio/A4.mp3';  
            audio.play();
            break;
        case "Си":
            var audio = new Audio();
            audio.src = 'Res/Audio/B4.mp3';
            audio.muted = false;  
            audio.play();
            break;

    }
}



result.style.display = "none";
listennote.style.display ="none";
levels.style.display = "none";

let notes;
let reslt =0;
let trueanswer=0;
let falseanswer=0;
let level=1;
let queshnum=0;
let note;


function check(index)
{
    if(note == index)
    {

        //анимация
        document.getElementById("btn"+index).style.animation = '';
        void document.getElementById("btn"+index).offsetWidth;
        document.getElementById("btn"+index).style.animation = "shadowtrue 0.5s linear";


        if(falseanswer==0)
        {
            trueanswer++;
        }
        mainTesteasy();   
        

    }
    else
    {


        document.getElementById("btn"+index).style.animation = '';
        void document.getElementById("btn"+index).offsetWidth;
        document.getElementById("btn"+index).style.animation = "shadowfalse 0.5s linear";   
        falseanswer++;


    }
}




function mainTesteasy()
{
    btnstart.style.display = "none";
    listennote.style.display ="block";
    levels.style.display = "block";
    

    falseanswer=0;
    document.getElementById("levelnum").innerHTML = level++;


    //вывод результата
    if(queshnum ==10)
    {
        //document.getElementById("listennotes").style.animation = "destroyelem 1s ";   
        listennote.style.display ="none";
        levels.style.display = "none";
        reslt = trueanswer*10;
        document.getElementById("reslt").innerHTML = reslt;
        result.style.display = "block";
    }


    //последовательность нот
    notes = ["До","Ре","Ми","Фа","Соль","Ля","Си"];
    notes.sort(()=>Math.random()-0.5);
    note = Math.floor(Math.random() * notes.length);

    //проигрывание ноты
    queshnum++;
    if(queshnum<=10)
    {
        playnotes(notes[note]);
    }
    

    //проверка
    //document.getElementById("note").innerHTML = notes[note];


    //вывод нот на экран
    for(let i=0;i<notes.length;i++)
    {
        document.getElementById("notes"+i).innerHTML = notes[i];
    }
    
   
   
}

function repeatnote()
{
    playnotes(notes[note]);
}


function maintesthard()
{

}



