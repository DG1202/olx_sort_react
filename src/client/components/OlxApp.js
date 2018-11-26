import React from 'react';
import Table from  './Table'
import SearchBar from  './SearchBar'

class OlxApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {responseArray: []}
    }
    afterResponeState = (responseArray) =>{this.setState({responseArray:responseArray})}
    render(){
        return(
            <div>
                <SearchBar/>
                <Table items = {this.responseArray}/>
            </div>
        );
    }
}

export default OlxApp