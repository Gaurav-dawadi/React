import React from 'react'

import SearchBar from './searchbar'
import YouTube from '../API/youtube'
import VideoList from './videolist'
import VideoDetail from './videodetail'

class App extends React.Component{

    state = {videos: [], selectedVideo: null};

    componentDidMount(){
        this.onTermSubmit('HIGHLIGHTS | SPURS 4-1 READING');
    }

    onTermSubmit = async (term) => {
        const response = await YouTube.get('/search', {
            params:{
                q: term
            }
        })

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })       
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})     
    }

    render(){
        return(
            <div className='ui container' style={{marginTop: '20px'}}>            
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.selectedVideo}/>             
                        </div>
                        <div className='five wide column'>
                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}

export default App