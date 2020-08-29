import React from 'react'

function ApproveCard(props){
    return(  
        
        <div  className="block-example border border-primary" class="ui cards" style={{marginBottom: 30}}>
            <div class="card">
                <div>
                    {props.children}
                </div>
                
                <div class="extra content" style={{marginTop: 20}}>
                    <div class="ui two buttons" style={{display: "flex"}}>
                        <div class="ui basic green button" style={{marginRight: 10}}>Approve</div>
                        
                        <div class="ui basic red button" style={{marginLeft: 10}}>Decline</div>                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApproveCard