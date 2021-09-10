<template>
  <div class="vl-region vl-region--no-space-top">
    <section
      typeof="bibo:Chapter"
      resource="#ref"
      rel="bibo:Chapter"
      id="external"
    >
      <h2 class="vl-title--h2" id="externals" aria-level="1" role="heading">
        <span class="secno">6. </span>Externe terminologie
      </h2>

      <div class="vl-region vl-region--no-space-top">
        <p>
          Deze sectie geeft een overzicht van terminologie uit andere
          vocabularia die relevant is voor dit domeinmodel samen met hun
          Nederlandstalige labels en definities.
        </p>
      </div>
      <div v-if="profile.external_terms.length">
        <div
          v-for="external in profile.external_terms"
          :key="external.name[language]"
          class="vl-region vl-region--no-space-top"
        >
          <h3 class="v-title--h4" id="external.name[language]">
            <em>{{ external.name[language] }}</em>
          </h3>
          <table class="definition">
            <tbody>
              <tr>
                <th>URI</th>
                <td>
                  <code>{{ external.uri }}</code>
                </td>
              </tr>
              <tr v-if="external.definition">
                <th>Definitie</th>
                <td>{{ external.description[language] }}</td>
              </tr>
              <tr v-if="external.usage">
                <th>Gebruik</th>
                <td>{{ external.usage[language] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else class="region region--no-space-top">
        <p>In dit vocabularium zijn geen externe termen hergebruikt.</p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: ["profile", "language"],
}
</script>
