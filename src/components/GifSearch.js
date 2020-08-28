import React from 'react'

export default class GifSearch extends React.Component {




    render(){
        return(
            <div> 
            <form onSubmit={(event) => this.props.filterSubmit(event)}>
                <label>Enter a search term:</label>
                <br></br>
                <input name="search" type="text" value={this.props.valueProp} onChange={this.props.onChangeSearch}></input>
                <button>Submit</button>
            </form>
            </div>
        )
    }

}