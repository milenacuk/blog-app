<template>
    <div class="container">          
       <h2 class="blog-post-title"> {{ post.title }}</h2>
        <p class="blog-post-meta">{{ post.createdAt }} </p>

        <p>{{ post.text }}</p>  
        
            <br> 
        <h3>Comments</h3> 
        <ul>
            <li v-for="comment in comments" :key="comment.id">
                <hr>
                {{ comment.createdAt }}
                <br>
                {{ comment.text }}
            </li>
        </ul> 
        <AddComment @addNewComment="addComment"/>                           
</div>

</template>

<script>
import { posts } from '../services/Posts.js'
import AddComment from './AddComment.vue'

export default {
data(){
    return{
        post: {
            // title: '',
            // text: ''
        },
        comments: []
    }
} ,
methods: {
    addComment(newComment){
        posts.addComment(this.post.id, newComment)
        .then(response => {
            this.comments.push(response.data);
            newComment.text = '';
        }).
        catch(error => {
            console.log(response.data)
        });
    }
},
components: {
    AddComment
},
created(){
    posts.get(this.$route.params.id).then(response => {
            this.post = response.data;
        }).catch(error => {
            console.log(error.response);
        })   
    }   
}
</script>
