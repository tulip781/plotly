<template>
  <div class="graph">
    <Plotly
      :data="dataForYLine"
      :layout="layout"
      :display-mode-bar="true"
    ></Plotly>
  </div>
</template>

<script>
import { Plotly } from "vue-plotly";

export default {
  name: "HelloWorld",
  components: {
    Plotly,
  },
  data() {
    return {
      attr: { displayModeBar: false, staticPlot: true },
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
          opacity: 1,
          line: {
            width: 5,

            colorscale: "Viridis",
          },
        },
      ],
      layout: {
        title: "CIVE60009 (ISTEMM) - Interactive: Dimensional ",
        scene: {
          aspectmode: "cube",

          xaxis: { title: "Real Axis", range: [-2, 2] },
          yaxis: { title: "Imaginary Axis", range: [-2, 2] },
          zaxis: {
            title: "Time",
            linecolor: "#FFFF00",
            linewidth: "10",
            range: [-1, 3],
          },

          camera: {
            center: {
              x: 0,
              y: 0,
              z: 0,
            },
            eye: {
              x: -1.5,
              y: 1.5,
              z: 1.5,
            },
            up: {
              x: 0,
              y: 1,
              z: 0,
            },
          },
        },
        width: 1000,
        height: 600,
        showlegend: true,
        text: ["Olle", "is", "cool"],
      },
    };
  },
  methods: {
    YgenerateY: function (t) {
      return Math.sin(2 * Math.PI * t);
    },
    YgenerateX: function () {
      return 2;
    },
    YgenerateZ: function (t) {
      return t;
    },
    XgenerateX: function (t) {
      return Math.cos(2 * Math.PI * t);
    },
    XgenerateY: function () {
      return -2;
    },
    XgenerateZ: function (t) {
      return t;
    },
    signalGenerateX: function (t) {
      return Math.cos(2 * Math.PI * t);
    },
    signalGenerateY: function (t) {
      return Math.sin(2 * Math.PI * t);
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
      for (let t = -1; t < 3; t += 0.01) {
        points.x.push(this.YgenerateX());
        points.y.push(this.YgenerateY(t));
        points.z.push(this.YgenerateZ(t));
      }
      return points;
    },
    createXLine: function () {
      let points = {
        x: [],
        y: [],
        z: [],
      };
      for (let t = -1; t < 3; t += 0.01) {
        points.x.push(this.XgenerateX(t));
        points.y.push(this.XgenerateY());
        points.z.push(this.XgenerateZ(t));
      }
      return points;
    },
    createSignalLine: function () {
      let points = {
        x: [],
        y: [],
        z: [],
      };
      for (let t = -1; t < 3; t += 0.01) {
        points.x.push(this.signalGenerateX(t));
        points.y.push(this.signalGenerateY(t));
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
</style>
