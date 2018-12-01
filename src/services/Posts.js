import axios from 'axios'

export default class Posts{
    constructor(){
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }
    getAll(){
        return axios.get('posts');
    }
    get(id){
        return axios.get(`posts/${id}`);
    }
    add(newPost){
        return axios.post('posts', newPost);
    }
    edit(id, newPost){
        return axios.put(`posts/${id}`, newPost);
    }
}
export const posts = new Posts();