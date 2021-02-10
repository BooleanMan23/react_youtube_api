import React from 'react';

class VideoDetail extends React.Component{
    render(){
 
        return (
            <div className="test  video-detail col-lg-7 col-md-7">
                <iframe src = {"https://www.youtube.com/embed/"+this.props.video.videoId}   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
                <h2 className="video-title">{this.props.video.title}</h2>
                <p className="video-description">{this.props.video.description}</p>
            </div>
        );
    }
}


export default VideoDetail;