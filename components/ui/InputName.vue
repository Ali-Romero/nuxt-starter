<template>
  <ui-input v-bind="$attrs" placeholder="Имя Фамилия" v-on="$listeners">
    <template #icon>
      <ui-icon name="input-name"></ui-icon>
    </template>
  </ui-input>
</template>
