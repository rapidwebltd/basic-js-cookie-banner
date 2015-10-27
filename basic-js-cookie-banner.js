$(document).ready(function() {
    
    if (document.cookie.indexOf('cookie-banner-dismiss')==-1) {
        $('.cookie-banner>.close').css('display', 'block');
    }
    else
    {
        $('.cookie-banner').css('display', 'none');  
    }
    
    $('.cookie-banner>.close').on('click', function() {
        
        $('.cookie-banner').css('display', 'none');
        
        var setCookie = function(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
        };
        
        setCookie('cookie-banner-dismiss', 1, 1825);
    });
    
});