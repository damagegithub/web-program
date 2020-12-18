backToTop = document.getElementsByClassName("backToTop")[0]
backToTop.onclick= function(){
     document.documentElement.scrollTop = 0;
}
introText = ["Pale ale is a kind of ale, a top-fermented beer made with predominantly pale malt.The higher proportion of pale malts results in a lighter colour. The term first appeared around 1703 for beers made from malts dried with high-carbon coke, which resulted in a lighter colour than other beers popular at that time.","\
Brown ale is a style of beer with a dark amber or brown colour. The term was first used by London brewers in the late 17th century to describe their products, such as mild ale, though the term has a rather different meaning today. 18th century brown ales were lightly hopped and brewed from 100% brown malt.","\
Wheat beer is a beer, usually top-fermented, which is brewed with a large proportion of wheat relative to the amount of malted barley. The two main varieties are Weißbier, based on the German tradition, and Witbier, based on the Belgian tradition;","\
Pale lager is a very pale-to-golden-colored lager beer with a well-attenuated body and a varying degree of noble hop bitterness.","\
Lagers would likely have been mainly dark until the 1840s; pale lagers were not common until the later part of the 19th century when technological advances made them easier to produce."]

beerList = document.getElementsByClassName("classification")[0]


function intro(i){
    beerImg = document.getElementById("beerImg")
    beerImg.setAttribute("src","img/beer"+(i+1).toString()+".jpg")
    beerIntro = document.getElementById("introduction")
    beerIntro.textContent= introText[i];
}



for(let i=0; i<5;i++){
    beerList.children[i].setAttribute("onclick", "intro(" + i.toString() + ")")
}


console.log(beerList.children[0])