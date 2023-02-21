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
// -----------------------------------------------------------------------
window.onload=function() {
    fixFooter();
}
