import React from 'react';

function Filter(props) {


    function renderTypes(){
        return props.options.map(function(option, index){
            return <option key={index} value={option}>{option}</option>
        });
    }

    return (
        <form className={props.classPass}>
            <label>
                {props.title}:
                <select>
                    {renderTypes()}
                </select>
            </label>
        </form>
    );

}

export default Filter;
