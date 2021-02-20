<template>
  <div>
    <div v-if="rocket">
      <h1>{{ rocket.name }}</h1>
      <h2>{{ rocket.description }}</h2>
    </div>
  </div>
</template>

<script>
//
import gql from 'graphql-tag';
//
const query = gql`
  query getRocket($id: ID!) {
    rocket(id: $id) {
      id
      description
      name
    }
  }
`;
export default {
  name: 'RoketsItem',
  apollo: {
    rocket: {
      query,
      variables() {
        return { id: this.$route.params.id };
      }
    }
  }
};
</script>

<style>
ul {
  list-style: none;
}
</style>
