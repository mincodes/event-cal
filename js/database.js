/** 

Similar to an angular service + database

**/

// TODO write a function to pull this data from local storage
function pullMap(id) {
  console.log(JSON.parse(localStorage.getItem(id)));
  return JSON.parse(localStorage.getItem(id));
}

const DB_PERSONEL = {};

var ACCESS_MAP = {
  amlkm2lkm: {
    name: "First event",
    email: "email@email.com",
    eventName: "",
    location: "",
    startDate: "",
    endDate: "",
    bannerURL:
      "https://unavsa.org/wp-content/uploads/2019/12/NEWSLETTER-UNAVSA16-Conference-Reveal-1-400x284.png",
    eventDescription: "",
    questions: "",
  },
};

// Pulls from local storage for events, then store into this variable
function storeMap(id) {
  console.log(ACCESS_MAP);
  ACCESS_MAP = { ...ACCESS_MAP, ...pullMap(id) };
}
/*
function addToMap(id) {
  // Checks if event id already exists

  ACCESS_MAP[id] = newEvent;
  storeLocally(id, ACCESS_MAP);
  console.log(ACCESS_MAP);
}
*/
/** Service methods **/

/**
Accessor method for database
**/

function getDBData(dbType, id) {
  if (dbType === "person") {
    return id ? DB_PERSONEL[id] : DB_PERSONEL;
  } else if (dbType === "events") {
    return id ? ACCESS_MAP[id] : ACCESS_MAP;
  }
  return null;
}

function storeLocally(id, data) {
  localStorage.setItem(id, JSON.stringify(data));
}
