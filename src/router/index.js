import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Posts from '../views/Posts.vue'
import Details from '../views/Details.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/posts',
		name: 'posts',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Posts.vue')
	},
	{
		path: '/posts/:id',
		name: 'PostDetail',
		component: () => import(/* webpackChunkName: "about" */ '../views/PostDetail.vue'),
		props: true
	}

]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
