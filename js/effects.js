// Navbar toggle hide and show
 $(".menuButton").click(function(){
   $(".navbar").fadeToggle();
 });

//Newsletter sign up box
var $overlay = $('<div id="overlay"></div>');
var $modWindow = $('<div class="overlayContent" id="modWindow"></div>');
var $subForm = $('#subDiv');
var $nwsCloseX = $('#nwsCloseX');

$("body").append($overlay);

$('#newButton').click(function() {
  $overlay.append('<iframe class="newVid overlayContent" width="560" height="315" src="https://www.youtube.com/embed/Ex8Q1WWh2jo?ecver=1" frameborder="0" allowfullscreen></iframe>');
  $overlay.show();
})

//When Newsletter button is clicked, show overlay and popup
$("#nwsltrButton").click(function(){
  $modWindow.append($subForm);
  $overlay.append($modWindow);
  $overlay.show();
  $subForm.show();
  $(".nwsInput").focus(function(){
    $(this).css("background-color", "#ffffcc");
  });

  $(".nwsInput").blur(function(){
    $(this).css("background-color", "#ffffff");
  });
  $nwsCloseX.click(function() {
    $overlay.hide();
    $(".overlayContent").remove();
  });
 });

//Activate colors in selected form input
$(".nwsInput").focus(function(){
  $(this).css("background-color", "#ffffcc");
});

$(".nwsInput").blur(function(){
  $(this).css("background-color", "#ffffff");
});

//Close pop up
///When overlay is clicked
$overlay.click(function(e){
  if (e.target !== this)
    return;
  $overlay.hide();
  $(".overlayContent").remove();
});

///Or when exit box is clicked
$nwsCloseX.click(function() {
  $overlay.hide();
  $(".overlayContent").hide();
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

//FAQ hide and show answers
$(".FAnswer").hide();

$(".FAQuestion").click(function(){
  $(this).next().slideToggle();
});
