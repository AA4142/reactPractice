class Hello extends React.Component{
    render(){
        return React.createElement('div', null, `Hello`);
    }
}

ReactDOM.render(
    React.createElement('div', null, 'BIGYOSHI'),
    document.getElementById('root')
);