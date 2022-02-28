
// Login Validation
function loginError(elementid, hintsmsg){
  document.getElementById(elementid).innerHTML = hintsmsg;
}
function login(){
  var id2 = document.loginForm.id2.value;
  var pwd = document.loginForm.pwd.value;

  if (id2 == null || id2 == "", pwd == null || pwd == ""){
    alert("You have to fill out the form!");
  }
  var logex =  /^[1-9]\d{5}$/;
  if(logex.test(id2) === false) {
      loginError("usernameErr", "Please enter a valid user name (id)");
      usernameErr = true;
  }
  if(logex.test(id2) === true){
      usernameErr=false;
  }
  var logex = /^[a-zA-Z\s]+$/;
  if (logex.test(pwd) === false) {
    loginError("pwdErr", "Please enter a valid password (only letters)");
    pwdErr = true;
  }
  if(logex.test(pwd) === true){
    pwdErr=false;
  }
  if(usernameErr== false && pwdErr == false){
  alert("Login succesful!");
  updateHistory('page2');
  var login= document.getElementById("id2").value;
  window.logged=login;
  checkLocalStorage();
  }
  if (usernameErr == true && pwdErr == true){
    alert("Something went wrong");
  }
}

function checkLocalStorage()
{
  var username = localStorage.getItem("username");

  if (username!=null && username!=""){
      alert('Welcome again '+username+'!');
      updateHistory('page2');
      window.logged=username;
  }else{
      username=window.logged;
      localStorage.setItem("username",username);
  }
}

function clearLocalStorage()
{
    localStorage.setItem('username','');
    window.logged="";
    updateHistory('page1');
}


// Registration Validation
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
function validateForm() {
    var id = document.contactForm.id.value;
    var firstName = document.contactForm.firstName.value;
    var lastName = document.contactForm.lastName.value;
    var email = document.contactForm.email.value;
    var address = document.contactForm.address.value;
    var password = document.contactForm.password.value;

    if (id == null || id=="", firstName== null || firstName== "",lastName== null || lastName=="", email==null || email=="",  address==null || address=="", password==null || password==""){
      alert("You have to fill out the form!");
    }
    var regex = /^[1-9]\d{5}$/;
    if(regex.test(id) === false){
      printError("idErr", "Please enter a valid id (ex, 123456)");
      idErr = true;
    }
    if(regex.test(id) === true){
      idErr = false;
    }
    var regex = /^[a-zA-Z\s]+$/;
    if(regex.test(firstName) === false) {
        printError("firstNameErr", "Please enter a valid first name");
        firstNameErr = true;
    }
    if(regex.test(firstName) === true){
      firstNameErr = false;
    }
    var regex = /^[a-zA-Z\s]+$/;
    if(regex.test(lastName) === false) {
        printError("lastNameErr", "Please enter a valid last name");
        lastNameErr = true;
    }
    if(regex.test(lastName) === true){
        lastNameErr = false;
    }
    var regex = /^\S+@\S+\.\S+$/;
    if(regex.test(email) === false) {
        printError("emailErr", "Please enter a valid email address");
        emailErr = true;
    }
    if(regex.test(email) === true) {
        emailErr = false;
    }
    var regex = /^[a-zA-Z\s]+$/;
    if(regex.test(address) === false) {
        printError("addressErr", "Please enter a valid address");
        addressErr = true;
    }
    if(regex.test(address) === true) {
        addressErr = false;
    }
    var regex = /^[a-zA-Z\s]+$/;
    if(regex.test(password) === false) {
        printError("passwordErr", "Please enter a valid password");
        passwordErr = true;
    }
    if(regex.test(password) === true) {
          passwordErr = false;
    }
    if(idErr ==false && firstNameErr ==false && lastNameErr==false && emailErr==false && addressErr==false && passwordErr==false) {
    alert("Registration successful!");
    storeCustomer();
    showpage('page1');
    }
    if (idErr ==true && firstNameErr ==true && lastNameErr==true && emailErr==true && addressErr==true && passwordErr==true){
      alert("Something went wrong");
    }
}

