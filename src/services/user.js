import axios from './api';

class UserService {
  getUserProfile() {
    return new Promise((resolve, reject) =>
      axios
        .get('account/profile/')
        .then((response) => resolve(response.data))
        .catch((err) => reject(err))
    );
  }
}

export default new UserService();
