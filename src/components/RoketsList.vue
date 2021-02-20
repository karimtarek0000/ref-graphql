<template>
  <div>
    <ul>
      <li v-for="rocket in rockets" :key="rocket.id">
        <router-link :to="{ name: 'Rocket', params: { id: rocket.id } }">
          <h1>{{ rocket.name }}</h1>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
//
import gql from 'graphql-tag';
//
const query = gql`
  query getRocket {
    rockets {
      id
      name
    }
  }
`;
export default {
  name: 'RoketsList',
  apollo: {
    rockets: {
      query
    }
  }
};
</script>

<style>
ul {
  list-style: none;
}
</style>
