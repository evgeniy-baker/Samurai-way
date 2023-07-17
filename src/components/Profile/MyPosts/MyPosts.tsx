import React from 'react';
import s from './MyPosts.module.css'
import Post from "../Post/Post";
import {PostType, StoreType} from "../../redux/state";

type MyPostType = {
    store: StoreType

    posts: PostType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (newPostText: string) => void
}

export const MyPosts = (props: MyPostType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addPostElement = React.createRef<HTMLTextAreaElement>()

    const onPostChange = () => { // обработчик события для value textarea
        if (addPostElement.current) {
            let text = addPostElement.current.value
            props.store.updateNewPostText(text)
            // props.updateNewPostText(text)
        }
    }

    const addPostHandler = () => {
        props.store.addPost()
        // props.addPost()
    }

    return (
        <div className={s.postsBlock}>
            <h3>Мy posts</h3>

            <div>
                <div>
                    <textarea ref={addPostElement} onChange={onPostChange} value={props.newPostText}/>
                </div>

                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    );
};

export default MyPosts;