<template>
  <div>
    <h3 v-if="entity.scoped_uri" class="vl-title vl-title--h3" v-bind:id="entity.name[language]">
      <a
        v-bind:href="entity.scopeduri"
        data-toggle="tooltip"
        v-bind:data-content="entity.uri"
        data-placement="right"
        >{{ entity.name[language] }}</a
      >
    </h3>
    <h3 v-else class="vl-title vl-title--h3" v-bind:id="entity.name[language]">
      <a
        v-bind:href="entity.uri"
        data-toggle="tooltip"
        v-bind:data-content="entity.uri"
        data-placement="right"
        >{{ entity.name[language] }}</a
      >
    </h3>
    <div class="vl-region vl-region--no-space-top">
      <dl>
        <dt class="vl-description-data__value">Beschrijving</dt>
        <dd class="vl-description-data__subdata">
          {{ entity.description[language] }}
        </dd>
        <dt v-if="entity.usage[language]" class="vl-description-data__value">Gebruik</dt>
        <dd v-if="entity.usage[language]" class="vl-description-data__subdata">
          {{ entity.usage[language] }}
        </dd>
        <dt v-if="entity.parents.length" class="vl-description-data__value">Subklasse van</dt>
        <dd class="vl-description-data__subdata list--comma">
          <span v-for="parent in entity['parents']" :key="parent.label">
            <a v-bind:href="parent.scoped_uri">{{ parent.label }}</a>
          </span>
        </dd>
        <dt class="vl-description-data__value">Eigenschappen</dt>
        <dd
          class="vl-description-data__subdata list--comma"
          v-if="entity.properties.length"
        >
          Voor deze entiteit zijn de volgende eigenschappen gedefinieerd:
          <span v-for="prop in entity['properties']" :key="prop.name[language]">
            <a
              v-bind:href="'#' + entity.name[language] + prop.name[language]"
              >{{ prop.name[language] }}</a
            >
          </span>
        </dd>
        <dd
          class="vl-description-data__subdata list--comma"
          v-else
        >
          Voor deze entiteit zijn geen eigenschappen gedefinieerd.
        </dd>
      </dl>
    </div>
    <div v-if="entity.properties.length" class="u-table-overflow">
      <table class="vl-data-table">
        <thead>
          <tr class="vl-data-table__header">
            <th
              class="
                vl-data-table__header-title--sortable
                vl-data-table__header-title--sortable-active
              "
            >
              Eigenschap
            </th>
            <th class="vl-data-table__header-title--sortable">Verwacht Type</th>
            <th class="vl-data-table__header-title--sortable">Kardinaliteit</th>
            <th class="vl-data-table__header-title--sortable">Beschrijving</th>
            <th class="vl-data-table__header-title--sortable">Gebruik</th>
            <th class="vl-data-table__header-title--sortable">Codelijst</th>
          </tr>
        </thead>
        <tbody class="supertype">
          <tr
            v-for="prop in entity['properties']"
            :key="entity.name[language] + ':' + prop.name[language]"
            id="entity.name[language] + ':' + prop.name[language]"
            typeof="rdfs:Property"
            resource="prop.uri"
          >
            <td>
              <code property="rdfs:label">
                <a
                  v-bind:href="prop.uri"
                  data-toggle="tooltip"
                  data-content="prop.uri"
                  data-placement="right"
                >
                  {{ prop.name[language] }}</a
                >
              </code>
            </td>
            <td>
              <span v-for="range in prop.scopedrange" :key="range['range_uri']">
                <a
                  v-if="range['range_uri'] == range['range_puri']"
                  v-bind:href="range['range_uri']"
                  data-toggle="tooltip"
                  data-content="range['range_puri']"
                  data-placement="right"
                  >{{ range["range_label"][language] }}</a
                >
                <a
                  v-else
                  v-bind:href="range['range_uri']"
                  data-placement="right"
                  >{{ range["range_label"][language] }}</a
                >
              </span>
            </td>
            <td>{{ prop.cardinality }}</td>
            <td property="rdfs:comment">{{ prop.description[language] }}</td>
            <td property="vann:usageNote">{{ prop.usage[language] }}</td>
            <td>
              <a v-if="prop['codelist_uri']" v-bind:href="prop['codelist_uri']"
                >Link</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  props: ["entity", "language"],
};
</script>
