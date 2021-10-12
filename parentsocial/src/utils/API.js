import axios from "axios";

const API = {
    signUprUser: input => {
        return axios.post("/api/users/signup", input)
    },
    signinUser: input => {
        return axios.post("/api/users/login", input)
    },
    getPostsByUser: userId => {
        return axios.get(`/api/daycare/user/${userId}`)
    },
    submitDaycare: (post, info, userId) => {
        const daycare = {
            body: post,
            title: info.title,
            author: info.author,
            description: info.description,
            
        }
        return axios.post(`/api/daycare/submit/${userId}`, daycare)
    },
    updateDaycare: (post, info, category, postId) => {
        const daycare = {
            body: post,
            category: category,
            title: info.title,
            author: info.author,
            description: info.description
        }
        console.log(daycare)
       
        return axios.put(`/api/daycare/submit/${postId}`, daycare)
    },
    
    getDaycareById: (id) => {
        return axios.get("/api/daycare/" + id)
    }
    
}
export default API