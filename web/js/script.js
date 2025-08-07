document.querySelector(".cross").addEventListener("click", function () {
  document.querySelector(".menu").style.top = "-100%";
});

document.querySelector(".listshow").addEventListener("click", function () {
  document.querySelector(".menu").style.top = "0";
});
let openmenusublist = true;
document.querySelector(".menusublist").style.display = "none";
function showMenuSublist() {
  if (openmenusublist) {
    document.querySelector(".menusublist").style.display = "block";
    openmenusublist = false;
  } else {
    document.querySelector(".menusublist").style.display = "none";
    openmenusublist = true;
  }
}
