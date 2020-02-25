import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/Youtube'

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    // for showing some default search when app gets rendered on screen. Here, we are
    // searching "buildings" related video when the app gets rendered on screen
    componentDidMount() {
        this.onTermSubmit('buildings');
    }

    onTermSubmit = async (term) => {
        // term will contain the text that user needs to search
        // console.log(term);
        // our api request will look like "https://www.googleapis.com/youtube/v3/search?cars"
        const response = await youtube.get('/search', {
            params:{
                q: term
            }
        });
        // console.log(response.data.items);

        // videos: response.data.items - list of fetched videos are now in videos propery of
        // state object

        // selectedVideo: response.data.items[0] - by default first video from videos array
        // is selected
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
        // console.log(response.data.items);
    };

    onVideoSelect = (video) => {
        // console.log(video);

        // Here, on whatever video user selects, that video is passed from "VideoItem" component
        // From "VideoItem" component, it is then passed to "VideoList" component.
        // From "VideoList" component, it is then passed to "App" component
        // and that video is passed to "selectedVideo" propery of state object

        // this latest video selected by user is now in prop object of "VideoDetail" component
        this.setState({
            selectedVideo: video
        });
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    <SearchBar onFormSubmit = {this.onTermSubmit} />
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="nine wide column">
                                <VideoDetail video={this.state.selectedVideo} />
                            </div>
                            <div className="seven wide column">
                                <VideoList onVideoSelect = {this.onVideoSelect} videos={this.state.videos}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;