<template>
  <div>
    <TaskHeader />
    <div class="main-task">
      <div class="user-controller">
        <div class="button-container">
          <v-btn tile class="add-task" to="/transitions/add-task">
            <v-icon left> mdi-plus </v-icon>
            ADD TASKS
          </v-btn>
          <v-btn
            @click="selectAll"
            tile
            :color="isSelectButton ? '#1fc599' : 'primary'"
            class="select-all"
          >
            <v-icon left> mdi-check </v-icon>
            {{ isSelectButton ? "SELECT ALL" : "UNSELECT ALL" }}
          </v-btn>
          <v-btn disabled tile color="#1fc599" class="select-all">
            <v-icon left> mdi-thumb-up-outline </v-icon>
            SELECT ALL
          </v-btn>
          <v-btn disabled tile color="#1fc599" class="select-all">
            <v-icon left> mdi-thumb-down-outline </v-icon>
            SELECT ALL
          </v-btn>
        </div>
        <div>
          <div class="sort">
            <div class="d-flex select-cont" cols="12" sm="3">
              <label for="status">STATUS</label>
              <v-select
                id="status"
                class="select status-sel"
                label="All"
                dense
              ></v-select>
            </div>
            <div class="d-flex select-cont">
              <label for="date">SORT BY</label>
              <v-select
                id="date"
                class="select date-sel"
                label="Date added"
                dense
              ></v-select>
            </div>
          </div>
        </div>
      </div>
      <div class="task-container">
        <div
          class="task"
          v-for="task in filteredTasks ? filteredTasks : tasks"
          :key="task.project"
        >
          <div class="date-checkbox">
            <p class="dateTask">{{ task.date | moment }}</p>
            <!-- <p>{{ task.date | moment }}</p> -->
            <div class="approv-checkbox">
              <span>Submitted for approval</span>
              <v-checkbox v-model="selected" :value="task.id"></v-checkbox>
            </div>
          </div>
          <div class="title-buttons">
            <div class="title-project">
              <span class="task-title">{{ task.description }}</span>
              <div class="dot"></div>
              <span class="project">{{ task.project }}</span>
            </div>
            <div class="task-buttons">
              <v-icon
                class="outlined"
                v-text="$vuetify.icons.values.chat"
                color="#1fc599"
              ></v-icon>
              <v-icon
                class="outlined"
                v-text="$vuetify.icons.values.edit"
                color="#1fc599"
                @click="opening(task)"
              ></v-icon>
              <v-icon
                class="outlined"
                v-text="$vuetify.icons.values.trash"
                color="#1fc599"
                @click="openingDelete(task.id)"
              ></v-icon>
              <v-icon
                class="background-icon"
                v-text="$vuetify.icons.values.down"
                color="white"
              ></v-icon>
            </div>
          </div>
          <div class="task-footer">
            <div class="properties">
              <div class="icon-label">
                <v-icon
                  v-text="$vuetify.icons.values.chat"
                  color="#1fc599"
                ></v-icon>
                <span>10 comments</span>
              </div>
              <div class="icon-label">
                <v-icon
                  v-text="$vuetify.icons.values.attachment"
                  color="#1fc599"
                ></v-icon>
                <span>5 attachments</span>
              </div>
              <div class="icon-label">
                <v-icon
                  v-text="$vuetify.icons.values.history"
                  color="#1fc599"
                ></v-icon>
                <span>{{ rangeCalc(task.priority) }}</span>
              </div>
              <div class="icon-label">
                <v-icon
                  v-text="$vuetify.icons.values.alert"
                  color="#1fc599"
                ></v-icon>
                <span>{{ rangeCalc(task.criticality) }}</span>
              </div>
            </div>
            <div class="jira-icon-label">
              <span>Integrated with Jira</span>
              <img src="../assets/icons/jira.png" alt="" width="29" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <TaskEditModal
      v-if="openModal"
      :task="choosenTask"
      :openModal="openModal"
      @closeModal="openModal = false"
    />
    <TaskDeleteModal
      v-if="openDeleteModal"
      :taskId="choosenDeleteTask"
      :openModal="openDeleteModal"
      @closeModal="openDeleteModal = false"
    />
  </div>
