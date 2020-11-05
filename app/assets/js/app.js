// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDj81oaNKnG79MlpRY83MOK0QksHyqx7qc",
  authDomain: "crud-ce022.firebaseapp.com",
  databaseURL: "https://crud-ce022.firebaseio.com",
  projectId: "crud-ce022",
  storageBucket: "crud-ce022.appspot.com",
  messagingSenderId: "419867682880",
  appId: "1:419867682880:web:408d053b7d2425ec6017a5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();
const fs = firebase.firestore();

console.log('Modulo=>' + mod);

//APP
const dashboard = document.querySelectorAll(".dashboard");
//const contentLinks = document.querySelectorAll(".content-page");
const loginLinks = document.querySelectorAll(".login-page");
const registroLinks = document.querySelectorAll(".registro-page");

const loginCheck = (user) => {
  if (user) {
    dashboard.forEach((link) => (link.style.display = "block"));
    loginLinks.forEach((link) => (link.style.display = "none"));
    registroLinks.forEach((link) => (link.style.display = "none"));
  } else {
    dashboard.forEach((link) => (link.style.display = "none"));
    if (mod == 'registro') {
      registroLinks.forEach((link) => (link.style.display = "block"));
      loginLinks.forEach((link) => (link.style.display = "none"));
    } else {
      registroLinks.forEach((link) => (link.style.display = "none"));
      loginLinks.forEach((link) => (link.style.display = "block"));
    }
  }
};

// Logout
const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log("signup out");
  });
});

// SingIn
const signInForm = document.querySelector("#login-form");
signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signInForm["login-email"].value;
  const password = signInForm["login-password"].value;

  // Authenticate the User
  auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
    // clear the form
    signInForm.reset();
    // close the modal
    //$("#signinModal").modal("hide");
  });
});

// Posts
const postList = document.querySelector(".posts");
const setupPosts = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((doc) => {
      const post = doc.data();
      const li = `
       <li class="list-group-item list-group-item-action">
         <h5>${post.title}</h5>
         <p>${post.content}</p>
       </li>
     `;
      html += li;
    });
    postList.innerHTML = html;
  } else {
    postList.innerHTML = '<h4 class="text-white">Login to See Posts (Git/master Version)</h4>';
  }
};

// events
// list for auth state changes
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("signin:" + user.email);
    console.log(user);
    leerDatos(user.email);
    fs.collection("posts").get().then((snapshot) => {
      loginCheck(user);
      setupPosts(snapshot.docs);
    });
  } else {
    console.log("signout");
    setupPosts([]);
    loginCheck(user);
  }
});

// Login with Google
const googleButton = document.querySelector("#googleLogin");
googleButton.addEventListener("click", (e) => {
  e.preventDefault();
  signInForm.reset();
  //$("#signinModal").modal("hide");
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then((result) => {
      console.log(result);
      console.log("google sign in");
    })
    .catch(err => {
      console.log(err);
    })
});

//Guardar automaticamente
function guardarDatos(user) {
  var usuario = {
    uid: user.uid,
    usuario: user.displayName,
    email: user.email,
    foto: user.photoURL
  }
  db.ref('vcard_signup/' + user.uid).set(usuario);
}

//Leer los datos
function leerDatos(userlogin) {
  const foto = document.querySelector("#photo");
  const nom = document.querySelector("#nombre");
  const mail = document.querySelector("#email");
  const uid = document.querySelector("#id_code_google");
  db.ref("vcard_signup").on("child_added", function (s) {
    var user = s.val();
    var f = (user.foto == null)?'assets/img/photos/sinfoto.png':user.foto;
    var u = (user.usuario == null)?'<a href="#">Sin Nombre</a>':user.usuario;
    if (user.email == userlogin) {
      const cover = '<img src="' + f + '" class="img-fluid rounded-circle">';
      const nombre = '<h1 class="h5">' + u + '</h1>';
      const correo = userlogin;
      const ID_user = user.uid;

      foto.innerHTML = cover;
      nom.innerHTML = nombre;
      mail.innerHTML = correo;
      uid.innerHTML = ID_user;
    }
  });
}