<script>
import axios from 'axios';
export default {
  name: 'StudentsView',
  data() {
    return {
      students: [],        // empty to begin with then length when go through data
    }
  },
  mounted() {
    this.fetchStudentsData();
  },

  methods: {
    async fetchStudentsData() {
      try {
        const response = await axios.get('db.json');
        this.students = response.data
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

  <section class="sticky-top">

    <div class="card text-center bg-info mx-auto shadow border-0" style="max-width: 300px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="../../assets/images/team-min.jpg" class="img-fluid rounded-1" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body text-altmyflamboyant">
            <h5 class="card-title">Great People</h5>
            <p class="h5 card-text">To Work With</p>
            <p class="card-text"><small class="text-body-secondary">Indeed!</small></p>
          </div>
        </div>
      </div>
    </div>

  </section>

  <!--     Student Card-->
  <section class="">
    <div class="container-fluid w-75 p-3">

      <div class=""
           v-if="students.length">

        <div class="card-body bg-success-subtle bg-opacity-10 rounded shadow mb-5 rounded"
             v-for="student in students"
             :key="student.id">

            <!--      Next: to add other info on another page like cv
            <RouterLink class="fw-bold text-decoration-none" :to="{ name: 'StudentDetails', params: { id: student.id } }">
            </RouterLink>-->
            <h2 class="ms-2 lead fw-semibold text-altmypurpleblue">{{ student.name }}</h2>


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


  <footer class="pb-3">
    <div class="container text-center">
      <div class="row">
        <p class="col text-altmydarkfuschia">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
            <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
          </svg>
        </p>
      </div>

      <div class="visually-hidden">
        Photo by <a href="https://unsplash.com/@iamchang?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"> Chang Duong</a> on <a href="https://unsplash.com/photos/silhouette-photo-of-six-persons-on-top-of-mountain-Sj0iMtq_Z4w?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"> Unsplash</a>
      </div>
    </div>
  </footer>

  </body>

</template>
