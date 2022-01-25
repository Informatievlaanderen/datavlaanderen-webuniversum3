<template>
  <div class="vl-region" id="introduction">
    <div class="vl-introduction vl-typography">
      <p>
        Dit document beschrijft een <strong>vocabularium</strong>, in dit geval
        <strong>{{ profile.metadata.title }}</strong
        >. Een vocabularium is een verzameling van herbruikbare termen, namelijk
        klassen en eigenschappen, waarvan hun betekenis is vastgelegd door
        middel van een label en definitie. Voor termen gedefinieerd in dit
        domein zijn er nog bijkomende formele afspraken beschikbaar. Voor
        externe termen worden de formele afspraken overgenomen van de externe
        bron.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["profile", "language"],
};
</script>