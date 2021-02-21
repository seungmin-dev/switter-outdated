import { dbService, storageService } from "fbase";
import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Sweet = ({ sweetObj, isOwner }) => {
    const [editing, setEditting] = useState(false);
    const [newSweet, setNewSweet] = useState(sweetObj.text);
    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this sweet?");
        if( ok) {
            await dbService.doc(`sweets/${sweetObj.id}`).delete();
            await storageService.ref(sweetObj.attachmentUrl).delete();
        }
    };
    const toggleEditing = () => setEditting((prev) => !prev);
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.doc(`sweets/${sweetObj.id}`).update({
            text : newSweet
        });
        setEditting(false);
    };
    const onChange = (event) => {
        const { target : {value}} = event;
        setNewSweet(value);
    };
    return (<div className="sweet">
        {editing ? (
            <>
                <form onSubmit={onSubmit} className="container sweetEdit">
                    <input type="text" placeholder="Edit your sweet" value={newSweet} required autoFocus onChange={onChange} className="formInput" />
                    <input type="submit" value="Update Sweet" className="formBtn" />
                </form>
                <button onClick={toggleEditing} className="formBtn cancelBtn">Cancel</button>
            </>
            ) : 
            <>
                <h4>{sweetObj.text}</h4>
                {sweetObj.attachmentUrl && <img src={sweetObj.attachmentUrl} />}
                {isOwner && (
                    <div class="sweet__actions">
                        <span onClick={onDeleteClick}>
                            <FontAwesomeIcon icon={faTrash} />
                        </span>
                        <span onClick={toggleEditing}>
                            <FontAwesomeIcon icon={faPencilAlt} />
                        </span>
                    </div>
                )}
            </>
            }
        </div>
    );
};

export default Sweet;