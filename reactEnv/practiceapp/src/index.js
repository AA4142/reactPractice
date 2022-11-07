

import React from 'react';
import ReactDOM from 'react-dom/client'

const myFirstElement = <h1>Hello React!</h1>

class Car extends React.Component{
    constructor(props){
        super(props);
        this.brand = name;
    }

    present(){
        return 'I have a ' + this.brand;
    }

    
    render(){
        return <h2>syrup sandwiches and gram allowances</h2>
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);
root.render(<Car/>)