import { addDoc, collection, doc } from "firebase/firestore"


export const createContactMessage  = async(data) =>{
    const contact = await addDoc(collection(db,"contactMessages"),{
        name:data.name,
        email:data.email,
        message:data.message,
        createat:new data()
    });
    return contact.id

}