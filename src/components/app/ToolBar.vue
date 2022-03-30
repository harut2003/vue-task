<template>
  <div class="toolbar">
    <!-- <nav>
      <ul>
        <li><a class="active" href="#home">Overview</a></li>
        <li><a href="#news">activity log</a></li>
        <li><a href="#contact">members</a></li>
        <li><a href="#about">accesses</a></li>
        <li><a href="#news">Tasks</a></li>
        <li><a href="#contact">assets</a></li>
        <li><a href="#about">Meetings</a></li>
      </ul>
    </nav> -->
    <v-tabs class="tab-container" background-color="white">
      <v-tab>Overview</v-tab>
      <v-tab>activity log</v-tab>
      <v-tab>members</v-tab>
      <v-tab>Tasks</v-tab>
      <v-tab>assets</v-tab>
      <v-tab>Meetings</v-tab>
    </v-tabs>
  </div>
</template>

<style lang="scss">
.toolbar {
  width: 100%;
}
.tab-container {
  background-color: white;
  box-shadow: 0px 3px 26px #00000008;
  border-radius: 41px;
  padding: 15px 0;
  .v-tab--active {
    background-color: #2b0f4d;
    border-radius: 18px;
    color: white !important;
    border-style: none;
  }
  .v-item-group {
    padding: 0 20px;
  }
  .v-tabs-slider-wrapper {
    height: 0px !important;
  }
}
.v-tabs:not(.v-tabs--vertical):not(.v-tabs--right)
  > .v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes)
  .v-slide-group__prev {
  display: none !important;
}
</style>
