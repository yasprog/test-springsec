import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

// create - функция обратного вызова, созданная в Developers, для передачи нового девелопера отсюда в общий список
const DeveloperForm = ({create}) => {
    const [developer, setDeveloper] = useState({firstName: '', lastName: '', skills: ''})

    const addNewDeveloper = (e) => {
        e.preventDefault()
        const newDeveloper = {
            ...developer, id: Date.now()
        }
        create(newDeveloper) //передаем нового девелопера в общий список
        setDeveloper({firstName: '', lastName: '', skills: ''})

    }
    return (

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

    );
};

export default DeveloperForm;