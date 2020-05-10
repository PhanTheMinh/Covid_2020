import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Network from '../../Service/Network'

import Highcharts from 'highcharts';

const api = new Network()

export default class highChartsRender extends Component {
	_isMounted = false;
	constructor(props) {
		super(props);
		this.componentGetCase = this.highChartsRender.bind(this);
		
		this.state = {
			loading: true,
			mai: [{
				name: 'son',
				data: [
				  1,2,3,4,5,6,7,8,9,10,11,12
				]
			  }],
			  mai1: [{
				name: 'son',
				data: [
				  1,2,3,4,5,6,7,8,9,10,11,12
				],
				
			  },
			{
				name:'son1',
				data : [11,21,31,41,51,61,71,81,91,101,111,121],
				
			}],
			series: [{
			  name: 'Gases',
		      data: [
		        {
		          name: 'Argon',
		          y: 0.9,
		          color: '#3498db'
		        },
		        {
		          name: 'Nitrogen',
		          y: 78.1,
		          color: '#9b59b6'
		        },
		        {
		          name: 'Oxygen',
		          y: 20.9,
		          color: '#2ecc71'
		        },
		        {
		          name: 'Trace Gases',
		          y: 0.1,
		          color: '#f1c40f'
		        }
		      ]
		    }]
			
		};

	}

    componentDidMount() {
        this.highChartsRender();
    }
    

highChartsRender() {
    Highcharts.chart({
        chart: {
          type: 'pie',
          renderTo: 'atmospheric-composition'
        },
        title: {
          verticalAlign: 'middle',
          floating: true,
          text: 'Earth\'s Atmospheric Composition',
          style: {
              fontSize: '10px',
          }
        },
        plotOptions: {
          pie: {
              dataLabels: {
                  format: '{point.name}: {point.percentage:.1f} %'
              },
            innerSize: '70%'
          }
        },
        series: this.state.series
      });
      Highcharts.chart({
        chart: {
          type: 'area',
          renderTo: 'truongson'
        },
        title: {
          verticalAlign: 'middle',
          floating: true,
          text: 'truongson',
          style: {
              fontSize: '10px',
          }
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], 
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        },
        yAxis: {
            title: {
                text: 'truongson'
            },
            labels: {
                formatter: function () {
                    return this.value  ;
                }
            }
        },
        plotOptions: {
            area: {
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 1,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        
        series: this.state.mai
      });
      Highcharts.chart({
        chart: {
          type: 'line',
          renderTo: 'truongson3'
        },
        title: {
          verticalAlign: 'middle',
          floating: true,
          text: 'truongson3',
          style: {
              fontSize: '10px',
          }
        },
        xAxis: {
            
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        },
        yAxis: {
            title: {
                text: 'truongson3'
            },
            labels: {
                formatter: function () {
                    return this.value  ;
                }
            }
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                }
            }
        },
        
        series: this.state.mai1
      });
      Highcharts.chart({
        chart: {
          type: 'bar',
          renderTo: 'truongson2'
        },
        title: {
          verticalAlign: 'middle',
          floating: true,
          text: 'truongson2',
          style: {
              fontSize: '10px',
          }
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    align: 'right',
                    color: '#FFFFFF',
                    x: -10
                },
                pointPadding: 0.1,
                groupPadding: 0
            }
        },
        
        series: this.state.mai
      });
    }


    render()  {
        return (
            <div className="row">
                <div className="col-md-6">
                                 <div id="atmospheric-composition"></div>
								 <div id="truongson"></div>
                </div>
                <div className="col-md-6">
								 <div id="truongson2"></div>
								 <div id="truongson3"></div>
                </div>
            </div>
        );
    }
}

