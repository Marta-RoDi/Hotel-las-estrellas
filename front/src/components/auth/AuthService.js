import axios from 'axios';

class AuthService {
  constructor(){
    this.service = axios.create({
      baseURL: 'http://localhost:3000/auth',
      withCredentials: true
    })
  }

  signup = (username, password, photo) => {
    return this.service.post('/signup', {username, password, photo})
    .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/currentuser')
    .then(response => response.data)
  }

  logout = () => {
    return this.service.get('/logout')
    .then(response => response.data)
  }
}

export default AuthService;