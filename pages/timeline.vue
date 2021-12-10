<template>
  <div id="app">
    <Timeline
      :timeline-items="dataTimeline"
      :message-when-no-items="messageWhenNoItems"
      :unique-year="true"
      :show-day-and-month="true"
      order="asc"
      dateLocale="nl-BE"
    />
  </div>
</template>

<script>
import oslo from "./projects.json";
import moment from "moment";

const processed = oslo.map((event, idx) => {
  var dateMomentObject = moment(event.Date, "DD/MM/YYYY");
  var date = dateMomentObject.toDate();

  return {
    idx: idx,
    from: new Date(date),
    showDayAndMonth: true,
    description: event.Project,
    title: event.Type,
    color: "#ffe615",
  };
});

export default {
  data: () => ({
    messageWhenNoItems: "There arent items",
    dataTimeline: processed,
  }),
};
</script>
