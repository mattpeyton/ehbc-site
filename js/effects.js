// Navbar toggle hide and show
 $(".menuButton").click(function(){
   $(".navbar").fadeToggle();
 });

$('#newButton').click(function() {
  $overlay.append('<iframe class="newVid overlayContent" src="https://www.youtube.com/embed/Ex8Q1WWh2jo?ecver=1" frameborder="0" allowfullscreen></iframe>');
  $overlay.show();
  $overlay.click(function(e){
    if (e.target !== this)
      return;
    $overlay.hide();
    $(".overlayContent").remove();
  });
});


//Newsletter sign up pop up window
var $overlay = $('<div id="overlay"></div>');
var $modWindow = $('<div class="overlayContent" id="modWindow"></div>');
var $subForm = $('#subDiv');
var $nwsCloseX = $('#nwsCloseX');

$("body").append($overlay);

//When Newsletter button is clicked, show overlay and popup
$("#nwsltrButton").click(function(){
  $modWindow.append($subForm);
  $overlay.append($modWindow);
  $overlay.show();
  $subForm.show();

  //Style color of selected field
  $(".nwsInput").focus(function(){
    $(this).css("background-color", "#ffffcc");
  });

  $(".nwsInput").blur(function(){
    $(this).css("background-color", "#ffffff");
  });

  //Close the pop up by clicking outside of the window...
  $overlay.click(function(e){
    if (e.target !== this)
      return;
    $overlay.hide();
    $(".overlayContent").remove();
  });

  //...or close by clicking the exit box
  $nwsCloseX.click(function() {
    $overlay.hide();
    $(".overlayContent").remove();
  });

  //submit Info from form to Mailchimp
  $("#subForm").submit(function(evt){
    evt.preventDefault();
    var subData = {};
    var url = $(this).attr("action");
    subData.email_address = document.getElementById('nwsEmail').value;
    subData.merge_fields = {};
    subData.status = "pending";
    subData.merge_fields.FNAME = document.getElementById('nwsFNAME').value;
    subData.merge_fields.LNAME = document.getElementById('nwsLNAME').value;
    subData = JSON.stringify(subData);
    $.post(
      url,
      subData,
      function(data){
        $.parseJSON(data);
        if (data.properties.status = "pending") {
         $("#subForm").hide();
          $("#subSuccess").show();
        } else if (data.properties.status = "subscribed") {
          $("#subForm").hide();
          $("#subSubbed").show();
        }
      },
      "json"
    );
    console.log(data);
  });
 });


//FAQ hide and show answers
$(".FAnswer").hide();

$(".FAQuestion").click(function(){
  $(this).next().slideToggle();
});
