import React from 'react'
import GifList from '../components/GifList.js'

class GifListContainer extends React.Component{
    
    state ={giphyResponse: []}

    componentDidMount(){
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=8zExCFjcHwVrJ2l8VQgsb2TM2pj6OH36")
        .then(response => response.json())
        .then(dataDolphins => {
            this.setState({giphyResponse: dataDolphins.data})
         })
    }


    renderDataDolphins = () => {
        return this.state.giphyResponse.map(dolphin => <GifList dolphinObj={dolphin} /> )
    }

    
    render (){
        // console.log(this.state)
        return <div>
            <h2>here is the gif list container</h2>
                {this.renderDataDolphins()}
            </div>
    }
}

export default GifListContainer


// (dolphin => this.setState({
//     giphyResponse: this.giphyResponse.push(dolphin.images.original.url)