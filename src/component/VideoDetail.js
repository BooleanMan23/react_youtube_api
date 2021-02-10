import React from 'react';

class VideoDetail extends React.Component{
    render(){
        let videoId = "2X_2IdybTV0";
        let title = "Kansas - Carry On Wayward Son (Official Audio)";
        let description = `Official audio for “Carry On Wayward Son” by Kansas
        Listen to Kansas: https://Kansas.lnk.to/listenYD​
        Watch more videos by Kansas: https://Kansas.lnk.to/listenYD/youtube`;

        if(this.props.video){
            videoId = this.props.video.videoId;
            title = this.props.video.title;
            description = this.props.video.description;
        }
        return (
            <div className="test  video-detail col-lg-7 col-md-7">
                <iframe src = {"https://www.youtube.com/embed/"+videoId}   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
                <h2 className="video-title">{title}</h2>
                <p className="video-description">{description}</p>
            </div>
        );
    }
}


export default VideoDetail;