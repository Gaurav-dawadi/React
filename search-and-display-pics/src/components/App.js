import React from 'react'
import unsplash from '../API/unsplash'
import SearchBar from './SearchBar'
import ImageBox from './imagebox'


class App extends React.Component {

    state = {images: []}

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term},
        });
        
        this.setState({images: response.data.results});
    }

    render(){
        return(
            <div className='ui container' style={{marginTop: '20px'}}>
                <h3>Search Image</h3>
                <SearchBar whenSubmit={this.onSearchSubmit} />           
                Found: {this.state.images.length} images

                <ImageBox image={this.state.images} />
           
            </div>
        ) 
    }
}

export default App