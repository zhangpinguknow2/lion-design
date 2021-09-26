/*
 * @Author: your name
 * @Date: 2021-01-11 10:52:45
 * @LastEditTime: 2021-01-13 20:42:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fgisvisualization/src/component/chart/pie/pieRing.js
 */
'use strict';
/**
 * Created by fanweihua on 2020/09/24.
 * 立体饼状图
 */
import React, { useEffect } from 'react';
import highcharts from 'highcharts/highstock';
import highCharts3D from 'highcharts/highcharts-3d';
import cylinder from 'highcharts/modules/cylinder';
import funnel3d from 'highcharts/modules/funnel3d';
import { PieRingConfig } from './chartConfig'; // 配置

// 柱形图ID和索引值
const [charId, index] = ['pieRing', 1];
highCharts3D(highcharts);
cylinder(highcharts);
funnel3d(highcharts);
const PieCustom = props => {
  const { data = [], width, piecolor } = props;
  useEffect(() => {
    PieRingConfig.series = [{ data }];
    if (width) {
      PieRingConfig.plotOptions.pie.size = width * 0.52;
    }
    if (piecolor) {
      PieRingConfig.plotOptions.pie.colors = piecolor;
    }
    highcharts.chart(document.getElementById(`${charId}${index}`), PieRingConfig);
  }, [data, width, piecolor]);
  return (
    <div
      id={`${charId}${index}`}
      style={{ width: '100%', height: '100%' }}
      className={'animate__animated animate__fadeInRight'}
    />
  );
};
export default PieCustom;
