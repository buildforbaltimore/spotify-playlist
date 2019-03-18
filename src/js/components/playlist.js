import React, { Component } from 'react'
import getPlaylists from '../../helpers/fetch';
import '../../scss/main.scss';

class Playlist extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    return new Promise(resolve => {
      getPlaylists().then(response => {
        resolve(response);
        return this.setState({
          playlists: response
        })
      });
    })
  }

  render() {
    let playlist = [];

    if(this.state != null) {
      playlist = this.state.playlists.items.map((el, i) => {
        console.log('this state: ', );
        return (
          <div className="item">
            <div className="image">
              <img key={i} src={el.images[0].url} className='image' alt="album" />
            </div>
            <div className="effect_1"></div>
            <div className="effect_2"></div>
            <div className="info">
              <p>{el.name}</p>
            </div>
          </div>
        )
      });
    }
    return (
        <div className="items">
          {playlist}
        </div>
    )
  }
}
export default Playlist;