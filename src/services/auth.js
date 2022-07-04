import axios from './api';

class AuthService {
  signIn(data) {
    return new Promise((resolve, reject) =>
      axios
        .post('account/tokens/', data)
        .then(({ data }) => resolve(data))
        .catch((err) => reject(err))
    );
  }
}

export default new AuthService();
