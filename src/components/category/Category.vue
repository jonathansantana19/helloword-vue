<template>
  <div id="main">
      <router-link to="/home">
      <b-button variant="outline-primary">Novo Categoria</b-button>
    </router-link>
    <!-- <h1>{{ msg }}</h1> -->
    <h1>Categorias</h1>
    <table class="table table-hover">
      <thead>
        <tr>
          <td>ID</td>
          <td>Descrição</td>
          <td>Ativo</td>
          <td>Ação</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in tutorials" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.descricao }}</td>
          <td>{{ item.Ativo }}</td>
          <td>
            <router-link :to="{name: 'edit', params: { id: item.id }}" class="btn btn-primary">Edit</router-link>
          </td>
          <td>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import CategoryDataService from "../../services/CategoryService";

export default {
  name: "category",
  props: {
    msg: String
  },
  data() {
    return {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveTutorials() {
      CategoryDataService.getAll()
        .then(response => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveTutorials();
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
    },
    searchTitle() {
      //   TutorialDataService.findByTitle(this.title)
      //     .then(response => {
      //       this.tutorials = response.data;
      //       console.log(response.data);
      //     })
      //     .catch(e => {
      //       console.log(e);
      //     });
      console.log("chegou");
    }
  },
  mounted() {
    console.log("mounted");
    this.retrieveTutorials();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
#main {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>