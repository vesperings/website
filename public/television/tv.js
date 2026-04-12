img_array = new Array(
    { src: '/WEBSITE/TELEVISION/glitch.gif', link: '/room' },
    { src: '/WEBSITE/TELEVISION/mgm.gif', link: '/films' },
    { src: '/WEBSITE/TELEVISION/youtube.gif', link: 'https://www.youtube.com/@vesperings' },
    { src: '/WEBSITE/TELEVISION/ezgif-23280cad1bd84aef.gif', link: '/dvd_collection'},
    
);
let i = 0;

function myFunction() {
    i = (i + 1) % img_array.length; 
    
    document.getElementById("myImg").src = img_array[i].src;
    document.getElementById("gifLink").href = img_array[i].link;
}