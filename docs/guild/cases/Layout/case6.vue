<template>
  <mx-row :gutter="10">
    <mx-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content ep-bg-purple" />
    </mx-col>
    <mx-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content ep-bg-purple-light" />
    </mx-col>
    <mx-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content ep-bg-purple" />
    </mx-col>
    <mx-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content ep-bg-purple-light" />
    </mx-col>
  </mx-row>
</template>

<style>
.ijep-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>