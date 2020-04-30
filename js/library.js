// TODO Function to update the access map
function updateEvents(accessCode, newEvent) {
  // TODO implement

  const ACCESS_MAP = {
    accessCode: {
      newEvent,
    },
  };

  console.log(ACCESS_MAP);

  // Store locally
  storeLocally(accessCode, ACCESS_MAP);
}

//Fills Admin chart with form data
function populateTable(tableBody, data) {

  //Gathers info from Acesss key object
  if (!data) { return null; }
  let tableEntries = $(`#${tableBody}`);
  tableEntries.empty();

  //Fills table with new data 
  Object.keys(data).forEach((key) => {
    let eventData = data[key];
    let row = document.createElement("table-entry");

    let tempElement = document.createElement("td");
    tempElement.innerHTML = eventData["name"];
    row.append(tempElement);

    tempElement = document.createElement("td");
    tempElement.innerHTML = eventData["region"];
    row.append(tempElement);

    tempElement = document.createElement("td");
    tempElement.innerHTML = new Date() - eventData["startDate"] + " seconds ago";
    row.append(tempElement);

    tempElement = document.createElement("td");
    let tempButton = document.createElement("button");
    tempButton.innerHTML = "Link here";
    tempElement.append(tempButton);

    row.append(tempElement);
    tableEntries.append(row);
  })

}

function toArray(jsonObject) {
  return Object.values(jsonObject);
}
