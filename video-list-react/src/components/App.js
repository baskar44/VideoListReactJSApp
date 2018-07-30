import React, { Component } from 'react';
import './css/App.css';
import YTSearch from 'youtube-api-search'
import SearchBar from './search_bar'
import VideoList from './video_list'
import VideoDetail from './video_detail'

const API_KEY = 'AIzaSyB6uVvB54usHWMUkj0vMrj-f-L-Xl7lWxA'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: []
    }

    YTSearch({
      key: API_KEY,
      term: 'surfboards'},
      (videos) => {
        this.setState({
           videos
           //this.setState({videos:videos})
        })
      }
    )
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App;
