let CodeInput = document.getElementById("Code");
  let Copy = document.getElementById("copy");
  let range = document.getElementById("Range");
  let Codesize = document.querySelector(".label");
  let Generatebtn = document.querySelector(".Generatebtn");

  let LowerCase = "abcdefghijklmnopqrstuvwxyz";
  let UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let symbols =  "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let allChars = LowerCase + UpperCase + numbers + symbols;

Generatebtn.onclick = function generatePasswort (){
    let passwordLength = range.value;
    let password = "" ;
    for ( let i = 0 ; i < passwordLength ; i++) {
        let randomIndex = Math.floor(Math.random () * allChars.length) ;
        password += allChars[randomIndex] ;
    }
     CodeInput.value = password ;
     Copy.classList.replace("uil-copy","uil-file-check-alt");

}  
  
  range.oninput = function () {
    Codesize.textContent = range.value;
  }

  Copy.onclick = function () {
    navigator.clipboard.writeText(CodeInput.value);
    Copy.classList.replace("uil-copy","uil-file-check-alt");
  }