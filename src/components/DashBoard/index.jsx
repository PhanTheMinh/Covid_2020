import React from 'react';
import axios from 'axios';
import { Redirect,NavLink } from 'react-router-dom'
import GoogleMapReact from 'google-map-react'
import MidleService from '../../Service/MidleEvent'
import moment from 'moment';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import CarItemSearch from '../common/car-item-search'
import BoxResult from '../common/box-result'
import Marker1 from './maker'
import Network from '../../Service/Network'
import { RotateSpinner } from "react-spinners-kit";
import PageLoading from "../libs/pageloader";
import './style.css';
import MapContainer from './mar'

import Highcharts from 'highcharts';

const api = new Network()
var arr_data = []



class DashBoard extends React.Component {
	_isMounted = false;
	constructor(props) {
		super(props);
		this.componentGetCase = this.componentGetCase.bind(this);
		
		this.state = {
			data_1: {
				cases: '',
				deaths: '',
				recovered: ''
			},
			data_2: {
				cases: '',
				deaths: '',
				recovered: ''
			},
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

		
	

	async componentGetCase() {
		try {
            const response = await api.get(`/api/case`);
            arr_data.push(Object.values(response.data.data))
            if (response.data) {
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                });
                this.setState({ data_1: arr_data[0][0], data_2: arr_data[0][1], loading: false });
                
            }
        } catch (e) {
            console.log("Error ====> ", e);
        }
	}

	componentDidMount() {
        this.componentGetCase();
		this.highChartsRender();
    }




	render()  {
		const data_1 = this.state.data_1
		const data_2 = this.state.data_2
	
		 
		return (
				<div className="container-map" style={{}}>
					<PageLoading show={false} />
						<div className="row maps-cotx">



							<div className={'col-md-4 offset-md-1 col-sm-12 map-view-search maphide'} style={{ marginTop: '10px' }}>
								<div className={"maps-container"} style={{ height: '700px', width: '100%' }}>
									
									  <MapContainer />
				                      
			                    </div>
							</div>

							<div className="col-md-7" style={{display:'block'}}>

								<div className="row car-list-search" style={{ marginTop: '50px' }}> 
									<div className="col-md-12" >
										<div className="box-tke">
											  <div className="row fivecolumns">
												  <div className="col-md-2 col-sm-2 col-xs-12 mb-20"><span className="box-vn">Việt Nam</span></div>
												  
												  <div className="col-md-2 col-sm-2 col-xs-6 text-center text-uppercase text-danger-new mb-20">Số ca nhiễm  <span className="font24">{data_2.cases}</span></div>
												  <div className="col-md-2 col-sm-2 col-xs-6 text-center text-uppercase text-warning1 mb-20">Đang điều trị  <span className="font24">{data_2.cases - data_2.recovered - data_2.deaths}</span></div>
												  <div className="col-md-2 col-sm-2 col-xs-6 text-center text-uppercase text-primary mb-20">Đã chữa khỏi  <span className="font24">{data_2.recovered}</span></div>
												  <div className="col-md-2 col-sm-2 col-xs-6 text-center text-uppercase text-danger-new1 mb-20">Tử vong  <span className="font24">{data_2.deaths}</span></div>
											  </div>
											  		
											  <div className="row fivecolumns">
												  <div className="col-md-2 col-sm-2 col-xs-12 mb-20"><span className="box-tg">Thế giới</span></div>
												  
												  <div className="col-md-2 col-sm-2 col-xs-6 text-center text-uppercase text-danger-new mb-20">Tổng ca nhiễm  <span className="font24">{data_1.cases}</span></div>
												  <div className="col-md-2 col-sm-2 col-xs-6 text-center text-uppercase text-warning1 mb-20">Đang nhiễm  <span className="font24">{data_1.cases - data_1.recovered - data_1.deaths}</span></div>
												  <div className="col-md-2 col-sm-2 col-xs-6 text-center text-uppercase text-primary mb-20">Đã chữa khỏi  <span className="font24">{data_1.recovered}</span></div>
												  <div className="col-md-2 col-sm-2 col-xs-6 text-center text-uppercase text-danger-new1 mb-20">Tử vong  <span className="font24">{data_1.deaths}</span></div>
											  	
											  </div>
										</div>
									</div>
								
							   </div>

							    

							   <div id="atmospheric-composition">
								
  							   
  							   </div>
								 <div id="truongson"></div>
								 <div id="truongson2"></div>
								 <div id="truongson3"></div>


								
							</div>





						</div>
				</div>
			);
	}
}
export default DashBoard;




