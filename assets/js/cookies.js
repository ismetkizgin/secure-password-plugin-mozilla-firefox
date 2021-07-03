function genericPassword() {
  let passwordOption = { length: 0, characters: [] };
  passwordOption.length = parseInt(document.getElementById("quantity").value);
  if (passwordOption.length <= 2) return;

  if (document.getElementById("symbols").checked)
    passwordOption.characters.push(secureRandomPassword.symbols);

  if (document.getElementById("numbers").checked)
    passwordOption.characters.push(secureRandomPassword.digits);

  if (document.getElementById("lowercaseCharacters").checked)
    passwordOption.characters.push(secureRandomPassword.lower);

  if (document.getElementById("uppercaseCharacters").checked)
    passwordOption.characters.push(secureRandomPassword.upper);

  document.getElementById(
    "showGenericPassword"
  ).value = secureRandomPassword.randomPassword(passwordOption);
}

function copy() {
  let copyInput = document.getElementById("showGenericPassword");
  copyInput.select();
  copyInput.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

document
  .querySelector("#btnGenericPassword")
  .addEventListener("click", genericPassword);

document.querySelector("#copy").addEventListener("click", copy);
