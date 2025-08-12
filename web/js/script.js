document.querySelector(".cross").addEventListener("click", function () {
  document.querySelector(".menu").style.top = "-150%";
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








function declineTerms() {
    // If there is a previous page in history
    if (document.referrer !== "") {
      history.back();
    } else {
      // Fallback: redirect to homepage or any specific page
      window.location.href = "index.html"; // change this to your desired page
    }
  }











function redirectToAlbum(event){
let title = event.querySelector("h6").innerText;
let imgsrc = event.querySelector("img").src;
// console.log(title);
 let encodedTitle = encodeURIComponent(title);
 let encodedImg = encodeURIComponent(imgsrc);
window.location.href="album.html?title="+encodedTitle+"&img="+encodedImg;
}


function getQueryParam(param) {
  let urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
let albumTitle = getQueryParam("title");
let albumImg = getQueryParam("img");
if (albumTitle) {
  // document.getElementsByClassName("albumTitle").innerText = albumTitle;
let classabmtitle= document.getElementsByClassName("albumTtl")
for(let i=0; i<classabmtitle.length;i++){
classabmtitle[i].innerText= albumTitle;
}
}
if(albumImg){
let classabmImg=document.getElementById("aboutbanner2")
 classabmImg.style.backgroundImage = `url('${albumImg}')`;
}