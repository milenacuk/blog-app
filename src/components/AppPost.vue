<template>
<div class="container">
    <div class="jumbotron">

    <table border="1">
         
        <thead>
            <th>Title</th>
            <th>Text</th>
        </thead>
       
        <tbody>                   
            <tr v-for="(post,index) in posts" :key="index">
                

                <td>
                    <h3> {{post.title }} </h3>
                </td>
                <td>
                    <h4> {{post.text }} </h4>
                </td>
               
                <td>
                    <h5>Comments number: {{ post.comments.length }} </h5>
                </td>
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
                
            </tr>
        </tbody>
       
            
            <!-- <p class="blog-post-meta">January 1, 2014 by <a href="#">Mark</a></p> -->
            <!-- <p>{{ post.text }}</p> -->
    
    </table>
    </div>
</div>
</template>


<script>
import { posts } from '../services/Posts.js'
import {mixin, DataMixin} from '../mixins/mixins'

export default {
    mixins: [mixin,DataMixin],
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
            posts.delete(id).then((success) => {
                this.posts = this.posts.filter(c => c.id !== id)
                })
            }
            
        }
    }

</script>

<style>
.container div h2 {
    padding-right: 20px;
}
table {
    border: 5px;
    /* sklonila sam border oko tabele */
}
.btn {
    margin-top: 2px;
}
.jumbotron {
    width: 100%;
}

</style>

