import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB6EpltQen3shqrhuZnacGB0XEBq9XjvKE",
    authDomain: "todo-app-ba58a.firebaseapp.com",
    databaseURL: "https://todo-app-ba58a.firebaseio.com",
    projectId: "todo-app-ba58a",
    storageBucket: "todo-app-ba58a.appspot.com",
    messagingSenderId: "653875383436"
  };
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 25
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});
