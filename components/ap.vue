<template>
  <div class="vl-region">
    <vl-grid>
      <div class="vl-col vl-col--4-6">
        <div class="js-vl-scrollspy__content">
          <div class="vl-layout vl-layout--wide">
            <div class="grid">
              <div class="vl-col--8-12 vl-col--12-12--s">
                <ap-meta :profile="profile"></ap-meta>
                <ap-introduction :profile="profile" :language="language"></ap-introduction>
                <ap-summary :profile="profile" :language="language"></ap-summary>
                <ap-status :profile="profile" :language="language"></ap-status>
                <ap-license :profile="profile" :language="language"></ap-license>
                <ap-conformance :profile="profile" :language="language"></ap-conformance>
                <ap-overview :profile="profile" :language="language"></ap-overview>
                <ap-jsonld :profile="profile" :language="language"></ap-jsonld>
                <ap-shacl :profile="profile" :language="language"></ap-shacl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="vl-col vl-col--2-6 vl-col--1-1--s">
        <side-nav :hasdescription="profile.metadata.description"></side-nav>
      </div>
    </vl-grid>
  </div>
</template>
<script>
export default {
  props: ["profile", "language"],
};
</script>
