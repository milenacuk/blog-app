<template>
    <div>
        <br>
        <form @submit.prevent="addPost">
            <div class="form-group row" >
                <label>Title </label>
                    <input type='text' v-model="newPost.title" placeholder="Enter title" required minlength='2'><br>
            </div>
    <div class="form-group">
        <label>Text </label>
        <textarea class ="form-control" v-model="newPost.text" placeholder="Enter text" required minlength="10" maxlength='300'></textarea>
    </div>    
    <button Width="89px" type="submit" >Submit</button>
    <button Width="89px" @click.stop.prevent="resetForm">Reset</button>
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
        },
        resetForm(){
            this.newPost = {}
        }
    }
}
</script>

<style>
.container button {
     width:150px;
    height:auto;
    display:inline-block;
}
</style>
