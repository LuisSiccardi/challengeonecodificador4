function encrypt() {
    var originalText = document.getElementById("original-text").value;
    var encryptedText = ""; // Lógica de encriptación aquí
    
    document.getElementById("encrypted-text").value = encryptedText;
}
  
function decrypt() {
    var encryptedText = document.getElementById("encrypted-text").value;
    var decryptedText = ""; // Lógica de desencriptación aquí
    
    document.getElementById("original-text").value = decryptedText;
}
  