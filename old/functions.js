function changeForMobile(page)
{
    if (page == 'home')
    {
        $('#slide').empty();
        $('#slide').append('<img onload=homeLoad(); id=homeGIF src=images/horizonzzMB.gif width=100%>')
        $('#midsec').empty();
        $('#midsec2').empty();
        $('#midsec3').empty();
        $('#midsec').append('<ul id=midsecUL><li id=midsecLIT style=font-size:xx-large;><h3><b>Recent Release:</b><h3></li><li id=midsecLIG style=margin:0;padding:0;><h2 id=pengu><b>PENGU</b></h2></li><li id=midsecLI>Genre: 2D Platformer</li><li id=midsecLI>Released: 26 June 2022</li></ul>');
        $('#webBody2').append('<div id=gap></div><div class=midsec><ul id=midsecUL><li id=midsecLIT><iframe id=fram frameborder="0" src="https://itch.io/embed/1584971?border_width=0&amp;bg_color=222&amp;fg_color=ffffff&amp;link_color=d70808&amp;border_color=fff" width=550 height=165><a href=https://horizonzz.itch.io/pengu>Pengu by HorizonZz</a></iframe></li></ul></div><div id=gap4></div>');
        $('#webBody2').append('<div><ul id=midsecUL><li id=midsecLIT style=font-size:larger;><h4><b>Recent Website Release:</b></h4></li><li id=midsecLIG style=margin:0;padding:0;><h2><b>HorizonZz\'s Classics</b></h2></li><li id=midsecLI>Type: Website</li><li id=midsecLI>Released: 30 October 2022</li><li id=midsecLI><a id=link style=text-decoration:underline; href=https://classics.horizonzz.com target=_blank rel="noopener noreferrer">classics.horizonzz.com</a></li></ul><ul id=midsecUL><li id=midsecLIT><img width=300px height=300px src=images/hc_icon.png height=200px></li></ul></div>')
    }
    if (page == 'portfolio') 
    {
        $('.portDesc').removeAttr("onclick");
        $('.portDesc').removeClass('portDesc').addClass('exP');
        $('#direct').remove();
        $('.portoBox').remove();
        $('#dspBtnCont').remove();
    }
    if (page == 'about') 
    {
        let abtText = document.getElementById('abtText').innerHTML;
        let abtText2 = document.getElementById('abtText2').innerHTML;
        $('#webBody3').empty();
        $('#webBody4').remove();
        $('#webBody3').append('<div id=abtMe><img id=abtImg src=images/david.png><h1> About Me </h1><p id=abtTextb>'+abtText+'</p><p id=abtText2b>'+abtText2+'</p><img id=abtImg2 src=images/noctiSkillBadge.png></div>');
    }
    $('#footer').empty();
    $('#footer').append('<ul id=footerUL name=branding><li id=footerLIT><img src=images/horizonzzlogo.png height=55px></li><li id=footerLIT><a> Copyright © 2022 HorizonZz </a></li><li id=footerLIT><a> - All Rights Reserved. </a></li></ul><ul id=footerUL><a href=https://www.youtube.com/channel/UCw_PLaNwCyhW5znu2y6SgVw target=_blank rel="noopener noreferrer"><img src=images/youtubeIcon.png height=52px></a></ul><ul id=footerUL><a href=https://horizonzz.itch.io target=_blank rel="noopener noreferrer"><img src=images/itchLogo.png height=55px></a></ul><ul id=footerUL><a href=https://www.twitch.tv/horizonzztv target=_blank rel="noopener noreferrer"><img src=images/twitchLogo.png height=52px></a></ul><ul id=footerUL><a href=https://github.com/Git-HorizonZz target=_blank rel="noopener noreferrer"><img src=images/gitLogo.png height=55px></a></ul><ul id=footerUL><a href=https://steamcommunity.com/id/horizonzz/ target=_blank rel="noopener noreferrer"><img src=images/steamicon.png height=58px></a></ul>');
}

function changeForIpad()
{
    let abtText = document.getElementById('abtTextb').innerHTML;
    let abtText2 = document.getElementById('abtText2b').innerHTML;
    $('#webBody3').empty();
    $('#webBody3').append('<div id=abtMe style=width:70%><img id=abtImg style=margin-top:15px;margin-bottom:10px; src=images/david.png><h1> About Me </h1><p>'+abtText+'</p><p>'+abtText2+'</p><img id=abtImg2 src=images/noctiSkillBadge.png></div>');
}

$.fn.mySllideToggleOff = (show) =>
{
    if(show){
       $(this).slideDown();
    }
    else{
       $(this).slideUp();
    }
}