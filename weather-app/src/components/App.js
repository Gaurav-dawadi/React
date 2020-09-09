import React from 'react'
import './App.css'
import Forecast from './forecast'

const App = () => {
    return(
        <div>

            <h1>React Weather App</h1>

            <main>
                <Forecast/>
            </main>

            <footer>
                Page created by Gaurab
            </footer>
        </div>
    )
}

export default App