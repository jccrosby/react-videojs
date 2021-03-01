import React, { useState } from 'react';

const MediaPlaylist = ({ mediaItems, onClickMediaItem }) => {
    //const [mediaItems, setMediaItems] = useState(mediaPlaylist);

    const handleMediaItemClicked = (mediaItem) => {
        //console.log(`clicked media item`, mediaItem);
        onClickMediaItem(mediaItem);
    };

    const renderMediaItems = () => {
        const mediaItemsEl = mediaItems.map((mediaItem) => {
            return (
                <li
                    key={mediaItem.id}
                    onClick={() => handleMediaItemClicked(mediaItem)}
                >
                    {mediaItem.title}
                </li>
            );
        });
        return <ul>{mediaItemsEl}</ul>;
    };

    return (
        <>
            <h3>Media Items</h3>
            {renderMediaItems()}
        </>
    );
};
export default MediaPlaylist;
