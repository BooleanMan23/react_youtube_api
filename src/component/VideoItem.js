import React from 'react';

class VideoItem extends React.Component{
    onClickButton = () =>{
        this.props. onVideoItemClicked(this.props.video);
    }
    render(){
        return (
            <div  onClick = {this.onClickButton} className = "video-list-item">
                    <div className= "row ">
                        <div className = "col-7">
                            <img src={this.props.video.thumbnails}></img>
                        </div>
                        <div className = "col-5">
                            <p>{this.props.video.title}</p>
                        </div>
                    </div>
             </div>
        );
    }
}


export default VideoItem;