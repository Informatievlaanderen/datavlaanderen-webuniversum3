<template>
  <div class="vl-region">
    <vl-grid>
      <div class="vl-col vl-col--4-6">
        <div class="js-vl-scrollspy__content">
          <div class="vl-layout vl-layout--wide">
            <div class="grid">
              <div class="vl-col--8-12 vl-col--12-12--s">
                <generic-meta :profile="profile"></generic-meta>
                <voc-introduction
                  :profile="profile"
                  :language="language"
                ></voc-introduction>
                <voc-summary
                  :profile="profile"
                  :language="language"
                ></voc-summary>
                <voc-status
                  :profile="profile"
                  :language="language"
                ></voc-status>
                <generic-license
                  :profile="profile"
                  :language="language"
                ></generic-license>
                <voc-conformance></voc-conformance>
                <voc-overview
                  :profile="profile"
                  :language="language"
                ></voc-overview>
                <voc-external-terminology
                  :profile="profile"
                  :language="language"
                >
                </voc-external-terminology>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="vl-col vl-col--2-6 vl-col--1-1--s">
        <voc-side-nav
          :hasdescription="profile.metadata.description"
        ></voc-side-nav>
      </div>
    </vl-grid>
  </div>
</template>
<script>
import vocConformance from "./voc-conformance.vue";
export default {
  components: { vocConformance },
  props: ["profile", "language"],
};
</script>
<style>
table {
  font-size: 12px;
  color: #333333;
  border-width: 1px;
  border-color: #666666;
  border-collapse: collapse;
  margin-top: 2em;
  width: 100%;
}

table th {
  border-width: 1px;
  padding: 8px;
  border-style: solid;
  border-color: #666666;
  background-color: #dedede;
  width: 110px;
}

table td {
  border-width: 1px;
  padding: 8px;
  border-style: solid;
  border-color: #666666;
  background-color: #ffffff;
}

table tr:first-child {
  font-weight: bold;
}

tr:nth-child(even) td {
  background-color: #eee;
}

dd,
dt {
  margin-top: 0;
  margin-bottom: 0;
}
/* opera 3.50 */
dt {
  font-weight: bold;
}

code,
pre {
  font-family: monospace;
}
/* navigator 4 requires this */
code {
  color: black;
}

em {
  font-style: italic;
}

img {
  width: 100%;
}
img.cc {
  width: 88px;
}
</style>