/**
 * 
 * This is a utility class for modifying the url route with some parameters.
 */
const location = window.location;
const history = window.history;
const PATH = location.pathname + '#';

let oldURL, oldHash;

//set the hashchange event for older browsers : from MDN
; (function (window) {

    // exit if the browser implements that event
    if ("onhashchange" in window) { return; }
    oldURL = location.href,
        oldHash = location.hash;

    // check the location hash on a 100ms interval
    setInterval(function () {
        var newURL = location.href,
            newHash = location.hash;

        // if the hash has changed and a handler has been bound...
        if (newHash != oldHash && typeof window.onhashchange === "function") {
            // execute the handler
            window.onhashchange({
                type: "hashchange",
                oldURL: oldURL,
                newURL: newURL
            });

            oldURL = newURL;
            oldHash = newHash;
        }
    }, 100);

})(window);

const router = {
    onHashChange(changeMethod) { //useto set the mobx route data when the user changes the url hash
        window.addEventListener("hashchange", () => changeMethod(this.getRoute()), false);
    },
    onSearchChange(changeMethod){
        window.addEventListener("searchchange", () => changeMethod(this.getQuery()), false);
    },
    getQuery(query) {
        if(!query) query =  window.location.search.substring(1)
        //destructure the url search.
        var urlParams;
        var match,
            pl = /\+/g,  // Regex for replacing addition symbol with a space
            search = /([^&=]+)=?([^&]*)/g,
            decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); };

        urlParams = {};
        while (match = search.exec(query))
            urlParams[decode(match[1])] = decode(match[2]);
        return urlParams

    },
    getRoute() {//get route after hash
        let parts = location.hash.split('?');
        return {
            query: this.getQuery(parts.length>1?parts.pop():null),
            hash: parts.join('?').slice(1)
        }
    },
    updateRoute(route, query, incrementState = false) { //set the page hash. if you want the browser to remember, pass in true for the second param.
        let routePath = PATH + route + (query && query.length? '?' + query:'');
        //anything can update the route... 
        if (!incrementState && history.replaceState)
            //prevents browser from storing history with each change:
            history.replaceState(history.state, '', routePath);
        else if (history.pushState) history.pushState(history.state, '', routePath)
    }
}
window.router = router;

export default router;
