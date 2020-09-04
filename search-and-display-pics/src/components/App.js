import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'


class App extends React.Component {

    state = {images: []}

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers:{
                Authorization:
                    'Client-ID 8cN1LMBqjX7rLfnYxdHS-OlzwqdaU_lGBoPjhiISJ7E'
            }
        });
        
        this.setState({images: response.data.results});
        console.log(response.data.results);
    }

    render(){
        return(
            <div className='ui container' style={{marginTop: '20px'}}>
                <h3>Search Image</h3>
                <SearchBar whenSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        ) 
    }
}

export default App