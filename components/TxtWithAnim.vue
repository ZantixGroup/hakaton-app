<template>
  <v-row>
      <v-col
        cols="12"
        sm="6"
        offset-sm="3"
      >
        <v-card class="no-outline">
          <p style="text-align: center;">{{ text }}</p>
          <div id="graph"></div>
        </v-card>
      </v-col>
    </v-row>
</template>

<script>
import Plotly from "plotly.js"

export default {
  props: ["type", "x", "y", "n", "butt", "text"],
  data () {
    return {
    }
  },
  mounted(){
    setTimeout(() => {

      switch (this.$props.type) {
        case "sin":
          var frames = [{name: 'sine', data: [{x: [], y: []}]}];
          var n = this.$props.n;
          for (var i = 0; i < n; i++) {
            var t = i / (n - 1) * 2 - 1;
            
            // A sine wave:
            frames[0].data[0].x[i] = t * Math.PI;
            frames[0].data[0].y[i] = Math.sin(t * Math.PI);
            Plotly.newPlot('graph', [{
              x: frames[0].data[0].x,
              y: frames[0].data[0].y,
              line: {simplify: false},
            }], {
              xaxis: {range: [-Math.PI, Math.PI]},
              yaxis: {range: [-1.2, 1.2]},
            }, {displayModeBar: false}).then(function() {
              Plotly.addFrames('graph', frames);
            });
          }
          break;
        case "cos":
          var frames = [{name: 'cosine', data: [{x: [], y: []}]}];
          var n = this.$props.n;
          for (var i = 0; i < n; i++) {
            var t = i / (n - 1) * 2 - 1;
            
            // A cosine wave:
            frames[0].data[0].x[i] = t * Math.PI;
            frames[0].data[0].y[i] = Math.cos(t * Math.PI);
          }
          Plotly.newPlot('graph', [{
              x: frames[0].data[0].x,
              y: frames[0].data[0].y,
              line: {simplify: false},
            }], {
              xaxis: {range: [-Math.PI, Math.PI]},
              yaxis: {range: [-1.2, 1.2]},
            }, {displayModeBar: false}).then(function() {
              Plotly.addFrames('graph', frames);
            });
          break;
        case "circ":
          var frames = [{name: 'circle', data: [{x: [], y: []}]}];
          var n = this.$props.n;
          for (var i = 0; i < n; i++) {
            var t = i / (n - 1) * 2 - 1;
            
            // A circle:
            frames[0].data[0].x[i] = Math.sin(t * Math.PI);
            frames[0].data[0].y[i] = Math.cos(t * Math.PI);
          }
          Plotly.newPlot('graph', [{
              x: frames[0].data[0].x,
              y: frames[0].data[0].y,
              line: {simplify: false},
            }], {
              xaxis: {range: [-Math.PI, Math.PI]},
              yaxis: {range: [-1.2, 1.2]},
            }, {displayModeBar: false}).then(function() {
              Plotly.addFrames('graph', frames);
            });
          break;
        case "graph":
          Plotly.newPlot('graph', [{
            x: [1, 2, 3],
            y: [0, 0.5, 1],
            line: {simplify: false},
          }], {}, {showSendToCloud:true});

          function randomize() {
            Plotly.animate('graph', {
              data: [{y: [Math.random(), Math.random(), Math.random()]}],
              traces: [0],
              layout: {}
            }, {
              transition: {
                duration: 500,
                easing: 'cubic-in-out'
              },
              frame: {
                duration: 500
              }
            })
          }
          break;
        case "anim":
          
          break;
        case "scat":

          var n = this.$props.n;

          var x = [], y = [];

          for (var i = 0; i < n; i++) {
            x[i] = i / (n - 1);
            y[i] = x[i] + 0.2 * (Math.random() - 0.5);
          }

          Plotly.newPlot('graph', [{
            x: x,
            y: y,
            mode: 'markers'
          }], {
            xaxis: {range: [0, 1]},
            yaxis: {range: [0, 1]}
          }, {showSendToCloud:true});

          function zoom() {
            var min = 0.45 * Math.random();
            var max = 0.55 + 0.45 * Math.random();
            Plotly.animate('graph', {
              layout: {
                xaxis: {range: [min, max]},
                yaxis: {range: [min, max]}
              }
            }, {
              transition: {
                duration: 500,
                easing: 'cubic-in-out'
              }
            })
          }
          break;
        default:
          break;
      }
    }, 300);
  }
}
</script>