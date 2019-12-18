import React,  { useEffect } from 'react';
import useForm from 'react-hook-form';

function FormWrapper(props) {
    const { register, handleSubmit, errors, setValue } = useForm(); // initialise the hook
    const onSubmit = data => {
        props.formFunction(data)
        props.closeModal();
    };


    useEffect(() => {
        if (props.device) {
            setValue('system_name', props.device.system_name);
            setValue('type', props.device.type);
            setValue('hdd_capacity', props.device.hdd_capacity);
        }
    });


    return (
        <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>
            {
                props.device &&
                    <input type="hidden" name="id" value={props.device.id} ref={register} />
            }

            <div className="form-group">
                <label>System Name<span className="text-danger">*</span></label>
                <input type="text" name='system_name' className="form-control" placeholder="System Name" ref={register({ required: true })}/>
                {errors.system_name && <small className='text-danger'>System name is required.</small>}
            </div>
            <div className="form-group">
                <label>Type<span className="text-danger">*</span> </label>
                <select  ref={register} name="type" className="form-control">
                    <option value="WINDOWS_WORKSTATION">Windows Workstation</option>
                    <option value="WINDOWS_SERVER">Windows Server</option>
                    <option value="MAC">Mac</option>
                </select>
            </div>

            <div className="form-group">
                <label>HDD Capacity (GB)<span className="text-danger">*</span></label>
                <input type="text"  name="hdd_capacity" className="form-control" ref={register({ pattern: /\d+/, required: true })}  placeholder="HDD Capacity" />
                {errors.hdd_capacity && <small className='text-danger'>Please enter number for HDD Capacity in GB.</small>}
            </div>
            <input className='btn btn-primary' type="submit" value='Submit'/>
        </form>
    );
}

export default FormWrapper;
