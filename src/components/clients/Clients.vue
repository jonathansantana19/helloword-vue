

      <template>
  <div id="main">
    <h3>Clientes</h3>
    <!-- <h1>{{ msg }}</h1> -->
    <div>
      <b-tabs>
        <b-tab active>
          <template v-slot:title>
            <!-- <b-spinner type="grow" small></b-spinner>I'm -->
            <!-- <i>Dados Clientes</i> -->
            <!-- <strong>title</strong> -->
            Dados Cadastrais
          </template>
          <p class="p-3">
            <b-form @submit="onSubmit" @reset="onReset">
              <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-1" label="CPF:" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="text"
                  required
                  placeholder="Enter with CPF"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                <b-form-select id="input-3" v-model="form.food" :options="foods" required></b-form-select>
              </b-form-group>

              <b-form-group id="input-group-4">Acesso ao App
                <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                  <b-form-checkbox value="me">Ativo</b-form-checkbox>
                  <b-form-checkbox value="that">Inativar</b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>

              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
            <b-card class="mt-3" header="Form Data Result">
              <pre class="m-0">{{ form }}</pre>
            </b-card>
          </p>
        </b-tab>

        <!-- <b-tab>
          <template v-slot:title>
            <b-spinner type="border" small></b-spinner>
            Tab 2
          </template>
          <p class="p-3">Tab contents 2</p>
        </b-tab> -->
      </b-tabs>
    </div>
  </div>
</template>
      
      <script>
export default {
  name: "clients",
  props: {
    msg: String
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
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
     
      <style>
</style>