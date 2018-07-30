import React from 'react'

const VideoListItem = (props) => {

    const imageUrl = props.video.snippet.thumbnails.default.url


    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} alt="video-thumbnail" />
                </div>
                <div className="media-body">
                    <div className="media-body">
                        <div className="media-heading">
                          {props.video.snippet.title}
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem