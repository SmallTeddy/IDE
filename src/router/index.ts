const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/IDE/Home.vue')
        }
    ]
})

export default router
