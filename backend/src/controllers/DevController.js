const axios = require("axios");
const Dev = require("../modules/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

//index, show, store, update, destroy
module.exports = {
    async index ( request, respsone ){
        const devs = await Dev.find();
        return respsone.json(devs);
    },
    async store ( request, respsone ){
        const {github_username, techs, latitude, longitude} = request.body; 
        
        const existent_dev = await Dev.findOne({ github_username });
        if(!existent_dev){
            const api_response = await axios.get(`https://api.github.com/users/${github_username}`);
        
            const {name = login , avatar_url, bio} = api_response.data;
        
            const techs_array = parseStringAsArray(techs,',');
        
            console.log({name,avatar_url,bio,github_username, techs_array});
        
            const location = {
                type: "Point",
                coordinates: [longitude, latitude],
            };
        
            const dev_created = await Dev.create({
                name,
                github_username,
                bio,
                avatar_url,
                techs: techs_array,
                location
            })
        
            return respsone.json( { dev_created : dev_created, data: api_response.data } );
        } else {
            return respsone.json( {"ERROR": "user already exists"});
        }    
    }
};