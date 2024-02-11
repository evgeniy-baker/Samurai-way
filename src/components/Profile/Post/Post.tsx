import React from 'react';
import s from './Post.module.css'
import {PostType} from "../../../redux/profile-reducer";


const Post = (props: PostType) => {

    return (
        <div className={s.item}>
            <img
                src='https://www.svgrepo.com/show/420334/avatar-bad-breaking.svg'
                alt="Avatar"/>
            {props.message}
            <div>
                <span>like</span>
            </div>
            <div>
                Number of likes : {props.likesCount}
            </div>
        </div>
    );
};

export default Post;