</template>

<script>
import TaskHeader from "@/components/TaskHeader.vue";
import moment from "moment";
import TaskDeleteModal from "@/components/TaskDeleteModal.vue";
import TaskEditModal from "@/components/TaskEditModal.vue";

export default {
  data() {
    return {
      compTasks: this.tasks,
      openModal: false,
      openDeleteModal: false,
      choosenDeleteTask: null,
      choosenTask: null,
      selected: [],
      isSelectButton: true,
    };
  },
  methods: {
    opening(task) {
      this.openModal = true;
      this.choosenTask = task;
    },
    openingDelete(id) {
      this.openDeleteModal = true;
      this.choosenDeleteTask = id;
    },
    selectAll() {
      if (this.isSelectButton) {
        this.tasks.forEach((task) => this.selected.push(task.id));
      } else {
        this.selected = [];
      }
      this.isSelectButton = !this.isSelectButton;
    },
  },
  computed: {
    filteredTasks() {
      return this.$store.getters.filteredTasks;
    },
    tasks() {
      return this.$store.getters.tasks;
    },
    rangeCalc() {
      return (value) =>
        value > 66 ? "High" : value > 33 && value <= 66 ? "Normal" : "Low";
    },
  },
  filters: {
    moment(date) {
      return moment(date).format("MMM Do, YYYY").toUpperCase();
    },
  },
  components: {
    TaskHeader,
    TaskEditModal,
    TaskDeleteModal,
  },
};
</script>

<style lang="scss">
.v-input--selection-controls__ripple {
  margin-left: 14px !important;
}
.jira-icon-label {
  display: flex;
  align-items: center;
  span {
    color: #05081d;
    font-style: italic;
    font-size: 12px;
  }
  img {
    margin-left: 14px;
  }
}
.properties {
  display: flex;
  .icon-label {
    margin-right: 50px;
  }
  span {
    font-size: 13px;
    color: #05081d;
    font-weight: bold;
  }
  .v-icon {
    margin-right: 9px;
    font-size: 16px;
  }
}
.task-footer {
  margin-top: 30px;
}
.date-checkbox,
.title-buttons,
.task-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .v-icon {
    margin-left: 10px;
    &.outlined,
    &.background-icon {
      border-radius: 50%;
      height: 56px;
      width: 56px;
    }
    &.outlined {
      border: 1px solid currentColor;
    }
    &.background-icon {
      background-color: #1fc599;
    }
  }
}
.title-project {
  display: flex;
  align-items: center;
  font-size: 26px;
  font-weight: bold;
  width: 100%;
}

.task-buttons {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  .v-icon {
    cursor: pointer;
  }
}
.task-title {
  color: #05081d;
}
.project {
  color: #1fc599;
}
.dot {
  width: 6px;
  height: 6px;
  background-color: #05081d;
  border-radius: 50%;
  margin: 0 7px;
}
.approv-checkbox {
  display: flex;
  align-items: center;
  span {
    color: #05081d;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
  }
  .v-input--checkbox {
    margin-left: 16px;
  }
}
.dateTask {
  color: #1fc599;
  font-size: 12px;
}
.task-container {
  margin-top: 23px;
}
.task {
  padding: 10px 30px 20px 30px;
  background-color: white;
  margin-bottom: 15px;
  border-radius: 30px;
}
.user-controller {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main-task {
  margin-top: 24px;
}
.sort {
  display: flex;
  justify-content: flex-end;
}
.v-btn {
  border-radius: 10px;
  color: white !important;
  width: 180px;
  height: 50px !important;
  margin-right: 10px;
}
.add-task {
  background-color: #2b0f4d !important;
}
.select-cont {
  align-items: baseline;
  label {
    margin-right: 15px;
    color: #a3a6b9;
    font-size: 15px;
  }
}
.status-sel {
  width: 50px;
  margin-right: 20px;
}
.date-sel {
  width: 100px;
}

.select {
  .v-input--dense > .v-input__control > .v-input__slot {
    margin-bottom: -7px;
  }
  .v-input__slot::before {
    border-style: none !important;
  }
}
</style>
