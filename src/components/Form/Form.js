import React from 'react';

function FormWrapper() {
    return (
        <form className="modal-form">
            <div className="form-group">
                <label>System Name</label>
                <input type="text" className="form-control" placeholder="System Name" />
            </div>
            <div className="form-group">
                <label>Type                </label>
                <select className="form-control">
                    <option>Windows Workstation</option>
                    <option>Windows Server</option>
                    <option>Mac</option>
                </select>
            </div>

            <div className="form-group">
                <label>HDD Capacity (GB)</label>
                <input type="text" className="form-control"  placeholder="HDD Capacity" />
            </div>
        </form>
    );
}

export default FormWrapper;
