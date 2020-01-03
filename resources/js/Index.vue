<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <router-link class="navbar-brand" v-bind:to="{ name: 'Főoldal' }">Laravel BNB</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav mr-auto">
          <!-- <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>-->
          <li class="nav-item">
            <router-link class="nav-link" v-bind:to="{ name: 'Második oldal' }">Második oldal</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container my-4 px-4">
      <router-view></router-view>
    </div>
  </div>
</template>
