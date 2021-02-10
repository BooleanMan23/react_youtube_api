import React from 'react';
import VideoItem from './VideoItem';
class VideoList extends React.Component{
    render(){
        return (
            <div className="ml-5 test video-list col-lg-4 col-md-4">
                 <VideoItem video = {this.props.videos[0]}/>
                 <VideoItem video = {this.props.videos[1]}/>
                 <VideoItem video = {this.props.videos[2]}/>
                 <VideoItem video = {this.props.videos[3]}/>
            </div>
        );
    }
}


export default VideoList;