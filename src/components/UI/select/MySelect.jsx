import React from 'react';

//принимает массив опций, на основании которого в список будут добавляться пункты
const MySelect = ({option, defaultValue, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}

        >
            <option disabled value="">{defaultValue}</option>
            {option.map(option =>
                <option  key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;