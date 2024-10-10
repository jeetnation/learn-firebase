//pre requisite -> react router


//real time database ->
data is stored in a tree like structure

parent node -|=child node1/child node2

//firestore DB ->

data is stored in a document like structure called as collection similar to mongoDb

docs - > https://firebase.google.com/docs/firestore


setting up custom firestore in project - >

npm install -g firebase-tools

firebase login

firebase init firestore

open firebase.rules ->

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}

deploy the rules ->

firebase deploy --only firestore:rules



//AUTHENTICATION



