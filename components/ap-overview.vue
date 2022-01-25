<template>
  <div class="vl-region vl-region--no-space-top" id="overview">
    <h2 class="vl-title vl-title--h2">Overzicht</h2>
    <div class="vl-grid">
      <div
        class="vl-col--9-12 vl-col--1-1--s typography"
      >
        <div 
          v-if="classes.length"
          class="vl-region vl-region--no-space-top">
          <p>
            In dit document wordt correct gebruik van de volgende entiteiten
            toegelicht:
            <br />
            <span v-for="c in classes" :key="c.name">
              <a v-bind:href="'#' + c.name">{{ c.name }}</a>
              |
            </span>
          </p>
        </div>
        <div
          v-if="datatypes.length"
          class="vl-region vl-region--no-space-top"
        >
          <p>
            In dit document worden de volgende datatypes toegelicht:
            <br />
            <span
              v-for="datatype in datatypes"
              :key="datatype.name"
            >
              <a v-bind:href="'#' + datatype.name">{{
                datatype.name
              }}</a>
              |
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="region region--no-space-top">
      <!-- tbd: correct path to image -->
      <a v-bind:href="`${profile.metadata.filename}/html/overview.jpg`" target="_blank">
        <img v-bind:href="`${profile.metadata.filename}/html/overview.jpg`" />
      </a>
    </div>
    <div class="vl-region vl-region--no-space-top">
      <h2 class="vl-title vl-title--h2">Entiteiten</h2>
    </div>
    <div
      v-for="entity in profile.classes"
      :key="entity.name"
      class="vl-region vl-region--no-space-top"
    >
      <datatype :entity="entity" :language="language"></datatype>
    </div>
    <div
      v-if="profile.datatypes && profile.datatypes.length"
      class="vl-region vl-region--no-space-top"
    >
      <h2 class="vl-title vl-title--h2">Datatypes</h2>
    </div>
    <div
      v-for="entity in profile.datatypes"
      :key="entity.name"
      class="vl-region vl-region--no-space-top"
    >
      <datatype :entity="entity" :language="language"></datatype>
    </div>
  </div>
</template>
<script>
export default {
  props: ["profile", "language"],
  computed: {
    classes() {
      return this.profile.classes.sort(function(a, b) {
        return (a[`sort_${this.language}`] < b[`sort_${this.language}`]) ? -1 : (a[`sort_${this.language}`] > b[`sort_${this.language}`]) ? 1 : 0;
      }.bind(this))
    },
    datatypes() {
      console.log(this.profile.metadata)
      return this.profile.datatypes.sort(function(a, b) {
        return (a[`sort_${this.language}`] < b[`sort_${this.language}`]) ? -1 : (a[`sort_${this.language}`] > b[`sort_${this.language}`]) ? 1 : 0;
      }.bind(this))
    }
  }
}
</script>