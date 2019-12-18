import React, {Component} from 'react';
import axios from 'axios';
import './ListWrapper.scss';
import Filter from './../Filter/Filter';
import ListDevices from "./ListDevices/ListDevices";
import ModalWrapper from './../Modal/ModalWrapper';
import orderBy from 'lodash/orderBy';

class ListWrapper extends Component  {
    constructor(props){
        super(props);

        this.state = {
            deviceArray: [],
            filterBy: 'ALL',
            sortBy: 'HDD Capacity',

        };
    }


    requestApi(url) {
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState(prevState => ({
                    deviceArray:  data,
                }));
                this.sortFunction();
            })
    }

    componentDidMount(){
        this.requestApi(`http://localhost:3000/devices`);
    }


    setSortBy = (sortBy) => {
        this.setState({ sortBy: sortBy }, () => {
            this.sortFunction();
        });
    };

    sortFunction = () => {
        let array = this.state.deviceArray;
        if (this.state.sortBy === 'HDD Capacity') {
            array = orderBy(array, function (o) { return Number(o.hdd_capacity); }, ['asc']);
        } else if (this.state.sortBy === 'System Name') {
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

    addNewDevice = (data) => {
        const device = {
            system_name: data.system_name,
            type: data.type,
            hdd_capacity: data.hdd_capacity
        };

        axios.post(`http://localhost:3000/devices`, device )
            .then(res => {
                this.setState({
                    deviceArray: [...this.state.deviceArray, res.data]
                });
                this.sortFunction();
            })
    };

    deleteDevice = (id) => {
        axios.delete(`http://localhost:3000/devices/${id}`)
            .then(res => {

                let array = [...this.state.deviceArray];
                let index = array.findIndex(obj => obj.id === id) ;
                if (index !== -1) {
                    array.splice(index, 1);
                    this.setState({deviceArray: array});
                }
            })
    };

    updateDevice = (data) => {
        const device = {
            id: data.id,
            system_name: data.system_name,
            type: data.type,
            hdd_capacity: data.hdd_capacity
        };


        axios.put(`http://localhost:3000/devices/${device.id}`, device )
            .then(res => {
                let array = [...this.state.deviceArray];
                let index = array.findIndex(obj => obj.id === device.id) ;
                if (index !== -1) {
                    array[index] = device;
                    this.setState({deviceArray: array});
                }
                this.sortFunction();

            })
    };


    render(){
        return (
            <div>

                <div className="row flex-column-reverse flex-sm-row">
                    <div className="col-12 col-sm-6 mt-3 mb-3 mb-sm-0">
                        <h5 className="mb-2 mb-sm-3 d-none d-sm-block">Devices:</h5>
                        <div className="list-group">
                            <ListDevices deviceArray={this.state.deviceArray}
                                         filterBy={this.state.filterBy}
                                         deleteDevice={this.deleteDevice}
                                         formFunction={this.updateDevice}/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="filters my-3">


                            <div className="d-flex flex-column">
                                <h5 className="mb-2 mb-sm-3">Filters:</h5>
                                <Filter title="Sort by"
                                        options={['HDD Capacity', 'System Name']}
                                        sortFilterFunction={ this.setSortBy}
                                        classPass="mb-2 mb-sm-3 "/>
                                <Filter classPass="mb-2 mb-sm-3  "
                                        title="Device Type"
                                        options={['ALL', 'WINDOWS_WORKSTATION', 'WINDOWS_SERVER', 'MAC']}
                                        sortFilterFunction={this.filterType}/>
                            </div>


                            <ModalWrapper title='Add New Device'
                                          btnText="Add New Device"
                                          btnVariant='success'
                                          formFunction={this.addNewDevice}/>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ListWrapper;
