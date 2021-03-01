import React, { useState } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import MediaPlaylist from './components/media-playlist';
import VideoJS from './components/videojs';
import MediaControlsContainer from './containers/media-controls-container';

const mediaItems = [
    {
        id: 0,
        src:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        type: 'video/mp4',
        poster:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        description:
            "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        title: 'Big Buck Bunny',
    },
    {
        id: 1,
        src:
            'https://storage.googleapis.com/shaka-demo-assets/angel-one-hls/hls.m3u8',
        type: 'application/x-mpegURL',
        vttItems: [],
        poster: '',
        metadata: '',
        description: 'Star Trek: Angel One (alt. audio)',
        title: 'Star Trek: Angel One Alt. Audio',
    },
    {
        id: 2,
        src:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        type: 'video/mp4',
        poster:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
        description: 'The first Blender Open Movie from 2006',
        title: 'Elephant Dream',
    },
    {
        id: 3,
        src:
            'https://mlb-cuts-diamond.mlb.com/FORGE/2021/2021-02/04/9c5047f4-6111b523-73d8fc23-csvm-diamondx64-asset.m3u8',
        type: 'application/x-mpegURL',
        vttItems: [],
        poster:
            'https://img.mlbstatic.com/mlb-images/image/private/ar_16:9,g_auto,q_auto:good,w_1024,c_fill,f_jpg/mlb/l8g5zkpifia28hwvtcph',
        metadata: '',
        description:
            'Harold Reynolds breaks down the prolific career of Hank Aaron in honor of Black History Month',
        title: 'Breaking down Hank Aaron',
    },
    {
        id: 4,
        src:
            'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8',
        type: 'application/x-mpegURL',
        vttItems: [],
        poster: '',
        description: 'Live Akamai 01 M3U8',
        title: 'Live Akamai 01 M3U8',
    },
];

const defaultVideoJsOptions = {
    autoplay: true,
    controls: true,
    sources: [],
};

const AppWrapper = styled.div`
    font-family: Arial, Helvetica, sans-serif;
`;

const App = () => {
    const [videoJsOptions, setVideoJsOptions] = useState(
        Object.assign({}, defaultVideoJsOptions),
    );
    const [mediaPlayer, setMediaPlayer] = useState();

    const handleMediaItemClicked = (mediaItem) => {
        const updatedOptions = Object.assign({}, videoJsOptions, {
            sources: [mediaItem],
        });
        console.log('media item clicked', mediaItem);
        setVideoJsOptions(updatedOptions);
    };

    const handleMediaPlayerReady = (mediaPlayer) => {
        setMediaPlayer(mediaPlayer);
    };

    return (
        <AppWrapper>
            <VideoJS
                {...videoJsOptions}
                onMediaPlayerReady={handleMediaPlayerReady}
            />
            <MediaControlsContainer mediaPlayer={mediaPlayer} />
            <MediaPlaylist
                mediaItems={mediaItems}
                onClickMediaItem={(mediaItem) =>
                    handleMediaItemClicked(mediaItem)
                }
            />
        </AppWrapper>
    );
};

render(<App />, document.getElementById('videojs-app'));
