<template>
    <div class="container">          
       <h2 class="blog-post-title"> {{ post.title }}</h2>
        <p class="blog-post-meta">{{ post.createdAt | formatDate }} </p>

        <p>{{ post.text }}</p>          
            <br> 
        <h3>Comments</h3> 
        <ul>           
            <li v-for="comment in comments" :key="comment.id">
                <hr>
                {{ comment.createdAt | diffForHumans }}
                <br>
                <h5>{{ comment.text }}</h5>
            </li>
        </ul> 
        <AddComment @addNewComment="addComment"/>                           
</div>

</template>

<script>
import { posts } from '../services/Posts.js'
import AddComment from './AddComment.vue'
import { mixin, DataMixin} from '../mixins/mixins'

export default {
    mixins: [ mixin, DataMixin],
    
    components: {
        AddComment
        } ,
    created(){
    if(this.$route.params.id){
            posts.get(this.$route.params.id)
            .then(response => {
                //console.log(response);
                this.post = response.data;
                this.comments = this.post.comments;
            })
            .catch(error => {
                console.log(error.response.data);
            })
        }
    } , 
data(){
    return{
        post: {}
            // title: '',
            // text: ''
        ,
        comments: []
    }
} ,
methods: {
    
    
    addComment(newComment){
        posts.addComment(this.post.id, newComment)
        .then(response => {
            this.comments.push(response.data);
            // newComment.text = '';
        }).
        catch(error => {
            console.log(response.data)
        });
    }
}
}
</script>

<style>
h5 {
    color: blue;
}
</style>
