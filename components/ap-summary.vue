<template>
  <div
    v-if="profile.metadata.description"
    class="vl-region vl-region--no-space-top vl-typography"
    id="summary"
  >
    <h2
      class="vl-title vl-title--h2"
      aria-level="1"
      role="heading"
      id="h2_sotd"
    >
      Samenvatting
    </h2>
    {{ profile.metadata.description }}
  </div>
</template>
<script>
export default {
  props: ["profile", "language"],
};
</script>