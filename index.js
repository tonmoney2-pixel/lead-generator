let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl=document.getElementById("un-list")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn=document.getElementById("tab-btn")

const leadsFromLocalStorage=JSON.parse (localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log("Button clicked!")
  console.log(myLeads)
localStorage.setItem("myLeads", JSON.stringify(myLeads))
console.log(localStorage.getItem("myLeads"))
render(myLeads)
inputEl.value= ""
})

deleteBtn.addEventListener("dblclick", function deleteData (){
localStorage.clear()
while(myLeads.length > 0) {
    myLeads.pop();
}
render(myLeads)
})  


function render (leads){
  let listItems=""

for (let i = 0; i < leads.length; i++) {
listItems+= `<li>
    <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
    </a>
</li>`
}
ulEl.innerHTML=listItems
}