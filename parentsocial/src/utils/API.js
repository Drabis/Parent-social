import axios from "axios";

const url = 'localhost:8080';

// const API = {
//     signupUser: input => {
//         return axios.post(`${url}/user/`, input)
//     },
//     loginUser: input => {
//         return axios.post(`${url}/user/`, input)
//     },
// }


const API = {
    // login
    login: async (username, password) => {
      try {
        const config = {
          headers: {
            'content-Type': 'application/json',
          },
        };
  
        const response = await axios.post(
          `${url}/user`,
          {
            username: username,
            password: password,
          },
          config
        );
  
        if (response.status === 200) {
          await localStorage.setItem(
            'token',
            JSON.stringify(response.data.jwt_token)
          );
        }
  
        return response;
      } catch (error) {
        return error.response.data;
      }
    },
    // @signup
    signup: async ( username, password,firstName, lastName) => {
      try {
        const config = {
          headers: {
            'content-Type': 'application/json',
          },
        };
  
        const request = await axios.post(
          `${url}/user/signup`,
          {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName
          },
          config
        );
  
        const response = {
          status: request.status,
        };
  
        return response;
      } catch (error) {
        return error.response.data;
      }
    },
  };
  





const createDayCare = async (daycare_name, address, phone_number, email, description) => {
        await fetch('http://localhost:8080/daycare', 
        {method : "POST",
         headers : {'Content-Type':'application/json'},
            body: JSON.stringify({
                daycare_name : daycare_name,
                address : address,
                phone_number : phone_number,
                email : email,
                description : description
            })})
            .then(({res}) => {
                let data = res.json();
                console.log(data)
                return data;
            }).catch(err => {
                console.log(err);
                return err;
            })
};

const getDayCare = async () => {
    await axios.get('http://localhost:8080/daycare'
    ,{ headers : {'Content-Type' : 'application/json'}})
    .then(( res ) => {
        
        console.log(res);
        console.log(res.data);
        return res.data;
    }).catch((err) => {
        console.log(err);
    })
    
};

const createPlayDate = async (name, description,event_time) => {
    await fetch('http://localhost:8080/playDate', 
    {method : "POST",
     headers : {'Content-Type':'application/json'},
        body: JSON.stringify({
            title : name,
            event_time : event_time,
            description : description
        })})
        .then(({res}) => {
            let data = res.json();
            console.log(data)
            return data;
        }).catch(err => {
            console.log(err);
            return err;
        })
};

const getPlayDate = async () => {
    await axios.get('http://localhost:8080/playDate'
    ,{ headers : {'Content-Type' : 'application/json'}})
    .then(( res ) => {
        
        console.log(res);
        console.log(res.data);
        return res.data;
    }).catch((err) => {
        console.log(err);
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

export { createDayCare, createPlayDate, getPlayDate, getDayCare};
export default API;