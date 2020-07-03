<template>
  <div>
    <h3>Cadastro Grupo Exercicios</h3>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-2" label="Nome Grupo Muscular:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.name" required placeholder="Enter grupo muscular"></b-form-input>
      </b-form-group>


      <b-form-group id="input-group-3" label="Situação:" label-for="input-3">
        <b-form-select id="input-3" v-model="form.food" :options="foods" required></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "createGroupExercises",
   data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      foods: [
        { text: "Selecione...", value: null },
        "Ativo",
        "Inativo",
      ],
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