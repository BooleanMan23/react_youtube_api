import React from 'react';
import VideoItem from './VideoItem';
class VideoList extends React.Component{
    onVideoItemClicked = (video) =>{
        this.props.onVideoItemClicked(video);
    }
    render(){
        return (
            <div className="ml-5 test video-list col-lg-4 col-md-4">
                <VideoItem video = {this.props.videos[0]} onVideoItemClicked={this.onVideoItemClicked} />
                <VideoItem video = {this.props.videos[1]} onVideoItemClicked={this.onVideoItemClicked}/>
                <VideoItem video = {this.props.videos[2]} onVideoItemClicked={this.onVideoItemClicked} />
                <VideoItem video = {this.props.videos[3]} onVideoItemClicked={this.onVideoItemClicked} />
              
            </div>
        );
    }
}


export default VideoList;