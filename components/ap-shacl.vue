<template>
  <div class="vl-region vl-region--no-space-top" id="shacl">
    <h2
      class="vl-title vl-title--h2"
      aria-level="1"
      role="heading"
      id="h2_sotd"
    >
      SHACL template
    </h2>
    (niet normatief)
    <p>
      Een herbruikbare SHACL template definitie voor dit applicatieprofiel is
      terug te vinden op:
      <a
        v-bind:href="`doc/applicatieprofiel/documentatie/shacl/${profile.metadata.filename}-SHACL.ttl`"
        target="_blank"
        >doc/applicatieprofiel/documentatie/shacl/{{ profile.metadata.filename }}-SHACL.ttl</a
      >
    </p>
  </div>
</template>
<script>
export default {
  props: ["profile", "language"],
};
</script>