<template>
  <div>
    <h1>CIVE60009 (ISTEMM) - Interactive: Dimensional</h1>
    <p class="label">frequency</p>
    <p>
      <vue-slider
        v-model="f"
        :min="1"
        :max="4"
        class="slider"
        :interval="0.1"
        :width="200"
      />
    </p>

    <div class="graph">
      <Plotly
        :data="dataForYLine"
        :layout="layout"
        :display-mode-bar="false"
      ></Plotly>
    </div>
  </div>
</template>

<script>
import { Plotly } from "vue-plotly";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

export default {
  name: "HelloWorld",
  components: {
    Plotly,
    VueSlider,
  },
  data() {
    return {
      f: 3,
      data: [
        {
          x: [1, 2, 3, 4],
          y: [10, 15, 13, 17],
          z: [10, 15, 13, 17],
          name: "𝑠𝑖𝑛(2𝜋𝑓₀𝑡)",
          type: "scatter3d",
          mode: "lines",
          text: "OLLIE",
          opacity: 1,
          line: {
            width: 5,

            colorscale: "Viridis",
          },
        },
        {
          x: [1, 2, 3, 4],
          y: [10, 15, 13, 17],
          z: [10, 15, 13, 17],
          type: "scatter3d",
          mode: "lines",
          name: "cos(2𝜋𝑓₀𝑡)",
          opacity: 1,
          line: {
            width: 5,

            colorscale: "Viridis",
          },
        },
        {
          x: [1, 2, 3, 4],
          y: [10, 15, 13, 17],
          z: [10, 15, 13, 17],
          type: "scatter3d",
          mode: "lines",
          name: "e^j2πkf0t",
          opacity: 1,
          line: {
            width: 5,

            colorscale: "Viridis",
          },
        },
      ],
      layout: {
        scene: {
          aspectmode: "manual",
          aspectratio: { x: 1, y: 1, z: 2 },
          xaxis: {
            title: "Real Axis",
            range: [-2, 2],
            dtick: 1,
            showspikes: true,
            linecolor: "#000000",
            linewidth: "5",
          },
          yaxis: {
            title: "Imaginary Axis",
            range: [-2, 2],
            dtick: 1,
            showspikes: true,
            linecolor: "#000000",
            linewidth: "5",
          },
          zaxis: {
            title: "Time",
            linecolor: "#000000",
            linewidth: "5",
            range: [-1, 3],
            dtick: 1,
            showspikes: true,
          },

          camera: {
            projection: { type: "orthographic" },
            center: {
              x: 0,
              y: 0,
              z: 0,
            },
            eye: {
              x: -1,
              y: 0.8,
              z: 1.8,
            },
            up: {
              x: 0,
              y: 1,
              z: 0,
            },
          },
        },
        width: 1200,
        height: 800,
        showlegend: true,
        text: ["Olle", "is", "cool"],
      },
    };
  },
  methods: {
    YgenerateY: function (t, f = 1) {
      return Math.sin(2 * Math.PI * t * f);
    },
    YgenerateX: function () {
      return 2;
    },
    YgenerateZ: function (t) {
      return t;
    },
    XgenerateX: function (t, f = 1) {
      return Math.cos(2 * Math.PI * t * f);
    },
    XgenerateY: function () {
      return -2;
    },
    XgenerateZ: function (t) {
      return t;
    },
    signalGenerateX: function (t, f = 1) {
      return Math.cos(2 * Math.PI * t * f);
    },
    signalGenerateY: function (t, f = 1) {
      return Math.sin(2 * Math.PI * t * f);
    },
    signalGenerateZ: function (t) {
      return t;
    },
    createYLine: function () {
      let points = {
        x: [],
        y: [],
        z: [],
      };
      for (let t = 0; t < 2.5; t += 0.01) {
        points.x.push(this.YgenerateX());
        points.y.push(this.YgenerateY(t, this.f));
        points.z.push(this.YgenerateZ(t, this.f));
      }
      return points;
    },
    createXLine: function () {
      let points = {
        x: [],
        y: [],
        z: [],
      };
      for (let t = 0; t < 2.5; t += 0.01) {
        points.x.push(this.XgenerateX(t, this.f));
        points.y.push(this.XgenerateY());
        points.z.push(this.XgenerateZ(t, this.f));
      }
      return points;
    },
    createSignalLine: function () {
      let points = {
        x: [],
        y: [],
        z: [],
      };
      for (let t = 0; t < 2.5; t += 0.01) {
        points.x.push(this.signalGenerateX(t, this.f));
        points.y.push(this.signalGenerateY(t, this.f));
        points.z.push(this.signalGenerateZ(t));
      }
      return points;
    },
  },
  computed: {
    dataForYLine: function () {
      let YdataToAdd = this.createYLine();
      console.log("y data", YdataToAdd);
      let XdataToAdd = this.createXLine();
      console.log("x data", XdataToAdd);
      let signalDataToAdd = this.createSignalLine();
      let dataLocal = JSON.parse(JSON.stringify(this.data));
      dataLocal[0].x = YdataToAdd.x;
      dataLocal[1].x = XdataToAdd.x;
      dataLocal[2].x = signalDataToAdd.x;
      dataLocal[0].y = YdataToAdd.y;
      dataLocal[1].y = XdataToAdd.y;
      dataLocal[2].y = signalDataToAdd.y;
      dataLocal[0].z = YdataToAdd.z;
      dataLocal[1].z = XdataToAdd.z;
      dataLocal[2].z = XdataToAdd.z;
      console.log(dataLocal);
      return dataLocal;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.graph {
  width: 100%;
}
.slider {
  width: 200px;
  margin: 0 auto;
}
.label {
  display: inline;
}
</style>
