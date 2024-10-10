// working with Realtime database for performing update action

import { useState } from "react";
import { getDatabase, ref, set, update } from "firebase/database";
import app from "../firebase";
import { useNavigate, useLocation } from "react-router-dom";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

const UpdateStudent = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let [name, setName] = useState(location.state[1].name);
  let [phone, setPhone] = useState(location.state[1].phone);
  let [rollNo, setRollno] = useState(location.state[0]);
  let [selectFile, setSelectFile] = useState(null);

  let handleFile = (e) => {
    let file = e.target.files[0];
    setSelectFile(file);
  };




  let submitHandler = async (e) => {
    e.preventDefault();
    //updating DB,storage instance only if a particular state exists
    if (selectFile) {
      let db = getDatabase(app);
      let storage = getStorage(app);

      // updating storage ref
      let myRef = storageRef(storage, `images/${location.state[0]}`);

      await uploadBytes(myRef, selectFile);

      let imageUrl = await getDownloadURL(myRef);

      let studentRef = ref(db, "student/" + location.state[0]);

      update(studentRef, { name: name, phone: phone, image: imageUrl })
        .then(() => {
          navigate("/studentList");
        })
        .catch((error) => {
          console.error("Error updating student:", error);
        });
    } else {
      let db = getDatabase(app);

      let studentRef = ref(db, "student/" + location.state[0]);

      update(studentRef, { name: name, phone: phone})
        .then(() => {
          navigate("/studentList");
        })
        .catch((error) => {
          console.error("Error updating student:", error);
        });
    }
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
          disabled
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
export default UpdateStudent;
