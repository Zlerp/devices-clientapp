import React from 'react';
import {fixName} from "../../helpers/helpers";
import './Filter.scss'

const Filter = (props) => {

    function renderOptions(){
        return props.options.map(function(option, index){
            return <option key={index} value={option}>{fixName(option)}</option>
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
