import React from 'react';
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";

const Contacts = () => {
    return (
        <div>
            <h1>Адрес и телефон ...</h1>

            <form action="submit">
                <MyInput placeholder="написать..."/>
                <MyButton>Первая кнопка</MyButton>
            </form>

        </div>
    );
};

export default Contacts;