import React from 'react'

import { Card, Button} from 'bootstrap-4-react';

function ApproveCard(props){
    return(  

        <div>

            <Card style={{ width: '21rem' , marginTop: 20}}>
                <Card.Body>

                    <Card.Text>
                        {props.children}    
                    </Card.Text>

                    <div style={{marginTop: 40}}>
                        <Button success outline lg>Approve</Button>
                        <Button danger outline lg>Reject</Button>
                    </div>

                </Card.Body>
            </Card>

        </div>
        
    )
}

export default ApproveCard