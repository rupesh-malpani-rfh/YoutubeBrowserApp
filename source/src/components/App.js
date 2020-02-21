import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/Youtube'

class App extends React.Component {
    state = {
        videos: []
    }
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params:{
                q: term
            }
        });
        this.setState({
            videos: response.data.items
        });
        // console.log(response.data.items);
    };

    render() {
        return (
            <div className="ui container">
                <div>
                    <SearchBar onFormSubmit={this.onTermSubmit} />
                    I have { this.state.videos.length } videos
                </div>
            </div>
        )
    }
}

export default App;