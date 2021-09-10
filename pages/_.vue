<template>
  <ap v-if="ap" :profile="profile" :language="language"></ap>
  <voc v-else :profile="profile" :language="language"></voc>
</template>

<script>
export default {
  async asyncData ({ $content, route }) {
    const profile = await $content('report', route.fullPath, 'html-nj', { deep: true }).fetch()
    console.log(route.path.includes('applicatieprofiel'))

    return {
      profile,
      language: "nl",
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
