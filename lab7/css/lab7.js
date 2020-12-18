window.onload = function(){
    var Words = document.getElementById("words");
    var TalkWords = document.getElementById("talkwords");
    var TalkSub = document.getElementById("talksub");
    

    var who = ["I","One of my friend","My sister","You and me"];
    var can = ["can","cannot","could","will"];
    var doing = ["eat","pick up","throw away","play with"];
    var what = ["a banana","a ball","a car","superman","sadness","anything"];

    function randomPick(arr)
    {
        return arr[Math.floor(Math.random()*arr.length)];
    }
    function randomSay(){
        return randomPick(who)+" "+randomPick(can)+" "+randomPick(doing)+" "+randomPick(what)+"!";
    }


    TalkSub.onclick = function(){
        var str = "";
        if(TalkWords.value == ""){
            return;
        }
        str = '<div class="talk mytalk"><a href = "javascript:;" class = "del">x</a><span>' + TalkWords.value +'</span>'+'</div>' ;  
        Words.innerHTML = Words.innerHTML + str;

        var patt_expression = /([0-9]+\s*[\+\-\*\/])+\s*/;
        if(patt_expression.test(TalkWords.value))
        {
            str = '<div class="talk bottalk"><span>' + eval(TalkWords.value) +'</span><a href = "javascript:;" class = "del">x</a></div>' ;
        }
        else{
            str = '<div class="talk bottalk"><span>' + randomSay() +'</span><a href = "javascript:;" class = "del">x</a></div>' ; 
        }
        Words.innerHTML = Words.innerHTML + str;
        var del = document.getElementsByClassName("del");
        for (var i = 0; i < del.length; i++) {
            del[i].onclick = function(){
                Words.removeChild(this.parentNode);
            }
        }
        TalkWords.value ="";
    }
    
}
