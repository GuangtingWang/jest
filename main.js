const axios = require('axios');
const fetch = require('node-fetch');


// if use axios,let {name} = response.data, if use fetch, res.json()
const fetchData = async () => {
    const response = await fetch('http://localhost:4200/peanut');

    if(response.status === 404) return null;

    if(response.status > 400){
        throw Error('fail test');
    }

    let { name } = await response.json();
    return name
}

module.exports =  fetchData;




 