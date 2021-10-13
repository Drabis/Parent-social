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
            name: info.name,
            location: info.location,
            phone: info.phone,
            email: info.email
            
        }
        return axios.post(`/api/daycare/submit/${userId}`, daycare)
    },
    updateDaycare: (post, info, postId) => {
        const daycare = {
            body: post,
            name: info.name,
            location: info.location,
            phone: info.phone,
            email: info.email,
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