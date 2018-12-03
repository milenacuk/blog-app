<template>
    <div>
        <form @submit.prevent="addComment">           
                    <div class="form-group">
                        <label>Text </label>
                            <textarea class ="form-control" v-model="newComment.text" placeholder="Enter comment" required minlength="10" maxlength='300'></textarea>
                    </div>    
                    <button Width="89px" type="submit" >Submit</button>
                </form>
    </div>
</template>

<script>

import { posts } from '../services/Posts.js'

export default {
    created(){
        if(this.$route.params.id){
            posts.get(this.$route.params.id)
            .then(response => {
                this.post = response.data;
            })
            .catch(error => {
                console.log(error.response)
            });
        }
    },
    data(){
        return{
            newComment: {}
        }
    },
    methods: {
        addComment(){
            this.$emit("addNewComment", this.newComment);
        }
    }
}
</script>
