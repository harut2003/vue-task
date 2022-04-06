<template>
  <div>
    <div class="stat-container">
      <div
        class="stat-line"
        :class="{
          activeKnowledgeLine: clickedElem === 'KNOWLEDGE TRANSFER',
          activeProdLine: clickedElem === 'PRODUCTION PARALLEL',
          activeExecLine: clickedElem === 'LIVE EXECUTION',
        }"
      >
        <div class="statistics d-flex">
          <div
            v-for="stat in statistics"
            :key="stat.title"
            class="stat"
            :class="{
              activeTask: clickedElem === 'TASKS' && stat.title === clickedElem,
              activeKnowledge:
                clickedElem === 'KNOWLEDGE TRANSFER' &&
                stat.title === clickedElem,
              activeProd:
                clickedElem === 'PRODUCTION PARALLEL' &&
                stat.title === clickedElem,
              activeExec:
                clickedElem === 'LIVE EXECUTION' && stat.title === clickedElem,
              prod: stat.title === 'PRODUCTION PARALLEL',
            }"
            @click="clickedElem = stat.title"
          >
            <v-icon v-text="stat.icon"></v-icon>
            <div class="title-count">
              <h3>{{ stat.title }}</h3>
              <span>{{ stat.count }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MeetingsFilter />
  </div>
</template>

<script>
import MeetingsFilter from "@/components/MeetingsFilter.vue";

export default {
  data() {
    return {
      clickedElem: "TASKS",
      statistics: [
        {
          title: "TASKS",
          icon: "mdi-note-text",
          color: "#1fc599",
          count: 4,
        },
        {
          title: "KNOWLEDGE TRANSFER",
          icon: this.$vuetify.icons.values.lamp,
          color: "#43bccd",
          count: 4,
        },
        {
          title: "PRODUCTION PARALLEL",
          icon: this.$vuetify.icons.values.settings,
          color: "#6d32a5",
          count: "Not included",
        },
        {
          title: "LIVE EXECUTION",
          icon: this.$vuetify.icons.values.signal,
          color: "#f53361",
          count: "1",
        },
      ],
    };
  },
  components: {
    MeetingsFilter,
  },
};
</script>

<style lang="scss">
// @font-face {
//   font-family: circular;
//   src: url(../assets/fonts/FlowCircular-Regular.ttf);
// }
.stat-container {
  margin-top: 30px;
  padding: 20px 23px;
  background-color: white;
  box-shadow: 0px 3px 26px #00000008;
  border-radius: 10px;
}
.stat-line {
  border-bottom: 10px solid #f5f5f6;

  &::after {
    transition: all 2s;
    content: "";
    display: block;
    border-bottom: 10px solid #1fc599;
    margin-bottom: -10px;
    max-width: 19%;
    border-radius: 10px;
    margin-top: 20px;
  }
  &.activeKnowledgeLine::after {
    border-bottom: 10px solid #43bccd;
    max-width: 45%;
  }
  &.activeProdLine::after {
    border-bottom: 10px solid #6d32a5;
    max-width: 72%;
  }
  &.activeExecLine::after {
    border-bottom: 10px solid #f53361;
    max-width: 100%;
  }
}
.statistics {
  .stat {
    padding-right: 12%;
    display: flex;
    .title-count {
      cursor: pointer;
      margin-left: 15px;
    }
  }

  h3 {
    font-size: 15px;
    margin-bottom: -10px;
    color: #a3a6b9;
  }
  span {
    font-size: 30px;
    color: #a3a6b9;
  }
  .v-icon {
    cursor: pointer;
    margin-top: -10px;
    font-size: 50px;
    color: #a3a6b9;
  }
}
.activeTask {
  h3,
  .v-icon {
    color: #1fc599;
  }
  span {
    color: #05081d;
  }
}

.activeKnowledge {
  h3,
  .v-icon {
    color: #43bccd;
  }
  span {
    color: #05081d;
  }
}
.activeProd {
  h3,
  .v-icon {
    color: #6d32a5;
  }
  span {
    color: #05081d;
  }
}
.activeExec {
  h3,
  .v-icon {
    color: #f53361;
  }
  span {
    color: #05081d;
  }
}
.prod {
  span {
    font-size: 15px;
  }
  .title-count {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
