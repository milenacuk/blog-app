<template>
    <div>
        <br>
        <form @submit.prevent="submit">
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
import {mixin} from '../mixins/mixins'

export default {
    mixins: [mixin],
    created() {
        if(this.$route.params.id){
            posts.get(this.$route.params.id)
            .then(response => {
                //console.log(response);
                this.post = response.data;
                this.newPost = response.data;
            })
            .catch(error => {
                console.log(error.response.data);
            })
        }
    },
    data(){
        return{
            newPost: {}
        }
    },
    methods: {
        submit(){
            if(this.$route.params.id){
                this.editPost();
            }
            else{
                this.addPost();
            }
        },
        addPost(){
            posts.add(this.newPost)                    
                .then(() => {
                    this.newPost ={};
                    // this.$router.push('/posts');
                    this.redirectTo('posts')
                })
        },
        resetForm(){
            this.newPost = {}
        },
        editPost(){
                posts.edit(this.$route.params.id, this.newPost)
                // .then(() => this.$router.push('/posts'));
                .then(() => this.redirectTo('posts'));
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
