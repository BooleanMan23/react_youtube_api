import React from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import VideoItem from './VideoItem';
import youtube from '../apis/youtube';

class App extends React.Component{
    state = {restVideo : [{videoId : '123', thumbnails : 'building.jpg', title :  'building', description : 'description'}, {videoId : '123', thumbnails : 'building.jpg', title :  'building', description : 'description'}, {videoId : '123', thumbnails : 'building.jpg', title :  'building', description : 'description'}, {videoId : '123', thumbnails : 'building.jpg', title :  'building', description : 'description'}], mainVideo : ''};

    componentDidMount(){
        youtube.get('/search', {
            params:{
                q:'building'
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
    onVideoItemClicked = (video) =>{
        this.setState({
            mainVideo : video
        });
    }
    render(){
        return (
            <div className="container mt-4">
                <SearchBar placeholder = "Search video"  onSubmit={this.onSearchSubmit}/>
                <div className="row">
                    <VideoDetail video = {this.state.mainVideo}/>
                    <VideoList test = "test2" videos = {this.state.restVideo} onVideoItemClicked = {this.onVideoItemClicked}>
                     
                    </VideoList>
                </div>
            </div>
        );
    }
}

export default App;