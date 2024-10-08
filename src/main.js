import { createApp } from 'vue'
import App from './pages/App.vue'

import { createRouter, createWebHistory } from 'vue-router'
import AppHome from './pages/AppHome.vue'
import AppProjects from './pages/AppProjects.vue'
import AppContact from './pages/AppContact.vue'
import AppMe from './pages/AppMe.vue'
import AppSingolarProject from './pages/AppSingolarProject.vue'




const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', name: 'home', component: AppHome },
		{ path: '/projects', name: 'projects', component: AppProjects },
		{ path: '/contact', name: 'contact', component: AppContact },
		{ path: '/me', name: 'me', component: AppMe },
		{ path: '/project/:id', name: 'project', component: AppSingolarProject }



	],
})

createApp(App).use(router).mount('#app')


