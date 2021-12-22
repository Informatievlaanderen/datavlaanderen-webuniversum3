<template>
  <ul>
    <li v-for="page in content" :key="page.path">
      <a v-bind:href="page.path">{{page.path}}</a>
    </li>
  </ul>
</template>

<script>

function trimPath(path) {
  /* Nuxt considers by default the full path:
  * for example /report/doc/vocabularium/documentatie/associaties-voc-met-uri-tags/html-nj_nl
  * the actual path should be however /doc/vocabularium/documentatie/associaties-voc-met-uri-tags/
  */
  return path.slice(8, -11)
}

export default {
  async asyncData ({ $content }) {
    const content = await $content('report', { deep: true }).fetch()
    return {
      content: content.filter(page => !page.path.includes('translation')).map(page => {
        return ({
        ...page,
        path:  trimPath(page.path)
      })})
    }
  }
}

</script>