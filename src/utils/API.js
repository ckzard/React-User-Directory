import axios from "axios";

const API = {
    search: function () {
        return axios.get('https://randomuser.me/api/?results=100&inc=id,picture,name,cell,email,dob,location&nat=ca,us')
    }
}

export default API;