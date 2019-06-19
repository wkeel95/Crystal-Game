$(document).ready(function() {
    var compnum = document.getElementById("compnum");
    var rannum = ""
    var score = "";
    var wins = 0;
    var losses = 0;
    var btnval1 = "";
    var btnval2 = "";
    var btnval3 = "";
    var btnval4 = "";

    function run(){
    btnval1 = [Math.floor(Math.random()*11+1)]
                console.log (btnval1);
    btnval2 = [Math.floor(Math.random()*11+1)]
                console.log (btnval2);
    btnval3 = [Math.floor(Math.random()*11+1)]
                console.log (btnval3);
    btnval4 = [Math.floor(Math.random()*11+1)]
                console.log (btnval4);
    rannum = [Math.floor(Math.random()*101 +19)];
        $("#rannum").text(rannum);
    
        // I'm not sure why this isn't working, so the gems still have duplicate values sometimes
        if ((btnval1 != btnval2 && btnval3 && btnval4) && (btnval2 != btnval1 && btnval3 && btnval4) && (btnval3 != btnval1 && btnval2 && btnval4) && (btnval4 != btnval1 && btnval2 && btnval3)) {
            console.log(btnval1,btnval2,btnval3,btnval4);}
        else {
            run();
        }                
    }
    run();

    function endcheck() {
        if (rannum == score) {
            alert ("Winner!");
            wins ++; 
            $("#wins").text(wins);
            score = 0;
            run();
        }
        if (score > rannum) {
            alert ("Loser!");
            losses ++;
            $("#losses").text(losses);
            score = 0;
            run();
        }
    }

    $("#red").on("click", function () {
        score = (Number(score) + Number(btnval1));
            console.log("score = " + score);
            $("#score").text(score);
        endcheck();
            console.log("ran end check");
    })
    $("#blue").on("click", function () {
        score = (Number(score) + Number(btnval2));
            console.log("score = " + score);
            $("#score").text(score);
        endcheck();
            console.log("ran end check");
    })
    $("#green").on("click", function () {
        score = (Number(score) + Number(btnval3));
            console.log("score = " + score);
            $("#score").text(score);
        endcheck();
            console.log("ran end check");
    })
    $("#yellow").on("click", function () {
        score = (Number(score) + Number(btnval4));
            console.log("score = " + score);
            $("#score").text(score);
        endcheck();
            console.log("ran end check");
    });
});