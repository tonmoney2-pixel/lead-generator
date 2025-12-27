let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl=document.getElementById("un-list")


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log("Button clicked!")
  console.log(myLeads)
renderLeads()
inputEl.value= ""
})


function renderLeads (){
  let listItems=""

for (let i = 0; i < myLeads.length; i++) {
listItems+= `<li>
    <a target='_blank' href='${myLeads[i]}'>
        ${myLeads[i]}
    </a>
</li>`
}
ulEl.innerHTML=listItems
}