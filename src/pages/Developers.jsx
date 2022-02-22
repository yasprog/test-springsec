import React, {useContext, useState} from 'react';
import MyButton from "../components/UI/button/MyButton";
import DeveloperItem from "../components/DeveloperItem";
import DeveloperList from "../components/DeveloperList";
import MyInput from "../components/UI/input/MyInput";
import {AuthContext} from "../context";
import PostService from "../API/PostService";

const Developers = () => {
    const {token, setToken} = useContext(AuthContext)
    const [developer, setDeveloper] = useState({firstName: '', lastName: '', skills: ''})

    console.log(token)
    const [developers, setDevelopers] = useState([{
        firstName: "Ivan",
        lastName: "Ivanov",
        skills: "Java, React JS",
        id: "1"
    }, {
        firstName: "Pert",
        lastName: "Pivanov",
        skills: "React JS",
        id: "2"
    }])


    const getDevelopers = async event => {
        event.preventDefault()
        console.log(await PostService.getAllDev(token))

    }

    const addNewDeveloper = (e) => {
        e.preventDefault()

        setDevelopers([...developers, {...developer, id: Date.now()}])
        setDeveloper({firstName: '', lastName: '', skills: ''})

    }
    return (
        <div className="Dev">
            <form>
                <MyInput
                    value={developer.firstName}
                    onChange={e => setDeveloper({...developer, firstName: e.target.value})}
                    type="text" placeholder="имя..."
                />
                <MyInput
                    value={developer.lastName}
                    onChange={e => setDeveloper({...developer, lastName: e.target.value})}
                    type="text" placeholder="фамилия..."
                />
                <MyInput
                    value={developer.skills}
                    onChange={e  => setDeveloper({...developer, skills: e.target.value})}
                    type="text" placeholder="навыки работы..."

                />
                <MyButton onClick={addNewDeveloper}>Добавить</MyButton>
            </form>
            <MyButton onClick={getDevelopers}>Загрузить</MyButton>
            <DeveloperList developers={developers} title="Девелоперы"/>
        </div>
    );
};

export default Developers;