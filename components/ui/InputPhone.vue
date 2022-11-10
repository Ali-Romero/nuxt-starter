<template>
  <ui-input
    v-bind="$attrs"
    aria-label="phone"
    type="tel"
    show-mask
    mask="+7 (###) ### ####"
    v-on="$listeners"
  />
</template>
