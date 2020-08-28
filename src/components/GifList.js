import React from 'react'

class GifList extends React.Component{
   

    render(){
        console.log(this.props)
    return(
        <div>
        <ul>
            <li><img alt="dolphins" src={this.props.dolphinObj.images.original.url} /></li>
        </ul>
        </div>
    )
    }
}



export default GifList