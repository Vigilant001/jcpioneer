import {
    observable,
    action,
    autorun,
    extendObservable
} from 'mobx';
import router from 'utils/router';
import scroll from 'utils/scroll';
/*
 * This is the entry point for the app's state. All stores should go here.
 */
class DataState {
    //declare state variables
    @observable data = {
        userName: null,
        //route - added by setUpRouter (computed value)
        navOpen: false,
        workmode: 'Production',
        workmodes: [],
        pages: [{
            name: 'Home',
            hideNav: true,
            title: 'INLAND EMPIRE PREMIERE VIDEO PRODUCTION'
        }, {
            name: 'Work',
            title: ' '
        }, {
            name: 'Clients',
            title: ' ',
        },{
            name: 'Quotes',
            title: 'CLIENT QUOTES'
        },{
            name: 'Contact',
            title: 'CONTACT JC PIONEER'
        }],
        page: null
    };

    constructor() {
        //do initial building of state here
        this.setUpRouter(); //sets page variable, and makes it automagically update from the url..
    }

    @action navToggle = () => {
        this.data.navOpen = !this.data.navOpen
    }
    @action setUpRouter() {
        this.loadRoute(router.getRoute());
        let data = this.data;

        extendObservable(data, {
            get route() {
                return [data.workmode, data.page].join('/'); //any other routes can be added to the array.
            },
            get query() {
                return {}; //no queries added yet... eventually this should be a bunch of query values...
            }
        });

        //any time the route string changes (from within the app), we cause the url to update
        autorun(() => router.updateRoute(data.route, data.query))

        //any time the user changes the hash, the loadRoute action is called.
        router.onHashChange(this.loadRoute.bind(this));
    }

    @action loadRoute({
        hash = '',
        query = {}
    }) {
        //query params are anything thats after the "?", and has values.
        //hash is everything after the "#", and before the "?"
        let hashVals = hash.split('/');

        //in this app, Im making the first value the page name
        this.setWorkmode(hashVals[0]);
        this.setPage(hashVals[1]);

        //set the query values here...

    }

    //declare state mutating actions here
    @action setPage = (page) => {
        let offset = 50;
        let speed = 15;
        this.data.navOpen = false
        scroll(`section_${page}`, offset, speed);
        this.data.page = page;
    }

    @action setWorkmode = (workmode) => {
        let camp = this.data.workmodes.find(x => x.toLowerCase() === workmode.toLowerCase());
        this.data.workmode = camp || 'Production';
    }


    unload() {
        //do any resetting here.
    }
}

const dataState = new DataState();
export default dataState;
//just so that you have access in the console:
window.ds = dataState; //just dont access this from within your app.. only debugging
window.dss = dataState.data;