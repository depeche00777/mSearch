import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Portfolio from "@/views/Portfolio.vue";
import Movie from "@/views/Movie.vue";

const routes = [
  { path:'/', name:'HOME', component:Home },
  { path:'/about', name:'ABOUT', component:About },
  { path:'/portfolio', name:'PORTFOLIO', component:Portfolio },
  { path:'/movie', name:'MOVIE', component:Movie }
]

const router = createRouter({
  history:createWebHistory('/'),
  routes:routes,
})

export default router;