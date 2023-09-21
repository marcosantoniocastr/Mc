//Crear una variable para almacenar los datos del usuario
let userData = {
    username: '',
    password: '',
    email: ''
};

//Función para recibir los datos del usuario
const registerUser = () => {
    userData.username = prompt('Ingrese su nombre de usuario');
    userData.password = prompt('Ingrese su contraseña');
    userData.email = prompt('Ingrese su dirección de correo electrónico');
};

//Función para validar los datos del usuario
const validateUserData = () => {
    if (userData.username.length <= 3) {
        alert('El nombre de usuario debe tener al menos 3 caracteres');
        return false;
    }
    if (userData.password.length <= 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        return false;
    }
    if (!userData.email.includes('@')) {
        alert('La dirección de correo electrónico no es válida');
        return false;
    }
    return true;
};

//Función para registrar al usuario
const register = () => {
    registerUser();
    if (validateUserData()) {
        alert('Registro exitoso');
    } else {
        alert('Registro fallido');
    }
};

//Ejecutar la función de registro
register();