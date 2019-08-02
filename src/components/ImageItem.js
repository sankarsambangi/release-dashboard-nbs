import React from 'react'
import ReactDOM from 'react-dom'

class ImageItem extends React.Component {
    render() {
        return <div>
            <img src={this.props.item.imgsrc} alt='User' />
            <h3>{this.props.item.title}</h3>
            <p>Directed by  {this.props.item.director}</p>
        </div>
    }
}

export default ImageItem;