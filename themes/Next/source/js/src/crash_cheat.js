 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/images/404.png");
         document.title = 'Oops, Page Crashed~';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/images/icon.png");
         document.title = 'Gotcha you ;)' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });