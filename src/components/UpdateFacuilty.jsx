import { useState } from "react";
import { collection, addDoc, getFirestore, updateDoc ,doc } from "firebase/firestore";
import app from "../firebase";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateFacuilty = () => {

let location = useLocation();
let navigate = useNavigate()
    let [name, setName] = useState(location.state.name);
  let [phone, setPhone] = useState(location.state.phone);
  let submithandler = async (e) => {
    e.preventDefault();
    //creating firestore db instance

    let db = getFirestore(app);
    //passing a ref
    let docRef = doc(db,'facuilty',location.state.id)
    try{
        await updateDoc(docRef,{
            name:name,
            phone:phone
        })
        navigate('/FacuiltyList')
    }
    catch(e){
        console.log(e)
    }
  
  };

  return (
    <div>
      <form action="" onSubmit={submithandler}>
        <input
        value={name}
          type="text"
          placeholder="enter name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
        value={phone}
          type="phone"
          placeholder="enter phone"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <button type="submit">update</button>
      </form>
    </div>
  );
};

export default UpdateFacuilty;
