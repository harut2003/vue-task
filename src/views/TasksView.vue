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
          <v-btn tile color="#1fc599" class="select-all">
            <v-icon left> mdi-check </v-icon>
            SELECT ALL
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
        <div class="task" v-for="task in tasks" :key="task.project">
          <p>description {{ task.description }}</p>
          <p>project {{ task.project }}</p>
          <p>priority {{ task.priority }}</p>
          <p>criticality {{ task.criticality }}</p>
          <p>date: {{ task.date }}</p>
          <p>benef: {{ task.benef }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskHeader from "@/components/TaskHeader";
export default {
  computed: {
    tasks() {
      this.$store.getters.tasks.forEach((task) => {
        console.log(new Date(task.date));
      });
      return this.$store.getters.tasks;
    },
    date() {},
  },
  components: {
    TaskHeader,
  },
};
</script>

<style lang="scss">
.task-container {
  margin-top: 23px;
}
.task {
  padding: 22px 30px;
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
