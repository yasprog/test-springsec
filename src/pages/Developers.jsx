import React, {useContext, useEffect, useMemo, useState} from 'react';
import MyButton from "../components/UI/button/MyButton";
import DeveloperList from "../components/DeveloperList";
import {AuthContext} from "../context";
import DeveloperService from "../API/DeveloperService";
import DeveloperForm from "../components/DeveloperForm";
import DeveloperFilter from "../components/DeveloperFilter";
import MyModal from "../components/MyModal/MyModal";
import {useDevelopers} from "../hook/useDevelopers";
import axios from "axios";
import Loader from "../components/UI/Loader/Loader";
import {useFetching} from "../hook/useFetching";
import {useDeleting} from "../hook/useDeleting";
import {useAdding} from "../hook/useAdding";

const Developers = () => {
    const {token, setToken} = useContext(AuthContext)
    console.log('из контекста')
    console.log(token)
    const [developers, setDevelopers] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''}) //режим сортировки и поисковая строка
    const [modal, setModal] = useState(false) // видим ли модальное окно
    const sortedAndSeacrhedDevelopers = useDevelopers(developers, filter.sort, filter.query)
    const [fetchDevelopers, isDevelopersLoading, developerError] = useFetching(async () =>  {
        const developers = await DeveloperService.getAllDev(token)
        setDevelopers(developers)
    })
    const [deleteDeveloper, isDevelopersDeleting,developerDelError] = useDeleting(  async (developer) => {
            const statusDel = await DeveloperService.delById(developer.id, token)
            if (statusDel === 200) {
                setDevelopers(developers.filter(d => d.id != developer.id))
            }
    })

    const [addDeveloper, isDevelopersAdding,developerAddError] = useAdding(  async (developer) => {
        const statusAdd = await DeveloperService.addDev(developer, token)
        if (statusAdd === 200) {
            console.log("Добавлено")
        }
    })

    // const getDevelopers =  async event => {
    //     event.preventDefault()
    //     const qqq = await DeveloperService.getAllDev(token)
    //     console.log(qqq)
    //
    // }


    useEffect(() => {
        fetchDevelopers()
    }, [])



    //функция обратного вызова
    //ожидает на вход нового созданного девелопера,
    // и добавляет его в список
    const createDeveloper = (newDeveloper) => {
        addDeveloper(newDeveloper)
        setDevelopers([...developers, newDeveloper])
        setModal(false)
    }


    //Получаем девелопера из дочернего компонента
    //filter возвращает новый массив, отфильтрованный по какому-то условию
    const removeDeveloper = (developer) => {
        deleteDeveloper(developer)



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
            <MyButton onClick={fetchDevelopers}>Кнопка fetch</MyButton>


            {developerError &&
                <h1>Произошла ошибка ${developerError}</h1>
            }
            {developerDelError &&
                <h1>Произошла ошибка ${developerDelError}</h1>
            }

            {isDevelopersLoading || isDevelopersDeleting || isDevelopersAdding
                ?  <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
                : <DeveloperList remove={removeDeveloper} developers={sortedAndSeacrhedDevelopers} title="Девелоперы"/>

            }



        </div>
    );
};

export default Developers;