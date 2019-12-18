import React, {Component} from 'react';
import axios from 'axios';
import './ListWrapper.scss';
import Filter from './../Filter/Filter';
import {fixName} from './../../helpers/helpers';

import orderBy from 'lodash/orderBy';
import ListDevices from "./ListDevices/ListDevices";


class TableWrapper extends Component  {
    constructor(props){
        super(props);

        this.state = {
            deviceArray: [],
            filterBy: 'ALL',
        };
    }


    requestApi(url) {
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState(prevState => ({
                    deviceArray:  data,
                }));
                this.sortFunction('HDD Capacity');
            })
    }

    componentDidMount(){
        this.requestApi(`http://localhost:3000/devices`);
    }


    sortFunction = (sortBy) => {
        let array = this.state.deviceArray;
        if (sortBy === 'HDD Capacity') {
            array = orderBy(array, function (o) { return Number(o.hdd_capacity); }, ['asc']);
        } else if (sortBy === 'System Name') {
            array = orderBy(array, ['system_name'], ['asc']);
        }
        this.setState({
            deviceArray: array
        })
    };

    filterType = (filterBy) => {
        this.setState({
            filterBy: filterBy
        })
    };

    render(){
        return (
            <div>

                <div className="filters my-3">
                    <div className="d-flex align-items-center">
                        <p className="mb-0 mr-4">Filters:</p>

                        <Filter classPass="mr-3"
                                title="Device Type"
                                options={['ALL', 'WINDOWS_WORKSTATION', 'WINDOWS_SERVER', 'MAC']}
                                sortFilterFunction={this.filterType}/>
                        <Filter title="Sort by"
                                options={['HDD Capacity', 'System Name']}
                                sortFilterFunction={ this.sortFunction}/>
                    </div>
                </div>


                <div className="list-group">
                    <ListDevices deviceArray={this.state.deviceArray}
                        filterBy={this.state.filterBy}/>
                </div>

            </div>
        );
    }

}

export default TableWrapper;
