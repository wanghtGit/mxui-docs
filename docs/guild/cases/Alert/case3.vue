<template>
  <div style="max-width: 600px">
    <mx-alert
      title="Success alert"
      type="success"
      description="More text description"
      show-icon
    />
    <mx-alert
      title="Info alert"
      type="info"
      description="More text description"
      show-icon
    />
    <mx-alert
      title="Warning alert"
      type="warning"
      description="More text description"
      show-icon
    />
    <mx-alert
      title="Error alert"
      type="error"
      description="More text description"
      show-icon
    />
  </div>
</template>

<style scoped>
.ijep-alert {
  margin: 20px 0 0;
}
.ijep-alert:first-child {
  margin: 0;
}
</style>