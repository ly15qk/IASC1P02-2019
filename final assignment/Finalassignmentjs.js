//This is javascript page for final Finalassignment

//learned button to new page from https://stackoverflow.com/questions/16562577/how-can-i-make-a-button-redirect-my-page-to-another-page
document.getElementById("apptbutton").onclick = function () {
       location.href = "appointment.html";}
//learned from https://www.youtube.com/watch?v=ikR9DsGMUMc

const init =function(){
  document.getElementById('resetfields').addEventListener('click',reset);
  document.getElementById('bookhere').addEventListener('click',send);
}
