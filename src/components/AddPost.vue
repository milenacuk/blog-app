<template>
    <div>
        <br>
        <form @submit.prevent="addPost">
            <div class="form-group row" >
                <label>Title </label>
                    <input type='text' v-model="newPost.title" placeholder="Enter title"><br>
            </div>
    <div class="form-group">
        <label>Text </label>
        <textarea class ="form-control" v-model="newPost.text" placeholder="Enter text"></textarea>
    </div>
    
    <button type="submit" >Submit</button>
    </form>
    </div>
</template>

<script>
import { posts } from '../services/Posts.js'

export default {
    data(){
        return{
            newPost: {}
        }
    },
    methods: {
        addPost(){
            posts.add(this.newPost)                    
                .then(() => {
                    this.newPost ={};
                    this.$router.push('/posts');
                })
        }
    }
}
</script>
