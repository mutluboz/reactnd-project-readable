const apiUrl = 'http://localhost:3001'

//static auth header
const token = 'fc49dd4f-bfce-4f01-8f08-dfb3b17bdd42';

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const getCategories = () =>
    fetch(`${apiUrl}/categories` , {headers})
        .then(res=>res.json())
        .then(data=>data.categories)