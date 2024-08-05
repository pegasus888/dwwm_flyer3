<script>
export default {
  name: 'ReadPostView'
}
</script>

<template>

  <body class="pt-5">
  <div class="mx-auto col-md-10">
    <h1 class="display-4 text-primary text-center mb-5 mt-4">Do You Really Need a Framework?</h1>

    <!--Posts Card-->
    <div class="row pb-4 justify-content-center">

      <!--Card 1-->
      <div class="col-md-12">
        <div class="g-0 rounded overflow-hidden flex-md-row mb-4 position-relative">

          <div class="col-lg-auto col-12 d-lg-block text-center">
            <a href="https://www.julienrollin.com/posts/la-guerre-des-framework-js/" target="_blank" class="text-decoration-none">
              <img src="../../assets/images/frameworks_battle-min.png" alt="picture" class="bd-placeholder-img img-fluid rounded border border-altmysaddlebrown" style="object-fit: cover;">
            </a>
            <figure class="text-center">
              <figcaption class="blockquote-footer m-2 text-success opacity-25">
                From <cite title="La guerre des frameworks, Julien Rollin">https://www.julienrollin.com/posts/la-guerre-des-framework-js/</cite>
              </figcaption>
            </figure>

          </div>

          <div class="col p-4 rounded d-flex flex-column position-static text-center">
            <!--                      <strong class="h4 d-inline-block mb-2 text-succes">Web Development</strong>

                                  <h2 class="mb-0 text-info">Title</h2>

                                  <div class="mb-1 text-body-tertiary"><small><em>Date</em></small></div>-->

            <article class="mb-5">
              <h3 class="">What Is a Framework?</h3>
              <p class="mb-auto" style="text-align: justify">In the early days of web development, programmers hard coded everything using HTML and CSS. Websites were basic and frameworks were just beginning to be developed. Why were they being developed? Because programmers got sick and tired of writing out the same code and logic every time they started a new project. A framework is the natural result of software innovation. They’re basically prepackaged coding bits you can rely on over and over again to develop your software and web applications quickly.</p>
              <div class="">
                <p class="mt-3 fst-italic text-secondary">Here’s a helpful list of frameworks you can check out:</p>
                <p class="text-white bg-altmyflamboyant mx-5">Angular,  Vue.js,  Spring,  Django,  Express,  Ruby on Rails,  Laravel,  Symfony</p>
              </div>
            </article>

            <article class="mb-5">
              <h4 class=h3>Why Use a Framework?</h4>
              <p class="mb-auto" style="text-align: justify">Unless you’re coding an extremely simple website or software application, then you’ll probably want to use a framework to save time. Like, a massive amount of time. If you learn a framework like Angular or React, you’ll be able to write out a piece of code that relies on the innovations of numerous developers who’ve contributed to the framework. Of course, you could reinvent the wheel if you really feel like it, but we’re going to guess most people don’t want to do that.</p>
            </article>

            <article class="mb-2">
              <h5 class="h3">When Not to Use a Framework?</h5>
              <p class="mb-auto" style="text-align: justify">No framework is going to do everything for you. At most, the framework acts as a tool you need to know how to use. Nothing will replace fundamental programming skills and problem-solving abilities. Frameworks come and go—falling in and out of popular use—but good programming skills can last forever. Keep that in mind as you continue to look into learning frameworks.</p>
            </article>

            <figure class="text-right">
              <figcaption class="blockquote-footer m-2 text-success opacity-25">
                From <cite title="Do you really need a framework? Devmountain">https://devmountain.com/blog/do-you-really-need-a-framework/</cite>
              </figcaption>
            </figure>

          </div>
        </div>
      </div>
      <!--/Card 1-->
    </div>
    <!--/Posts Card-->

    <div class="container text-center">
      <div class="pb-5 row">
        <p class="col text-altmydarkfuschia">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
            <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
          </svg>
        </p>
      </div>
    </div>

  </div>

  </body>
</template>

<style>
body {
  background: #f2ebfa;
  margin: 0;
}
</style>