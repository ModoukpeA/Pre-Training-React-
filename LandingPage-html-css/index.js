

const searchbar = document.getElementsByClassName("search-bar");
const trapezoid = document.getElementsByClassName("trapezoid");
const onSearchIconClick = () => {
    if(searchbar[0].classList.contains('visible')){
        searchbar[0].classList.remove('visible')
    }else{
        searchbar[0].classList.add('visible');
    }
}

let targetOffset, currentPosition,
    body = document.body,
    aProposBtn = document.getElementById('aproposbtn'),
    teamBtn = document.getElementById('teambtn'),
    contactBtn = document.getElementById('contactbtn'),
    animateTime = 900;

function getPageScroll() {
    let yScroll;
    if (window.pageYOffset) {
        yScroll = window.pageYOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) {
        yScroll = document.documentElement.scrollTop;
    } else if (document.body) {
        yScroll = document.body.scrollTop;
    }
    return yScroll;
}
const cb = function (event) {

    targetOffset = document.getElementById(event.target.hash.substr(1)).offsetTop;
    currentPosition = getPageScroll();
    body.classList.add('in-transition');
    body.style.WebkitTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
    body.style.MozTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
    body.style.transform = "translate(0, -" + (targetOffset - currentPosition) + "px)";

    window.setTimeout(function () {
        body.classList.remove('in-transition');
        body.style.cssText = "";
        window.scrollTo(0, targetOffset);
    }, animateTime);

    event.preventDefault();

}
aProposBtn.addEventListener('click', cb , false);
teamBtn.addEventListener('click', cb , false);
contactBtn.addEventListener('click', cb , false);

