import React from 'react';

const Filter = (props) => {

    function renderOptions(){
        return props.options.map(function(option, index){
            return <option key={index} value={option}>{option}</option>
        });
    }

    const handleChange = (e) => {
        props.sortFilterFunction(e.target.value)
    };

    return (
        <label className={props.classPass}>
            {props.title}:
            <select onChange={e => handleChange(e)}>
                {renderOptions()}
            </select>
        </label>
    );

}

export default Filter;
