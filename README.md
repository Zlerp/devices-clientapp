
#NinaRMM Challenge
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### Prerequisites:
You must clone and run the project here: https://github.com/NinjaMSP/devicesTask_serverApp   
The devicesTask_serverApp project **MUST** be ran on port 3000.

### Clone and Run the devices-clientapp Project:

Once Cloned, go into project root directory and run:

`yarn install`    

In the project directory, you can run:

`yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### Components:

##### List Wrapper   
`src/components/ListWrapper/ListWrapper.js`    
Contains the **ListWrapper** Component.    
This is where the main bulk of the functionality is.    
All of the API functions are in this component.    
The state of the `deviceArray` is set here and passed down to **ListDevices** component.


##### List Devices   
`src/components/ListWrapper/ListDevices/ListDevices.js`    
Contains the **ListDevices** Component.    
This is where the List Items are rendered.    
This gets passed the state `deviceArray` and some functions to delete/edit a device.    


##### Filter   
`src/components/Filter/Filter.js`    
Contains the **Filter** Component.    
This is where the Filter is rendered.
It needs to be passed a `title`, `options` array, and a `sortFilterFunction` which is fired on change.    



##### ModalWrapper   
`src/components/Modal/ModalWrapper.js`    
Contains the **ModalWrapper** Component.    
This is where the Modal is rendered.
It needs to be passed a `btnText`, `title`.
You should also pass a `formFunctiion` which is fired on submit, and a `device` if a device is edited.    


##### Form   
`src/components/Modal/ModalWrapper.js`    
Contains the **Form** Component.    
This is where the Modal is rendered.   
It needs to be passed a `title`, `divce` (if being edited), and a `formFunctiion` which is fired on submit.   
This component is using `react-hook-form` for validation and passing the formData back up to the ListWrapper to hit APIs/Update State.






