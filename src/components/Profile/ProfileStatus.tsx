import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {updateStatusTC} from "../../redux/profile-reducer";

type ProfileStatusType = {
    status: string
}

export const ProfileStatus = (props: ProfileStatusType) => {

    const dispatch = useDispatch()

    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        dispatch(updateStatusTC(status))
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
                </div>
            }
            {editMode &&
                <input type="text"
                       onChange={onStatusChange}
                       value={status}
                       onBlur={deactivateEditMode}
                       autoFocus={true}/>
            }
        </div>
    )

}