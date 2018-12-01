<template>
<div class="container">
    <br>
    <div v-for="(post,index) in posts" :key="index">
        <h2> {{post.title }}
            <span>
                <button class="btn btn-outline-primary" @click="goToSinglePost(post.id)">
                    View post
                </button>
                <button class="btn btn-outline-primary" ><router-link  :to="{name:'edit-post', params: {id:post.id}}">
                    Edit post
                    </router-link>
                </button>
                <button class="btn btn-outline-primary" @click="deletePost(post.id)">
                    Delete post
                </button>
            </span>
        </h2>
            <!-- <p class="blog-post-meta">January 1, 2014 by <a href="#">Mark</a></p> -->
            <!-- <p>{{ post.text }}</p> -->
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
    },
    methods: {
        goToSinglePost(id){
            this.$router.push(`/posts/${id}`)

            },
        deletePost(id){
            posts.delete(id).then(() => {                   
                    this.$router.push('/posts');
                })
            }
            
        }
    }

</script>

<style>
.container div h2 {
    padding-right: 20px;
}
</style>

