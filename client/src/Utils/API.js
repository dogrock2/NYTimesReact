import axios from "axios";
const BASEURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
const apiKey = "ba0cdf8431e74f5dad95f195f3df5870";


export default {

    search: function(query, strtDate, endDate) {
        let wholeUrl = `${BASEURL}${query}&api-key=${apiKey}`;
        if(strtDate)
            wholeUrl = wholeUrl + `&begin_date=${strtDate}`;
        if(endDate)
            wholeUrl = wholeUrl + `&end_date=${endDate}`;
        let x = axios.get(wholeUrl);
        console.log(wholeUrl);
        return x;
    }

};