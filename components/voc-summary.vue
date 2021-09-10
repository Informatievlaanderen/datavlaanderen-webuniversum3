<template>
  <div
    v-if="profile.metadata.description"
    class="vl-region vl-region--no-space-top vl-typography"
    id="abstract"
  >
    <h2
      class="vl-title vl-title--h2"
      aria-level="1"
      role="heading"
    >
      Samenvatting
    </h2>
    <p>
      Het {{ profile.metadata.title[language] }} vocabularium specificeert een
      aantal klassen en eigenschappen om een
      {{ profile.metadata.title[language] | lower }} te beschrijven.
    </p>
    <p>
      {{ profile.metadata.abstract[language] }}
    </p>
  </div>
</template>
<script>
export default {
  props: ["profile", "language"],
};
</script>