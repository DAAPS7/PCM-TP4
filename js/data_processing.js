$(document).ready(function () {
  $.getJSON("../data/legislativas_raw.json", function (data) {
    cleanElectionData(data);
  });
});

function cleanElectionData(rawData) {
  const cleaned = {};
  const distritosArray = Object.entries(rawData[0]);

  distritosArray.forEach(([codigo, nome]) => {
    rawData.forEach((row) => {
      const item = row["Círculo"];
      console.log(item);
    });
  });

  return cleaned;
}
