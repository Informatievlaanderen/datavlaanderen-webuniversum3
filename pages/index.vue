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
  </div>
</template>

<script>

import { parse_ontology_from_json_ld_file_ap } from '../ld/linkeddataparser'

export default {
  data() {
    return {
      profile: {}
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
    @import "~@govflanders/vl-ui-button/src/scss/button";
    @import "~@govflanders/vl-ui-titles/src/scss/titles";
    @import "~@govflanders/vl-ui-description-data/src/scss/description-data";
</style>
