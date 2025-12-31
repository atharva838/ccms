if (localStorage.getItem("islogedin") !== "true") {
  alert("unauthorized access : ");

  window.location.href = "../STRUCTURE/login.html";
}
function logout() {
  localStorage.removeItem("islogedin");
  window.location.href = "login.html";
}
let complaint = JSON.parse(localStorage.getItem("complaint")) || [];
let admintable = document.getElementById("admincomplaintlist");

function rendercomplaint() {
  admintable.innerHTML = "";

  if (complaint.length === 0) {
    admintable.innerHTML = `<tr><td rowSpan={5}>No Complaints</td></tr>`;
    return;
  }
  complaint.forEach((c, index) => {
    admintable.innerHTML += `<tr>
            <td>${c.username}</td>
            <td>${c.complainttype}</td>
            <td>${c.area}</td>
            <td><select onChange="updatestatus(${index} , this.value )">
                <option value="pending">${
                  c.status === "pending" ? "selected" : ""
                }pending</option>
                <option value="in progress">${
                  c.status === "in progress" ? "selected" : ""
                }in progress</option>
               <option value="completed">${
                  c.status === "completed" ? "selected" : ""
                }completed</option>
            </select>
            </td>
            <td>
                ${c.status === "completed"
                    ? `<button onClick="deletecomplaint(${index})">delete</button>` : `<span>-</span>`}  
            </td>
           </tr>`;
  });
}
function updatestatus(index, newstatus) {
  complaint[index].status = newstatus;
  localStorage.setItem("complaint", JSON.stringify(complaint));
  rendercomplaint();
}
rendercomplaint();

function deletecomplaint(index) {
  if (confirm("are you really want to delete complaint ?")) {
    complaint.splice(index, 1);
    localStorage.setItem("complaint", JSON.stringify(complaint));
    rendercomplaint();
  }
}

