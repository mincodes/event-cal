$(document).ready(function() {
  let events = toArray(getDBData("events", null));
  var currentTime = new Date();
  // Filter out expired events
  events = events.filter(el => {
    return el.endDate - currentTime > 0;
  });
  let sortedEvents = events.sort((a, b) => {
    return a.endDate - b.endDate;
  });
  let calendarEvents = events.map(el => {
    return {
      title: el.name,
      start: el.startDate.toISOString(),
      end: el.endDate.toISOString()
    };
  });

  // sort by most recent first
  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: ["interaction", "dayGrid"],
    eventBackgroundColor: "grey",
    navLinks: true,
    editable: true,
    eventLimit: true,
    header: {
      center: "title",
      left: "",
      right: "prev,next"
    },
    events: calendarEvents
  });

  calendar.render();
  changeDay(currentTime, events);
});

function renderEvents(maxCount) {
  maxCount = maxCount || 30;
  console.log(maxCount);
}

function renderEvents(eventList) {
  $("#dayEvents").empty();
  eventList.forEach(el => {
    let parent = document.createElement("div");
    let title = document.createElement("h3");
    title.innerHTML = el.name;
    parent.append(title);
    let location = document.createElement("div");
    location.innerHTML = el.location;
    parent.append(location);

    //Todo add a class for the dates
    let dates = document.createElement("div");
    console.log(el.endDate.getMinutes());
    let startTime =
      el.startDate.getHours() > 12
        ? el.startDate.getHours() - 12
        : el.startDate.getHours();
    startTime += ":";
    startTime +=
      el.startDate.getMinutes() < 10
        ? "0" + el.startDate.getMinutes()
        : el.startDate.getMinutes();
    startTime += el.startDate.getHours() < 12 ? "am" : "pm";
    let endTime =
      el.endDate.getHours() > 12
        ? el.endDate.getHours() - 12
        : el.endDate.getHours();
    endTime += ":";
    endTime +=
      el.endDate.getMinutes() < 10
        ? "0" + el.endDate.getMinutes()
        : el.endDate.getMinutes();
    endTime += el.endDate.getHours() < 12 ? "am" : "pm";
    dates.innerHTML = startTime + " - " + endTime;
    parent.append(dates);
    $("#dayEvents").append(parent);
  });
}

// TODO listener function for changing a day

/**
 *
 * @param(currentDay) date object of the current day
 */
function changeDay(currentDay, events) {
  let currentDayEvents = events.filter(el => {
    return (
      el.endDate.toDateString().toLowerCase() ===
        currentDay.toDateString().toLowerCase() ||
      el.startDate.toDateString().toLowerCase() ===
        currentDay.toDateString().toLowerCase()
    );
  });
  currentDayEvents = currentDayEvents.sort((a, b) => {
    return a.startDate - b.startDate;
  });
  renderEvents(currentDayEvents);
}
