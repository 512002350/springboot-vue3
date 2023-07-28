<template>
    <div>
        <div id="showData">
        
        </div>
        <button @click="loadData()">点我</button>
    </div>
    
    
</template>
<script>
import axios from "axios";
import * as echarts from "echarts";
import { pws } from "../apis";
import { wd } from "../apis";
import { tpt } from "../apis";
import { ps } from "../apis";
import { pp } from "../apis";
import { aws } from "../apis";
import { rp } from "../apis";
// axios.defaults.baseURL = '/api';
export default{
    name:'app',
    data() {
        return {
            myChart : null,
            option: {
            // 这里面的设置除非是被更改，不然就一直继承在echarts实例上
            title: {},
            legend: {},
            tooltip: {
            // 提示框组件
            trigger: "item",
            // 坐标轴触发
            axisPointer: {
                // 十字准星指示器
                type: "cross",
                label: {
                // 坐标轴指示器的
                backgroundColor: "#000",
                // 背景颜色
                },
            },
            },
            xAxis: {
                type: "category",
                data: ['1', '2', '3', '4', '5', '6']
                // 横坐标
            },
            yAxis: {
                type: "value",
                name: "增长率",
            },
            series: [
            {
                name: "累计收益率",
                type: "line",
                data: ['1','2','3'],
            },
            ],
            },
        };
    },
    mounted(){
        this.showCharts();
        this.loadData();
    },
    methods:{
        showCharts(){
        this.myChart = echarts.init(document.querySelector("#showData"));
        this.myChart.setOption(this.option);
        },
        async loadData(){
            const {data : res1} = await pws();
            console.log(res1);
        }
        
    },
}

</script>
<style scoped>
#showData{
    width: 500px;
    height: 300px;
    background-color: aqua;
}
</style>