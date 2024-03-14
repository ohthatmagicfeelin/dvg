<template>
    <div>
      <h2>Recent posts</h2>
      <div v-if="posts">
        <PostList v-if="posts" :posts="posts" />
      </div>
      <div v-else>Loading...</div>
    </div>
  </template>
  
<script setup>
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import PostList from './PostList.vue';
import { computed } from 'vue';

const { result, loading, error } = useQuery(gql`
  query {
    allPosts {
      title
      subtitle
      publishDate
      published
      metaDescription
      slug
      author {
        user {
          username
          firstName
          lastName
        }
      }
      tags {
        name
      }
    }
  }
`)
const posts = computed(() => {
  if (loading.value || error.value || !result.value) {
    return [];
  }
  return result.value.allPosts;
});

if (error.value) {
  console.error('Error in allPosts query:', error.value);
}

</script>