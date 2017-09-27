//Menu button reveal drop down
var $navbar = $(".navbar");
var resizeCheck;
$(window).on('resize', function (e) {
    clearTimeout(resizeCheck);
    resizeCheck = setTimeout(function () {
        if ($(window).width() > 630) {
            $navbar.show();
        } else {
            $navbar.hide();
        }
    }, 250);
});



$(".menuButton").click(function() {
  $navbar.toggle();
})



/*
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
*/


/*Newsletter sign up pop up window
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

  //submit Info from form to Mailchimp -- will only work on an active webpage
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
    console.log(subData);
  });
 });
*/

//FAQ hide and show answers
$(".FAnswer").hide();

$(".FAQuestion").click(function(){
  $(this).next().slideToggle();
});

//Return to top button
var $topCut = $('#top-cut');
var $topCutButton = $('#top-cut-button');

window.onscroll = function() {showCutButton()};

function showCutButton() {
  if(document.body.scrollTop > 50 ||
  document.documentElement.scrollTop > 50) {
    if($(window).width() > 849) {
    $topCutButton.show();
    $topCut.hide()
  } else if ($(window).width() < 849) {
    $topCutButton.hide();
    $topCut.show();
    }
  }

    else {
      $topCutButton.hide();
      $topCut.hide();
    }
  }


$topCut.click(cutToTop);

function cutToTop() {
  console.log("CUT TO TOP")
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/*
Make another element for 840+ width
Apply the same topcut rules to it
Make a resize check*/
