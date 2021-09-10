'use strict';


var contactList = [];
var currentId = 0;
// contact constructor
function Contact(firstname, surname, phoneNumber, address, contactId){
  this.firstname = firstname;
  this.surname = surname;
  this.phoneNumber = phoneNumber;
  this.address = address;
  this.contactId = contactId;
}


// Add new contact function
$('#contactForm').submit(function(e){
  // Adds new contact to the contactList array
  e.preventDefault();
  var contactArray = $('#contactForm').serializeArray();
  var contact = new Contact(contactArray[0], contactArray[1], contactArray[2], contactArray[3], currentId);
  contactList.unshift(contact);
  $("#contacts ul").prepend("<li><b>Name:</b> " + contact.firstname.value + ", <b>Surname:</b> " + contact.surname.value + ", <b>Phone Number:</b> " + contact.phoneNumber.value + ", <b>Address:</b> " + contact.address.value + " <button class='delete' id=" + currentId + " onclick='deleteContact(" + currentId + ")'>X</button></li>");
  currentId++;
})


function searchContacts(){
  var input = document.getElementById("searchbar");
  var result = contactList.filter(contact => contact.firstname.value.includes(input.value) || contact.surname.value.includes(input.value) || contact.phoneNumber.value.includes(input.value) || contact.address.value.includes(input.value));
  $("#contacts ul").empty();
  for (let i = 0; i < result.length; i++){
    $("#contacts ul").prepend("<li><b>Name:</b> " + result[i].firstname.value + ", <b>Surname:</b> " + result[i].surname.value + ", <b>Phone Number:</b> " + result[i].phoneNumber.value + ", <b>Address:</b> " + result[i].address.value + " <button class='delete' id=" + result[i].contactId + " onclick='deleteContact(" + result[i].contactId + ")'>X</button></li>");
  }
}

function deleteContact(id){
  var result = contactList.filter(contact => contact.contactId != id);
  contactList = result;
  $("#contacts ul").empty();
  for (let i = 0; i < result.length; i++){
    $("#contacts ul").prepend("<li><b>Name:</b> " + result[i].firstname.value + ", <b>Surname:</b> " + result[i].surname.value + ", <b>Phone Number:</b> " + result[i].phoneNumber.value + ", <b>Address:</b> " + result[i].address.value + " <button class='delete' id=" + result[i].contactId + " onclick='deleteContact(" + result[i].contactId + ")'>X</button></li>");
  }
}
