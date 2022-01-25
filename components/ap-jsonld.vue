<template>
  <div class="vl-region vl-region--no-space-top" id="jsonld">
    <h2
      class="vl-title vl-title--h2"
      aria-level="1"
      role="heading"
      id="h2_sotd"
    >
      JSON-LD context
    </h2>
    (niet normatief)
    <p>
      Een herbruikbare JSON-LD context definitie voor dit applicatieprofiel is
      terug te vinden op:
      <a
        v-bind:href="`doc/applicatieprofiel/documentatie/${profile.metadata.filename}.jsonld`"
        target="_blank"
        >doc/applicatieprofiel/documentatie/{{ profile.metadata.filename }}.jsonld</a
      >
    </p>
  </div>
</template>
<script>
export default {
  props: ["profile", "language"],
};
</script>