<template>
  <div class="layout">
    <div v-if="$scopedSlots.header" class="layout__header">
      <slot name="header" />
    </div>

    <main class="layout__main">
      <slot name="main" />
    </main>

    <div v-if="$scopedSlots.footer" class="layout__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style lang="sass" scoped>
.layout
  height: 100%
  display: flex
  flex-direction: column

  &__header,
  &__footer
    flex-shrink: 0

  &__main
    flex-grow: 1
</style>
