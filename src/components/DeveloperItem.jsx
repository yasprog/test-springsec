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
                <MyButton>Удалить</MyButton>
            </div>
        </div>
    );
};

export default DeveloperItem;