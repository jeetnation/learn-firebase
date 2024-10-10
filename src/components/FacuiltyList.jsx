import React, { useEffect, useState } from "react";
import app from "../firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const FacuiltyList = () => {

let navigate = useNavigate();




  let getData = async () => {
    //creating a DB instance
    let db = getFirestore(app);
    // creating a reference of collection to the DB
    const docRef = collection(db, "facuilty");
    let docSnap = await getDocs(docRef);
    let data = docSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setFacuiltyData(data);
  };

  // setting func for deleteData

  let deleteData = async (id) => {
    //creating a DB instance
    let db = getFirestore(app);
    //passing a ref to a doc
    let dataRef = doc(db, "facuilty", id);
    try {
      await deleteDoc(dataRef);
      getData();
    } catch (e) {
      console.log(e);
    }
  };

  let [FacuiltyData, setFacuiltyData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Facuilty List</h1>
      {FacuiltyData.map((f) => {
        return (
          <div key={f.id}>
            <p>
              {f.name}
              {f.phone}
            </p>
            <button
              onClick={() => {
                deleteData(f.id);
              }}
            >
              delete
            </button>
            <button
              style={{
                maxHeight: "20px",
                alignSelf: "center",
                marginInline: "10px",
              }}
              //passing state/data upon clicking on update
              onClick={() => {
                navigate("/UpdateFacuilty", { state:f });
              }}
            >
              update
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default FacuiltyList;
