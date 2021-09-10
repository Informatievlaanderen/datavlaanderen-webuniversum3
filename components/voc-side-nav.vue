<template>
  <nav
    class="
      vl-side-navigation
      js-vl-side-navigation js-vl-sticky js-vl-scrollspy
    "
    data-vl-side-navigation
    data-vl-side-navigation-scrollable
    data-vl-scrollspy
    data-vl-scrollspy-mobile="Componenten"
    data-vl-sticky
    data-vl-sticky-offset-top="25"
    aria-label="inhoudsopgave"
    id="navbar"
  >
    <div class="vl-side-navigation__content">
      <div class="vl-side-navigation__group">
        <ul>
          <li
            v-if="hasdescription"
            class="vl-side-navigation__item"
          >
            <a href="#abstract">Samenvatting</a>
          </li>
          <li class="vl-side-navigation__item">
            <a href="#sotd">Status van dit document</a>
          </li>
          <li class="vl-side-navigation__item">
            <a href="#license">1. Licentie</a>
          </li>
          <li class="vl-side-navigation__item">
            <a href="#conformance-statement">2. Conformiteit</a>
          </li>
          <li class="vl-side-navigation__item">
            <a href="#overview">3. Overzicht</a>
          </li>
          <li class="vl-side-navigation__item">
            <a href="#classes">4. Klassen</a>
          </li>
          <li class="vl-side-navigation__item">
            <a href="#properties">5. Eigenschappen</a>
          </li>
          <li class="vl-side-navigation__item vl-side-navigation__item--parent">
            <a href="#external" data-child="external"
              >6. Externe terminologie</a
            >
          </li>
          <!-- <li class="vl-side-navigation__item">
            <a class="vl-side-navigation__toggle" href="#introduction">Inleiding</a>
          </li>
          <li v-if="hasdescription" class="vl-side-navigation__item">
            <a class="vl-side-navigation__toggle" href="#summary">Samenvatting</a>
          </li>
          <li class="vl-side-navigation__item">
            <a class="vl-side-navigation__toggle" href="#status">Status van dit document</a>
          </li>
          <li class="vl-side-navigation__item">
            <a class="vl-side-navigation__toggle" href="#license">Licentie</a>
          </li>
          <li class="vl-side-navigation__item">
            <a class="vl-side-navigation__toggle" href="#conformance">Conformiteit</a>
          </li>
          <li class="vl-side-navigation__item">
            <a class="vl-side-navigation__toggle" href="#overview">Overzicht</a>
          </li>
          <li class="vl-side-navigation__item">
            <a class="vl-side-navigation__toggle" href="#jsonld">JSON-LD Context</a>
          </li>
          <li class="vl-side-navigation__item">
            <a class="vl-side-navigation__toggle" href="#shacl">SHACL template</a>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  props: ["hasdescription"],
};
</script>
<style>
</style>
