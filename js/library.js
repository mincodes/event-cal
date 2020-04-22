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
