import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import YouTubeSearch from 'youtube-api-search';
import _ from 'lodash';
import Search from './components/Search';
import Player from './components/Player';
import VideoList from './components/VideoList';
const apiKey = "AIzaSyBqVPkJR58nglfztfADh2c7mGvc4Dt0sV4";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  runSearch(searchTerm) {
    YouTubeSearch({ key: apiKey, term: searchTerm }, videos => {
      console.log(videos);
      this.setState({ videos: videos, selectedVideo: videos[0] });
    });
  }

  componentDidMount() {
    this.runSearch("trash polka");
  }

  render() {
    const debouncedRunSearch = _.debounce(this.runSearch.bind(this), 700);
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md="12">
              <Search runSearch={debouncedRunSearch} />
            </Col>
          </Row>
          <Row>
            <Col md="8">
              <Player selectedVideo={this.state.selectedVideo} />
            </Col>
            <Col md="4">
              <VideoList
                videos={this.state.videos}
                videoSelect={(selectedVideo) => this.setState({ selectedVideo: selectedVideo })}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
