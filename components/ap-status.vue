<template>
  <div class="vl-region vl-region--no-space-top typography" id="status">
    <section
      class="introductory"
      id="sotd"
      typeof="bibo:Chapter"
      resource="#ref"
      rel="bibo:Chapter"
    >
      <h2
        class="vl-title vl-title--h2"
        aria-level="1"
        role="heading"
        id="h2_sotd"
      >
        Status van dit document
      </h2>
      <p>
        Dit applicatieprofiel heeft status
        <a v-bind:href="profile.metadata.status">{{
          profile.metadata.statuslabel
        }}</a>
        en werd uitgegeven op {{ profile.metadata.issued }}.
      </p>
      <p>
        Informatie over het gevolgde proces en de beslissingen om tot deze
        specificatie te komen zijn beschikbaar in het
        <a v-bind:href="profile.metadata.standaardregisterurl"
          >standaardenregister</a
        >.
      </p>
    </section>
  </div>
</template>
<script>
export default {
  props: ["profile", "language"],
};
</script>