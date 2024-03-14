import { createRouter, createWebHistory } from 'vue-router'

import Post from '../components/Post.vue'
import Author from '../components/Author.vue'
import PostsByTag from '../components/PostsByTag.vue'
import AllPosts from '../components/AllPosts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AllPosts
    },
    {
      path: '/author/:username',
      component: Author
    },
    {
      path: '/post/:slug',
      component: Post
    },
    {
      path: '/tag/:tag',
      component: PostsByTag
    },

  ]
})

export default router
