$(document).ready(function () {
  $.getJSON("../data/legislativas_raw.json", function (data) {
    cleanElectionData(data);
  });
});

function cleanElectionData(rawData) {
  const cleaned = { Inscritos: {}, Votantes: {} };
  const distritosArray = Object.entries(rawData[0]);

  distritosArray.forEach(([codigo, nome]) => {
    console.log(`Código: ${codigo}, Nome: ${nome}`);
  });
}
