<template>
<div>
    <div v-for="(post,index) in posts" :key="index">
            <h2 class="blog-post-title"><router-link to="/posts"> {{post.title }}</router-link></h2>
            <!-- <p class="blog-post-meta">January 1, 2014 by <a href="#">Mark</a></p> -->

            <p>{{ post.text }}</p>
          </div>
</div>
</template>


<script>
import { posts } from '../services/Posts.js'

export default {
    data(){
        return{
            posts:[]
        }
    },
    created(){
        posts.getAll().then(response => {
            this.posts = response.data;
        }).catch(error => {
            console.log(error.response);
        })
    }
}
</script>
