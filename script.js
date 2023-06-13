function encrypt() {
    var originalText = document.getElementById("original-text").value;
    var encryptedText = ""; 
    
    for (var i = 0; i < originalText.length; i++) {
        var charCode = originalText.charCodeAt(i);
        
        // Verifica si el carácter es una letra mayúscula
        if (charCode >= 65 && charCode <= 90) {
            // Aplica el desplazamiento de 3 posiciones (puedes ajustar este valor)
            var encryptedCharCode = (charCode - 65 + 3) % 26 + 65;
            encryptedText += String.fromCharCode(encryptedCharCode);
        }
        // Verifica si el carácter es una letra minúscula
        else if (charCode >= 97 && charCode <= 122) {
            // Aplica el desplazamiento de 3 posiciones (puedes ajustar este valor)
            var encryptedCharCode = (charCode - 97 + 3) % 26 + 97;
            encryptedText += String.fromCharCode(encryptedCharCode);
        }
        // Conserva otros caracteres sin encriptar
        else {
            encryptedText += originalText.charAt(i);
        }
    }

    document.getElementById("encrypted-text").value = encryptedText;
}
  
function decrypt() {
    var encryptedText = document.getElementById("encrypted-text").value;
    var decryptedText = ""; // Lógica de desencriptación aquí
    
    for (var i = 0; i < encryptedText.length; i++) {
        var charCode = encryptedText.charCodeAt(i);

        // Verifica si el carácter es una letra mayúscula
        if (charCode >= 65 && charCode <= 90) {
            // Aplica el desplazamiento inverso de 3 posiciones
            var decryptedCharCode = (charCode - 65 - 3 + 26) % 26 + 65;
            decryptedText += String.fromCharCode(decryptedCharCode);
        }
        // Verifica si el carácter es una letra minúscula
        else if (charCode >= 97 && charCode <= 122) {
            // Aplica el desplazamiento inverso de 3 posiciones
            var decryptedCharCode = (charCode - 97 - 3 + 26) % 26 + 97;
            decryptedText += String.fromCharCode(decryptedCharCode);
        }
        // Conserva otros caracteres sin desencriptar
        else {
            decryptedText += encryptedText.charAt(i);
        }
    }

    document.getElementById("original-text").value = decryptedText;
}