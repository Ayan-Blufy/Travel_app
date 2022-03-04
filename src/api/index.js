import axios from 'axios';



export const solve = async (type,sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {


            params: {
                bl_latitude:sw.lat,
                tr_latitude: ne.lat,
                bl_longitude:sw.lng,
                tr_longitude:ne.lng,

            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': 'b90234c031msh0c22dd127219e4dp14f0b0jsnec745539f49c'
            }



        });

        return data;
    }
    catch (error) {
        console.log(error);
    }
}