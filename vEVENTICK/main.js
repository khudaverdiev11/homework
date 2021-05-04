$(document).ready(function(){
    $("#speakerDropdown").mouseover(function(){
        $(".speaker").css("display", "block");
    });
    $("#speakerDropdown").mouseout(function(){
        $(".speaker").css("display", "none");
    });
    $("#pricesDropdown").mouseover(function(){
        $(".prices").css("display", "block");
    });
    $("#pricesDropdown").mouseout(function(){
        $(".prices").css("display", "none");
    });
    $("#sponsorDropdown").mouseover(function(){
        $(".sponsor").css("display", "block");
    });
    $("#sponsorDropdown").mouseout(function(){
        $(".sponsor").css("display", "none");
    });
    $("#blogDropdown").mouseover(function(){
        $(".blog").css("display", "block");
    });
    $("#blogDropdown").mouseout(function(){
        $(".blog").css("display", "none");
    });
    $("#pagesDropdown").mouseover(function(){
        $(".pages").css("display", "block");
    });
    $("#pagesDropdown").mouseout(function(){
        $(".pages").css("display", "none");
    });
});
$(document).ready(function(){
     $(".schedulebtn").click(function(){
        $(".schedulebtn").css("background-color", "#e71c37").css("color", "white");
        $(".schedulebtn2").css("background-color", "transparent").css("color", "black");
        $(".schedulebtn3").css("background-color", "transparent").css("color", "black");
        $(".schedulebtn4").css("background-color", "transparent").css("color", "black");
        
        $("#firstpoint").css("display", "block");
        $("#secondpoint").css("display", "none");
        $("#thirdpoint").css("display", "none");
        $("#fourthpoint").css("display", "none");
        
        $("#firstcard").css("display", "block");
        $("#secondcard").css("display", "none");

    });
    $(".schedulebtn2").click(function(){
        $(".schedulebtn2").css("background-color", "#e71c37").css("color", "white");
        $(".schedulebtn").css("background-color", "transparent").css("color", "black");
        $(".schedulebtn3").css("background-color", "transparent").css("color", "black");
        $(".schedulebtn4").css("background-color", "transparent").css("color", "black");
        
        $("#secondpoint").css("display", "block");
        $("#thirdpoint").css("display", "none");
        $("#firstpoint").css("display", "none");
        $("#fourthpoint").css("display", "none");

        $("#secondcard").css("display", "block");
        $("#firstcard").css("display", "none");
    });
    $(".schedulebtn3").click(function(){
        $(".schedulebtn3").css("background-color", "#e71c37").css("color", "white");
        $(".schedulebtn").css("background-color", "transparent").css("color", "black");
        $(".schedulebtn2").css("background-color", "transparent").css("color", "black");
        $(".schedulebtn4").css("background-color", "transparent").css("color", "black");
        
        $("#thirdpoint").css("display", "block");
        $("#firstpoint").css("display", "none");
        $("#fourthpoint").css("display", "none");
        $("#secondpoint").css("display", "none");
    });
    $(".schedulebtn4").click(function(){
        $(".schedulebtn4").css("background-color", "#e71c37").css("color", "white");
        $(".schedulebtn").css("background-color", "transparent").css("color", "black");
        $(".schedulebtn3").css("background-color", "transparent").css("color", "black");
        $(".schedulebtn2").css("background-color", "transparent").css("color", "black");
        
        $("#fourthpoint").css("display", "block");
        $("#firstpoint").css("display", "none");
        $("#thirdpoint").css("display", "none");
        $("#secondpoint").css("display", "none");
    });
});

$(document).ready(function(){
    $(".number").counterUp({delay:10, time:1000});
});