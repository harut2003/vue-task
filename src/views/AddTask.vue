<template>
  <div>
    <p class="header-txt">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit,
    </p>
    <v-form>
      <div class="v-form-header">
        <h3>Enter a title for the task here</h3>
        <div>
          <v-btn :ripple="false" icon color="black" id="no-background-hover">
            <v-icon>mdi-microphone-outline</v-icon>
            Record audio
          </v-btn>
          <v-btn :ripple="false" icon color="black" id="no-background-hover">
            <v-icon>mdi-video-outline</v-icon>
            Record video
          </v-btn>
          <v-btn :ripple="false" icon color="black" id="no-background-hover">
            <v-icon>mdi-attachment</v-icon>
            Add attachment
          </v-btn>
        </div>
      </div>
      <hr />
      <div class="form-main">
        <div>
          <v-text-field
            label="Description"
            v-model="description"
            class="description"
          ></v-text-field>
          <v-text-field
            label="Project"
            v-model="project"
            class="project"
          ></v-text-field>
        </div>
        <div class="ranges">
          <div class="priority">
            <label>Priority</label>
            <v-slider
              v-model="priority"
              color="#f2a201"
              track-color="#F5F5F6"
              thumb-label="always"
            >
              <template v-slot:thumb-label="{ value }">
                {{ rangeCalc(value) }}</template
              >
            </v-slider>
          </div>
          <div class="priority">
            <label>Criticality</label>
            <v-slider
              v-model="criticality"
              color="#f53361"
              track-color="#F5F5F6"
              thumb-label="always"
            >
              <template v-slot:thumb-label="{ value }">
                {{ rangeCalc(value) }}</template
              >
            </v-slider>
          </div>
        </div>
        <div class="dead-benef">
          <div class="date-cont">
            <label for="date">Deadline for the task</label>
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Select a date"
                  prepend-icon="mdi-calendar"
                  class="date"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                :active-picker.sync="activePicker"
                :max="
                  new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                    .toISOString()
                    .substr(0, 10)
                "
                min="1950-01-01"
                @change="save"
              ></v-date-picker>
            </v-menu>
          </div>
          <div class="benef-cont">
            <label for="benef">Beneficiary</label>
            <v-select
              v-model="benef"
              :items="benefItems"
              label="Who is the beneficiary for the task?"
            ></v-select>
          </div>
        </div>
      </div>
    </v-form>
    <div class="footer justify-space-between d-flex">
      <v-btn
        :ripple="false"
        icon
        color="black"
        id="no-background-hover"
        to="tasks"
      >
        <v-icon>{{ $vuetify.icons.values.back }}</v-icon>
        Back
      </v-btn>
      <div>
        <v-btn class="footer-btn" @click="handleSubmit">Done</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "@/components/app/Footer.vue";
export default {
  data() {
    return {
      satisfactionEmojis: ["Low", "Normal", "High"],
      description: "",
      project: "",
      priority: "",
      criticality: "",
      activePicker: null,
      date: null,
      menu: false,
      benef: "",
      benefItems: ["User", "Admin"],
    };
  },
  components: {
    Footer,
  },
  computed: {
    rangeCalc() {
      return (value) =>
        value > 66 ? "High" : value > 33 && value <= 66 ? "Normal" : "Low";
    },
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
    handleSubmit() {
      const formData = {
        id: this.uid,
        description: this.description,
        project: this.project,
        priority: this.priority,
        criticality: this.criticality,
        date: this.date,
        benef: this.benef,
      };

      this.$store.commit("addTask", formData);
      this.$router.push("/transitions/tasks");
    },
  },
};
</script>

<style lang="scss">
.footer {
  margin-top: 90px;
}
.back-btn {
  color: black;
  background-color: transparent !important;
}
.footer-btn {
  width: 441px;
  &:nth-child(1) {
    background-color: #2b0f4d !important;
    margin-left: 8px;
    color: white;
  }
}
.dead-benef {
  margin-top: 26px;
  justify-content: space-between;
}
.date-cont,
.benef-cont {
  width: 45%;
}
.date {
  width: 100%;
  flex-direction: row-reverse;
}
.header-txt {
  font-size: 15px;
  color: #6a6c78;
  margin-bottom: 45px;
}
.form-main {
  margin-top: 30px;
  & > div {
    display: flex;
  }
}
.v-form {
  background-color: white;
  padding: 20px 30px;
  border-radius: 30px;
}
.v-form-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  div {
    width: 27%;
    display: flex;
    justify-content: space-between;
    padding-right: 68px;
  }
  .v-btn {
    font-size: 13px;
  }
  .v-icon {
    margin-right: 10px;
  }
}
.v-slider__thumb-label div {
  color: black;
}
hr {
  border: 1px solid gray;
}
#no-background-hover::before {
  background-color: transparent !important;
}
.description {
  width: 65%;
  margin-right: 5%;
}
.project {
  width: 30%;
}
.v-slider--horizontal {
  margin-left: 0 !important;
}
.v-slider__track-background {
  border-radius: 10px;
}
.v-slider--horizontal .v-slider__track-container {
  .v-slider__track-fill {
    border-radius: 10px;
  }
  height: 10px !important;
}
.v-slider__thumb {
  height: 32px !important;
  width: 32px !important;
  box-shadow: 0px 1px 6px #0000005c !important;
  background-color: white !important;

  &::before {
    background: white !important;
  }
}
label {
  color: #05081d;
  font-size: 26px;
  font-weight: bold;
}
.ranges {
  margin-top: 52px;
  justify-content: space-between;
  & > div {
    width: 45%;
  }
  .v-input__slider {
    margin-top: 37px;
  }

  .v-slider__thumb-label-container {
    left: 9px;
    top: 68px;
  }
  .v-slider__thumb-label {
    background-color: white !important;
  }
}
.ranges .v-slider__thumb-container:hover .v-slider__thumb:before {
  transform: scale(0) !important;
}
.ranges .v-slider__thumb-container--active .v-slider__thumb:before {
  transform: scale(0) !important;
}
</style>
