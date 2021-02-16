

$(function () {
    init();
    // $("#kezd").click(init);
});
function init() {

    for (var i = 0; i < 32; i++) {
        $("#jatekter").append("<div>");

        $("#jatekter div").eq(i).append("<img>");
        $("#jatekter div").eq(i).attr({"id": (i + 1)});

        // $("#jatekter img").eq(i).attr({"src": fajlnev, "alt": "Kártyalap"});
        $("#jatekter img").eq(i).attr({"src": "kartya/hatlap.jpg", "alt": "Kártyalap"});

    }

    $("#jatekter div").click(lapcsere);
    $("#jatekter div").hover(function () {
        $(this).addClass("kartya");
        console.log("fölötte");

    },
            function () {
                $(this).removeClass("kartya");
                      console.log("lejött");
            }
    );

}


function lapcsere() {
    var i = $(this).attr("id");
    var fajlnev = "kartya/" + i + ".png";
    $("#jatekter img").eq(i - 1).attr({"src": fajlnev, "alt": "Kártyalap"});
}
