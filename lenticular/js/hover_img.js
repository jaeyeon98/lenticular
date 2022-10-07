$(document).ready(function () {
    $(".keyImg").mouseover(function () {
        $(this).attr("src", "./css/img/Key_Hover.png")
    })
    $(".keyImg").mouseout(function () {
        $(this).attr("src", "./css/img/Key_Origin.png")
    })


    var src1 = "./css/img/Key_Hover.png";
    var src2 = "./css/img/Key_Origin.png";

    $(".side_btn").click(function () {

        var src = $(".keyImg").attr('src');

        $(".keyImg").attr("src", "./css/img/Key_Hover.png");
        if (src == src1) {
             $(".keyImg").attr('src', src2); 
        }else { 
            $(".keyImg").attr('src', src1); 
        }

        // $(".keyImg").toggle(function() {
        //     $(".keyImg").attr("src", "./css/img/Key_Hover.png");
        //   }, function() {
        //     $(".keyImg").attr("src", "./css/img/Key_Origin.png");
        //   });

    })
})





