import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import StudentsView from '../views/students/StudentsView.vue'
import StudentDetailsView from '../views/students/StudentDetailsView.vue'
import ReadPostView from '../views/posts/ReadPostView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/students',
      name: 'Students',
      component: StudentsView
    },
    {
      path: '/students/:id',
      name: 'StudentDetails',
      component: StudentDetailsView,
      props: true                       // We can accept any route parameters as props: Vue will attach that parameter as a prop to the component we're linking to
    },
    {
      path: '/readpost',
      name: 'ReadPost',
      component: ReadPostView
    },
    // Redirect
    {
      path: '/dwwm-students',
      redirect: '/students',
    },
    // catchall 404
    {
      path: '/:catchAll(.*)',           // Will catch any others routes that does not match these above
      name: 'NotFound',
      component: NotFoundView
    }
  ]
})

export default router

