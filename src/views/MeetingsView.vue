<template>
  <div class="Meetings">
    <!-- <MeetingsFilter /> -->
    <MeetingsResult />
  </div>
</template>

<script>
import MeetingsFilter from "@/components/MeetingsFilter.vue";
import MeetingsResult from "@/components/MeetingsResult.vue";

export default {
  name: "MeetingsView",
  components: {
    MeetingsFilter,
    MeetingsResult,
  },
};
</script>
