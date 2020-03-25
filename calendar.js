$(document).ready(function() {
  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: ["dayGrid"],
    eventBackgroundColor: "grey",
    header: {
      center: "title",
      left: "",
      right: "prev,next"
    },
    events: [
      {
        title: "Norcal Event",
        start: "2020-03-03",
        color: "#2DDE98"
      },
      {
        title: "event2",
        start: "2020-03-15",
        end: "2020-03-16",
        color: "#B84592"
      },
      {
        title: "event3",
        start: "2010-01-09T12:30:00",
        allDay: false // will make the time show
      },
      {
        start: "2020-03-05T10:00:00",
        end: "2025-11-10T16:00:00",
        rendering: "background",
        color: "grey"
      },
      {
        start: "2008-02-06",
        end: "2022-02-08",
        backgroundColor: "#f7f3f3",
        overlap: false,
        rendering: "background"
      }
    ]
  });

  calendar.render();
});
