$(document).ready(function () {
  $("#btn1").click(function () {
    $("#img1").hide(3000);
  });

  $("#btn2").click(function () {
    $("#img1").show(3000);
  });
  $("#btn3").click(function () {
    $("#img1").toggle(3000);
  });
  $("#btn4").click(function () {
    $("#img1").fadeIn(2000);
  });
  $("#btn5").click(function () {
    $("#img1").fadeOut(2000);
  });
  $("#btn6").click(function () {
    $("#img1").fadeToggle(2000);
  });
  $("#btn7").click(function () {
    $("#img1").slideUp(2000);
  });
  $("#btn8").click(function () {
    $("#img1").slideDown(2000);
  });
  $("#btn9").click(function () {
    $("#img1").slideToggle(2000);
  });
  $("#btn10").click(function () {
    $("#img1").stop(2000);
  });
  let isSlide = false;
  $("#btn11").click(function () {
    if (isSlide) {
      $("#img2").animate(
        {
          left: "0",
          opacity: "0.4",
          height: "250px",
          width: "250px",
        },
        2000
      );
    } else {
      $("#img2").animate(
        {
          left: "150px",
          opacity: "1",
          height: "400px",
          width: "400px",
        },
        2000
      );
    }
    isSlide = !isSlide;
  });
});
