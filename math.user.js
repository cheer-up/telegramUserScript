// ==UserScript==
// @name myUserJS
// @description UserScript For solve telegram math game. you can change 50 for any score you want
// @author Zhakov Nikita
// @license MIT
// @version 1.0
// @include https://tbot.xyz/math/*
// ==/UserScript==


var elem=document.getElementsByClassName("icon_play");
    elem[0].addEventListener( "click" , function() {
        for(i=1;i<50;i++)
        {
            setTimeout(function()
                    { var v1=document.getElementById("task_x").innerHTML;
                      var v2=document.getElementById("task_y").innerHTML;
                      var op=document.getElementById("task_op").innerHTML;
                      var res=document.getElementById("task_res").innerHTML;
                     var trueres=0;
                     switch(op) {
                         case "+": trueres=+v1 + +v2; break;
                         case "–": trueres=+v1 - +v2; break;
                         case "/": trueres=v1/v2; break;
                         case "×": trueres=v1*v2; break;
                         default:   break;
                     }
                     if (trueres==(+res)){document.getElementById("button_correct").click();}
                     else{document.getElementById("button_wrong").click();}
                    }, 1000*i);
        }
    });