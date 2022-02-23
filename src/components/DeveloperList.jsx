import React from 'react';
import DeveloperItem from "./DeveloperItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

//получаем список девелоперов, заголовок списка, функцию (обратного вызова) удаления
const DeveloperList = ({developers, title, remove}) => {
    if (!developers.length) {
        return (
            <h1 style={{textAlign: "center"}}>
                Девелоперы не найдены
             </h1>)
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            <TransitionGroup>
                {developers.map((developer, index) =>
                        <CSSTransition
                            key={developer.id}
                            timeout={500}
                            classNames="developer"
                        >

                        <DeveloperItem remove={remove} number={index + 1} developer={developer} key={developer.id}/>
                        {/*// remove={remove} передаем эту функцию дальше вниз.*/}
                        </CSSTransition>
                )}

            </TransitionGroup>

        </div>
    );
};

export default DeveloperList;