// Booking Validation
function printError(eLemId, hIntMsg) {
    document.getElementById(eLemId).innerHTML = hIntMsg;
}
function validateBooking() {
    var room = document.resForm.room.value;
    var checkin = document.resForm.checkin.value;
    var checkout = document.resForm.checkout.value;
    var status = document.resForm.status.value;

    if (room== null || room== "", checkin== null || checkin=="", checkout==null || checkout==""){
      alert("You have to fill out the form!");
    }
    var resex = /^[A-Za-z0-9]+$/;
    if(resex.test(room) === false) {
        printError("roomErr", "Please enter a valid room");
        roomErr = true;
    }
    if(resex.test(room) === true){
      roomErr = false;
    }
    var resex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    if(resex.test(checkin) === false) {
        printError("checkinErr", "Please enter a valid checkin date");
        checkinErr = true;
    }
    if(resex.test(checkin) === true){
        checkinErr = false;
    }
    var resex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    if(resex.test(checkout) === false) {
        printError("checkoutErr", "Please enter a valid check out date");
        checkoutErr = true;
    }
    if(resex.test(checkout) === true) {
        checkoutErr = false;
    }
    if(roomErr ==false && checkinErr==false && checkoutErr==false) {
    alert("Reservation successful!");
    makeBooking();
    }
    if (roomErr ==true && checkinErr==true && checkoutErr==true){
      alert("Something went wrong");
    }
}


var apptype="b18jenli";

//------------------------------------------------------------------------
// fixChars
//------------------------------------------------------------------------
// Converts all attributes from a notation that uses "%" to "&" which
// allows us to pass non-english characthers as XML
//------------------------------------------------------------------------

function fixChars(returnedData)
{
  var resultset=returnedData.childNodes[0];

  // Iterate over all nodes in root node recursively and replace the strings inside attributes
  x=returnedData.getElementsByTagName('*');
  for (i=0;i<x.length;i++){
      for(j=0;j<x[i].attributes.length;j++){
          x[i].attributes[j].nodeValue=x[i].attributes[j].nodeValue.replace(/%/g,"&");
      }
  }
}

//------------------------------------------------------------------------
// make customer
//------------------------------------------------------------------------

function storeCustomer()
{
  var customerID=document.getElementById("id2").value;
  var firstname=document.getElementById("firstName").value;
  var lastname=document.getElementById("lastName").value;
  var email=document.getElementById("email").value;
  var address=document.getElementById("address").value;
  var auxdata=document.getElementById("password").value;

  $.ajax({
    type: 'POST',
    url: './booking/makecustomer_XML.php',
    data: { ID: encodeURIComponent(customerID),
      firstname: encodeURIComponent(firstname),
      lastname: encodeURIComponent(lastname),
      email: encodeURIComponent(email),
      address: encodeURIComponent(address),
      auxdata: encodeURIComponent(auxdata),
    },
    success:  ResultCustomern,
    error: errormsg
  });
}

function ResultCustomern(returnedData)
{
  for (i = 0; i < returnedData.childNodes.length; i++) {
      if(returnedData.childNodes.item(i).nodeName=="created"){
        alert(returnedData.childNodes.item(i).attributes['status'].nodeValue);
      }
  }
}
function errormsg(jqXHR,textStatus,errorThrown)
{
    console.log(jqXHR);
    alert("AJAX Error:\n"+errorThrown);
}


function showCustomer()
{
  var customerID=document.getElementById("username").value;

  $.ajax({
    type: 'POST',
    url: './booking/getcustomer_XML.php',
    data: { customerID: encodeURIComponent(customerID)},
    success:  ResultCustomers,
    error: errormsg
  });
}

