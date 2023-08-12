let myLeads= []
const inputEl = document.getElementById("input-el")
const inputBtn= document.getElementById("input-btn")
const ulEl= document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn= document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active:true, currentWindow: true}, function(tabs){         //take link from the browser api
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
    })
   

function render(leads){
    let listItems = ""                                       //'.innerhtml comes with a cost' that is why it is preferred to use it outside the loop
    for(let i=0; i<leads.length; i++){
        listItems += `<li>
        <a target=_'blank' href=' ${leads[i] }' >
         ${leads[i] } 
         </a>
        </li>`
                                                                    //add the item to listitems without using innerhtml
    }
    ulEl.innerHTML = listItems                           //render the list items inside the unordered list using innerhtml
    }
    
    
    
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()                               //clears the local storage
    myLeads=[]                                       //clear the myleads
    render( myLeads)                                     //to show empty arrays
})


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)                        //takes input from the user and store in array
    inputEl.value=""                                   //clears out input field
localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render( myLeads)
})








//false, o , "" , null, undefined, NAN [these are the falsy values in javascript rest all the others are truthhy values]