import React from "react"
import s from "./MyPosts.module.css"
import Post from "../Post/Post"
import { MyPostsPropsType } from "./MyPostsContainer"
import { Field, InjectedFormProps, reduxForm } from "redux-form"
import { maxLengthCreator, required } from "../../../utils/validators"
import { Textarea } from "../../Common/FormsControls"

const maxLength10 = maxLengthCreator(10)

export const MyPosts = (props: MyPostsPropsType) => {
  let postsElements = props.posts.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

  const addNewPost = (values: MyPostType) => {
    props.addPost(values.newPostBody)
  }

  return (
    <div className={s.postsBlock}>
      <h3>Мy posts</h3>

      <MyPostReduxForm onSubmit={addNewPost} />

      <div className={s.posts}>{postsElements}</div>
    </div>
  )
}

type MyPostType = {
  newPostBody: string
}
const MyPostFormForm = (props: InjectedFormProps<MyPostType>) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          // component={"textarea"}
          component={Textarea}
          name={"newPostBody"}
          placeholder={"Enter message text"}
          validate={[required, maxLength10]}
        />
      </div>

      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}
const MyPostReduxForm = reduxForm<MyPostType>({
  form: "newPostBody",
})(MyPostFormForm)

export default MyPosts
