<template>
  <div>
    <h3>Cadastro Exercicios</h3>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-2" label="Nome Exercicios:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="Descricao:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="text"
          required
          placeholder="Enter with CPF"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Link Youtube:" label-for="input-3">
        <b-form-select id="input-3" v-model="form.food" :options="foods" required></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4">
        Situação
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Ativo</b-form-checkbox>
          <b-form-checkbox value="that">Inativar</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "createExercises",
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      foods: [{ text: "Selecione...", value: null }, "Ativo", "Inativo"],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>