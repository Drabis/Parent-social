// import axios from "axios";

const url = 'localhost:8080';

const createDayCare = async (name, address, phone, email, description) => {
        await fetch(url, '/daycare', 
        {method : "POST",
         header : {'Content-Type':'application/json'},
            body: JSON.stringify({
                name : name,
                address : address,
                phone : phone,
                email : email,
                description : description
            })}).then(({res}) => {
                let data = res.json();
                console.log(data)
                return data;
            }).catch(err => {
                console.log(err);
                return err;
            })
};

const createPlayDate = async (name, description) => {
    await fetch(url, '/daycare', 
    {method : "POST",
     header : {'Content-Type':'application/json'},
        body: JSON.stringify({
            name : name,
            description : description
        })}).then(({res}) => {
            let data = res.json();
            console.log(data)
            return data;
        }).catch(err => {
            console.log(err);
            return err;
        })
};

// const API = {
//     signUprUser: input => {
//         return axios.post("/api/users/signup", input)
//     },
//     signinUser: input => {
//         return axios.post("/api/users/login", input)
//     },
//     getPostsByUser: userId => {
//         return axios.get(`/api/daycare/user/${userId}`)
//     },
//     submitDaycare: (post, info, userId) => {
//         const daycare = {
//             body: post,
//             name: info.name,
//             location: info.location,
//             phone: info.phone,
//             email: info.email
            
//         }
//         return axios.post(`/api/daycare/submit/${userId}`, daycare)
//     },
//     updateDaycare: (post, info, postId) => {
//         const daycare = {
//             body: post,
//             name: info.name,
//             location: info.location,
//             phone: info.phone,
//             email: info.email,
//             description: info.description
//         }
//         console.log(daycare)
       
//         return axios.put(`/api/daycare/submit/${postId}`, daycare)
//     },
    
//     getDaycareById: (id) => {
//         return axios.get("/api/daycare/" + id)
//     }
    
// }
export { createDayCare, createPlayDate, };