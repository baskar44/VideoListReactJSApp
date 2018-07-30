import React from 'react'

const VideoListItem = (props) => {
    
    const imageUrl = props.video.snippet.thumbnails.default.url
    const video = props.video
    const onVideoSelect = props.onVideoSelect

    return (
        <li onClick={() => onVideoSelect(video)} 
            className="video-list-item">
            <div className="media-left">
                <img className="media-object" src={imageUrl} alt="video-thumbnail" />
            </div>
            <div className="media-body">
                <div className="media-heading">
                    {props.video.snippet.title}
                </div>
                <div className="media-sub-heading">
                    {props.video.snippet.description}
                </div>
            </div>
        </li>
    )
}

export default VideoListItem