<template>
  <AppHeader/>
  <div class="container-fluid">
    <div class="row">

      <div class=" col-lg-4 col-md-4 col-sm-6 mb-5 mt-4">
        <div class="card text-bg-danger" style="width: 24rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-6 mb-5 mt-4">
        <div class="card text-bg-dark" style="width: 24rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>
      <div class=" col-lg-4 col-md-4 col-sm-6 mb-5 mt-4">
        <div class="card text-bg-info" style="width: 24rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>
      <div class=" col-lg-4 col-md-4 col-sm-6 mb-3 mt-2">
        <div class="card text-bg-light" style="width: 24rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>
      <div class=" col-lg-4 col-md-4 col-sm-6 mb-3 mt-2">
        <div class="card text-bg-primary" style="width: 24rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>
      <div class=" col-lg-4 col-md-4 col-sm-6 mb-3 mt-2">
        <div class="card text-bg-secondary" style="width: 24rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>

    </div>
  </div>

  <AppFooter/>
</template>

<script>
import AppFooter from "../components/AppFooter.vue";
import AppHeader from '../components/AppHeader.vue';

export default {
  components: {
    AppFooter,
    AppHeader
  },
};
</script>