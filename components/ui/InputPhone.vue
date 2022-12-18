<template>
  <ui-input
    v-bind="$attrs"
    show-mask
    mask="+7 (###) ### ####"
    start-mask="+7 ("
    v-on="$listeners"
  >
    <template #icon>
      <ui-icon name="input-phone"></ui-icon>
    </template>
  </ui-input>
</template>
