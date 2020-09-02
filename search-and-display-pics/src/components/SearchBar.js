import React from 'react'

class SearchBar extends React.Component{

    state = {term: ''};

    render(){
        return(
            <div className='ui segment'>
                <form className='ui form'>
                    <div class="field">           
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