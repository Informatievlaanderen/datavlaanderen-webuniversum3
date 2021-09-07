<template>
  <ul>
    <li v-for="page in content" :key="page.path">
      <a v-bind:href="page.path">{{page.path}}</a>
    </li>
  </ul>
</template>

<script>

export default {
  async asyncData ({ $content }) {
    const content = await $content('report', { deep: true }).fetch()

    return {
      content: content.map(page => {
        return ({
        ...page,
        path: page.path.slice(8, -8)
      })})      
    }
  }
}

</script>