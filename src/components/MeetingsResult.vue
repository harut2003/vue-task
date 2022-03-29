<template>
  <div class="result">
    <div class="mt-5 mb-5">
      <v-btn class="white--text result-btn me-3">
        <v-icon class="icon-in-btn" right dark> mdi-calendar </v-icon>
        ADD MEETING(S)
      </v-btn>
      <v-btn
        v-if="!isAllSelected"
        class="white--text result-btn me-3"
        @click="toggleSelectAll"
      >
        <v-icon class="icon-in-btn" right dark> mdi-check </v-icon>
        SELECT ALL
      </v-btn>
      <v-btn
        v-else
        class="white--text result-btn me-3"
        @click="toggleSelectAll"
      >
        <v-icon class="icon-in-btn" right dark> mdi-close </v-icon>
        UNSELECT ALL
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
      hide-default-footer
      v-model="selected"
      :headers="headers"
      :items="desserts"
      item-key="name"
      :single-select="singleSelect"
      show-select
      class="elevation-1"
      id="result-table"
      :class="{ allSelected: isAllSelected }"
    >
    </v-data-table>
  </div>
</template>

<script>
export default {
  methods: {
    toggleSelectAll() {
      this.isAllSelected = !this.isAllSelected;
      if (!this.isAllSelected) {
        this.selected = [];
        return;
      }
      this.selected = [...this.desserts];
    },
  },
  data: () => ({
    singleSelect: true,
    selected: [],
    isAllSelected: false,
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
  border-radius: 10px;
  font-size: 15px;
  background-color: #6d32a5 !important;
  &:nth-child(1) {
    background-color: #2b0f4d !important;
  }
  .icon-in-btn {
    margin-left: 0 !important;
    margin-right: 8px !important;
  }
}
#result-table {
  border-radius: 30px;
  padding: 0 25px;
  th span {
    color: #a3a6b9;
    font-weight: normal;
  }
  // tbody tr .text-start {
  //   &:last-child {
  //     background-color: #6d32a5;
  //     border-radius: 18px;
  //   }
  // }
}
.text-start {
  &:nth-child(2) {
    font-weight: bold;
  }
}
.allSelected {
  tbody tr {
    background: #f5f5f5;
    .v-icon::before {
      content: "\F0132";
    }
  }
}
</style>
