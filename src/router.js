import { BootstrapVue, BootstrapVueIcons, NavbarPlugin } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import Vue from "vue";
import Router from "vue-router";





Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(NavbarPlugin)
Vue.use(Router);


export default new Router({
    mode: "history",
    routes: [

        {
            path: "/",
            alias: "*",
            name: "home",
            // component: () => import("./components/category/Category")
        },
        {
            path: "/category",
            alias: "/category",
            name: "category",
            component: () => import("./components/category/Category")
        },
        {
            path: "/clients",
            alias: "/clients",
            name: "clients",
            component: () => import("./components/clients/Clients")
        },
        {
            path: "/exercises",
            alias: "/exercises",
            name: "exercises",
            component: () => import("./components/exercises/Exercises")
        },
        {
            path: "/groupexerc",
            alias: "/groupexerc",
            name: "groupexerc",
            component: () => import("./components/exercises/groupExercicies")
        },
        //     path: "/",
        //     alias: "/helloWord",
        //     name: "HelloWorld",
        //     component: () => import("./components/HelloWorld")
        // },
        // {
        //     path: "/",
        //     alias: "/create",
        //     name: "create",
        //     component: () => import("./components/CreateCategory")
        // },
         {
            path: "/edit/:id",
            alias: "/edit",
            name: "edit",
            component: () => import("./components/category/EditCategory")
        },
        {
            path: "/login",
            name: "login",
            component: () => import("./views/Login")
        },
        {
            path: "/secure",
            name: "secure",
            component:import("./views/Secure")
        },
        {
            path : "/createExercises",
            name : "createExercises",
            component : () => import("./components/exercises/CreateExercises")
        },
        {
            path : "/CreateGroupExercises",
            name : "CreateGroupExercises",
            component : () => import("./components/exercises/CreateGroupExercises")
        }
    ]

}

)


