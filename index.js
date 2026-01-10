  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";

  import { getDatabase,
         ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyBCxKp9f3e4IPoBF9QxhEqW_2jaZFw9Obw",
    authDomain: "leads-tracker-7d9e9.firebaseapp.com",
    databaseURL: "https://leads-tracker-7d9e9-default-rtdb.firebaseio.com",
    projectId: "leads-tracker-7d9e9",
    storageBucket: "leads-tracker-7d9e9.firebasestorage.app",
    messagingSenderId: "74193097992",
    appId: "1:74193097992:web:f31f5e7e38734e495208bd"
  }

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "leads")

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl=document.getElementById("un-list")
const deleteBtn = document.getElementById("delete-btn")





function render (leads){
  let listItems=" "

for (let i = 0; i < leads.length; i++) {
listItems+= `<li>
    <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
    </a>
</li>`
}
ulEl.innerHTML=listItems
}

onValue(referenceInDB, function(snapshot) {
    const snapshotHasvalue=snapshot.exists()
    if(snapshotHasvalue){
    let snapshotValues=snapshot.val()
    const leads=Object.values(snapshotValues)
    render(leads)
    }
})


deleteBtn.addEventListener("dblclick", function deleteData (){
remove(referenceInDB)
ulEl.innerHTML= ""
}
)   

inputBtn.addEventListener("click", function() {
push(referenceInDB, inputEl.value)
    inputEl.value= ""
})




