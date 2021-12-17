<template>
  <div>
    <vl-title>{{ profile.metadata.title }}</vl-title>
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
        <dt v-if="authors.length" class="vl-description-data__value">Auteurs</dt>
        <dd class="vl-description-data__subdata" v-for="contributor in authors" :key="contributor.last_name">
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
        <dt v-if="editors.length" class="vl-description-data__value">Editors</dt>
        <dd class="vl-description-data__subdata" v-for="contributor in editors" :key="contributor.last_name">
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
        <dt v-if="contributors.length" class="vl-description-data__value">Medewerkers</dt>
        <dd class="vl-description-data__subdata" v-for="contributor in contributors" :key="contributor.last_name">
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
        <dt v-if="profile.metadata.dependencies" class="vl-description-data__value">Afhankelijkheden</dt>
        <dd class="vl-description-data__subdata">
          <a v-for="dep in profile.metadata.dependencies" :key="dep.packagelabel" v-bind:href="dep.packageurl">{{ dep.packagelabel }}</a>
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    authors() {
      return this.profile.contributors.filter(c => c.role === 'A')
    },
    editors() {
      return this.profile.contributors.filter(c => c.role === 'E')
    },
    contributors() {
      return this.profile.contributors.filter(c => c.role === 'C')
    }
  },
  props: ['profile']
}
</script>
