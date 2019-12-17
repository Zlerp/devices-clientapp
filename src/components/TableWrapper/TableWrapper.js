import React, {Component} from 'react';
import axios from 'axios';
import './TableWrapper.scss';
import Filter from './../Filter/Filter';

class TableWrapper extends Component  {
    constructor(props){
        super(props);

        this.state = {
            deviceArray: [],
        };
    }


    requestApi(url) {
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState(prevState => ({
                    deviceArray:  data,
                }));
            })
    }


    componentDidMount(){
        this.requestApi(`http://localhost:3000/devices`);
    }


    renderDevices(){
        return this.state.deviceArray.map(function(device, index){
           return (
               <tr key={device.id}>
                   <td>{device.system_name}</td>
                   <td>{device.type}</td>
                   <td>{device.hdd_capacity}</td>
               </tr>
           );
        });
    }

    render(){
        return (
            <div>

                <div className="filters my-3">
                    <div className="d-flex align-items-center">
                        <p className="mb-0 mr-4">Filters:</p>

                        <Filter classPass="mr-3"
                                title="Device Type"
                                options={['All', 'WINDOWS_WORKSTATIONS', 'WINDOWS_SERVER', 'MAC']} />
                        <Filter title="Sort by"
                                options={['HDD Capacity', 'System Name']} />
                    </div>
                </div>


                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">System Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Capacity</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderDevices()}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default TableWrapper;