function ResultCustomers(returnedData)
{
  fixChars(returnedData);

  var resultset=returnedData.childNodes[0];

  // Iterate over all nodes in root node (i.e. customers)
  for (i = 0; i < resultset.childNodes.length; i++) {
      // Iterate over all child nodes of that node that are customer nodes
      if(resultset.childNodes.item(i).nodeName=="customer"){
          // Retrieve first name and last name for node
          var customer=resultset.childNodes.item(i);
          var div=document.getElementById('CustomerOutputDiv');
          output=customer.attributes['id'].nodeValue;
          output+=' '+customer.attributes['firstName'].nodeValue;
          output+=' '+customer.attributes['lastName'].nodeValue;
          output+=' '+customer.attributes['email'].nodeValue;
          output+=' '+customer.attributes['address'].nodeValue;
          output+=' '+customer.attributes['lastvisit'].nodeValue;
          output+=' '+customer.attributes['pwd'].nodeValue;
          div.innerHTML=output;
      }
  }
}


function makeBooking()
{
  var customerID=window.logged;
  var resourceID=document.getElementById("room").value;
  var date=document.getElementById("checkin").value;
  var dateto=document.getElementById("checkout").value;
  var statusb=document.getElementById("status").value;
  var position=document.getElementById("positionB").value;

  alert(customerID+" "+resourceID+" "+date+" "+statusb+" "+position);

  $.ajax({
    type: 'POST',
    url: './booking/makebooking_XML.php',
    data: {
      resourceID: resourceID,
      date: date,
      dateto: dateto,
      customerID: customerID,
      status: statusb, // 2 = "Real" booking.
      position: position,
    },
    success:  bookingmade,
    error: errormsg
  });
}

function bookingmade(returnedData)
{
    alert('booked!');
    console.log(returnedData);
}


// search availability
//------------------------------------------------------------------------

function searchAvailability()
{
    var resname=document.getElementById("resNameA").value;

    $.ajax({
      type: 'POST',
      url: './booking/getavailability_search_XML.php',
      data: {
        name: encodeURIComponent(resname),
        type: apptype
        },
      success:  showAvailability,
      error: errormsg
    });
}
function showAvailability(returnedData)
{
    fixChars(returnedData);
    var resultset=returnedData.childNodes[0];
    var output="<table>";
    var output

    output+="<tr>";
    output+="<th>Room id</th>";
    output+="<th>Room name</th>";
    output+="<th>Quantity</th>";
    output+="<th>Cost</th>";
    output+="<th>From</th>";
    output+="<th>To</th>";
    output+="<th>Availability</th>";
    output+="</tr>";

    for (i = 0; i < resultset.childNodes.length; i++) {
        if(resultset.childNodes.item(i).nodeName=="availability"){
            var avail=resultset.childNodes.item(i);

            output+="<tr class='actiontablerow' onclick='alert(\""+avail.attributes['resourceID'].value+"\")'>";
            output+="<tr>";
            output+="<td>"+avail.attributes['resourceID'].nodeValue+"</td>";
            output+="<td>"+avail.attributes['name'].nodeValue+"</td>";
            output+="<td>"+avail.attributes['size'].nodeValue+"</td>";
            output+="<td>"+avail.attributes['cost'].nodeValue+"</td>";
            output+="<td>"+avail.attributes['date'].nodeValue+"</td>";
            output+="<td>"+avail.attributes['dateto'].nodeValue+"</td>";
            output+="<td>"+avail.attributes['remaining'].nodeValue+"</td>";
            output+="</tr>";
        }
    }
    output+="</table>"
    var div=document.getElementById("OutputDivSearchA");
    div.innerHTML=output;
}


//------------------------------------------------------------------------
// search resources
//------------------------------------------------------------------------
// Searches through the resources for a certain application.
// If only type is given all resources for application are given
// If either company, location or name are given in any combination, these values are searched
// If fulltext is given all attributes are searched at once
//------------------------------------------------------------------------

function searchResources()
{
  var resfulltext=document.getElementById("resFulltextS").value;

    $.ajax({
      type: 'POST',
      url: './booking/getresources_XML.php',
      data: {
        fulltext: encodeURIComponent(resfulltext),

        type: apptype 	  // Filter out bookings made from other applications application.
                              // Most commonly user name of student
        },
      success:  showResources,
      error: errormsg
    });
}

