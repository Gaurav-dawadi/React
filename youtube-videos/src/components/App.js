import React from 'react'
import SearchBar from './searchbar'
import YouTube from '../API/youtube'

class App extends React.Component{

    onTermSubmit = (term) => {
        YouTube.get('/search', {
            params:{
                q: term
            }
        })
    }

    render(){
        return(
            <div className='ui container'>
                <h1>Hey There</h1>
                
                <SearchBar onFormSubmit={this.onTermSubmit}/>

            </div>
        )
    }
}

export default App