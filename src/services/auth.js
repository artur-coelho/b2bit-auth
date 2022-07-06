import axios from './api';

class AuthService {
  signIn(data) {
    return new Promise((resolve, reject) =>
      axios
        .post('account/tokens/', data)
        .then((response) => {
          this.setLocalStorage(response.data.tokens);
          window.location.href = '/main/profile';
          resolve(response.data);
        })
        .catch((err) => reject(err))
    );
  }
  setLocalStorage({ access, refresh }) {
    localStorage.setItem('accessToken', access);
    localStorage.setItem('refreshToken', refresh);
  }
  logout() {
    localStorage.clear();
    window.location.href = '/login';
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
