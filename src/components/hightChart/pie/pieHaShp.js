'use strict';
/**
 * Created by fanweihua on 2020/09/24.
 * 半形状饼状图
 */
import React, { useEffect } from 'react';
import highcharts from 'highcharts/highstock';
import highCharts3D from 'highcharts/highcharts-3d';
import cylinder from 'highcharts/modules/cylinder';
import funnel3d from 'highcharts/modules/funnel3d';
import { HaShpPieConfig } from './chartConfig'; // 配置

// 柱形图ID和索引值
const [charId, index] = ['pieHaShp', 1];
highCharts3D(highcharts);
cylinder(highcharts);
funnel3d(highcharts);
const PieCustom = props => {
  const { data = [], xCategories = [] } = props;
  useEffect(() => {
    HaShpPieConfig.series = [{ data }];
    highcharts.chart(document.getElementById(`${charId}${index}`), HaShpPieConfig);
  }, [data, xCategories]);
  return (
    <div
      id={`${charId}${index}`}
      style={{ width: '100%', height: '100%' }}
      className={'animate__animated animate__fadeInRight'}
    />
  );
};
export default PieCustom;
