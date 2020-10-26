import React from "react";
import SearchBar from "./Components/SearchBar";
import youtube from "./Apis/Youtube";
import VideoList from "./Components/VideoList";
import VideoDetails from "./Components/VideoDetails";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchTermSubmit("trendings");
  }

  onSearchTermSubmit = async (term) => {
    const result = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: result.data.items,
      selectedVideo: result.data.items[0],
    });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
