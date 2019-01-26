import VueRouter from 'vue-router';
import Home from './src/components/Home/Home';
import About from './src/components/About/About';
import Careers from './src/components/Careers';
import Contact from './src/components/Contact';

export default new VueRouter ({
    routes: [
        { path : '/home', component: Home },
        { path: '/about', component: About },
        { path: '/careers', component: Careers },
        { path: '/contact', component: Contact },
        { path: '*', redirect: '/home' }
    ]
});