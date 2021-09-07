<template>
  <div class="vl-region vl-region--no-space-top vl-typography" id="license">
    <h2 class="vl-title vl-titel--h2">Licentie</h2>
    <p>
      <span
        rel="dct:type"
        property="dct:title"
        href="http://purl.org/dc/dcmitype/Text"
        xmlns:dct="http://purl.org/dc/terms/"
        >Deze specificatie</span
      >
      van
      <a
        rel="cc:attributionURL"
        property="cc:attributionName"
        href="http://vlaanderen.be/informatievlaanderen"
        xmlns:cc="http://creativecommons.org/ns#"
        >Informatie Vlaanderen</a
      >
      is gepubliceerd onder de
      <a v-bind:href="profile.metadata.license" rel="license"
        >"Modellicentie Gratis Hergebruik - v1.0"</a
      >.
    </p>
  </div>
</template>
<script>
export default {
  props: ["profile", "language"],
};
</script>