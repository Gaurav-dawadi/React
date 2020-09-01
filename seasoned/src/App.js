import React from 'react'

const App = () => {

    navigator.geolocation.getCurrentPosition(
        (success) => console.log(success),
         (error) => console.log(error)
    );

    return(
        <div>
            <h1>Hey There</h1>

        </div>
    )
}

export default App
