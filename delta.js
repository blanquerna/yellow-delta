// -----------------------------------------------------------------------
function copyLink(){
    var copyText = document.createElement('textarea');
    duration = 2000;
    copyText.innerText = location.href;
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
    var el = document.createElement("div");
    el.setAttribute("style","position:absolute;top:30%;left:20%;width:30em;height:5em;border:2px solid #333;border-radius:8px;background:#ddd;color;#111; padding:8px;");
    el.innerHTML = "Copied the text: <br/><b>" + copyText.value+'</b>';
    setTimeout(function(){
        el.parentNode.removeChild(el);
        },duration);
    document.body.appendChild(el);
    return;
}
// -----------------------------------------------------------------------
function isMobileOrTablet() {
    if (navigator.userAgent.match(/Android/i)
     || navigator.userAgent.match(/webOS/i)
     || navigator.userAgent.match(/iPhone/i)
     || navigator.userAgent.match(/iPad/i)
     || navigator.userAgent.match(/iPod/i)
     || navigator.userAgent.match(/BlackBerry/i)
     || navigator.userAgent.match(/Windows Phone/i)
    ) {
     return true;
    }else {
     return false;
    }
   }
// ----------------------- 
function fixFooter(){
    marginFooter=window.innerHeight - document.getElementsByTagName('HEADER')[0].scrollHeight - document.getElementsByTagName('main')[0].scrollHeight - document.getElementsByTagName('footer')[0].scrollHeight;
    if(marginFooter>0) document.getElementsByTagName('FOOTER')[0].style="padding-top:"+(marginFooter)+'px';
    isPortrait=window.innerHeight>window.innerWidth;
}
// -----------------------------------------------------------------------
window.onresize = function(){
    fixFooter();
};
// --------------------
window.onscroll = function(event) {
    if(window.pageYOffset===0) document.getElementById('goTop').style.display='none'; else  document.getElementById('goTop').style.display='block';
    return;
};
// --------------------
window.onclick = function(e) {if(!isMobileOrTablet()) gestionaClick(e);}
window.ontouchstart = gestionaClick;
//
function gestionaClick(e) {
    var event=e.target;
}
// -----------------------------------------------------------------------

window.onload=function() {
    fixFooter();
}
