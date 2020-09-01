import React from 'react'
import Comment from './comment'
import ApproveCard from './approvalcard'

import faker from 'faker'

function App(){

    let x = parseInt(Math.random() * 50);

    return(
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 50, marginBottom: 50}}>
            <div></div>

            <div>
                <ApproveCard>
                    <div>
                        <h3>Warning</h3>
                        Are You Sure?                  
                    </div>
                </ApproveCard>
                        
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
        
        </div>
    )
}

export default App