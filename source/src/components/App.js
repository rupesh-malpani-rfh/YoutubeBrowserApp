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
        const response = await youtube.get('/search', {
            params:{
                q: term
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
        // console.log(response.data.items);
    };

    onVideoSelect = (video) => {
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