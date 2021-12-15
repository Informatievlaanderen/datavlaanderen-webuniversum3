<template>
  <ap v-if="ap" :profile="profile" :language="language"></ap>
  <voc v-else :profile="profile" :language="language"></voc>
</template>

<script>
export default {
  async asyncData ({ $content, route, app, i18n }) {

    const unPrefixed = i18n.defaultLocale === app.i18n.locale ? route.fullPath : route.fullPath.slice(3)

    const profile = await $content('report', unPrefixed, 'html-nj_nl', { deep: true }).fetch()

    return {
      profile,
      language: app.i18n.locale,
      ap: route.path.includes('applicatieprofiel'),
      voc: route.path.includes('vocabularium')
    };
  },

  head() {
    return {
      title: this.profile.metadata.title[this.language],
    };
  },
};
</script>
