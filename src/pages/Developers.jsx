import React, {useContext, useMemo, useState} from 'react';
import MyButton from "../components/UI/button/MyButton";
import DeveloperList from "../components/DeveloperList";
import {AuthContext} from "../context";
import DeveloperService from "../API/DeveloperService";
import DeveloperForm from "../components/DeveloperForm";
import DeveloperFilter from "../components/DeveloperFilter";
import MyModal from "../components/MyModal/MyModal";

const Developers = () => {
    const {token, setToken} = useContext(AuthContext)
    console.log('из контекста')
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
        console.log(await DeveloperService.getAllDev(token))

    }

    // const [selectedSort, setSelectedSort] = useState('')
    // const [searchQuery, setSearchQuery] = useState('') //поисковая строка

    const [filter, setFilter] = useState({sort: '', query: ''}) //режим сортировки и поисковая строка
    const [modal, setModal] = useState(false) // видим ли модальное окно

    const sortedDevelopers = useMemo(()=> {
        if (filter.sort) {
            return [...developers].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return developers
    }, [filter.sort, developers])

    const sortedAndSeacrhedDevelopers = useMemo(() => {
        return sortedDevelopers.filter(developer => developer.firstName.toLowerCase().includes(filter.query.toLowerCase()) || developer.lastName.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedDevelopers])

    //функция обратного вызова
    //ожидает на вход нового созданного девелопера,
    // и добавляет его в список
    const createDeveloper = (newDeveloper) => {
        setDevelopers([...developers, newDeveloper])
        setModal(false)
    }

    //Получаем девелопера из дочернего компонента
    //filter возвращает новый массив, отфильтрованный по какому-то условию
    const removeDeveloper = (developer) => {
        setDevelopers(developers.filter(d => d.id != developer.id))

    }



    return (
        <div className="Dev">
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>
            {/*передаем в компонент функцию обратного вызова*/}
            <MyModal visible={modal} setVisible={setModal}>
                <DeveloperForm create={createDeveloper}/>
            </MyModal>

            <hr style={{margin: '15px 0'}}/>
           <DeveloperFilter
               filter={filter}
               setFilter={setFilter}/>

            <MyButton onClick={getDevelopers}>Загрузить</MyButton>

                <DeveloperList remove={removeDeveloper} developers={sortedAndSeacrhedDevelopers} title="Девелоперы"/>


        </div>
    );
};

export default Developers;