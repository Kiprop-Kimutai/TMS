import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  lineChartOptions:any;
  columnChartOptions:any;
  pieChartOptions:any;
  barChartOptions:any;
  constructor() {
    this.drawLineChart();
    this.createColumnChart();
    this.createPieChart();
    this.createBarChart();
   }
  /********************************************************************* */
 /* showBarChart_gt_sm:boolean;
  showBarChart_xs:boolean;
  height:number = 15;
  public lineChartData:Array<any> = [
    {data: [1.1, 1.2, 1.25, 2.00, 2.50, 2.50, 2.50], label: 'SARAL INFO'},
    {data: [1.10, 1.10, 1.20, 1.25, 1.25, 2.00, 2.10], label: 'NEWPOS 9220'}
  ];
  public lineChartLabels:Array<any> = ['1.0.0', '1.1.0', '1.2.0', '1.3.0', '1.3.1', '1.3.2', '1.3.4'];
  public lineChartOptions:any = {
   responsive: true
 };
 public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
public lineChartType:string = 'line';

//pie chart
public pieChartLabels:string[] = ['SARAL INFO', 'NEWPOS 9220'];
public pieChartData:number[] = [30, 500];
public pieChartType:string = 'pie';

//bar-line chart
public lineChartBarData:Array<any> = [
    {data:[5, 5, 15, 10, 10, 5, 10],label:'SARAL INFO'},
    {data:[0, 2, 2, 2, 5, 27, 40],label:'NEWPOS 9220'}
  ];
  public lineChartBarLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartBarType:string = 'line';
  chartClicked(e:any){
    console.log(e);
    this.lineChartBarType = this.lineChartBarType === 'line' ? 'bar' :'line';
  }
  chartHovered(e:any){
    console.log(e);
  }
  getScreenSize():number{
    console.log("**");
    console.log(window.innerWidth);
    return window.innerWidth;
  }
  evaluateChartsToRender(x:number):void{
    console.log("checking init..");
    let toggleScreen:number = x<400 ? 0:1
    switch(toggleScreen){
      case (0):
        this.showBarChart_xs = true;
        this.showBarChart_gt_sm = false;
        break;
      case (1):
        this.showBarChart_xs = false;
        this.showBarChart_gt_sm = true;
    }
  }*/

  /*********************************************************************************************** */
  drawLineChart(){
  this.lineChartOptions = {
    title: {
      text: 'Value of Transactions by status, 2018'
  },

  subtitle: {
      text: ''
  },

  yAxis: {
      title: {
          text: 'Value of Transactions'
      }
  },
  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
  },

  plotOptions: {
      series: {
          label: {
              connectorAllowed: false
          },
          pointStart: 1
      }
  },
  series: [{
      name: 'successful',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175,57177,52503,45673,37685]
  }, {
      name: 'pending',
      data: [1345, 2356, 7846, 2831, 2392, 1267, 7421, 1243,8745,7156,7765,9178]
  }, {
      name: 'failed',
      data: [1567, 4321, 683, 1245, 3124, 2145, 1671, 2371,4321,2143,1672,9367]
  }, {
      name: 'duplicate',
      data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227,21876,2371,16793,18946]
  }, {
      name: 'initialized',
      data: [25671, 32712, 34561, 14321, 21345, 19674, 21785, 18111,22674,21674,20754,22456]
  }],

  responsive: {
      rules: [{
          condition: {
              maxWidth: 60
          },
          chartOptions: {
              legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'bottom'
              }
          }
      }]
  }
  }
}

createColumnChart(){
  this.columnChartOptions = {
    chart: {
      type: 'column'
  },
  title: {
      text: 'Monthly Value of transactions by type'
  },
  subtitle: {
      text: ''
  },
  xAxis: {
      categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
      ],
      crosshair: true
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Amnt ($)'
      }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series: [{
      name: 'ValueTxnAmnt',
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

  }, {
      name: 'VoidedValueTxnAmnt',
      data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

  }, {
      name: 'CommodityTxnAmnt',
      data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

  }, {
      name: 'voidedCommodityTxnAmt',
      data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

  }]
  }
}

  createPieChart(){
    this.pieChartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Transactions status'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: false
        }
    },
    series: [{
        name: 'status',
        colorByPoint: true,
        data: [{
            name: 'successful',
            y: 70,
            sliced: true,
            selected: true
        }, {
            name: 'Pending',
            y: 10
        }, {
            name: 'Initialized',
            y: 10
        }, {
            name: 'Duplicate',
            y: 5
        }, {
            name: 'Pending',
            y: 5
        }]
    }]
    }
  }
  createBarChart(){
    this.barChartOptions = {
      chart: {
        type: 'bar'
    },
    title: {
        text: 'Batch Transaction Count by status '
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['2016', '2017', '2018', '2019'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        bar: {
            dataLabels: {
                /*enabled: true*/
                enabled:false
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'duplicate',
        data: [207, 198,173,163]
    }, {
        name: 'pending',
        data: [133, 156, 321, 408]
    }, {
        name: 'failed',
        data: [105, 44, 12, 3]
    }, {
        name: 'successful',
        data: [1216, 1001, 4436, 738]
    }]
    }
  }
  ngOnInit() {
      //this.evaluateChartsToRender(this.getScreenSize());
  }

}
