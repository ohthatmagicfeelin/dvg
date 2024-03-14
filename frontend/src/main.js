import './assets/main.css'

import { createApp, h, provide } from 'vue'
import { createPinia } from 'pinia'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

import App from './App.vue'
import router from './router'

// Create an HTTP link to the GraphQL server
const httpLink = createHttpLink({
    uri: 'http://127.0.0.1:8000/graphql/',
  })

// Create an Apollo client instance
const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  })

const app = createApp({
  setup() {
    // Provide the Apollo client instance to the app
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})
// const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')
