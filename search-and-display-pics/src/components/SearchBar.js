import React from 'react'

class SearchBar extends React.Component{

    state = {term: ''};

    onFormSubmit = event => {
        event.preventDefault();

        this.props.whenSubmit(this.state.term);
    }

    render(){
        return(
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className="field">           
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({term: e.target.value})}
                            placeholder="Search......" />
                    </div>
                </form>
            </div>
        )
    }
}


export default SearchBar