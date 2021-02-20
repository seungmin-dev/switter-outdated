import { dbService, storageService } from "fbase";
import React, {useState} from "react";

const Sweet = ({ sweetObj, isOwner }) => {
    const [editing, setEditting] = useState(false);
    const [newSweet, setNewSweet] = useState(sweetObj.text);
    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this sweet?");
        if( ok) {
            await dbService.doc(`sweets/${sweetObj.id}`).delete();
            // await storageService.refFromURL(sweetObj.attachmentUrl).delete();
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
    return (<div>
        {editing ? (
            <>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder="Edit your sweet" value={newSweet} required onChange={onChange} />
                    <input type="submit" value="Update Sweet" />
                </form>
                <button onClick={toggleEditing}>Cancel</button>
            </>
            ) : 
            <>
                <h4>{sweetObj.text}</h4>
                {sweetObj.attachmentUrl && <img src={sweetObj.attachmentUrl} width="50px" height="50px" />}
                {isOwner && <><button onClick={onDeleteClick}>Delete Sweet</button>
                <button onClick={toggleEditing}>Edit Sweet</button></>}
            </>
            }
        </div>
    );
};

export default Sweet;