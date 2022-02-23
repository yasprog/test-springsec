import React, {useContext, useState} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";
import DeveloperService from "../API/DeveloperService";

const Login = () => {
    const[user, setUser] = useState({email: 'admin@mail.com', password:'admin'}) //объект user, поля инициализируем пустыми строками
    const {token, setToken} = useContext(AuthContext)
    const login = async event => {
        event.preventDefault() //чтобы страница не обновлялась
        // const formDataLogin = new FormData(document.forms.emailPas);
        // formDataLogin.forEach(function(value, key){
        //     objectUser[key] = value;
        console.log(user)
        const response = await DeveloperService.getToken(user).then(data => {
            setToken(data.data.token)
            localStorage.setItem('token', data.data.token)
            console.log(data.data.token)
            console.log('выше респонс')
        });


        // localStorage.setItem('auth', 'true')

    }
    return (
        <div>
            <h1>Страница для входа</h1>
            <form  onSubmit={login}>
                <MyInput
                    value={user.email}
                    onChange={e => setUser({...user, email: e.target.value})}
                    type="text" placeholder="введите email..."/>
                <MyInput
                    value={user.password}
                    onChange={e => setUser({...user, password: e.target.value})}
                    type="password" placeholder="введите пароль..."/>
                <MyButton >Войти</MyButton>
            </form>

        </div>
    );
};

export default Login;