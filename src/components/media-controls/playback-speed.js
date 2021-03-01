import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const PlaybackSpeedWrapper = styled.div`
    display: inline;
`;
const SettingsButton = styled.button``;
const PlaybackLabel = styled.span`
    margin: 0 10px;
`;
const PlaybackSpeed = (props) => {
    const [currentPlaybackRate, setCurrentPlaybackRate] = useState(1.0);
    const { mediaPlayer } = props;

    const handlePlaybackRateClick = (rate) => {
        mediaPlayer?.playbackRate(rate);
        setCurrentPlaybackRate(rate);
    };

    const handlePlaybackRateIncreaseClick = (rate) => {
        const newRate = currentPlaybackRate + 0.25;
        mediaPlayer?.playbackRate(newRate);
        setCurrentPlaybackRate(newRate);
    };

    const handlePlaybackRateDecreaseClick = (rate) => {
        if (currentPlaybackRate <= 0.25) return;
        const newRate = currentPlaybackRate - 0.25;
        mediaPlayer?.playbackRate(newRate);
        setCurrentPlaybackRate(newRate);
    };

    useEffect(() => {
        if (mediaPlayer) {
            mediaPlayer.on('ratechange', (event) => {
                const player = event.target.player;
                console.log(
                    `mediaPlayer.playbackRate`,
                    mediaPlayer.playbackRate(),
                );
                console.log(`player.playbackRate`, player.playbackRate());
                setCurrentPlaybackRate(player.playbackRate());
            });
        }
        // TODO: return cleanup and release listeners
    }, [mediaPlayer]);

    return (
        <PlaybackSpeedWrapper>
            <SettingsButton
                onClick={() => {
                    handlePlaybackRateDecreaseClick();
                }}
            >
                &lt;&lt;
            </SettingsButton>
            <SettingsButton
                onClick={() => {
                    handlePlaybackRateClick(1.0);
                }}
            >
                RESET
            </SettingsButton>
            <SettingsButton
                onClick={() => {
                    handlePlaybackRateIncreaseClick(0.75);
                }}
            >
                &gt;&gt;
            </SettingsButton>
            <PlaybackLabel>
                Current playback rate: {currentPlaybackRate}
            </PlaybackLabel>
        </PlaybackSpeedWrapper>
    );
};
export default PlaybackSpeed;
