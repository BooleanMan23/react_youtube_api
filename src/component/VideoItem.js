import React from 'react';

class VideoItem extends React.Component{
    render(){
        let videoTitle = "Test Title";
        let videoThumbnail = "building.jpg";
        let videoId = "2X_2IdybTV0";
        if(this.props.video){
            videoTitle = this.props.video.title;
            videoThumbnail = this.props.video.thumbnails;
            videoId = this.props.video.videoId;
        }
        console.log(this.props.video);
        return (
            <div onClick = {this.onClickButton} className = "video-list-item">
                    <div className= "row ">
                        <div className = "col-7">
                            <img src={videoThumbnail}></img>
                        </div>
                        <div className = "col-5">
                            <p>{videoTitle}</p>
                        </div>
                    </div>
                </div>
        );
    }
}


export default VideoItem;