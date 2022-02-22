import React from 'react';
import DeveloperItem from "./DeveloperItem";


const DeveloperList = ({developers, title}) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {developers.map((developer, index) =>
                <DeveloperItem number={index + 1} developer={developer} key={developer.id}/>
            )}
        </div>
    );
};

export default DeveloperList;