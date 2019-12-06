import Vue from 'vue';
import Router from 'vue-router';
import routes from './router';

Vue.use(Router);

const router = new Router({
    routes
});

router.beforeEach((to, from, next) => {
    to.meta.title && (document.title = to.meta.title);
    next();
});

export default router;
