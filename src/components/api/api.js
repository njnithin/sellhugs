import axios from 'axios'
const baseURL = process.env.VUE_APP_URL;
const userLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    axios.post(baseURL + "/auth/login", {
      username: username,
      password: password,
    }).then(response => {
      resolve(response);
    }).catch(error => {
      reject(error);
    })
  });
}
const userRegister = (username, email, password) => {
  return new Promise((resolve, reject) => {
    axios.post(baseURL + "/auth/signup", {
      username: username,
      password: password,
      email: email
    }).then(response => {
      resolve(response);
    }).catch(error => {
      reject(error);
    })
  });
}
const userVerify = token => {
  return new Promise((resolve, reject) => {
    axios.get(baseURL + "/auth/accountVerification/" + token).then(response => {
      resolve(response);
    }).catch(error => {
      reject(error);
    })
  });
}
const userLogout = () => {
  return new Promise((resolve, reject) => {
    axios.post(baseURL + '/auth/logout').then(response => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  });
}
const refreshToken = () => {
  return new Promise((resolve, reject) => {
    axios.post(baseURL + "/auth/refresh").then(response => {
      resolve(response);
    }).catch(error => {
      reject(error);
    });
  });
}
const authCheck = () => {
  return new Promise((resolve, reject) => {
    axios.get(baseURL + "/user/greet").then(response => {
      resolve(response);
    }).catch(error => {
      reject(error);
    });
  });
}
export {
  userLogin,
  userRegister,
  userVerify,
  userLogout,
  refreshToken,
  authCheck,
};