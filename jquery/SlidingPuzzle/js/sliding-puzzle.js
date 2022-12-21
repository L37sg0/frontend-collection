$(function (){
    var numberOfPieces  = 12,
        aspect          = "3:4",
        aspectW         = parseInt(aspect.split(":")[0]),
        aspectH         = parseInt(aspect.split(":")[1]),
        container       = $("#puzzle"),
        imgContainer    = container.find("figure"),
        img             = imgContainer.find("img"),
        path            = img.attr("src"),
        piece           = $("<div/>"),
        pieceW          = Math.floor(img.width() / aspectW),
        pieceH          = Math.floor(img.height() / aspectH),
        idContainer     = 0,
        positions       = [],
        empty           = {
            top: 0,
            left: 0,
            bottom: pieceH,
            right: pieceW
        },
        previous        = {},
        timer,
        currenTime      = {},
        timerDisplay    = container.find("#time").find("span");
});