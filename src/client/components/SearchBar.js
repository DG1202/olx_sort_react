import React from 'react';
class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {searchValue: '', pagesValue: 2}
    }
    handleSearchValueChange = (e) =>{this.setState({searchValue: e.target.value})}
    handlePagesValueChange = (e) =>{this.setState({pagesValue: e.target.value})}
    onSubmit = () =>{
        fetch("/api?uri= " + this.state.searchValue +
            "&pages=" +  this.state.pagesValue)
            .then(res => res.json())
            .then((res) => {this.props.afterResponseState(res)})
    }
    render(){

        return(
            <form>
                <input type = 'text'
                       id = 'search-inp'
                       placeholder = 'Знайти на OLX'
                       //value = {this.state.searchValue}
                       onChange = {this.handleSearchValueChange}
                />
                <input type = 'number'
                       id = 'pages-inp'
                       placeholder = 'Кількість сторінок'
                       //value = {this.state.pagesValue}
                       onChange = {this.handlePagesValueChange}/>
                <input type ='button'
                       value = "ПОШУК"
                       onClick = {this.onSubmit}/>
            </form>
        );
    }
}

export default SearchBar
