img_array = new Array(
  { src: "/WEBSITE/TELEVISION/static.gif", link: "/room" },
  { src: "/WEBSITE/TELEVISION/mgm.gif", link: "/films" },
  { src: "/WEBSITE/TELEVISION/dvd.gif", link: "/dvd_collection" },
  {
    src: "/WEBSITE/TELEVISION/show.gif",
    link: "/television/show",
  },
);
let i = 0;

function myFunction() {
  i = (i + 1) % img_array.length;

  document.getElementById("myImg").src = img_array[i].src;
  document.getElementById("gifLink").href = img_array[i].link;
}
