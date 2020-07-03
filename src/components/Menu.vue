<template>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item to="/home">Home</b-nav-item>
        <b-nav-item to="/clients">Clientes</b-nav-item>
        <!-- <b-nav-item to="/category">Categoria</b-nav-item> -->

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Cadastros" right>
          <b-dropdown-item to="/exercises">Exercicios</b-dropdown-item>
          <b-dropdown-item href="#">Treinos</b-dropdown-item>
          <b-dropdown-item to="/groupexerc">Grupo Muscular</b-dropdown-item>
          <b-dropdown-item to="/createExercises">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style>
</style>