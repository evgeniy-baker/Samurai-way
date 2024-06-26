import React, { useEffect } from "react"
import { Profile } from "./Profile"
import { useDispatch, useSelector } from "react-redux"
import { getStatusTC, getUserProfileTC, ProfileType } from "../../redux/profile-reducer"
import { RootReducerType } from "../../redux/redux-store"
import { Redirect, useParams } from "react-router-dom"

export const ProfileContainer = () => {
  const dispatch = useDispatch()
  const profile = useSelector<RootReducerType, ProfileType | null>((state) => state.profilePage.profile)
  const isAuth = useSelector<RootReducerType, boolean>((state) => state.auth.isAuth)
  const authorizedUserId = useSelector<RootReducerType, string | null>((state) => state.auth.id)
  // const status = useSelector<RootReducerType, string>(state => state.profilePage.status)

  let { userID } = useParams<{ userID: string }>()

  if (!userID) {
    // userID = String(29584)
    userID = String(authorizedUserId)
  }

  useEffect(() => {
    dispatch(getUserProfileTC(Number(userID)))
    dispatch(getStatusTC(Number(userID)))
  }, [])

  if (!isAuth) return <Redirect to={"/Login"} />

  return <Profile profile={profile} />
}
