import React, { Component } from 'react';
import {
    Pagination, PaginationItem, PaginationLink, Row, Col, Label, Input,
    Card, CardBody, Table,
} from 'reactstrap';
import '../../../public/CustomStyles.css';

// import * as d3 from 'd3';
import { PieChart ,LineChart } from "react-d3-components";
 
var data = [
    {
        label: 'somethingA',
        values: [{x: 0, y: 2}, {x: 1.3, y: 5}, {x: 3, y: 6}, {x: 3.5, y: 6.5}, {x: 4, y: 6}, {x: 4.5, y: 6}, {x: 5, y: 7}, {x: 5.5, y: 8}]
    }
   
   
];


class LineChartComponent extends Component {

    constructor() {
        super();
    }
    render() {
        var tooltipLine = function(x, y) {
            return "x: " + x + " y: " + y;
        };
    
        // const color = d3.scaleOrdinal(d3.schemeCategory10);
        return (   
            
           <div> 
               <div style={{display:"flex",marginTop:"5%"}}>
                    <label  style={{marginTop:"1%",marginLeft:"1%",padding:0,fontSize:15}}
                     class="labelStyleForMTHeadings">Income Vs. Expense </label> 
                    <Input type="select" style={{padding:0,width:"30%",marginRight:"2%"}} >
                            <option>2017</option>
                    </Input>
                    <Input type="select" style={{padding:0,width:"45%",marginRight:"1%"}}>
                        <option>Month</option>
                    </Input>
                </div>
                <div>
                    <LineChart
                            tooltipHtml={tooltipLine}
                            // colorScale={color}
                            data={data}
                            width={300}
                            height={300}
                            margin={{top: 30, bottom: 50, left: 60, right: 10}}
                            />
                </div>
                <div >
                    <div style={{ display:"flex",justifyContent:"flex-end"}}>
                        <div style={{width:10,height:10,background:"rgb(255, 127, 14)",marginTop:6}}></div>
                        <Label style={{marginLeft:"1%",marginRight:"3%"}}>Income</Label>
                        <div style={{width:10,height:10,background:"rgb(31, 119, 180",marginTop:6}}></div>
                        <Label style={{marginLeft:"1%",marginRight:"3%"}}>Expense</Label>    
                    </div>
                </div>

            </div>
       
        )
    }
}




export default   LineChartComponent;




