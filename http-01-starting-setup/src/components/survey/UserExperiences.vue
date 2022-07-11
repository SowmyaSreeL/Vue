<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="fetchSurveyResults">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">We're loading the data, please wait....</p>
      <p v-else-if="!isLoading && error">{{error}}</p>
      <p v-else-if="!isLoading && (!surveyResults || surveyResults.length === 0)">No Data records found!!</p>
      <ul v-else>
        <survey-result
          v-for="result in surveyResults"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      surveyResults: [],
      isLoading: false,
      error: null
    }
  },
  methods: {
    fetchSurveyResults() {
      this.isLoading = true;
      this.error = null;
      fetch('https://vue-http-demo-1-76b61-default-rtdb.firebaseio.com/surveys.json')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      }).then((responseData) => {
        this.isLoading = false
        const resultsArr = [];
        for (const id in responseData) {
          resultsArr.push ({
            id: id,
            name: responseData[id].name,
            rating: responseData[id].rating
          })
        }
        this.surveyResults = resultsArr;
      })
      .catch(() => {
        this.isLoading = false;
        this.error = "Failed to fetch data, encountered an error"
      })
    }
  },
  mounted() {
    this.fetchSurveyResults();
  }
};

</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>