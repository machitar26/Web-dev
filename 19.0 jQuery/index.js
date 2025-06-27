$("h1").addClass("big-title");

$("button").text("Bye");
$("button").first().text("Click Me");

$("h1").attr("class","big-title margin-50");

$("h1").click(function () { 
    $("h1").css("color","purple");
});

$("button").click(function () { 
    $("h1").css("color","purple");
});

$(document).keydown(function (e) { 
    $("h1").text(e.key);
});

$("h1").on("mouseover", function () {
    $("h1").css("color","red");
});

$("h1").before("<button class='hide'>Hide</button>");
$("h1").after("<button class='show'>Show</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");

// $("h1").remove();

$(".hide").click(function () {
    $("h1").hide();
});

$(".show").click(function () {
    $("h1").show();
});