const userData = {
    login: null,
    email: null,
    password: null
};

userData.login = prompt('Enter login: ');
userData.email = prompt('Enter email: ');
userData.password = prompt('Enter password: ');

const userInfo = document.getElementById('user-info');
userInfo.textContent = 'Dear ' + userData.login + ', your email is ' + userData.email + ', your password is ' + userData.password;