<template>
  <ap v-if="documenttype === 'ap'" :profile="profile" :language="language"></ap>
  <oj v-else-if="documenttype === 'oj'" :profile="profile" :language="language"></oj>
  <voc v-else-if="documenttype === 'voc'" :profile="profile" :language="language"></voc>
  <unknown v-else :profile="profile" :language="language"></unknown>
</template>

<script>
export default {
  async asyncData ({ $content, route, app, i18n }) {

    const unPrefixed = i18n.defaultLocale === app.i18n.locale ? route.fullPath : route.fullPath.slice(3)

    const profile = await $content('report', unPrefixed, 'html-nj_nl', { deep: true }).fetch()
         
    return {
      profile,
      language: app.i18n.locale,
      documenttype: profile.metadata.documenttype
    };
  },

  head() {
    return {
      title: this.profile.metadata.title[this.language],
    };
  },
};
</script>
