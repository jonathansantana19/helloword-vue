<template>
  <div>
      <router-link to="/createGroupExercises">
      <b-button variant="outline-primary">Novo Grupo Muscular</b-button>
    </router-link>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
export default {
  name: "groupexerc",
  data() {
    return {
      items: [
        { id: 1, first_name: "Peitoral", situacao: "ativo" },
        { id: 2, first_name: "PErna", situacao: "ativo" },
        { id: 3, first_name: "Abdominal", situacao: "ativo" },
        { id: 4, first_name: "Ombro", situacao: "ativo" }
      ]
    };
  }
};
</script>