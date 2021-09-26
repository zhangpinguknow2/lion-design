'use strict';
/**
 * Created by fanweihua on 2020/09/24.
 * 饼状图配置
 */
/**
 * 半形状饼状图
 */
export const HaShpPieConfig = {
  chart: {
    type: 'pie',
    options3d: { enabled: true, alpha: 0, beta: 10 },
    backgroundColor: 'transparent',
    marginBottom: -75
  },
  tooltip: {
    style: { fontSize: 14.19 },
    headerFormat: '<span style="font-size: 14.19px">{point.key}：</span>',
    pointFormat: '<b>{point.y}</b>'
  },
  credits: { enabled: false },
  legend: {
    enabeld: true,
    align: 'right',
    layout: 'vertical',
    verticalAlign: 'middle',
    itemMarginTop: 6.622,
    itemMarginBottom: 6.622,
    maxHeight: '100%',
    y: -85,
    width: '30%',
    itemStyle: { color: '#fff', fontSize: 13.244 },
    itemHoverStyle: { color: '#ddd' }
  },
  title: { text: '' },
  plotOptions: {
    pie: {
      innerSize: 66.22,
      depth: 75.68,
      size: 141.9,
      startAngle: -90,
      endAngle: 90,
      showInLegend: true,
      dataLabels: {
        enabled: true,
        color: '#fff',
        style: { fontSize: 13.244 },
        connectorColor: '#fff',
        format: '{point.y}分',
        distance: 15,
        connectorPadding: 0
      },
      colors: [
        {
          linearGradient: { x1: 0, y1: 1, x2: 0, y2: 0 },
          stops: [
            [0, 'rgba(25, 247, 255, 1)'],
            [1, 'rgba(47, 106, 255, 1)']
          ]
        },
        {
          linearGradient: { x1: 0, y1: 1, x2: 0, y2: 0 },
          stops: [
            [0, 'rgba(26, 174, 110, 1)'],
            [1, 'rgba(0, 255, 228, 1)']
          ]
        },
        {
          linearGradient: { x1: 0, y1: 1, x2: 0, y2: 0 },
          stops: [
            [0, 'rgba(111, 176, 42, 1)'],
            [1, 'rgba(234, 255, 161, 1)']
          ]
        },
        {
          linearGradient: { x1: 0, y1: 1, x2: 0, y2: 0 },
          stops: [
            [0, 'rgba(120, 0, 255, 1)'],
            [1, 'rgba(222, 134, 255, 1)']
          ]
        },
        {
          linearGradient: { x1: 0, y1: 1, x2: 0, y2: 0 },
          stops: [
            [0, 'rgba(54, 0, 255, 1)'],
            [1, 'rgba(123, 117, 255, 1)']
          ]
        },
        {
          linearGradient: { x1: 0, y1: 1, x2: 0, y2: 0 },
          stops: [
            [0, 'rgba(201, 133, 16, 1)'],
            [1, 'rgba(252, 203, 117, 1)']
          ]
        }
      ]
    }
  },
  series: [
    {
      name: '政治面貌',
      data: [
        { name: '党员', y: 450 },
        { name: '预备党员', y: 387 },
        { name: '入学积极分子', y: 120 },
        { name: '团员', y: 29 },
        { name: '民主党派', y: 25 },
        { name: '其它', y: 13 }
      ]
    }
  ]
};
/**
 * 立体饼状图
 */
