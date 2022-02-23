import React from 'react';
import DeveloperItem from "./DeveloperItem";

//получаем список девелоперов, заголовок списка, функцию (обратного вызова) удаления
const DeveloperList = ({developers, title, remove}) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {developers.map((developer, index) =>
                <DeveloperItem remove={remove} number={index + 1} developer={developer} key={developer.id}/>
                // remove={remove} передаем эту функцию дальше вниз
            )}
        </div>
    );
};

export default DeveloperList;