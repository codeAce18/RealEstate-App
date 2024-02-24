import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'




export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {

        headers: {
            'X-RapidAPI-Key': '117703507fmsh3a53e7314d58546p1cb5cfjsnc5eb523e3295',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
        
    });

    return data;
            
}