import firebase from 'firebase';

try{
  var config = {
      apiKey: "AIzaSyB6EpltQen3shqrhuZnacGB0XEBq9XjvKE",
      authDomain: "todo-app-ba58a.firebaseapp.com",
      databaseURL: "https://todo-app-ba58a.firebaseio.com",
      projectId: "todo-app-ba58a",
      storageBucket: "todo-app-ba58a.appspot.com",
      messagingSenderId: "653875383436"
    };
  firebase.initializeApp(config);
}
catch(e){

}

export var firebaseRef = firebase.database().ref();
export default firebase;
