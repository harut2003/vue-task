<template>
  <div class="result">
    <div class="mt-5">
      <v-btn class="white--text result-btn me-3">
        <v-icon class="icon-in-btn" right dark> mdi-check </v-icon>
        SELECT ALL
      </v-btn>
      <v-btn disabled class="white--text result-btn me-3">
        <v-icon class="icon-in-btn" right dark> mdi-plus </v-icon>
        ADD TO SCOPE
      </v-btn>
      <v-btn disabled class="white--text result-btn me-3">
        <v-icon class="icon-in-btn" right dark> mdi-minus </v-icon>
        MARK US UNSCOPE
      </v-btn>
    </div>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="desserts"
      :single-select="singleSelect"
      item-key="name"
      show-select
      class="elevation-1"
    >
      <template>
        <v-switch
          v-model="singleSelect"
          label="Single select"
          class="pa-3"
        ></v-switch>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    singleSelect: true,
    selected: [],
    headers: [
      {
        text: "SUBJECT",
        align: "start",
        sortable: false,
        value: "subject",
      },
      {
        text: "ORGANIZER",
        value: "organizer",
        align: "start",
        sortable: false,
      },
      {
        text: "DATE",
        value: "date",
        align: "start",
        sortable: false,
        "item-key": "date",
      },
      { text: "TIME", value: "time", align: "start", sortable: false },
      { text: "TYPE", value: "type", align: "start", sortable: false },
      {
        text: "FREQUENCY",
        value: "frequency",
        align: "start",
        sortable: false,
      },
      { text: "NOTE", value: "note", align: "start", sortable: false },
      { text: "STATUS", value: "status", align: "start", sortable: false },
    ],
    desserts: [
      {
        subject: "Lorem ipsum",
        organizer: "LOREM",
        date: "October 6, 2020",
        time: "10:30 am",
        type: "Recurring",
        frequency: "Low",
        note: "1%",
        status: "Unscoped",
      },
    ],
  }),
};
</script>

<style lang="scss">
.result {
  margin-top: 26px;
}
.result-btn {
  font-size: 15px;
  background-color: #6d32a5 !important;
  .icon-in-btn {
    margin-left: 0 !important;
    margin-right: 8px !important;
  }
}
.text-start {
  &:nth-child(2) {
    font-weight: bold;
  }
}
</style>
