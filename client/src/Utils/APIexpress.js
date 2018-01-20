import axios from "axios";
const BASEURL = "/api/articles";

export default {

    search: function() {
        return axios.get(BASEURL);
    },

    save: function(articleData) {
       return axios.post(BASEURL, {data : { dataObj:articleData }});
    },

    delete: function(id){
        return axios.delete(BASEURL, {data : { articleId:id }});
    }



};