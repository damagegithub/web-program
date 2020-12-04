window.onload = function(){
    var Words = document.getElementById("words");
    var TalkWords = document.getElementById("talkwords");
    var TalkSub = document.getElementById("talksub");
    

    TalkSub.onclick = function(){
        var str = "";
        if(TalkWords.value == ""){
            alert("消息不能为空");
            return;
        }
        str = '<div class="btalk"><span>B说 :' + TalkWords.value +'</span></div>' ;  
        Words.innerHTML = Words.innerHTML + str;
        str = '<div class="atalk"><span>bot :' + "hello" +'</span></div>' ; 
        Words.innerHTML = Words.innerHTML + str;
    }
    
}
