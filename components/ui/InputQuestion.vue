<template>
  <ui-input v-bind="$attrs" placeholder="Ваш вопрос" v-on="$listeners">
    <template #icon>
      <ui-icon name="input-question"></ui-icon>
    </template>
  </ui-input>
</template>
