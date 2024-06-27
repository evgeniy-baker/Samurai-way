import { addPostAC, PostType } from "../../../redux/profile-reducer"
import MyPosts from "./MyPosts"
import { connect } from "react-redux"
import { RootReducerType } from "../../../redux/redux-store"

type mapStatePropsType = {
  posts: PostType[]
}
type mapDispatchPropsType = {
  addPost: (newPostBody: string) => void
}

const mapStateToProps = (state: RootReducerType): mapStatePropsType => {
  return {
    posts: state.profilePage.posts,
  }
}

// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
//     return {
//         addPost: () => { dispatch(addPostActionCreator()) },
//         updateNewPostText: (text: string) => { dispatch(updateNewPostTextActionCreator(text)) }
//     }
// }

export const MyPostsContainer = connect(mapStateToProps, {
  addPost: addPostAC,
})(MyPosts)

export type MyPostsPropsType = mapStatePropsType & mapDispatchPropsType

// export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
