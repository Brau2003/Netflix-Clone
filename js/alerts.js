"use strict";
const mainSubtitle = document.querySelector(".main__subtitle");

const capitalizeDepartamento = (departamento) => {
  const departamentoCapitalized = departamento.charAt(0).toUpperCase() + departamento.slice(1).split(/(?=[A-Z])/);
  const departamentoSeparated = departamentoCapitalized.split(",").join(" ");
  return departamentoSeparated;
};

Swal.fire({
  title: "¡Bienvenid@ a Netflix!",
  text: "¿Desde qué parte del Perú nos visitas?",
  icon: "question",
  input: "select",
  inputPlaceholder: "Departamento",
  inputOptions: {
    lima: "Lima",
    amazonas: "Amazonas",
    ancash: "Áncash",
    apurimac: "Apurímac",
    arequipa: "Arequipa",
    ayacucho: "Ayacucho",
    cajamarca: "Cajamarca",
    callao: "Callao",
    cuzco: "Cuzco",
    huancavelica: "Huancavelica",
    huanuco: "Huánuco",
    ica: "Ica",
    junín: "Junín",
    laLibertad: "La Libertad",
    lambayeque: "Lambayeque",
    loreto: "Loreto",
    madreDeDios: "Madre de Dios",
    moquegua: "Moquegua",
    pasco: "Pasco",
    piura: "Piura",
    puno: "Puno",
    sanMartin: "San Martín",
    tacna: "Tacna",
    tumbes: "Tumbes",
    ucayali: "Ucayali",
  },
}).then((result) => {
  if (!result.value) {
    mainSubtitle.textContent = "Disfruta donde quieras. Cancela cuando quieras.";
  }
  if (result.value) {
    console.log(result.value);
    mainSubtitle.textContent = `Disfruta desde ${capitalizeDepartamento(result.value)}. Cancela cuando quieras.`;
  }
});
