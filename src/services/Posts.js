import axios from 'axios'

export default class Posts{
    constructor(){
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }
    getAll(){
        return axios.get('posts?filter={"include":["comments"]}');
    }
    get(id){
        return axios.get(`posts/${id}?filter={"include":["comments"]}`);
    }
    add(newPost){
        return axios.post('posts', newPost);
    }
    edit(id, newPost){
        return axios.put(`posts/${id}`, newPost);
    }
    delete(id){
        return axios.delete(`posts/${id}`);
    }
    addComment( postId, comment){
        return axios.post(`posts/${postId}/comments/`, comment);
    }
}
export const posts = new Posts();