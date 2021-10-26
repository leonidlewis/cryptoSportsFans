import React from 'react';

const NftContainer = ({item}) => {
    return (
        <div>
            <img src={item.url} alt="nft in city"/>
            <p>{item.title}</p>
        </div>
    )
}

export default NftContainer;