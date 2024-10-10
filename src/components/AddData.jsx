import { getDatabase, ref, set } from "firebase/database";
import app from "../firebase";
const AddData = () => {
  let handlerData = (userID, name, phone) => {
    console.log(userID, name, phone);
    //creating db instance
    let db = getDatabase(app);
    //using set to add data
    set(ref(db, "student/" + userID), {
      name: name,
      phone: phone,
    });
  };

  return (
    <div>
      <h1>Adding data</h1>

      <button
        onClick={() => {
          handlerData(1, "fahad", 8770915875);
        }}
      >
        Add data
      </button>
    </div>
  );
};

export default AddData;
