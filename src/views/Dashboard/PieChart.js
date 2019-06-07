import React, { Component } from 'react';
import {
    Pagination, PaginationItem, PaginationLink, Row, Col, Label, Input,
    Card, CardBody, Table,
} from 'reactstrap';
import '../../../public/CustomStyles.css';
// import * as d3 from 'd3';
import { PieChart } from "react-d3-components";

var data = {
        label: 'somethingA',
        values: [{x: '66%', y: 6.6}, {x: '20%', y: 2},{x: '14%', y: 1.4}]
};
 
var sort = null; 


class PieChartComponent extends Component {

    constructor() {
        super();
    }

    render() {    
        
       
        return (  
            <div>
                <div style={{display:"flex",marginTop:"5%"}}>
                    <label  style={{marginTop:"1%",marginLeft:"1%",padding:0,fontSize:15}}
                     class="labelStyleForMTHeadings">Retailers and Distributors </label> 
                    <Input type="select" style={{padding:0,width:"30%",marginRight:"2%"}} >
                            <option>2017</option>
                    </Input>
                    <Input type="select" style={{padding:0,width:"45%",marginRight:"1%"}}>
                        <option>Month</option>
                    </Input>
                </div>
                <div style={{height:270}}>
                    <PieChart
                        data={data}
                        width={400}
                        height={300}
                        margin={{top: 10, bottom: 0, left: 60, right: 100}}
                        sort={sort}
                        />
                </div>

                <div >
                    <div style={{ display:"flex",justifyContent:"flex-end"}}>
                        <div style={{width:10,height:10,background:"rgb(174, 199, 232)",marginTop:6}}></div>
                        <Label style={{marginLeft:"1%",marginRight:28}}>Retailers</Label>
                    </div>
                    
                    <div style={{ display:"flex",justifyContent:"flex-end"}}>
                        <div style={{width:10,height:10,background:"rgb(31, 119, 180)",marginTop:6}}></div>
                        <Label style={{marginLeft:"1%",marginRight:8}}>Distributors</Label>
                    </div> 
                </div>
            </div>
        )
    }
}




export default   PieChartComponent;




