import React from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import VideoItem from './VideoItem';
import youtube from '../apis/youtube';
class App extends React.Component{
    state = {restVideo : [], mainVideo : ''};
    onSearchSubmit = (keyword) =>{
         youtube.get('/search', {
            params:{
                q:keyword
            }
        }).then(response =>{
            const videoArray = [];
            response.data.items.forEach(video => {
                 let videoItem = {
                    videoId : video.id.videoId,
                    thumbnails : video.snippet.thumbnails.medium.url,
                    title : video.snippet.title,
                    description : video.snippet.description
                }
                videoArray.push(videoItem);
            }); 
            const [firstVideo, ...restVideo ] = videoArray;
            this.setState({
                restVideo: restVideo,
                mainVideo : firstVideo
            });

        }).catch(err =>{
            console.log(err);
        })
    }
    render(){
        return (
            <div className="container mt-4">
                <SearchBar placeholder = "Search video"  onSubmit={this.onSearchSubmit}/>
                <div className="row">
                    <VideoDetail video = {this.state.mainVideo}/>
                    <VideoList videos = {this.state.restVideo}>
                     
                    </VideoList>
                </div>
            </div>
        );
    }
}

export default App;