var btn = document.getElementById('myphone');

btn.onclick = function func() {
    cont = document.createElement("div");
    cont.innerHTML = `
                  <button id="btn-del">
                  X
                  </button>
                  <div class="contentPhone">My phone:123456789<br>My address:China,Shanghai,Renminlu#12</div>`;
    cont.setAttribute('id','cont-div');
    cont.setAttribute('class','rainbow');
    cont.style.cssText = `
                display:flex;background:#00BCD4;align-items:flex-start;align-content:flex-start;
                justify-content:center;flex-direction:column;
                left:50%;top:50%;margin-left:-150px;margin-top:-140px;
                position:fixed;
                border:1px solid #666;
                box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.14);
                `;
    
    w = document.getElementsByTagName('body')[0].appendChild(cont);
    btn_del = document.getElementById('btn-del');
    btn_del.style.cssText="position:relative;left:250px;top:-5px;";

    btn_del.onclick = function del() {
        cont.parentNode.removeChild(cont);
    }
}

function createWindow(path){
    window.open(path, "displayWindow", "toolbar=no,width=1440,height=900,directories=no,status=no,scrollbars=yes,resize=no,menubar=no")
}


var imgs = document.getElementsByClassName("canada")
for (let i = 0; i < imgs.length; i++) {
    path = "./img/canada/" + (i + 1).toString() + ".jpg"
    imgs[i].setAttribute("onclick","createWindow('"+path+"')");
}