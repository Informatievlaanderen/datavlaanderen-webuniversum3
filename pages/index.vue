<template>
  <div class="vl-page">
    <vl-region>
      <vl-layout>
        <vl-title>{{ profile.metadata.title.nl }}</vl-title>
        <dl class="vl-descriptionlist">
          <dt class="vl-description-data__value">Status</dt>
          <dd class="vl-description-data__subdata"><a v-bind:href="profile.metadata.status">{{ profile.metadata.status }}</a></dd>
          <dt class="vl-description-data__value">Uitgegeven op</dt>
          <dd class="vl-description-data__subdata">{{ profile.metadata.issued }}</dd>
          <dt class="vl-description-data__value">Deze versie</dt>
          <dd class="vl-description-data__subdata"><a v-bind:href="profile.metadata.navigation.self">{{ profile.metadata.navigation.self }}</a></dd>
          <dt class="vl-description-data__value" v-if="profile.metadata.navigation.next">Volgende versie</dt>
          <dd class="vl-description-data__subdata"><a v-bind:href="profile.metadata.navigation.next">{{ profile.metadata.navigation.next }}</a></dd>
          <dt class="vl-description-data__value" v-if="profile.metadata.navigation.previous">Vorige versie</dt>
          <dd class="vl-description-data__subdata"><a v-bind:href="profile.metadata.navigation.prev">{{ profile.metadata.navigation.prev }}</a></dd>
        </dl>
        <div class="head" role="contentinfo" id="respecHeader">
          <dl>
            <dt class="vl-description-data__value">Auteurs</dt>
            <dd class="vl-description-data__subdata" v-for="contributor in profile.contributors" :key="contributor.last_name">
              <span v-if="contributor.role == 'A'" typeof="foaf:Person">
                <span class="p-name fn" property="foaf:lastName">{{ contributor.last_name }}</span>,
                <span class="p-name fn" property="foaf:firstName">{{ contributor.first_name }}</span>
                - <a v-if="contributor.affiliation.website && contributor.affiliation.name" v-bind:href="contributor.affiliation.website" class="p-org org h-org h-card" rel="foaf:workplaceHomepage">{{ contributor.affiliation.name }}</a>
                - <span class="p-org org h-org h-card">{{ contributor.affiliation.name }}</span>
                - <span v-if="contributor.email" class="ed_mailto">
                    <a v-bind:href="'mailto:'+contributor.email" rel="foaf:mbox" class="u-email email">{{ contributor.email }}</a>
                  </span>
              </span>
            </dd>
            <dt class="vl-description-data__value">Editors</dt>
            <dd class="vl-description-data__subdata" v-for="contributor in profile.contributors" :key="contributor.last_name">
              <span v-if="contributor.role == 'E'" typeof="foaf:Person">
                <span class="p-name fn" property="foaf:lastName">{{ contributor.last_name }}</span>,
                <span class="p-name fn" property="foaf:firstName">{{ contributor.first_name }}</span>
                - <a v-if="contributor.affiliation.website && contributor.affiliation.name" v-bind:href="contributor.affiliation.website" class="p-org org h-org h-card" rel="foaf:workplaceHomepage">{{ contributor.affiliation.name }}</a>
                - <span class="p-org org h-org h-card">{{ contributor.affiliation.name }}</span>
                - <span v-if="contributor.email" class="ed_mailto">
                    <a v-bind:href="'mailto:'+contributor.email" rel="foaf:mbox" class="u-email email">{{ contributor.email }}</a>
                  </span>
              </span>
            </dd>
            <dt class="vl-description-data__value">Medewerkers</dt>
            <dd class="vl-description-data__subdata" v-for="contributor in profile.contributors" :key="contributor.last_name">
              <span v-if="contributor.role == 'C'" typeof="foaf:Person">
                <span class="p-name fn" property="foaf:lastName">{{ contributor.last_name }}</span>,
                <span class="p-name fn" property="foaf:firstName">{{ contributor.first_name }}</span>
                - <a v-if="contributor.affiliation.website && contributor.affiliation.name" v-bind:href="contributor.affiliation.website" class="p-org org h-org h-card" rel="foaf:workplaceHomepage">{{ contributor.affiliation.name }}</a>
                - <span class="p-org org h-org h-card">{{ contributor.affiliation.name }}</span>
                - <span v-if="contributor.email" class="ed_mailto">
                    <a v-bind:href="'mailto:'+contributor.email" rel="foaf:mbox" class="u-email email">{{ contributor.email }}</a>
                  </span>
              </span>
            </dd>
          </dl>
        </div>
        <div class="head" role="metainfo" id="metainfo">
          <dl>
            <dt class="vl-description-data__value">Brondata</dt>
            <dd class="vl-description-data__subdata">
              <a v-bind:href="profile.metadata.repositoryurl">{{profile.metadata.repositoryurl}}</a>
            </dd>
            <dt class="vl-description-data__value">Changelog</dt>
            <dd class="vl-description-data__subdata">
              <a v-bind:href="profile.metadata.changelogurl">{{profile.metadata.changelogurl}}</a>
            </dd>
            <dt class="vl-description-data__value">Opmerkingen en feedback</dt>
            <dd class="vl-description-data__subdata">
              <a v-bind:href="profile.metadata.feedbackurl">{{profile.metadata.feedbackurl}}</a>
            </dd>
            <dt class="vl-description-data__value">Standaardenregister</dt>
            <dd class="vl-description-data__subdata">
              <a v-bind:href="profile.metadata.standaardregisterurl">{{profile.metadata.standaardregisterurl}}</a>
            </dd>

            <dt class="vl-description-data__value">Afhankelijkheden</dt>
            <dd class="vl-description-data__subdata">
              <a v-for="dep in profile.metadata.dependencies" :key="dep.packagelabel" v-bind:href="dep.packageurl">{{ dep.packagelabel }}</a>
            </dd>
          </dl>
        </div>
      </vl-layout>
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
            <div v-for="entity in profile.classes" :key="entity.name[language]" class="region region--no-space-top">
              <h3 class="vl-title vl-title--h3" id="entity.name[language]">
                <a v-bind:href="entity.uri" data-toggle="tooltip" data-content="entity.uri" data-placement="right">{{ entity.name[language] }}</a>
              </h3>
              <div class="region region--no-space-top">
                <dl>
                  <dt class="vl-description-data__value">Beschrijving</dt>
                  <dd class="vl-description-data__subdata">{{ entity.description[language] }}</dd>
                  <dt class="vl-description-data__value">Gebruik</dt>
                  <dd class="vl-description-data__subdata">{{ entity.usage[language] }}</dd>
                  <dt class="vl-description-data__value">Subklasse van </dt>
                  <dd class="vl-description-data__subdata list--comma">
                    <span v-for="parent in entity['parents']" :key="parent.label">
                      <a v-bind:href="parent.scoped_uri">{{ parent.label }}</a>
                    </span>
                  </dd>
                  <dt class="vl-description-data__value">Eigenschappen</dt>
                  <dd class="vl-description-data__subdata list--comma" v-if="entity.properties">Voor deze entiteit zijn de volgende eigenschappen gedefinieerd:
                    <span v-for="prop in entity['properties']" :key="prop.name[language]">
                      <a v-bind:href="'#' + entity.name[language] + prop.name[language]">{{ prop.name[language] }}</a>
                    </span>
                  </dd>
                  <dd class="vl-description-data__subdata list--comma" v-if="!entity.properties">Voor deze entiteit zijn geen eigenschappen gedefinieerd.</dd>
                </dl>
              </div>
              <div class="u-table-overflow">
                <table class="vl-data-table">
                  <thead>
                    <tr class="vl-data-table__header">
                      <th class="vl-data-table__header-title--sortable vl-data-table__header-title--sortable-active">Eigenschap</th>
                      <th class="vl-data-table__header-title--sortable">Verwacht Type</th>
                      <th class="vl-data-table__header-title--sortable">Kardinaliteit</th>
                      <th class="vl-data-table__header-title--sortable">Beschrijving</th>
                      <th class="vl-data-table__header-title--sortable">Gebruik</th>
                      <th class="vl-data-table__header-title--sortable">Codelijst</th>
                    </tr>
                  </thead>

                  <tbody class="supertype">
                      <tr v-for="prop in entity['properties']" :key="entity.name[language] + ':' + prop.name[language]" id="entity.name[language] + ':' + prop.name[language]" typeof="rdfs:Property" resource="prop.uri">
                        <td>
                          <code property="rdfs:label">
                            <a v-bind:href="prop.uri" data-toggle="tooltip" data-content="prop.uri" data-placement="right">
                              {{ prop.name[language] }}</a>
                          </code>
                        </td>
                        <td>
                          <span v-for="range in prop.scopedrange" :key="range['range_uri']">
                              <a v-if="range['range_uri'] == range['range_puri']" v-bind:href="range['range_uri']" data-toggle="tooltip" data-content="range['range_puri']" data-placement="right">{{ range['range_label'][language] }}</a>
                              <a v-else v-bind:href="range['range_uri']" data-placement="right">{{ range['range_label'][language] }}</a>
                          </span>
                        </td>
                        <td>{{ prop.cardinality }}</td>
                        <td property="rdfs:comment">{{ prop.description[language] }}</td>
                        <td property="vann:usageNote">{{ prop.usage[language] }}</td>
                        <td>
                          <a v-if="prop['codelist_uri']" v-bind:href="prop['codelist_uri']">Link</a>
                        </td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div v-if="profile.datatypes" class="vl-region vl-region--no-space-top">
              <h2 class="vl-title vl-title--h2">Datatypes</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    console.log(parsed)
  },
  fetchOnServer: true
}

</script>

<style lang="scss">
    $vl-link-visited-state: true;
    $vl-pswp-assets-path: '~@govflanders/vl-ui-core/dist/img/lightbox/';
    $vl-font-location: '~@govflanders/vl-ui-core/dist/font/flanders/';
    
    @import "~@govflanders/vl-ui-core/src/scss/core";
    @import "~@govflanders/vl-ui-button/src/scss/button";
    @import "~@govflanders/vl-ui-titles/src/scss/titles";
    @import "~@govflanders/vl-ui-description-data/src/scss/description-data";
    @import "~@govflanders/vl-ui-data-table/src/scss/data-table";

    .vl-region:first-child {
      padding-top: 0rem;
    }
    .list--comma span:not(:last-child)::after {
      content: ', ';
    }
</style>
