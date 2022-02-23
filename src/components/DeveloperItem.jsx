import React from 'react';
import MyButton from "./UI/button/MyButton";

const DeveloperItem = (props) => {
    return (
        <div className="developer">
            <div className="developer__content">
                <strong>{props.number}. {props.developer.firstName} {props.developer.lastName}</strong>
                <div>
                    {props.developer.skills}
                </div>
            </div>
            <div className="developer__btn">
                <MyButton onClick={() => {props.remove(props.developer)}}>Удалить</MyButton>
                 {/*из props получаем функцию удаления и текущего девелопера*/}
            </div>
        </div>
    );
};

export default DeveloperItem;