let complaint = JSON.parse(localStorage.getItem("complaint")) || [] ; 
let table = document.getElementById("complaintlist") ; 

table.innerHTML = "";

table.innerHTML += complaint.map(c => 
     `<tr>
        <td>${c.username}</td>
        <td>${c.complainttype}</td>
        <td>${c.area}</td>
        <td>${c.status}</td>
    </tr>`
).join("")