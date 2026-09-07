const images = [

"https://picsum.photos/1200/300?1",
"https://picsum.photos/1200/300?2",
"https://picsum.photos/1200/300?3",
"https://picsum.photos/1200/300?4"

];

let i = 0;

function slider(){

i++;

if(i==images.length){
i=0;
}

document.getElementById("slide").src=images[i];

}

setInterval(slider,3000);