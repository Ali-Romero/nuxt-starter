<template>
  <div class="layout">
    <slot name="header" />

    <main class="layout__main">
      <slot name="main" />
    </main>

    <slot name="footer" />
  </div>
</template>

<style lang="sass" scoped>
.layout
  height: 100%
  display: flex
  flex-direction: column

  &__main
    flex: 1
</style>
