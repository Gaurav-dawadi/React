import React from 'react'

import {Card} from 'bootstrap-4-react'

function Comment(props){
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Body>
               
                <a href='/' class="avatar">
                    <img src={props.image}  alt='avatar'/>
                </a>
                <div class="content">
                    <a href='/' class="author">{props.name}</a>
                    <div class="metadata">
                        <span class="date">{props.number} days ago</span>
                    </div>
                    <div class="text">
                        I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket?
                    </div>
                </div>    
              
            </Card.Body>
        </Card>

    )
}

export default Comment