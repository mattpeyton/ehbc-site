// Navbar initial hide + show
 $(".navbar").hide();

 $(".menuButton").click(function() {
   $(".navbar").fadeToggle();
 });

//Newsletter sign up box
var $overlay = $('<div id="overlay"></div>');
var $subWindow = $('<div id="subWindow"></div>');
var $subForm = $('#subDiv');
var $nwsCloseX = $('#nwsCloseX');

$subWindow.append($subForm);
$overlay.append($subWindow);

$("body").append($overlay);

//When Newsletter button is clicked, show overlay and popup
$("#nwsltrButton").click(function(){
   $overlay.show();
   $subForm.show();
 });

//Close pop up
///When overlay is clicked
$overlay.click(function(e){
  if (e.target !== this)
    return;
  $overlay.hide();
});

///Or when exit box is clicked
$nwsCloseX.click(function() {
  $overlay.hide();
});

//Submit name and email address
function subscribeSubmit() {
  var data = {};
  data.email_address = document.getElementById('nwsEmail').value;
  data.status = "pending";
  data.merge_fields = {};
  data.merge_fields.FNAME = document.getElementById('nwsFNAME').value;
  data.merge_fields.LNAME = document.getElementById('nwsLNAME').value;
  data = JSON.stringify(data);
  console.log(data);
};

$(document).ready($("#nwsSubmitBtn").click(function(){
  subscribeSubmit();
}));
