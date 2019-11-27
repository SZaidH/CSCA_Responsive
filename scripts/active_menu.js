//Script to scroll to a specific div container upon clicking the menu items
function scrollToHome(){
    document.querySelector('#home').scrollIntoView({behavior:'smooth'});
}

function scrollToService(){
    document.querySelector('#service').scrollIntoView({behavior:'smooth'});
}

function scrollToAbout(){
    document.querySelector('#about').scrollIntoView({behavior:'smooth'});
}

function scrollToContact(){
    document.querySelector('#contact').scrollIntoView({behavior:'smooth'});
}