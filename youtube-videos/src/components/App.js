import React from 'react'
import SearchBar from './searchbar'
import YouTube from '../API/youtube'

class App extends React.Component{

    state = {videos: []};

    onTermSubmit = async (term) => {
        const response = await YouTube.get('/search', {
            params:{
                q: term
            }
        })

        // console.log(response)

        this.setState({videos: response.data.items})       
    };

    render(){
        return(
            <div className='ui container'>
                <h1>Hey There</h1>
                
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                Videos: {this.state.videos.length} videos

            </div>
        )
    }
}

export default App