<div>
<span id="timeDate">Loading Days...</span><span id="times">Loading Times...</span>
<script>
    var now = new Date();
    function createtime() {
        var grt= new Date("03/20/2019 00:00:00");
        now.setTime(now.getTime()+250);
        days = (now - grt ) / 1000 / 60 / 60 / 24; dnum = Math.floor(days);
        hours = (now - grt ) / 1000 / 60 / 60 - (24 * dnum); hnum = Math.floor(hours);
        if(String(hnum).length ==1 ){hnum = "0" + hnum;} minutes = (now - grt ) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum);
        mnum = Math.floor(minutes); if(String(mnum).length ==1 ){mnum = "0" + mnum;}
        seconds = (now - grt ) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
        snum = Math.round(seconds); if(String(snum).length ==1 ){snum = "0" + snum;}
        document.getElementById("timeDate").innerHTML = "This website has struggled in this world for "+dnum+" day ";
        document.getElementById("times").innerHTML = hnum + " hour " + mnum + " min " + snum + " sec";
    }
setInterval("createtime()",250);
</script>
</div>