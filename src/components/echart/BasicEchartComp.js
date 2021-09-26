/*
 * @Author: 徐军
 * @Date: 2021-06-24 15:22:34
 * @Last Modified by: 徐军
 * @Last Modified time: 2021-06-24 17:00:52
 * @string id echarts的id
 * @object data 数据源
 * @object style 画布样式（宽/高...）
 * @string title 标题
 * echart基础组件
 */

import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function BasicEchartComp(props) {
  const { id, style } = props;
  const myChart = useRef(null);
  useEffect(() => {
    getEchartData();
  }, [props.options]);
  const getEchartData = () => {
    if (!props.id) {
      console.error('请传入图表id');
      return;
    }
    myChart.current = echarts.init(document.getElementById(props.id));
    if (props?.getCharts) {
      props?.getCharts(myChart.current);
    }
    // 绘制图表
    if (props.options) {
      myChart.current.setOption(props.options);
    }

    // 根据浏览器窗口更改图表
    window.removeEventListener('resize', resize);
    window.addEventListener('resize', resize);

    if (props.chartType) {
      myChart.current.off('click');
    } else {
      myChart.current.off('click');
    }
  };
  // 重绘可视化图表
  const resize = () => {
    myChart.current && myChart.current.resize();
  };
  return <div id={id} style={style || { width: '400px', height: '400px' }} />;
}
