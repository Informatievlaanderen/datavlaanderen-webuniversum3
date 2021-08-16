<template>
  <div>
    <button class="vl-button">
      <span class="vl-button__label">Gegevens opslaan</span>
    </button>
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
    const response = await fetch('./ap-bodem.jsonld')
    const ld = await response.json()
    const parsed = await parse_ontology_from_json_ld_file_ap(ld)
    console.log(parsed)
    this.profile = parsed
  },
  fetchOnServer: true
}
</script>

<style lang="scss">
    @import "~@govflanders/vl-ui-core/src/scss/core";
    @import "~@govflanders/vl-ui-button/src/scss/button";
</style>
