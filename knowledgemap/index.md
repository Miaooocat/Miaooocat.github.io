# Knowledge Chart

<html>
<head>
    <meta charset="utf-8">
    <title>Table of Content</title>
    <!-- 引入 echarts.js -->
    <script src="https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js"></script>
</head>

<body>
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
 <div id="main" style="width: 100%;height:800px;"></div>
 <script type="text/javascript">
     // 基于准备好的dom，初始化echarts实例
     var myChart = echarts.init(document.getElementById('main'));
     var colors = ['#FF7853', '#FFAE57', '#EA5151', '#CC3F57', '#9A2555'];
     var data = [
         {
             name: 'Knowledge',
             itemStyle: {
             },
             children: [{
                 name: 'Humanity',
                 value: 0,
                 itemStyle: {
                     color: colors[0]
                 }
             }, {
                 name: 'Science',
                 itemStyle: {
                     color: colors[1]
                 },
                 children: [{
                     name: 'Computer',
                     itemStyle: {
                         color: colors[2]
                     },
                     children: [{
                         name: 'Language',
                         itemStyle: {
                             color: colors[3]
                         },
                         children: [{
                             name: 'Java',
                             value: 1,
                             itemStyle: {
                                 color: colors[4]
                             }
                         },
                         {
                             name: 'JavaScript',
                             value: 1,
                             itemStyle: {
                                 color: colors[4]
                             }
                         }
                        ]

                     },
                     {
                         name: 'Framework',
                         itemStyle: {
                             color: colors[0]
                         },
                         children: [{
                             name: 'Spring',
                             value: 1,
                             itemStyle: {
                                 color: colors[1]
                             }
                         }]
                     }]
                 }]
             }]
         }, {
             name: 'Wisdom',
             itemStyle: {
                 color: colors[4]
             },
             children: [{
                 name: 'Internal',
                 itemStyle: {
                     color: colors[0]
                 }
             },
             {
                 name: 'External',
                 itemStyle: {
                     color: colors[3]
                 }
             }]
         }];

		 option = {
         series: {
             type: 'sunburst',
             highlightPolicy: 'ancestor',
             data: data,
             radius: [0, '95%'],
             sort: null,
             levels: [{}, {
                 r0: '10%',
                 r: '25%',
                 itemStyle: {
                     borderWidth: 2
                 },
                 label: {
                     rotate: 'rotation'
                 }
             }, {
                 r0: '25%',
                 r: '45%',
                 label: {
                     align: 'center'
                 }
             }, {
                 r0: '45%',
                 r: '65%',
                 label: {
                     position: 'inside',
                     padding: 3,
                     silent: false
                 },
                 itemStyle: {
                     borderWidth: 3
                 }
             }, {
                 r0: '65%',
                 r: '80%',
                 label: {
                     position: 'inside',
                     padding: 4,
                     silent: false
                 },
                 itemStyle: {
                     borderWidth: 3
                 }
             }, {
                 r0: '80%',
                 r: '82%',
                 label: {
                     position: 'outside',
                     padding: 4,
                     silent: false
                 },
                 itemStyle: {
                     borderWidth: 3
                 }
             }]
         }
     };
     // 使用刚指定的配置项和数据显示图表。
     myChart.setOption(option);
     myChart.on('click', function (param){
                 var name=param.name;
                 if(name=="Java"){
                     window.location.href="{{<  ref "categories/java/">}}";
                 }
                 else if (name == "JavaScript"){
                    window.location.href="{{<  ref "categories/Javascript/">}}";
                 }
                 else if (name == "Spring"){
                    window.location.href="{{<  ref "categories/spring/">}}";
                 }

             });
 </script>

</body>

</html>
