<template>
    <div class="container">          
       <h2 class="blog-post-title"> {{ post.title }}</h2>
        <p class="blog-post-meta">{{ post.createdAt }} </p>

        <p>{{ post.text }}</p>
          
</div>
</template>

<script>
import { posts } from '../services/Posts.js'

export default {
data(){
    return{
        post: {
            // title: '',
            // text: ''
        }
    }
} ,
created(){
    posts.get(this.$route.params.id).then(response => {
            this.post = response.data;
        }).catch(error => {
            console.log(error.response);
        })

    
}   
}
</script>
