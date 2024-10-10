import { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import app from "../firebase";
const AddFacuilty = () => {
  let [name, setName] = useState("");
  let [phone, setPhone] = useState(null);
  let submithandler = async (e) => {
    e.preventDefault();
    //creating firestore db instance

    let db = getFirestore(app);
    //passing a ref
    let docRef = await addDoc(collection(db,'facuilty'),{
    name:name,
    phone:phone

    });
    console.log(docRef,docRef.id)
  };

  return (
    <div>
      <form action="" onSubmit={submithandler}>
        <input
          type="text"
          placeholder="enter name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="phone"
          placeholder="enter phone"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddFacuilty;
