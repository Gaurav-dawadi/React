import React from 'react'

class SearchBar extends React.Component{
    render(){
        return(
            <div className='ui segment'>
                <form className='ui form'>
                    <div class="field">
                        <input type="text" placeholder="Search......" />
                    </div>
                </form>
            </div>
        )
    }
}


export default SearchBar