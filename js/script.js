function gracias() {
    const graciasArea = document.getElementById("gracias-area");
    const botones = document.getElementById("botones");
    let xhttp = new XMLHttpRequest();
  
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        graciasArea.style.display = "block";
        botones.classList.add("hide");
      }
    };
  
    xhttp.open("GET", "./index.html", true);
    xhttp.send();
  }
  
  function mostrarTextBox() {
    const feedbackArea = document.getElementById("feedback-area");
    const botones = document.getElementById("botones");
    let xhttp = new XMLHttpRequest();
  
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        feedbackArea.style.display = "flex";
        botones.classList.add("hide");
      }
    };
  
    xhttp.open("GET", "./index.html", true);
    xhttp.send();
  }
  
  function sendEmail() {
    const textarea = document.getElementById("text-feedback");
    const feedbackArea = document.getElementById("feedback-area");
    const gracias = document.getElementById('gracias');
  
    let mensaje = textarea.value;
    
    if(mensaje.length > 5){
        Email.send({
      Host: "smtp.gmail.com",
      Username: "chat.siua@gmail.com",
      Password: "chat12345",
      To: "chat.siua@gmail.com",
      From: "chat.siua@gmail.com",
      Subject: "Feedback del bot",
      Body: mensaje,
    }).then(function (message) {
      alert("Sugerencia recibida ✅");
    });
    
    feedbackArea.style.display = "none";
    gracias.style.display = "block";
    }
    else{
        alert("Retroalimentacion muy corta. \nPor favor ingresa un comentario mas extenso.");
    }
  }