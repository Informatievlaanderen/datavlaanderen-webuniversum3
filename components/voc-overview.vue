<template>
  <div class="vl-region vl-region--no-space-top" id="overview">
    <h2 class="vl-title vl-title--h2">3. Overzicht</h2>
    <div class="vl-grid">
      <div class="vl-col--9-12 vl-col--1-1--s typography">
        <div v-if="classes.length" class="vl-region vl-region--no-space-top">
          <p>
            Deze sectie somt alle klassen en eigenschappen van het vocabularium
            op.
          </p>
          <p v-if="profile.externalvocs">
            Dit vocabularium verwijst verder naar termen uit de volgende
            vocabularia:
          </p>
          <ul>
            <li v-for="term in profile.externalvocs" :key="term.uri">
              <a v-bind:href="term.uri">{{ term.uri }}</a>
            </li>
          </ul>
          <p>
            <a
              v-bind:href="`http://visualdataweb.de/webvowl/#iri=${profile.metadata.uri}.ttl`"
              >Verken het vocabularium</a
            >
          </p>
          <h3 class="vl-title--h3">Klassen</h3>
          <span v-for="c in profile.classes" :key="c.name">
            <a v-bind:href="'#' + c.name">{{ c.name }}</a> |
          </span>
        </div>
        <div v-if="properties.length" class="vl-region vl-region--no-space-top">
          <h3 class="vl-title--h3">Eigenschappen</h3>
          <span
            v-for="datatype in profile.properties"
            :key="datatype.name"
          >
            <a v-bind:href="'#' + datatype.name">{{
              datatype.name
            }}</a>
            |
          </span>
        </div>

        <div class="vl-region vl-region--no-space-top">
          <section
            typeof="bibo:Chapter"
            resource="#ref"
            rel="bibo:Chapter"
            id="classes"
          >
            <h2 class="vl-title--h2" id="classes" aria-level="1" role="heading">
              <span class="secno">4. </span>Klassen
            </h2>
            <!-- {% if classes %} -->
            <div v-if="profile.classes">
              <div class="vl-region vl-region--no-space-top">
                <p>Deze sectie geeft een formele definitie aan elke klasse.</p>
              </div>
              <!-- {% for class in classes | sort(attribute = sortattr) %} -->
              <div
                v-for="klass in classes"
                :key="klass.name[language]"
                class="vl-region vl-region--no-space-top"
              >
                <h3 class="vl-title--h3" id="klass.uri">
                  Klasse <em>{{ klass.name[language] }}</em>
                </h3>
                <table class="vl-definition">
                  <tbody>
                    <tr>
                      <th>Type</th>
                      <td>Klasse</td>
                    </tr>
                    <tr>
                      <th>URI</th>
                      <td>
                        <code>{{ klass.uri }}</code>
                      </td>
                    </tr>
                    <!-- {% if ((class.parents | length) > 0) %} -->
                    <tr v-if="klass.parents && klass.parents.length > 0">
                      <th>Specialisatie van</th>
                      <td>
                        <ul>
                          <!-- {% for parent in class.parents | sort %} -->
                          <li v-for="parent in klass.parents" :key="parent">
                            <a v-bind:href="parent">
                              <code>{{ parent }}</code>
                            </a>
                          </li>
                          <!-- {% endfor %} -->
                        </ul>
                      </td>
                    </tr>
                    <!-- {% endif %} -->
                    <tr>
                      <th>Definitie</th>
                      <td>{{ klass.description[language] }}</td>
                    </tr>
                    <!-- {% if class.usage[language] %} -->
                    <tr v-if="klass.usage[language]">
                      <th>
                        <p>Gebruik</p>
                      </th>
                      <td>{{ klass.usage[language] }}</td>
                    </tr>
                    <!-- {% endif %} -->
                  </tbody>
                </table>
              </div>
              <!-- {% endfor %} -->
              <!-- {% else %} -->
            </div>
            <div v-else class="vl-region vl-region--no-space-top">
              <p>
                In dit vocabularium zijn geen klassen gedefinieerd. Het is wel
                mogelijk dat klassen uit een gerelateerd vocabularium worden
                hergebruikt.
              </p>
            </div>
            <!-- {% endif %} -->
            <h2 class="vl-title--h2" id="properties" aria-level="1" role="heading">
              <span class="secno">5. </span>Eigenschappen
            </h2>
            <div v-if="profile.properties">
              <div class="vl-region vl-region--no-space-top">
                <p>
                  Deze sectie geeft een formele definitie aan elke eigenschap.
                </p>
              </div>
              <!-- {% for class in classes | sort(attribute = sortattr) %} -->
              <div
                v-for="property in properties"
                :key="property.name"
                class="vl-region vl-region--no-space-top"
              >
                <h3 class="vl-title--h3" id="klass.uri">
                  Eigenschap <em>{{ property.name }}</em>
                </h3>
                <table class="vl-definition">
                  <tbody>
                    <tr>
                      <th>Type</th>
                      <td>Eigenschap</td>
                    </tr>
                    <tr>
                      <th>URI</th>
                      <td>
                        <code>{{ property.uri }}</code>
                      </td>
                    </tr>
                    <!-- {% if ((class.parents | length) > 0) %} -->
                    <tr v-if="property.domain">
                      <th>Domein</th>
                      <td>
                        <ul>
                          <!-- {% for parent in class.parents | sort %} -->
                          <li v-for="entity in property.domain" :key="entity">
                            <a v-bind:href="entity">
                              <code>{{ entity }}</code>
                            </a>
                          </li>
                          <!-- {% endfor %} -->
                        </ul>
                      </td>
                    </tr>
                    <tr v-if="property.range">
                      <th>Bereik</th>
                      <td>
                        <ul>
                          <!-- {% for parent in class.parents | sort %} -->
                          <li v-for="entity in property.range" :key="entity">
                            <a v-bind:href="entity">
                              <code>{{ entity }}</code>
                            </a>
                          </li>
                          <!-- {% endfor %} -->
                        </ul>
                      </td>
                    </tr>
                    <tr v-if="property.parents.length">
                      <th>Specialisatie van</th>
                      <td>
                        <ul>
                          <!-- {% for parent in class.parents | sort %} -->
                          <li v-for="parent in property.parents" :key="parent">
                            <a v-bind:href="parent">
                              <code>{{ parent }}</code>
                            </a>
                          </li>
                          <!-- {% endfor %} -->
                        </ul>
                      </td>
                    </tr>
                    <!-- {% endif %} -->
                    <tr>
                      <th>Definitie</th>
                      <td>{{ property.description[language] }}</td>
                    </tr>
                    <!-- {% if class.usage[language] %} -->
                    <tr v-if="property.usage[language]">
                      <th>
                        <p>Gebruik</p>
                      </th>
                      <td>{{ property.usage[language] }}</td>
                    </tr>
                    <!-- {% endif %} -->
                  </tbody>
                </table>
              </div>
              <!-- {% endfor %} -->
              <!-- {% else %} -->
            </div>
            <div v-else class="vl-region vl-region--no-space-top">
              <p>
                In dit vocabularium zijn geen eigenschappen gedefinieerd. Het is
                wel mogelijk dat eigenschappen uit een gerelateerd vocabularium
                worden hergebruikt.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["profile", "language"],
  computed: {
    classes() {
      return this.profile.classes.sort(
        function (a, b) {
          return a[`sort_${this.language}`] < b[`sort_${this.language}`]
            ? -1
            : a[`sort_${this.language}`] > b[`sort_${this.language}`]
            ? 1
            : 0;
        }.bind(this)
      );
    },
    properties() {
      return this.profile.properties.sort(
        function (a, b) {
          return a[`sort_${this.language}`] < b[`sort_${this.language}`]
            ? -1
            : a[`sort_${this.language}`] > b[`sort_${this.language}`]
            ? 1
            : 0;
        }.bind(this)
      );
    },
  },
};
</script>