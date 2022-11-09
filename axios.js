let url = 'https://kivu-group-api.herokuapp.com/jobs'


const getData = () => {axios.get(url).then(resp => console.log(resp.data))}

getData()