import React from 'react'

const VideoDetail = ({video}) => {

    if(!video) {
        return <div>Loading...</div>
    }

    console.log(video.id.videoId)
    const videoId = video.id.videoId
    const url = `https://www.youtube.com/embed/${videoId}`

    return (
        <div className="video-detail">
            <iframe className="embed-responsive-item" src={url}></iframe>

             <div className="details">
                <h3>{video.snippet.title}</h3>
                <p>{video.snippet.description}</p>
             </div>
        </div>
    )
}

export default VideoDetail