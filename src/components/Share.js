import React from 'react';
import { TwitterIcon, TwitterShareButton } from 'react-share';
import classes from '../style/Share.module.css';

const Share = () => {
    return (
        <>
            <TwitterShareButton url="https://qiita.com/koyablue/items/4aeee2fa3c831e2842b7" title="[What I did today]" >
                <TwitterIcon round={true} size={50}/>
            </TwitterShareButton>
        </>
    )
}

export default Share
