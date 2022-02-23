import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import React from "react";



const DeveloperFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                placeholder="Поиск ..."
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка"
                option={[
                    {value: 'firstName', name: 'По имени'},
                    {value: 'lastName', name: 'По фамилии'}
                ]}
            />
        </div>
    );
};

export default DeveloperFilter;