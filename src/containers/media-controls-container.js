import React, { useState } from 'react';
import styled from 'styled-components';
import CurrentTime from '../components/media-controls/current-time';
import PlaybackSpeed from '../components/media-controls/playback-speed';

const ControlsContainerWrapper = styled.div`
    padding: 5px;
`;
const MediaControlsContainer = (props) => {
    return (
        <ControlsContainerWrapper>
            <PlaybackSpeed mediaPlayer={props.mediaPlayer} />
            <CurrentTime mediaPlayer={props.mediaPlayer} />
        </ControlsContainerWrapper>
    );
};

export default MediaControlsContainer;
