<template>
  <div class="result">
    <div class="mt-5 mb-5 d-flex justify-start flex-wrap">
      <div>
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
      </div>
      <div>
        <v-btn
          :disabled="showBtn"
          class="white--text result-btn me-3"
          @click="toggleScope('scoped')"
        >
          <v-icon class="icon-in-btn" right dark> mdi-plus </v-icon>
          ADD TO SCOPE
        </v-btn>
        <v-btn
          :disabled="showBtn"
          @click="toggleScope"
          class="white--text result-btn me-3"
        >
          <v-icon class="icon-in-btn" right dark> mdi-minus </v-icon>
          MARK US UNSCOPE
        </v-btn>
      </div>
    </div>

    <v-data-table
      hide-default-footer
      :headers="headers"
      :items="desserts"
      item-key="name"
      :single-select="singleSelect"
      show-select
      class="elevation-1"
      id="result-table"
    >
      <template v-slot:item="{ item }">
        <tr>
          <td
            v-for="(value, name) in item"
            :key="name"
            class="text-start"
            :id="name"
          >
            <v-checkbox
              v-if="name === 'options'"
              class="ms-5"
              @click="toggleCheckbox(value.id)"
              v-model="value.check"
            ></v-checkbox>
            <span v-else-if="value">{{ value }}</span>
            <v-btn
              v-else
              :ripple="false"
              icon
              color="#6a6c78"
              id="no-background-hover"
              class="add-btn"
              @click="openDialog(item.options.id)"
            >
              Add
            </v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
    <TableDialog @close="close" :addDialog="addDialog" @save="saveNote" />
  </div>
</template>

<script>
import TableDialog from "./TableDialog.vue";

export default {
  data: () => ({
    addDialog: false,
    singleSelect: true,
    selected: [],
    isAllSelected: false,
    openedDialogId: null,
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
        options: { id: 1, check: false },
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
        options: { id: 2, check: false },
        subject: "Lorem ipsum",
        organizer: "LOREM",
        date: "October 6, 2020",
        time: "10:30 am",
        type: "Recurring",
        frequency: "Low",
        note: "",
        status: "Unscoped",
      },
    ],
  }),
  methods: {
    toggleSelectAll() {
      this.isAllSelected = !this.isAllSelected;
      this.desserts = this.desserts.map((obj) => {
        obj.options.check = this.isAllSelected;
        return obj;
      });
      if (this.isAllSelected) {
        this.selected = [...this.desserts];
      } else {
        this.selected = [];
      }
      // if (!this.isAllSelected) {
      //   this.selected = [];
      //   return;
      // }
    },
    close() {
      this.addDialog = false;
    },
    openDialog(id) {
      this.addDialog = !this.addDialog;
      this.openedDialogId = id;
    },
    saveNote(value) {
      this.desserts = this.desserts.map((obj) => {
        if (obj.options.id === this.openedDialogId) {
          obj.note = value;
        }
        return obj;
      });
    },
    toggleScope(add) {
      this.desserts = this.desserts.map((obj, i) => {
        this.selected.forEach((sel) => {
          if (sel.options.id === obj.options.id) {
            obj.status = add === "scoped" ? "Scoped" : "Unscoped";
            obj.options.check = false;
          }
        });

        return obj;
      });
      this.isAllSelected = false;
      this.selected = [];
    },
    toggleCheckbox(id) {
      const item = this.desserts.find((obj) => obj.options.id === id);
      if (!item.options.check) {
        this.selected = this.selected.filter((obj) => obj.options.id !== id);
      } else {
        const item = this.desserts.find((obj) => id === obj.options.id);
        this.selected = [...this.selected, item];
        // this.desserts = this.desserts.map(obj => {
        //   if(obj.options.id === item.options.id){
        //     obj.options.check
        //   }
        // })
      }
    },
  },
  components: {
    TableDialog,
  },
  computed: {
    showBtn() {
      return !this.selected.length;
    },
  },
};
</script>

<style lang="scss">
.result {
  margin-top: 26px;
}
.result-btn {
  border-radius: 10px;
  margin-bottom: 15px;
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
#no-background-hover {
  text-transform: capitalize;
  &::before {
    background-color: transparent !important;
  }
}
.add-btn {
  span {
    text-decoration: underline;
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
      color: #1976d2 !important;
      caret-color: #1976d2 !important;
    }
  }
}
</style>
