import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfileAC} from "../redux/profile-reducer";
import {RootReducerType} from "../redux/redux-store";

export class ProfileAPI extends React.Component<ProfilePropsType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((res) => {
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}



type mapStatePropsType = {
    profile: ProfileType | null
}
type mapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

const mapStateToProps = (state: RootReducerType): mapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export const ProfileContainer = connect(mapStateToProps,  {
    setUserProfile: setUserProfileAC
})(ProfileAPI)

export type ProfilePropsType = mapStatePropsType & mapDispatchPropsType