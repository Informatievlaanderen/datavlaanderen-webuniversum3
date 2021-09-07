<template>
  <div class="vl-region" id="introduction">
    <div class="vl-introduction vl-typography">
      <p>
        Dit document beschrijft een
        <strong>applicatieprofiel</strong>, in dit geval
        <strong>{{ profile.metadata.title[language] }}</strong
        >. Dit applicatieprofiel beantwoordt de vraag over hoe het
        corresponderende domeinmodel in de praktijk kan toegepast worden.
        Daarbij worden de beperkingen (kardinaliteit, codelijsten) toegelicht en
        de overeenkomstige (RDF) termen opgelijst.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["profile", "language"],
};
</script>