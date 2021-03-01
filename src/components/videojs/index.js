import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import videojs from 'video.js';

const VideoWrapper = styled.div`
    position: relative;
    padding-bottom: 56.25%;
`;

const Video = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const VideoJS = (props) => {
    const [videoNodeRef, setVideoNodeRef] = useState();
    const [mediaPlayer, setMediaPlayer] = useState();

    useEffect(() => {
        if (videoNodeRef) {
            console.log('init video.js');
            setMediaPlayer(
                videojs(videoNodeRef, props, () => {
                    console.log('onPlayerReady', this);
                }),
            );
            return () => {
                console.log('destroy video.js');
                if (mediaPlayer) {
                    mediaPlayer.dispose();
                }
            };
        }
    }, [videoNodeRef]);

    useEffect(() => {
        props?.onMediaPlayerReady(mediaPlayer);
    }, [mediaPlayer]);

    useEffect(() => {
        if (mediaPlayer) {
            mediaPlayer.src(props.sources);
        }
    }, [props.sources]);

    return (
        <VideoWrapper>
            <Video
                ref={(node) => setVideoNodeRef(node)}
                className='video-js'
            ></Video>
        </VideoWrapper>
    );
};
export default VideoJS;
