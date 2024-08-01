<script>
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';
export default {
  name: 'StudentsViewOapi',
  data() {
    return {
      students: []            // empty to begin with then length when go through data
    }
  },
  mounted() {
    this.fetchStudentsData();
  },

  methods: {
    async fetchStudentsData() {
      try {
        const response = await axios.get('db.json');
        this.students = response.data;
      } catch (error) {
        console.error(error);
      }
    },


    redirect() {
      this.$router.push( { name: 'ReadPost' } )
    }
  }

}

</script>



<template>

  <body class="bg-altlight pt-5">

  <HelloWorld msg="DWWM" />

  <!--     Student Card-->
  <section class="">
    <div class="container-fluid w-75 p-3">

      <div class=""
           v-if="students.length">

        <div class="card-body bg-success-subtle bg-opacity-10 rounded shadow mb-5 rounded"
             v-for="student in students"
             :key="student.id">

          <RouterLink class="fw-bold text-decoration-none" :to="{ name: 'StudentDetails', params: { id: student.id } }">
            <h2 class="ms-2 lead fw-semibold text-altmypurpleblue">{{ student.name }}</h2>
          </RouterLink>

          <p class="ms-2 lead text-secondary">{{ student.email }}</p>
          <span v-if="student.status === 'active'" class="ms-2 lead text-info">
                                  <button class="ms-5 bg-opacity-10 btn btn-altmypastelgreen text-altmysaddlebrown lead"
                                          @click="redirect"
                                  >
                                    Read My Post...
                                  </button>
                              </span>
          <span v-else-if="student.status === 'pending'" class="ms-2 lead text-info"> Post is pending </span>
          <span v-else class="ms-2 lead text-info"> No Post </span>
          <br>

          <br>

          <a v-bind:href="student.githublink" class="ms-4 text-altmydarkfuschia fst-italic"> Here's my Github </a>
        </div>
      </div>


      <div class=""
           v-else>

        <h2 class="h4 lead text-altmylightblueviolet fst-italic text-center my-lg-5">Loading Students...</h2>

      </div>

    </div>
  </section>
  <!--     /Student Card-->

  </body>

</template>
