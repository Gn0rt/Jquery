$(document).ready(function () {
  let isLarge = false;
  $("#btn").click(function () {
    if (isLarge) {
      $("#img1").css("width", "250px");
    } else {
      $("#img1").css("width", "500px");
    }
    isLarge = !isLarge;
  });
  // function func1() {
  //   $("#img1").css("width", "500px");
  // }
  // $("#img1").on("dblclick", func1);
  /*
  $("#img1").mouseenter(function () {
    $("#img1").css("width", "500px");
  });
  $("#img1").mouseleave(function () {
    $("#img1").css("width", "250px");
  });*/

  $("#img1").hover(
    function () {
      $("#img1").css("width", "500px");
    },
    function () {
      $("#img1").css("width", "250px");
    }
  );
});
