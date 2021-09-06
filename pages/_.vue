<template>
  <ap :profile="profile" :language="language"></ap>
</template>

<script>

export default {
  async asyncData ({ $content, route, params }) {
    const profile = await $content('report', route.fullPath, 'html-nj', { deep: true }).fetch()

    return {
      profile,
      language: "nl"
    }
  },

  head() {
    return {
      title: this.profile.metadata.title[this.language]
    }
  }
}

</script>