export const PieDimConfig = {
  chart: {
    type: 'pie',
    options3d: { enabled: true, alpha: 60 },
    backgroundColor: 'transparent',
    spacingBottom: 20
    // marginLeft: 170 // 饼图距左距离
  },
  tooltip: {
    style: { fontSize: 14.19 },
    headerFormat: '<span style="font-size: 14.19px">{point.key}：</span>',
    // pointFormat: '{series.name}: <b>{point.y}人</b>'
    pointFormat: '<b>{point.y}</b>'
  },
  credits: { enabled: false },
  legend: {
    enabled: false,
    align: 'right',
    layout: 'vertical',
    verticalAlign: 'top',
    itemMarginTop: 2,
    symbolRadius: 0, // 图标圆角
    itemMarginBottom: 4,
    maxHeight: '100%',
    icon: 'rect', //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
    y: 0,
    x: 50,
    width: 115.19999999999999,
    itemStyle: { color: '#fff', fontSize: 12.244 },
    itemHoverStyle: { color: '#ddd' }
  },
  title: { text: '' },
  plotOptions: {
    pie: {
      depth: 28.38,
      size: 134.332,
      showInLegend: true,
      dataLabels: {
        enabled: true,
        color: '#fff',
        style: { fontSize: 30 },
        connectorColor: '#fff',
        format: '{point.y}',
        distance: 2,
        connectorPadding: 0
      },
      colors: [
        {
          linearGradient: { x1: 0, y1: 1, x2: 0, y2: 0 },
          stops: [
            [0, 'rgba(196, 112, 255, 1)'],
            [1, 'rgba(189, 43, 228, 1)']
          ]
        },
        {
          linearGradient: { x1: 0, y1: 1, x2: 0, y2: 0 },
          stops: [
            [0, 'rgba(26, 148, 254, 1)'],
            [1, 'rgba(40, 50, 242, 1)']
          ]
        },
        {
          linearGradient: { x1: 0, y1: 1, x2: 0, y2: 0 },
          stops: [
            [0, 'rgba(9, 197, 162, 1)'],
            [1, 'rgba(7, 166, 131, 1)']
          ]
        },
        {
          linearGradient: { x1: 0, y1: 1, x2: 0, y2: 0 },
          stops: [
            [0, 'rgba(242, 222, 117, 1)'],
            [1, 'rgba(232, 181, 49, 1)']
          ]
        },
        {
          linearGradient: { x1: 0, y1: 1, x2: 0, y2: 0 },
          stops: [
            [0, 'rgba(226, 254, 162, 1)'],
            [1, 'rgba(224, 237, 91, 1)']
          ]
        },
        {
          linearGradient: { x1: 0, y1: 1, x2: 0, y2: 0 },
          stops: [
            [0, 'rgba(159, 52, 52, 1)'],
            [1, 'rgba(205, 152, 153, 1)']
          ]
        }
      ]
    }
  },
  series: [
    {
      name: '人员结构',
      data: [
        { name: '人民警察', y: 750 },
        { name: '警务辅助', y: 650 },
        { name: '机关工勤', y: 514 },
        { name: '公务员', y: 666 },
        { name: '事业单位', y: 845 },
        { name: '其他人员', y: 400 }
      ]
    }
  ]
};
/**
 * 环状饼状图
 */
export const PieRingConfig = {
  chart: { type: 'pie', options3d: { enabled: true, alpha: 66 }, backgroundColor: 'transparent', spacingBottom: 30 },
  tooltip: {
    style: { fontSize: '80px' },
    headerFormat: '<span style="font-size: 80px">{point.key}</span>：',
    pointFormat: '<b>{point.y}个</b>'
  },
  credits: { enabled: false },
  legend: {
    enabled: false,
    align: 'center',
    // layout: 'vertical',
    verticalAlign: 'middle',
    // itemMarginTop: 6.922,
    // itemMarginBottom: 6.622,
    maxHeight: '100%',
    y: -45,
    // width: 115.19999999999999,
    itemStyle: { color: '#fff', fontSize: '20px' },
    symbolRadius: 0,
    itemHoverStyle: { color: '#ddd' }
  },
  title: { text: '' },
  plotOptions: {
    pie: {
      innerSize: '50px',
      depth: 26.894,
      size: '70px',
      showInLegend: true,
      dataLabels: {
        enabled: true,
        color: '#fff',
        style: { fontSize: '12px' },
        connectorColor: '#fff',
        // format: '{point.name}{point.y}个',
        format: '{point.y}',
        distance: 1,
        connectorPadding: 0
      },
      colors: ['#2F52ED', '#5BB79A', '#E8CC54', '#8B50D1', '#ED8C99']
    }
  },
  series: [
    {
      name: '警种结构',
      data: [
        { name: '实战类', y: 845 },
        { name: '配侦类', y: 614 },
        { name: '综合类', y: 589 },
        { name: '其它', y: 300 }
      ]
    }
  ]
};
