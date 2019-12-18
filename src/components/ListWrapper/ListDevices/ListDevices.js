import React from 'react';
import {fixName} from './../../../helpers/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

const ListDevices = (props) => {
    

    let filterArray = props.deviceArray;
    if (props.filterBy !== 'ALL') {
        filterArray = filterArray.filter( function (device) {
            return device.type === props.filterBy;
        });
    }
    return filterArray.map(function(device){
        return (

            <a href="#" key={device.id} className="p-2 list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-0">{device.system_name}</h6>
                    <div className="right d-flex">
                        <div className="hover-lighten text-primary mr-3"><FontAwesomeIcon icon={faEdit} /></div>
                        <div className="hover-lighten text-danger"><FontAwesomeIcon icon={faTrash} /></div>
                    </div>
                </div>
                <p className="mb-0 text-primary">{fixName(device.type)}</p>
                <small className="text-muted">{device.hdd_capacity} GB</small>
            </a>

        );
    });

};

export default ListDevices;
