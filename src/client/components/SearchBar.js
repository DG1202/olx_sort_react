import React from 'react';
class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {searchValue: '', pagesValue: 2}
    }
    handleSearchValueChange = (e) =>{this.setState({searchValue: e.target.value})}
    handlePagesValueChange = (e) =>{this.setState({pagesValue: e.target.value})}
    onSubmit = (e) =>{
        fetch("/api?uri= " + this.searchValue +
            "&pages=" +  this.pagesValue)
            .then(res => res.json())
            .then((res) => {this.props.afterResponseState(res)})
    }
    render(){
        return(
            <form>
                <input type = 'text'
                       id = 'search-inp'
                       placeholder = 'Знайти на OLX'
                       value = {this.searchValue}
                       onChange = {this.handleSearchValueChange}
                />
                <input type = 'number'
                       id = 'pages-inp'
                       placeholder = 'Кількість сторінок'
                       value = {this.pagesValue}
                       onChange = {this.handlePagesValueChange}/>
                <input type ='submit'
                       value = "ПОШУК"
                       onClick = {this.oSubmit}/>
            </form>
        );
    }
}

export default SearchBar
