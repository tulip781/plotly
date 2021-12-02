<template>
  <div class="wrapper">
    <div class="slider-group">
      <div class="xSpacer">
        <p class="label">Frequency</p>
        <p>
          <vue-slider
            v-model="f"
            :min="1"
            :max="4"
            class="slider"
            :interval="0.01"
            :width="`17vw`"
          />
        </p>
      </div>
      <div class="xSpacer">
        <p class="label">Phase</p>
        <p>
          <vue-slider
            v-model="p"
            :min="0"
            :max="4"
            class="slider"
            :interval="0.01"
            :width="`17vw`"
          />
        </p>
      </div>
      <div class="xSpacer">
        <p class="label">Amplitutde</p>
        <p>
          <vue-slider
            v-model="a"
            :min="0.1"
            :max="1.7"
            class="slider"
            :interval="0.01"
            :width="`17vw`"
          />
        </p>
      </div>
    </div>
    <div class="legend">
      <div class="legend__item">
        <div class="legend__item__square__blue"></div>
        <span class="legend__text">𝑠𝑖𝑛(2𝜋𝑓₀𝑡ϕ)</span>
      </div>
      <div class="legend__item">
        <div class="legend__item__square__orange"></div>
        <span class="legend__text">𝑐𝑜𝑠(2𝜋𝑓₀𝑡ϕ)</span>
      </div>
      <div class="legend__item">
        <div class="legend__item__square__green"></div>
        <span class="legend__text">e^i(2𝜋𝑓₀𝑡ϕ)</span>
      </div>
    </div>

    <Plotly
      class="graph"
      :data="dataForYLine"
      :layout="layout"
      :display-mode-bar="false"
      :drag-mode="false"
      :responsive="true"
    ></Plotly>
  </div>
</template>

<script>
import { Plotly } from "vue-plotly";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

export default {
  name: "HelloWorld",
  title: "Dimensional Graph",
  components: {
    Plotly,
    VueSlider,
  },
  data() {
    return {
      f: 3,
      p: 0,
      a: 1,
      data: [
        {
          x: [1, 2, 3, 4],
          y: [10, 15, 13, 17],
          z: [10, 15, 13, 17],
          name: "𝑠𝑖𝑛(2𝜋𝑓₀𝑡ϕ)",
          type: "scatter3d",
          mode: "lines",

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
          name: "𝑐𝑜𝑠(2𝜋𝑓₀𝑡ϕ)",
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
          name: "e^i(2𝜋𝑓₀𝑡ϕ)",
          opacity: 1,
          line: {
            width: 5,

            colorscale: "Viridis",
          },
        },
      ],
      layout: {
        autosize: true,
        dragmode: false,
        margin: {
          l: 0,
          r: 0,
          b: 0,
          t: 0,
          pad: 0,
        },
        scene: {
          dragmode: false,
          scrollZoom: false,
          aspectmode: "manual",
          aspectratio: { x: 1, y: 1, z: 2 },
          annotations: [
            {
              xref: "x",
              yref: "y",
              xshift: -190,
              x: -2,
              xanchor: "left",
              y: 2,
              yanchor: "top",
              text: "Imaginary Axis",
              showarrow: false,
              textangle: -90,
              font: {
                size: 15,
              },
            },
          ],
          xaxis: {
            mirror: true,
            title: "Real Axis",
            range: [-2, 2],
            dtick: 1,
            showspikes: true,
            linecolor: "#000000",
            linewidth: "5",
          },
          yaxis: {
            mirror: true,
            title: "",
            range: [-2, 2],
            dtick: 1,
            showspikes: true,
            linecolor: "#000000",
            linewidth: "5",
          },
          zaxis: {
            mirror: true,
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
        // width: 1200,
        // height: 800,
        showlegend: false,
        legend: {
          y: 1,
          x: -3,
          traceorder: "normal",
          font: {
            family: "Avenir, Helvetica, Arial, sans-serif",
            size: 30,
            color: "#000",
          },

          bordercolor: "#FFFFFF",
          borderwidth: 2,
        },
      },
    };
  },
  methods: {
    YgenerateY: function (t, f = 1, a = 1) {
      return a * Math.sin(2 * Math.PI * t * f);
    },
    YgenerateX: function () {
      return 2;
    },
    YgenerateZ: function (t, p = 0) {
      return -p + t;
    },
    XgenerateX: function (t, f = 1, a = 1) {
      return a * Math.cos(2 * Math.PI * t * f);
    },
    XgenerateY: function () {
      return -2;
    },
    XgenerateZ: function (t, p = 0) {
      return -p + t;
    },
    signalGenerateX: function (t, f = 1, a = 1) {
      return a * Math.cos(2 * Math.PI * t * f);
    },
    signalGenerateY: function (t, f = 1, a = 1) {
      return a * Math.sin(2 * Math.PI * t * f);
    },
    signalGenerateZ: function (t, p = 0) {
      return -p + t;
    },
    createYLine: function () {
      let points = {
        x: [],
        y: [],
        z: [],
      };
      for (let t = 0 + this.p; t < 2.5 + this.p; t += 0.01) {
        points.x.push(this.YgenerateX());
        points.y.push(this.YgenerateY(t, this.f, this.a));
        points.z.push(this.YgenerateZ(t, this.p));
      }
      return points;
    },
    createXLine: function () {
      let points = {
        x: [],
        y: [],
        z: [],
      };
      for (let t = 0 + this.p; t < 2.5 + this.p; t += 0.01) {
        points.x.push(this.XgenerateX(t, this.f, this.a));
        points.y.push(this.XgenerateY());
        points.z.push(this.XgenerateZ(t, this.p));
      }
      return points;
    },
    createSignalLine: function () {
      let points = {
        x: [],
        y: [],
        z: [],
      };
      for (let t = 0 + this.p; t < 2.5 + this.p; t += 0.01) {
        points.x.push(this.signalGenerateX(t, this.f, this.a));
        points.y.push(this.signalGenerateY(t, this.f, this.a));
        points.z.push(this.signalGenerateZ(t, this.p));
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
  height: 60vh;
}
.slider {
  margin: 0 auto;
}
.label {
  display: inline;
}
.slider-group {
  z-index: 5;
  display: flex;
  margin: auto 0;
  width: 100%;
  justify-content: center;
}
.xSpacer {
  margin: 0 2rem;
}
.legend__item__square__orange {
  width: 20px;
  height: 20px;
  background-color: hsl(28, 100%, 53%);
  margin-right: 2rem;
}
.legend__item__square__blue {
  width: 20px;
  height: 20px;
  background-color: hsl(205, 70%, 42%);
  margin-right: 2rem;
}
.legend__item__square__green {
  width: 20px;
  height: 20px;
  background-color: hsl(120, 56%, 40%);
  margin-right: 2rem;
}
.legend {
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
}
.legend__item {
  display: flex;
  margin-left: 2rem;
}
.legend__text {
  font-size: 1.3rem;
  position: relative;
  top: -6px;
}
</style>
