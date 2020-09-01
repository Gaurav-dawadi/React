import React from 'react'
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component{

    state = {
        latitude: null,
        errorMessage: '',
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            (success) => {
                this.setState({
                    latitude: success.coords.latitude
                })
            },
            (error) => {
                this.setState({errorMessage: error.message})
            }
        );
    }

    render(){
       
        if(!this.state.errorMessage && this.state.latitude){
            return <SeasonDisplay latitude={this.state.latitude}/>
        }
        else if(this.state.errorMessage && !this.state.latitude){
            return <div>
                        <h3>
                            Error: {this.state.errorMessage}
                        </h3>               
                    </div>
        }
        else{
            return <div>
                        <h3>
                            Loading......
                        </h3>                   
                    </div>
        }        
    }
}

export default App
