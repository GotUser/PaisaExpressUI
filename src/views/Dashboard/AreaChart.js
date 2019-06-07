import React, { Component } from 'react';
import {
    Pagination, PaginationItem, PaginationLink, Row, Col, Label, Input,
    Card, CardBody, Table,
} from 'reactstrap';
// import '../../../public/CustomStyles.css';

import  {AreaChart }  from "react-d3-components";
 
var data = [
        {
            label: 'somethingA',
            values: [{x: 0, y: 0}, {x: 1.3, y: 5}, {x: 3, y: 6}, {x: 3.5, y: 6.5}, {x: 4, y: 6}, {x: 4.5, y: 6}, {x: 5, y: 7}, {x: 5.5, y: 8}]
        },
        {
            label: 'somethingB',
            values: [{x: 0, y: 0}, {x: 1.3, y: 4}, {x: 3, y: 7}, {x: 3.5, y: 8}, {x: 4, y: 7}, {x: 4.5, y: 7}, {x: 5, y: 7.8}, {x: 5.5, y: 9}]
         },
         {
            label: 'somethingc',
            values: [{x: 0, y: 1}, {x: 1.3, y: 8}, {x: 3, y: 1}, {x: 3.5, y: 8}, {x: 4, y: 1}, {x: 4.5, y: 8}, {x: 5, y: 1}, {x: 5.5, y: 8}]
         }
];


class AreaChartComponent extends Component {

    constructor() {
        super();
    }
    render() {
        var tooltipArea = function(x, y) {
            return "x: " + x + " y: " + y;
        };
      
        return (   
            <div>
                <div style={{display:"flex",marginTop:"5%"}}>
                    <label  style={{marginTop:"1%",marginLeft:"1%",padding:0,fontSize:15}}
                     class="labelStyleForMTHeadings">DMT Performance </label> 
                    <Input type="select" style={{padding:0,width:"30%",marginRight:"2%"}} >
                            <option>2017</option>
                    </Input>
                    <Input type="select" style={{padding:0,width:"45%",marginRight:"1%"}}>
                        <option>Month</option>
                    </Input>
                </div>
                <div>
                        <AreaChart
                            tooltipHtml={tooltipArea}
                            data={data}
                            width={300}
                            height={300}
                            // yOrientation='right' // if you do not provide right default left orientation for yAxis will be used
                            margin={{top: 30, bottom: 30, left: 80, right: 10}}
                            />
                </div>
                <div >
                    <div style={{ display:"flex",justifyContent:"flex-end"}}>
                        <div style={{width:10,height:10,background:"rgb(255, 127, 14)",marginTop:6}}></div>
                        <Label style={{marginLeft:"1%",marginRight:"3%"}}>2018</Label>
                        <div style={{width:10,height:10,background:"rgb(31, 119, 180",marginTop:6}}></div>
                        <Label style={{marginLeft:"1%",marginRight:"3%"}}>2017</Label>
                        <div style={{width:10,height:10,background:"rgb(174, 199, 232)",marginTop:6}}></div>
                        <Label style={{marginLeft:"1%",marginRight:"3%"}}>2016</Label>
                    </div>
                </div>
                

            </div>
        
        )
    }
}




export default   AreaChartComponent;




