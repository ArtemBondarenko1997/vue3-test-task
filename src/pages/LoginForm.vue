<script setup>
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { useRouter } from 'vue-router'

const router = useRouter()

const state = reactive({
  email: "",
  password: "",
});

const rules = {
    email: { required, email },
    password: { required }
};

const v$ = useVuelidate(rules, state)

function login () {
  v$.value.$validate();

  if(!v$.value.$error) {
      router.push({
        name: 'game',
      })
  }
}
</script>

<template>
  <v-card width="400" title="Login form" variant="tonal">
    <v-card-item>
      <v-form ref="form">
        <v-text-field
          v-model="state.email"
          :error="v$?.email.$error"
          :error-messages="v$.email.$errors[0]?.$message"
          label="Email"
          class="mb-5"
          required
        ></v-text-field>

        <v-text-field
          v-model="state.password"
          :error="v$?.password.$error"
          :error-messages="v$.password.$errors[0]?.$message"
          type="password"
          label="Password"
          required
          class="mb-5"
        ></v-text-field>

        <div class="d-flex flex-column">
          <v-btn color="success" class="mt-4" block style="outline: none;" @click="login">
            Login
          </v-btn>
        </div>
      </v-form>
    </v-card-item>
  </v-card>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
