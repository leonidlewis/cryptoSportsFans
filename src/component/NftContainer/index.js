import React from 'react';

const NftContainer = ({item}) => {
    console.log('items',item)
    return (
        <div>
            <img src={item.url} alt="nft in city"/>
            <p>{item.title}</p>
        </div>
    )
}

export default NftContainer;