//imported and pasted firebase project template 

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCenwLTS5m4c9VkpYoQKJzHE3uKzHPyvdM",
  authDomain: "learnfirebase-68980.firebaseapp.com",
  projectId: "learnfirebase-68980",
  storageBucket: "learnfirebase-68980.appspot.com",
  messagingSenderId: "310585188090",
  appId: "1:310585188090:web:7aa5fbe5a0e40ce592f343",
  measurementId: "G-C4DDVQPXP8",
  //set databaseURl in realtime db
  databaseURL : 'https://learnfirebase-68980-default-rtdb.firebaseio.com/'
  
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export default app;