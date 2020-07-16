var pad = document.querySelector(".container");
pad.style.padding = "0px 100px 50px 100px";

var title1 = document.querySelector(".topHead");
title1.innerHTML = "Meeting Agenda";

var title = document.querySelector(".title2");
title.innerHTML = "Notes and Action Items";
title.style.color = "blue";

var heading = document.querySelector("h1");
heading.style.color = "blue";
heading.style.textAlign = "center";
heading.style.fontSize = "60px";

var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var n = new Date();
var d = days[n.getDay()];
var m = n.getMonth();
var y = n.getFullYear();

var t = new Date();
var h = t.getHours();
var mins = t.getMinutes();

var hd = document.querySelector(".myTable");
hd.rows[0].cells[0].innerHTML = "Date:" + d + "/" + m + "/" + y;
hd.rows[0].cells[1].innerHTML = "Time:" + h + ":" + mins;
hd.rows[0].cells[2].innerHTML = "Location:Room 42";
hd.rows[0].cells[0].style.padding = "10px";
hd.rows[0].cells[1].style.padding = "10px";
hd.rows[0].cells[2].style.padding = "10px";
hd.style = "color:grey;width: 500px; margin:auto; display:block";
