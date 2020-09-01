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
    constructor(){
        super();
        this.state = {
            latitude: null,
        }
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            (success) => {
                this.setState({
                    latitude: success.coords.latitude
                })
            },
             (error) => console.log(error)
        );
    }

    render(){
        return(
            <div>Latitude: {this.state.latitude}</div>
        )
    }
}

export default App
