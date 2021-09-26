/*
 * @Author: 徐军
 * @Date: 2021-06-21 14:47:32
 * @Last Modified by: 徐军
 * @Last Modified time: 2021-06-21 14:47:57
 * 立体饼状图
 */

'use strict';
import React, { useEffect } from 'react';
import highcharts from 'highcharts/highstock';
import highCharts3D from 'highcharts/highcharts-3d';
import cylinder from 'highcharts/modules/cylinder';
import funnel3d from 'highcharts/modules/funnel3d';
import { PieDimConfig } from './chartConfig'; // 配置

// 柱形图ID和索引值
const [charId, index] = ['pieDim', 1];
highCharts3D(highcharts);
cylinder(highcharts);
funnel3d(highcharts);
const PieCustom = props => {
  const { data = [], width, piecolor } = props;
  useEffect(() => {
    PieDimConfig.series = [{ data }];
    if (width) {
      PieDimConfig.plotOptions.pie.size = width;
    }
    if (piecolor) {
      PieDimConfig.plotOptions.pie.colors = piecolor;
    }
    highcharts.chart(document.getElementById(`${charId}${index}`), PieDimConfig);
  }, [data]);
  return (
    <div
      id={`${charId}${index}`}
      style={{ width: '100%', height: '100%' }}
      className={'animate__animated animate__fadeInRight'}
    />
  );
};
export default PieCustom;
