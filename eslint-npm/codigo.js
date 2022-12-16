let strName = "Nicolas";
let strLastName = "Origlia";
let estudiante = strName.concat(" ", strLastName);
let estudianteMayus = estudiante.toLocaleUpperCase();
let estudianteMinus = estudiante.toLocaleLowerCase();
let numLetras = estudiante.length;
let firstLetter = strName.charAt(0);
let lastLetter = strLastName.slice(-1);
let sinEspacios = estudiante.replace(/ /g, "");
let encontrarName = estudiante.indexOf(strName);

