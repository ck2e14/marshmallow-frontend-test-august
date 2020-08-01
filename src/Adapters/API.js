const BASE_URL = 'https://api.spacexdata.com/v3';
const DRAGONS_ENDPOINT = '/dragons'
const ROCKETS_ENDPOINT = '/rockets'

const jsonify = res => {
   if (!res.ok) throw res.statusText;
   return res.json().then(data => {
      if (data.errors) throw data.errors;
      else return data;
   });
};

const fetchDragons = () => {
   return fetch(`${BASE_URL}${DRAGONS_ENDPOINT}`)
      .then(jsonify)
      .then(data => { return data })
      .catch(error => { console.log(error)} )
}

const fetchRockets = () => {
   return fetch(`${BASE_URL}${ROCKETS_ENDPOINT}`)
      .then(jsonify)
      .then(data => { return data } )
}

export default {
   fetchDragons,
   fetchRockets
}
