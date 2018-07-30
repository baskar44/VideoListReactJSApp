import _ from 'lodash'
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search'
import SearchBar from './search_bar'
import VideoList from './video_list'
import VideoDetail from './video_detail'

const API_KEY = 'AIzaSyB6uVvB54usHWMUkj0vMrj-f-L-Xl7lWxA'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('wow')

   
  }

  videoSearch(term){
    YTSearch({
      key: API_KEY,
      term: {term}},
      (videos) => {
        this.setState({
           videos:videos,
           selectedVideo:videos[0]
        })
      }
    )
  }

  render() {

    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

    return (
      <div id="mainScreen" className="container">
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
        />
      </div>
    )
  }
}

export default App;
