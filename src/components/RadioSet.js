import React from 'react';

import "./styles/RadioSet.css";
import Playlist from './Playlist';

class RadioSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: {
        morningTracks: this.props.tracks.slice(0, props.tracks.length / 2),
        eveningTracks: props.tracks.slice(props.tracks.length / 2, props.tracks.length)
      }
    }
  }

  // playlists is an object with --
  // morningTracks: first sliced half of tracks list from App &
  // eveningTracks: second sliced half of tracks list from App

  playlistSwitch = (trackIndex, side) => {
    // Track was deleted in Playlist.
    // Now add to top of other playlist
    console.log(`radioset event handler`);
    let radioSetPlaylist = this.state.playlists;
    console.log(this.state.playlists);
    // if (radioSetPlaylist.morningTracks) has
    // if (side === "Morning") {
    //   this.state.playlists[trackIndex]
    // }


    this.setState({
      playlists: radioSetPlaylist
    })
  };

  render() {




    return (
      <div className="radio-set">
        <section className="radio-set--playlist-container">
          {/* When change song, must change side prop and list in const playlists? No. Track does not have side. Playlist does. For song, only move between playlists.morningTracks and playlists.eveningTracks*/}
          <Playlist
            side="Morning"
            tracks={this.state.playlists.morningTracks}
            moveTrack={this.playlistSwitch}
          />
          <Playlist
            side="Evening"
            tracks={this.state.playlists.eveningTracks}
            moveTrack={this.playlistSwitch}
          />
        </section>
      </div>
    );
  };

}
export default RadioSet;
