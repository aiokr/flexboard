<script setup lang="ts">
import { ref, nextTick } from 'vue';
import * as echarts from 'echarts';

var chartMode = ref('line'); // 默认图表类型为折线图

// 默认图表数据
var chartData = ref(
  [
    ['日期', '产品名称', '销量'],
    [1, 'A', 15],
    [2, 'A', 16],
    [3, 'A', 12],
    [1, 'B', 36],
    [2, 'B', 3],
    [3, 'C', 12]
  ]
);

var dialogVisible = ref(false); // 图表数据编辑弹窗是否显示

// 图表类型选项
var chartModeOptions = [
  { value: 'line', label: 'Line' },
  { value: 'bar', label: 'Bar' },
  { value: 'pie', label: 'Pie' },
  { value: 'scatter', label: 'Scatter' },
]

// 初始图表配置数据
var option = ref({
  tooltip: {},
  legend: {
    data: chartData.value.map((item) => item[0])
  },
  xAxis: {
    data: chartData.value.map((item) => item[1])
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: chartMode.value,
    data: chartData.value.map((item) => item[2])
  }]
});

nextTick(() => {
  const myChart = echarts.init(document.getElementById('chartMain'));
  myChart.setOption(option.value);
});

const updateChartMode = (newMode: string) => {
  console.log(newMode)
  if (newMode === 'pie') {
    for (var i in option.value) {
      if (i === 'xAxis' || i === 'yAxis') {
        delete option.value[i]
      }
    }
    option.value = option.value
  }

  chartMode.value = newMode;
  option.value.series[0].type = newMode;
  const myChart = echarts.init(document.getElementById('chartMain'));
  myChart.setOption(option.value);
  console.log(option.value)
}

</script>

<template>
  <header class="py-6">
    <h1 class="text-2xl font-bold">ECharts 图表制作工具</h1>
  </header>
  <div class="chartMaker">
    <h1 class="text-xl font-bold pb-4">图表设置</h1>
    <div class="flex items-center justify-start gap-2 mb-4">
      <el-select v-model="chartMode" placeholder="Select" style="width: 120px" @change="updateChartMode">
        <el-option v-for="item in chartModeOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-button plain @click="dialogVisible = true">
        编辑数据
      </el-button>
    </div>
    <div id="chartMain" class="h-96 w-full"></div>
  </div>

  <!--图表数据编辑器-->
  <el-dialog v-model="dialogVisible" fullscreen title="编辑数据" width="500">
    <span>This is a message</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped></style>
