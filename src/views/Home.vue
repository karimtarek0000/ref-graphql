<template>
  <date-pick v-model="date" :isDateDisabled="isFutureDate"></date-pick>
</template>

<script>
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';
export default {
  components: { DatePick },
  data: () => ({
    date: '2019-08-12'
  }),
  methods: {
    isFutureDate(date) {
      const currentDate = new Date();
      return date !== '2019-08-11';
    }
  }
};
</script>
