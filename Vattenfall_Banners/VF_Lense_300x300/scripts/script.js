window.onload = function(){
    if (!(navigator.userAgent.includes('Windows') || window.chrome || navigator.userAgent.includes('Firefox'))) { $('body').addClass('safari_only'); } 
    if(navigator.userAgent.includes('Edge')) {$('body').addClass('edge');}
    pageLoadedHandler();
    // Wrap inside iframe when on proofHQ. removes container and takes iframe width and height from container
    window.WrapInsideIframe('//cdn.proofhq.com', '.container', '.container');
}
function pageLoadedHandler(){
    TweenLite.to(headlineOut,0.5,{opacity:1,ease:Sine.easeOut});
    TweenLite.to(background,0.1,{delay:1,opacity:1});			
    TweenLite.to(background,7.5,{delay:1.6,scale:1.2});
    TweenLite.to(headline1,0.5,{delay:1.1,ease:Sine.easeOut,opacity:1});
    TweenLite.to(button,0.5,{delay:1.4,opacity:1,ease:Sine.easeOut,scale:1});
    TweenLite.to(headlineOut,0.5,{delay:8.4,opacity:1,ease:Sine.easeOut});
    TweenLite.to(vatForsak,0.5,{delay:8.4,opacity:1,ease:Sine.easeOut});
}