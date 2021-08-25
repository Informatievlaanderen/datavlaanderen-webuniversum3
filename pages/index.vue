<template>
  <div class="vl-page">
    <vl-grid>
      <div class="vl-col vl-col--4-6 vl-col--1-1--s">
        <vl-region>
          <intro :profile="profile"></intro>
        </vl-region>
        <div id="main">
          <div class="vl-layout vl-layout--wide">
            <div class="grid">
              <div class="vl-col--8-12 vl-col--12-12--s">
                <div class="vl-region" id="introduction">
                  <div class="vl-introduction vl-typography">
                    <p>Dit document beschrijft een <strong>applicatieprofiel</strong>, in dit geval <strong>{{ profile.metadata.title.nl }}</strong>.
                  Dit applicatieprofiel beantwoordt de vraag over hoe het corresponderende domeinmodel in de praktijk kan toegepast worden.
                  Daarbij worden de beperkingen (kardinaliteit, codelijsten) toegelicht en de overeenkomstige (RDF) termen opgelijst.
                  </p>
                  </div>
                </div>
                <div v-if="profile.metadata.description" class="vl-region vl-region--no-space-top vl-typography" id="summary">
                  <h2 class="vl-title vl-title--h2" aria-level="1" role="heading" id="h2_sotd">Samenvatting</h2>
                    {{ profile.metadata.description[language] }}
                </div>
                <div class="vl-region vl-region--no-space-top typography" id="status">
                  <section class="introductory" id="sotd" typeof="bibo:Chapter" resource="#ref" rel="bibo:Chapter">
                    <h2 class="vl-title vl-title--h2" aria-level="1" role="heading" id="h2_sotd">Status van dit document</h2>
                      <p>
                    Dit applicatieprofiel heeft status <a v-bind:href="profile.metadata.status">{{ profile.metadata.statuslabel }}</a> en werd uitgegeven op {{ profile.metadata.issued }}.</p>
                      <p>
                    Informatie over het gevolgde proces en de beslissingen om tot deze specificatie te komen zijn beschikbaar in het 
                    <a v-bind:href="profile.metadata.standaardregisterurl">standaardenregister</a>.</p>
                  </section>
                </div>

                <div class="vl-region vl-region--no-space-top vl-typography" id="license">
                  <h2 class="vl-title vl-titel--h2">Licentie</h2>
                    <p>
                      <span rel="dct:type" property="dct:title" href="http://purl.org/dc/dcmitype/Text" xmlns:dct="http://purl.org/dc/terms/">Deze specificatie</span> van <a rel="cc:attributionURL" property="cc:attributionName" href="http://vlaanderen.be/informatievlaanderen" xmlns:cc="http://creativecommons.org/ns#">Informatie Vlaanderen</a> is gepubliceerd onder de <a v-bind:href="profile.metadata.license" rel="license">"Modellicentie Gratis Hergebruik - v1.0"</a>.
                    </p>
                </div>
                <div class="vl-region vl-region--no-space-top typography" id="conformance">
                  <h2 class="vl-title vl-title--h2" id="conformance" aria-level="1" role="heading">Conformiteit</h2>
                    <p>De conformiteit voor applicatieprofielen is <a href="/doc/begeleidend/applicatieprofielen/conformiteit">hier</a> te vinden.</p>
                </div>
                <div class="vl-region vl-region--no-space-top" id="overview">
                  <h2 class="vl-title vl-title--h2">Overzicht</h2>
                  <div class="vl-grid">
                    <div v-if="profile.classes.length > 0" class="vl-col--9-12 vl-col--1-1--s typography">
                      <div class="vl-region vl-region--no-space-top">
                        <p>In dit document wordt correct gebruik van de volgende entiteiten toegelicht:
                          <br/>
                          <span v-for="c in profile.classes" :key="c.name[language]">
                            <a v-bind:href="'#'+c.name[language]">{{ c.name[language] }}</a> |
                          </span>
                        </p>
                      </div>
                      <div v-if="profile.datatypes.length" class="vl-region vl-region--no-space-top">
                        <p> In dit document worden de volgende datatypes toegelicht:
                          <br/>
                          <span v-for="datatype in profile.datatypes" :key="datatype.name[language]" >
                            <a v-bind:href="'#'+datatype.name[language]">{{ datatype.name[language] }}</a> |
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="vl-region vl-region--no-space-top">
                  <h2 class="vl-title vl-title--h2">Entiteiten</h2>
                </div>
                <div v-for="entity in profile.classes" :key="entity.name[language]" class="vl-region vl-region--no-space-top">
                  <datatype :entity="entity" :language="language"></datatype>
                </div>
                <div v-if="profile.datatypes.length" class="vl-region vl-region--no-space-top">
                  <h2 class="vl-title vl-title--h2">Datatypes</h2>
                </div>
                <div v-for="entity in profile.datatypes" :key="entity.name[language]" class="vl-region vl-region--no-space-top">
                  <datatype :entity="entity" :language="language"></datatype>
                </div>
                <div class="vl-region vl-region--no-space-top" id="jsonld">
                  <h2 class="vl-title vl-title--h2" aria-level="1" role="heading" id="h2_sotd">JSON-LD context</h2>
                    (niet normatief)
                    <p>Een herbruikbare JSON-LD context definitie voor dit applicatieprofiel is terug te vinden op: <a v-bind:href="`#documentroot#/context/${profile.metadata.filename}.jsonld`" target="_blank">#documentroot#/context/{{ profile.metadata.filename }}.jsonld</a>
                    </p>
                </div>
                <div class="vl-region vl-region--no-space-top" id="shacl">
                  <h2 class="vl-title vl-title--h2" aria-level="1" role="heading" id="h2_sotd">SHACL template</h2>
                  (niet normatief)
                    <p>Een herbruikbare SHACL template definitie voor dit applicatieprofiel is terug te vinden op: <a v-bind:href="`#documentroot/shacl/${profile.metadata.filename}-SHACL.ttl`" target="_blank">#documentroot/shacl/{{ profile.metadata.filename }}-SHACL.ttl</a>
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="vl-col vl-col--2-6 vl-col--1-1--s">
        <div class="vl-region">
          <side-nav></side-nav>
        </div>
      </div>
    </vl-grid>
  </div>
</template>

<script>

import { parse_ontology_from_json_ld_file_ap } from '../ld/linkeddataparser'

export default {
  data() {
    return {
      profile: {},
      language: "nl"
    }
  },
  async fetch() {
    const response = await fetch(`http://localhost:3000/ap-bodem.jsonld`)
    const ld = await response.json()
    const parsed = await parse_ontology_from_json_ld_file_ap(ld)
    this.profile = parsed
  },
  fetchOnServer: true
}

</script>

<style lang="scss">
    $vl-link-visited-state: true;
    $vl-pswp-assets-path: '~@govflanders/vl-ui-core/dist/img/lightbox/';
    $vl-font-location: '~@govflanders/vl-ui-core/dist/font/flanders/';
    
    @import "~@govflanders/vl-ui-core/src/scss/core";
    @import "~@govflanders/vl-ui-util/src/scss/util";
    @import "~@govflanders/vl-ui-button/src/scss/button";
    @import "~@govflanders/vl-ui-titles/src/scss/titles";
    @import "~@govflanders/vl-ui-description-data/src/scss/description-data";
    @import "~@govflanders/vl-ui-data-table/src/scss/data-table";
    @import "~@govflanders/vl-ui-side-navigation/src/scss/side-navigation";

    .vl-region:first-child {
      padding-top: 0rem;
    }
    .list--comma span:not(:last-child)::after {
      content: ', ';
    }
</style>