function showResources(returnedData)
{
    fixChars(returnedData);

    var resultset=returnedData.childNodes[0];
    var output="<table>";

    contents=[];
    for (i = 0; i < resultset.childNodes.length; i++) {
        if(resultset.childNodes.item(i).nodeName=="resource"){
            var resource=resultset.childNodes.item(i);
            contents.push(resource.attributes['name'].nodeValue);
        }
    }
    render('none');
}

//------------------------------------------------------------------------
// get customer bookings
//------------------------------------------------------------------------

function processinputbox()
{
  customer =window.logged;
  $.ajax({
    type: 'POST',
    url: './booking/getcustomerbookings_XML.php',
    data: {
      customerID: encodeURIComponent(customer),
      type: apptype 	  // Filter out bookings made from other applications application.
                            // Most commonly user name of student
    },
    success:  ResultBookingCustomer,
    error: errormsg
  });
}

function ResultBookingCustomer(returnedData)
{
  // Fix characters in XML notation to HTML notation
  fixChars(returnedData);

  // An XML DOM document is returned from AJAX
  var resultset=returnedData.childNodes[0];

  var output="<table>";

  // Iterate over all nodes in root node (i.e. bookings)
  for (i = 0; i < resultset.childNodes.length; i++) {
    // Iterate over all child nodes of that node that are booking nodes
    if(resultset.childNodes.item(i).nodeName=="booking"){
      // Retrieve first name and last name for node
      var booking=resultset.childNodes.item(i);

      output+="<tr class='actiontablerow'>";

      output+="<td>"+booking.attributes['resourceID'].nodeValue+"</td>";
      output+="<td>"+booking.attributes['name'].nodeValue+"</td>";
      output+="<td>"+booking.attributes['date'].nodeValue+"</td>";
      output+="<td>"+booking.attributes['dateto'].nodeValue+"</td>";
      output+="<td>"+booking.attributes['cost'].nodeValue+"</td>";
      output+="</tr>";
    }
  }

  output+="</table>"
  var div=document.getElementById('OutputDiv');
  div.innerHTML=output;
  updateHistory('page5');
}

// Delete booking
//------------------------------------------------------------------------
// Deletes a booking made by a customer on a resource at a certain date start date
//------------------------------------------------------------------------

function deleteBooking()
{
  var customerID = window.logged;
  var resourceID = document.getElementById("resourceIDD").value;
  var date = document.getElementById("dateD").value;

  alert("CustomerID: " + customerID + " ResourceID: " + resourceID + " Date: " + date);
  $.ajax({
    type: 'POST',
    url: './booking/deletebooking_XML.php',
    data: {
      resourceID: resourceID,
      date: date,
      customerID: customerID
    },
    success: deletemade,
    error: errormsg
  });
}

function deletemade()
{
  alert("Delete was a success");
}


  contents=["70s vibes","cool pool","nerdy neon"];

 function render(direction)
 {
     searchterm=document.getElementById("resFulltextS").value;

     str="";

     if(direction=="up"){
         contents.sort(function(a, b){if(a>b) {return 1} else {return -1}});
     }else if(direction=="down"){
         contents.sort(function(a, b){if(b>a) {return 1} else {return -1}});
     }

     console.log(contents);

     for(i=0;i<contents.length;i++){
         if(searchterm!=""){
             if(contents[i].toUpperCase().indexOf(searchterm.toUpperCase())>-1) str+="<tr><td>"+contents[i]+"</td></tr>";
         }else{
             str+="<tr><td>"+contents[i]+"</td></tr>";
         }
     }


     document.getElementById("thetab").innerHTML=str;
 }
 function historyChange(event){
   page = event.state;
   showpage(page);
 }

 function updateHistory(token){
   history.pushState(token, "Titel: "+token, "webproject.html");
   showpage(token);
 }

 function setupHistory(){
   window.onpopstate = function(event) {
     historyChange(event);
   };
 }
