import React from 'react'
import SearchBar from './searchbar'

class App extends React.Component{
    render(){
        return(
            <div className='ui container'>
                <h1>Hey There</h1>
                
                <SearchBar />

            </div>
        )
    }
}

export default App