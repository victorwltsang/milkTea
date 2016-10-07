$(document).ready(function(){
  var teaName ="", iceLevel = "", honeyLevel="";
  $('#greenTea').on("click", function() {
      $('#tea').css({ fill: "#a9cc97" });
      teaName = $(this).text();
      console.log(teaName);

  });
  $('#redTea').on("click", function() {
      $('#tea').css({ fill: "#cc4807" });
      teaName = $(this).text();
      console.log(teaName);
  });
  $('#blackTea').on("click", function() {
      $('#tea').css({ fill: "#ac8f7d" });
      teaName = $(this).text();
      console.log(teaName);
  });

  $('#ice25').on("click", function() {
      $('.ice-25').css({ visibility: "visible" });
        $('.ice-50').css({ visibility: "hidden" });
        iceLevel = $(this).text();
        console.log(iceLevel);
  });
  $('#ice50').on("click", function() {
      $('.ice-25').css({ visibility: "visible" });
      $('.ice-50').css({ visibility: "visible" });
      iceLevel = $(this).text();
      console.log(iceLevel);
  });
  $('#ice0').on("click", function() {
    $('.ice-25').css({ visibility: "hidden" });
    $('.ice-50').css({ visibility: "hidden" });
    iceLevel = $(this).text();
    console.log(iceLevel);
  });
  $('#honey90').on("click", function() {
    $('.honey-1').css({ visibility: "visible" });
    $('.honey-2').css({ visibility: "hidden" });
    honeyLevel = $(this).text();
    console.log(honeyLevel);
  });

  $('#honey80').on("click", function() {
    $('.honey-1').css({ visibility: "visible" });
    $('.honey-2').css({ visibility: "visible" });
    honeyLevel = $(this).text();
    console.log(honeyLevel);
  });

  $('#honey100').on("click", function() {
    $('.honey-1').css({ visibility: "hidden" });
    $('.honey-2').css({ visibility: "hidden" });
    honeyLevel = $(this).text();
    console.log(honeyLevel);
  });

  $('#headingFour').on("click", function() {
    $(".order-info").html("Tea: " + teaName + "<br/> Ice: " + iceLevel + "<br/>Sweetness: " + honeyLevel);
    console.log(teaName);
  });


});
