function SubmitForm(event) {
  event.preventDefault();
  let complaint = JSON.parse(localStorage.getItem("complaint")) || [] ;

  let newcomplaint = {
    id: Date.now() , 
    username: document.getElementById("username").value,
    complainttype: document.getElementById("complainttype").value,
    area: document.getElementById("area").value,
    status:"pending"
  }

  complaint.push(newcomplaint); 
  localStorage.setItem("complaint" , JSON.stringify(complaint));


  let details = {
    username: document.getElementById("username").value,
    mobile: document.getElementById("mobile").value,
    complaintimg: document.getElementById("complaintimg").value,
    complainttype: document.getElementById("complainttype").value,
    description: document.getElementById("description").value,
    area: document.getElementById("area").value,
    landmark: document.getElementById("landmark").value,
    pincode: document.getElementById("pincode").value,
  };
  localStorage.setItem("details", JSON.stringify(details));
  document.getElementById("complaintform").reset();
}