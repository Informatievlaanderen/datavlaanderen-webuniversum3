<template>
  <div class="vl-page">
    <vl-region>
      <vl-layout>
        <vl-title>{{ profile.metadata.title.nl }}</vl-title>
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
    @import "~@govflanders/vl-ui-core/src/scss/core";
    @import "~@govflanders/vl-ui-button/src/scss/button";
</style>
