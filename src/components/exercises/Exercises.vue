<template>
  <div>
    <router-link to="/createExercises">
      <b-button variant="outline-primary">Novo exercicios</b-button>
    </router-link>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
export default {
  name: "exercises",
  data() {
    return {
      items: [
        { id: 1, nome: "Dickerson", Situacao: "ativo" },
        { id: 2, nome: "Larsen", Situacao: "inativo" },
        { id: 3, nome: "Geneva", Situacao: "ativo" },
        { id: 4, nome: "Jami", Situacao: "inativo" }
      ]
    };
  }
};
</script>