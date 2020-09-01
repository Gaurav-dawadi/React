import React from 'react'

// const App = () => {

//     navigator.geolocation.getCurrentPosition(
//         (success) => console.log(success),
//         (error) => console.log(error)
//     );

//     return(
//         <div>
//             <h1>Hey There</h1>
//         </div>
//     )
// }

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
            return <div>Latitude: {this.state.latitude}</div>
        }
        else if(this.state.errorMessage && !this.state.latitude){
            return <div>Error: {this.state.errorMessage}</div>
        }
        else{
            return <div>Loading......</div>
        }

    }
}

export default App
