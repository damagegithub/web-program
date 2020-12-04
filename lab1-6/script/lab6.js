var btn = document.getElementById('myphone');

btn.onclick = function func() {
    cont = document.createElement("div");
    cont.innerHTML = `
                  <button id="btn-del">
                  X
                  </button>
                  <div class="contentPhone">My phone:123456789<br>My address:China,Shanghai,Renminlu#12</div>`;
    cont.setAttribute('id', 'cont-div');
    cont.setAttribute('class', 'rainbow');
    cont.style.cssText = `
                display:flex;background:#00BCD4;align-items:flex-start;align-content:flex-start;
                justify-content:center;flex-direction:column;
                left:50%;top:50%;margin-left:-150px;margin-top:-140px;
                position:absolute;
                border:1px solid #666;
                box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.14);
                `;

    w = document.getElementById('cont_telephone').appendChild(cont);
    btn_del = document.getElementById('btn-del');
    btn_del.style.cssText = "position:relative;left:250px;top:-5px;";

    btn_del.onclick = function del() {
        cont.parentNode.removeChild(cont);
    }
}

function createWindow(path) {
    bigImg = document.createElement("div");
    bigImg.innerHTML = `
                  <button id="btn-del">
                  X
                  </button>`;
    bigImg.innerHTML= bigImg.innerHTML+"<img "+" src="+path+"></div>"
    bigImg.setAttribute('id', 'bigImg');
    //bigImg.setAttribute('class', 'rainbow');
    bigImg.style.cssText = "overflow:scroll;left:5%;top:5%;width:1400px;height:700px;position:fixed;";

    w = document.getElementsByTagName('body')[0].appendChild(bigImg);
    btn_del = document.getElementById('btn-del');
    btn_del.style.cssText = "position:fixed;left:3.4%;top:5%;";
    btn_del.onclick = function del() {
        bigImg.parentNode.removeChild(bigImg);
    }
}


var imgs = document.getElementsByClassName("canada")
for (let i = 0; i < imgs.length; i++) {
    path = "./img/canada/" + (i + 1).toString() + ".jpg"
    imgs[i].setAttribute("onclick", "createWindow('" + path + "')");
}