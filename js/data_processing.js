$(document).ready(function () {
  $.getJSON("../data/legislativas_raw.json", function (data) {
    cleanElectionData(data);
  });
});

function cleanElectionData(rawData) {
  const cleaned = {};

  const districtsArray = Object.entries(rawData[0]); // Districts and Codes ([1, 'Aveiro'])

  rawData.forEach((row) => {
    if (row && row["Círculo"]) {
      const item = row["Círculo"]; // Item (Inscritos, Votantes, etc.)
      cleaned[item] = {}; // Initializes the item in the cleaned JSON

      // TODO: Remove the items that don't have relevant data

      districtsArray.forEach(([code, name]) => {
        cleaned[item][name] = row[code]; // Coloca na posição do item atual o nome do distrito e o seu número baseado no seu código
      });
    }
  });

  console.log(cleaned);
  return cleaned;
}
