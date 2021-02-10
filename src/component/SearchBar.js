import React from 'react';

class SearchBar extends React.Component{
    state = {keyword: ''};
    onInputChange = (event) =>{
        this.setState({keyword:event.target.value});
    }

    onClickButton = (event) =>{
        event.preventDefault();
        event.preventDefault();
        this.props.onSubmit(this.state.keyword);
    }
    render(){
        return (
            <form>
                <div className="input-group mb-3"> 
                    <input onChange = {this.onInputChange}  type="text" className="form-control" placeholder={this.props.placeholder}/>
                    <div className="input-group-append">
                        <button onClick = {this.onClickButton} className="btn btn-outline-secondary" type="button">Search</button>
                    </div>
                </div>
            </form>
        );
    }
}


export default SearchBar;