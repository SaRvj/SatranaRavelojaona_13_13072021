
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ApiProvider from "../utils/CallMethod"
import { updateUserData } from "../redux/Reducers"
import { selectFirstName, selectJWT, selectLastName } from "../utils/Selectors"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons"

function UserProfile() {
    let dispatch = useDispatch()

    let [editInfo, setEditInfo] = useState(false)
    let [editedFirstName, setEditedFirstName] = useState('')
    let [editedLastName, setEditedLastName] = useState('')

    let firstName = useSelector(selectFirstName)
    let lastName= useSelector(selectLastName)
    let JWTtoken = useSelector(selectJWT)

    
    async function handleChangeUserInfo(editedFirstName, editedLastName, JWTtoken) {

        if (editedFirstName === '' || editedLastName === '' || editedFirstName.length === 0 || editedLastName.length === 0 ) {
            alert("Merci de remplir votre nom et prenom");
            return
          };
          
        const response = await new ApiProvider().updateUserProfileData(editedFirstName, editedLastName, JWTtoken)
        dispatch(updateUserData(response.data.body))
        setEditInfo(false) 
    }

    return (
        <div className="header">
            {!editInfo ? (
            <div className="header-user">
                <h1>Welcome back<br/>{firstName} {lastName} !</h1>
            </div>) : (
            <div className="header-user">
                <h1>Welcome back</h1>
                <div className="edit-container">
                    <input className="change-zone" type="text" placeholder={firstName} onChange={(e) => setEditedFirstName(e.target.value)}/>
                    <input className="change-zone change-lastname" type="text" placeholder={lastName} onChange={(e) => setEditedLastName(e.target.value)}/>
                    <button className="edit-button" onClick={() => handleChangeUserInfo(editedFirstName, editedLastName, JWTtoken)}>Validate</button>
                </div>
            </div>
            )}

            {editInfo? (
                <button className="edit-button" onClick={() => setEditInfo(!editInfo)}>
                    Close edit
                <FontAwesomeIcon icon={ faXmark } className="close"/>
                </button>) : (
                <button className="edit-button" onClick={() => setEditInfo(!editInfo)}>
                    Edit name
                </button>)
            } 
        </div>
    )
}

export default UserProfile