import axios from 'axios';

class OfferService {
  constructor(){
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_URL}/offers`,
      //withCredentials: true
    })
  }

  offers = () => {
    return this.service.get('/')
    .then(response => response.data)
  }


  delete = (id) => {
    return this.service.get(`/delete/${id}`)
    .then(response => response.data)
  }

  new = (title, description, code) => {
    return this.service.post('/new', {title, description, code})
    .then(response => response.data)
  }
}


export default OfferService;