import axios from './api';

class AuthService {
  user;

  constructor() {
    this.user = null;
  }

  signIn(data) {
    return new Promise((resolve, reject) =>
      axios
        .post('account/tokens/', data)
        .then((response) => {
          this.user = response.data.user;
          this.setLocalStorage(response.data.tokens);
          resolve(response.data);
        })
        .catch((err) => reject(err))
    );
  }
  setLocalStorage({ access, refresh }) {
    localStorage.setItem('accessToken', access);
    localStorage.setItem('refreshToken', refresh);
  }
  accessToken() {
    return localStorage.getItem('accessToken');
  }
  refreshToken() {
    return localStorage.getItem('refreshToken');
  }
  isLoggedIn() {
    return localStorage.getItem('accessToken');
  }
}

export default new AuthService();
