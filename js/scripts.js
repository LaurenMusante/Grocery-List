$(document).ready(function() {
  $(".formGrocery").submit(function(event) {
    var item1 = $("input#item1").val();
    var item2 = $("input#item2").val();
    var item3 = $("input#item3").val();
    var item4 = $("input#item4").val();
    var item5 = $("input#item5").val();

    var valueArray = [item1, item2, item3, item4, item5]
    valueArray.forEach(function(value){
      $("#alphaG").append("<li>" + value + "</li>");
    });

    // $("#alphaG").sort("<li>" + SOMETHING + "</li>");
    event.preventDefault();
  });
});
