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
        <em
          >Deze sectie beschrijft de status van dit document op het moment van
          publicatie. Het kan zijn dat er ondertussen al nieuwere versies zijn
          uitgebracht.</em
        >
      </p>
      <br />
      <p>
        Een lijst van de recentste vocabularia is terug te vinden op
        <a href="http://data.vlaanderen.be/ns">http://data.vlaanderen.be/ns</a>
      </p>
      <br />
      <p>
        Dit document is een offici&#235;le specificatie van een vocabularium en
        biedt een gedeeld begrippenkader voor bepaalde concepten. Deze
        specificatie dient om de definitie, gebruik, domein en bereik van de RDF
        termen binnen dit domein te verduidelijken. De termen gedefinieerd in
        dit vocabularium zijn persistent en zullen bijgevolg nooit verdwijnen,
        noch zullen de definities veranderen behalve dan om een bestaande
        definitie verder te verduidelijken. Termen kunnen echter wel als
        verouderd worden bestempeld en vervangen worden in nieuwere versies van
        deze specificatie.
      </p>
      <p v-if="profile.metadata.comment">
        {{ metadata.comment[language] }}
      </p>
    </section>
  </div>
</template>
<script>
export default {
  props: ["profile", "language"],
};
</script>