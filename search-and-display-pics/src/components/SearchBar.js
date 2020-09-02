import React from 'react'

class SearchBar extends React.Component{

    onInputChange(event){
        console.log(event.target.value);
    }

    render(){
        return(
            <div className='ui segment'>
                <form className='ui form'>
                    <div class="field">
                        {/* this.onInputChange() is incorrect because we are not calling
                            function here instead using its reference only. If we use parenthesis
                            then every time component re-render then function will be called which
                            we donot want. We want to call it in certain time only.*/}
                        <input type="text" onChange={this.onInputChange} placeholder="Search......" />
                    </div>
                </form>
            </div>
        )
    }
}


export default SearchBar