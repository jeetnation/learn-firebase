// working with Realtime database

import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

import app from "../firebase";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");
  let [rollNo, setRollno] = useState("");
  let [selectFile, setSelectFile] = useState(null);
  let navigate = useNavigate();

  let handleFile = (e) => {
    let file = e.target.files[0];
    setSelectFile(file);
  };

  let submitHandler = async (e) => {
      e.preventDefault();
    //creating DB,storage instance
    let db = getDatabase(app);
    let storage = getStorage(app);
    //creating reference and adding to the database , further navigating to a page
    
    // creating storage ref
    let myRef = storageRef(storage ,`images/${rollNo}`)

    await uploadBytes(myRef,selectFile)
    
    let imageUrl = await getDownloadURL(myRef)
    


    set(ref(db, "student/" + rollNo), {
      rollNo: rollNo,
      name: name,
      phone: phone,
      image: imageUrl
    }).then((res) => navigate("/studentList"));
    // input reset
    setName("");
    setPhone("");
    setRollno("");
    setSelectFile(null);
  };




  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <input
          type="number"
          placeholder="rollNo."
          value={rollNo}
          onChange={(e) => {
            setRollno(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="enter-name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <input
          type="file"
          onChange={(e) => {
            handleFile(e);
          }}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default AddStudent;

/*
 if we insert data duplicate for a unique key(rollNo)
 it will update the already existing record

*/
