import React from 'react'
import Comment from './comment'
import ApproveCard from './approvalcard'

import faker from 'faker'

function App(){

    let x = parseInt(Math.random() * 50);

    return(
    <div style={{marginLeft: 50, marginTop: 50}}>
         
            {/* <Comment name={`${faker.name.firstName()} ${faker.name.lastName()}`} image={faker.image.avatar()} number={x} />
            <Comment name={`${faker.name.firstName()} ${faker.name.lastName()}`} image={faker.image.avatar()} number={x} /> */}
                      
            <ApproveCard>
                <Comment name={`${faker.name.firstName()} ${faker.name.lastName()}`} image={faker.image.avatar()} number={x} />
            </ApproveCard>

            <ApproveCard>
                <Comment name={`${faker.name.firstName()} ${faker.name.lastName()}`} image={faker.image.avatar()} number={x} />
            </ApproveCard>

            <ApproveCard>
                <Comment name={`${faker.name.firstName()} ${faker.name.lastName()}`} image={faker.image.avatar()} number={x} />
            </ApproveCard>
        
        </div>
    )
}

export default App