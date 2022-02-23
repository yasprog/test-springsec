import React, {useContext, useMemo, useState} from 'react';
import MyButton from "../components/UI/button/MyButton";
import DeveloperItem from "../components/DeveloperItem";
import DeveloperList from "../components/DeveloperList";
import MyInput from "../components/UI/input/MyInput";
import {AuthContext} from "../context";
import DeveloperService from "../API/DeveloperService";
import DeveloperForm from "../components/DeveloperForm";
import MySelect from "../components/UI/select/MySelect";
import DeveloperFilter from "../components/DeveloperFilter";

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
    }

    //Получаем девелопера из дочернего компонента
    //filter возвращает новый массив, отфильтрованный по какому-то условию
    const removeDeveloper = (developer) => {
        setDevelopers(developers.filter(d => d.id != developer.id))

    }



    return (
        <div className="Dev">
            {/*передаем в компонент функцию обратного вызова*/}
            <DeveloperForm create={createDeveloper}/>
            <hr style={{margin: '15px 0'}}/>
           <DeveloperFilter
               filter={filter}
               setFilter={setFilter}/>

            <MyButton onClick={getDevelopers}>Загрузить</MyButton>
            {sortedAndSeacrhedDevelopers.length !== 0
                ?
                <DeveloperList remove={removeDeveloper} developers={sortedAndSeacrhedDevelopers} title="Девелоперы"/>
                :
                <h1 style={{textAlign: "center"}}>
                    Девелоперы не найдены
                </h1>

            }

        </div>
    );
};

export default Developers;