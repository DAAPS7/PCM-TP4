$(document).ready(function () {
  $.getJSON("../data/legislativas_raw.json", function (data) {
    //const obj = cleanElectionData(data);
    //exportJSON(obj);
  });
});

function cleanElectionData(rawData) {
  const cleaned = {};

  const districtsArray = Object.entries(rawData[0]); // Districts and Codes ([1, 'Aveiro'])

  rawData.forEach((row) => {
    if (row && row["Círculo"]) {
      const item = row["Círculo"]; // Item (Inscritos, Votantes, etc.)

      if (isItemValid(item)) {
        cleaned[item] = {}; // Initializes the item in the cleaned JSON

        districtsArray.forEach(([code, name]) => {
          cleaned[item][name] = row[code]; // Coloca na posição do item atual o nome do distrito e o seu número baseado no seu código
        });
      }
    }
  });

  console.log(cleaned);
  return cleaned;
}

// Validate item
function isItemValid(item) {
  return (
    !item.includes("-") &&
    !item.includes("*") &&
    !item.includes("Observações") &&
    !item.includes("somatórios")
  );
}

function exportJSON(obj) {
  const filename = "legislativas1";
  const blob = new Blob([JSON.stringify(obj, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${filename}.json`;
  a.click();
  URL.revokeObjectURL(url);
}
