<template>
  <div class="footer justify-space-between d-flex">
    <v-btn class="back-btn">
      <v-icon class="icon-in-btn-footer" right dark> mdi-menu-left </v-icon>
      Back
    </v-btn>
    <div>
      <v-btn class="import-btn footer-btn">ADD TASK MANUALLY</v-btn>
      <v-btn class="footer-btn">INTEGRATE WITH OTHER PLATFORM(S)</v-btn>
      <v-btn class="footer-btn">MEETINGS TO TRANSITION</v-btn>
    </div>
  </div>
</template>

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
  &:not(&:nth-child(1)) {
    color: white !important;
  }
  &:nth-child(2) {
    background-color: #6d32a5 !important;
    margin-left: 8px;
  }
  &:nth-child(3) {
    background-color: #2b0f4d !important;
    margin-left: 8px;
  }
}
</style>
