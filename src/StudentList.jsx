import { getDatabase, onValue, ref, remove } from "firebase/database";
import { useEffect, useState } from "react";
import app from "../src/firebase";
import { useNavigate } from "react-router-dom";
import { getStorage, ref as storageRef, deleteObject } from "firebase/storage";

const StudentList = () => {
  let [studentData, setStudentData] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    //setting db,ref
    let db = getDatabase(app);
    let studentRef = ref(db, "student");
    //passing reference to data
    onValue(studentRef, (snapshot) => {
      //getting the data from student collection
      let data = snapshot.val();

      setStudentData(data);
    });
  }, []);
  //handler func for deleting operation
  let handleDelete = (key) => {
    let storage = getStorage(app);
    let db = getDatabase(app);
    let studentRef = ref(db, "student/" + key);
    let myRef = storageRef(storage, `images/` + key);
    deleteObject(myRef).then((res) => {
      remove(studentRef);
    });
  };
  return (
    <div>
      <h1>student list</h1>
      {studentData && (
        <div>
          {Object.entries(studentData).map(([key, value]) => {
            return (
              <div key={key} style={{ display: "flex" }}>
                <img src={value.image} alt="" height={"120px"} />
                <p>
                  {value.name}
                  {value.phone}
                </p>
                <button
                  style={{
                    maxHeight: "20px",
                    alignSelf: "center",
                    marginInline: "10px",
                  }}
                  onClick={() => {
                    handleDelete(key);
                  }}
                >
                  Delete
                </button>
                <button
                  style={{
                    maxHeight: "20px",
                    alignSelf: "center",
                    marginInline: "10px",
                  }}
                  //passing state/data upon clicking on update
                  onClick={() => {
                    navigate("/updateStudent", { state: [key, value] });
                  }}
                >
                  update
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default StudentList;
