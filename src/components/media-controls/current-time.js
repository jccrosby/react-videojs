import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CurrentTimeWrapper = styled.div``;
const CurrentTimeLabel = styled.div`
    display: inline;
    padding: 0 5px;
`;
const SettingsButton = styled.button``;
const CurrentTime = (props) => {
    const [currentTime, setCurrentTime] = useState(0);
    const [currentDuration, setCurrentDuration] = useState(0);
    const SEEK_AMT = 0.1;
    useEffect(() => {
        const { mediaPlayer } = props;
        if (mediaPlayer) {
            setCurrentTime(mediaPlayer.currentTime());
            mediaPlayer.on('timeupdate', (event) => {
                setCurrentTime(mediaPlayer.currentTime());
                setCurrentDuration(mediaPlayer.duration());
            });
        }
    }, [props.mediaPlayer]);

    const handleCurrentTimeSeekBack = () => {
        if (currentTime > 0 + SEEK_AMT) {
            const { mediaPlayer } = props;
            mediaPlayer.pause();
            mediaPlayer.currentTime(currentTime - SEEK_AMT);
        }
    };

    const handleCurrentTimeSeekForward = () => {
        if (currentTime < currentDuration - SEEK_AMT) {
            const { mediaPlayer } = props;
            mediaPlayer.pause();
            mediaPlayer.currentTime(currentTime + SEEK_AMT);
        }
    };

    return (
        <CurrentTimeWrapper>
            <SettingsButton
                onClick={() => {
                    handleCurrentTimeSeekBack();
                }}
            >
                &lt;&lt;
            </SettingsButton>
            <SettingsButton
                onClick={() => {
                    props.mediaPlayer.play();
                }}
            >
                PLAY
            </SettingsButton>
            <SettingsButton
                onClick={() => {
                    handleCurrentTimeSeekForward();
                }}
            >
                &gt;&gt;
            </SettingsButton>
            <CurrentTimeLabel>Current time: {currentTime}</CurrentTimeLabel>
            <CurrentTimeLabel>
                Current duration: {currentDuration}
            </CurrentTimeLabel>
        </CurrentTimeWrapper>
    );
};

export default CurrentTime;
