function sendMail(params) {
  var tempParams = {
    from_name:document.getElementById("email").value,
    to_name:document.getElementById("name").value,
    message:document.getElementById("message").value,

  };
emailjs.send('service_qbgas95','template_i0d3cc8',tempParams)
.then(function(res){
  // alert("success", res.status);
  swal("Your message is submitted successfully", "I will respond you quickly", "success");
})

}
