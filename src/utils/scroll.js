/**
 * @param {domNode} el the dom element to scroll to
 * @description Finds the first parent scollbox and scrolls that to the element 
 */
function ensureElementIsScrolled(el) {
    let parent = el.parentElement;
    do{
        if(parent.scrollHeight > parent.clientHeight){ //if this is a scrollable area
            parent.scrollTop = el.offsetTop;
            break;
        }
        parent = parent.parentElement;
    }while(parent)
}

/**
 * @param {string} element the id of the element to scroll to
 * @param {int} offset the offset from the top to scrool to the element
 * @description Scrolls the page visually to the element
 */
function scrollToElement(element, offset = 90, speed=5) {
    var el = document.getElementById(element);
    if (!el) {
        console.warn('Element not found! - scrollToElement: ' + element);
        return false;
    }
    ensureElementIsScrolled(el); //scrolls the parent scrollbox (if there is one)
    var yPos = el.getClientRects()[0].top;
    var yScroll = window.pageYOffset;//window.scrollY; //IE doesnt have window.scrollY. window.pageYOffset compatable with IE 9 and above.
    var interval;
    let scroll = 0;
    let num = 0;
    if (yPos - offset <= yScroll  && yPos - (2*offset) < 0) {//scroll up if its above and not just above the bottom of the visible page.
        interval = setInterval(function () {
            if (yPos + scroll >= offset) {
                clearInterval(interval);
                el.scrollIntoViewIfNeeded && el.scrollIntoViewIfNeeded();
            } else {
                scroll += 40; //scroll up 10
                window.scroll(0, yScroll - scroll);
            }

        }, speed);
    } else {
        interval = setInterval(function () {
            if (yPos - scroll <= offset) {
                clearInterval(interval);
                el.scrollIntoViewIfNeeded && el.scrollIntoViewIfNeeded();
            } else {
                scroll += 40;
                window.scroll(0, yScroll + scroll);
            }

        }, speed); //speed (bigger numbers are slower, immediate is closer to 0)
    }
    return true;
}



export default scrollToElement;