<script setup>
import Square from "../components/Square.vue";

import { reactive } from "vue";

const size = reactive({
  x: "",
  y: "",
});
</script>

<template>
  <v-card width="1280" title="Game page" variant="tonal">
    <v-card-item>
      <v-form ref="form">
        <v-text-field
          v-model="size.x"
          type="number"
          label="Size X"
          class="mb-5"
        ></v-text-field>

        <v-text-field
          v-model="size.y"
          type="number"
          label="Size Y"
          class="mb-5"
        ></v-text-field>
      </v-form>
    </v-card-item>
    <v-card-item>
      <div v-for="i in +size.y" :key="i" class="game_row">
        <Square v-for="j in +size.x" :key="j" />
      </div>
    </v-card-item>
  </v-card>
</template>

<style scoped>
.game_row {
  display: flex;
  justify-content: center;
}
</style>
