import React, { Component } from 'react';
import {
    Pagination, PaginationItem, PaginationLink, Row, Col, Label, Input,
    Card, CardBody, Table,
} from 'reactstrap';
import '../../../public/CustomStyles.css';
import { PieChart } from "react-d3-components";

var data = {
        label: 'somethingA',
        values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
};
 
var sort = null; 


class PieChart1 extends Component {

    constructor() {
        super();
    }

    
   


    render() {
      
var svg = d3.select("#piechart")
.append("svg")
.append("g")

svg.append("g")
.attr("class", "slices");
svg.append("g")
.attr("class", "labels");
svg.append("g")
.attr("class", "lines");

var width = 360,
height = 250,
radius = Math.min(width,height) / 2;

var pie = d3.layout.pie()
.sort(null)
.value(function(d) {
    return d.value;
});

var arc = d3.svg.arc()
.outerRadius(radius * 1.0)
.innerRadius(radius * 0.4);

var outerArc = d3.svg.arc()
.innerRadius(radius * 0.5)
.outerRadius(radius * 1);

svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var key = function(d){ return d.data.label; };

var color = d3.scale.category20()
.domain(["Assigned", "Complete", "Overdue", "Terminated", "Awaiting Review", "Attached"])
.range(["#1abc9c", "#27ae60", "#e74c3c", "#f1c40f", "#34495e", "#3498db", "#8e44ad"]);

function randomData (){
var labels = color.domain();
return labels.map(function(label){
    return { label: label, value: Math.random() }
}).filter(function() {
    return Math.random() > .5;
}).sort(function(a,b) {
    return d3.ascending(a.label, b.label);
});
}

// change(randomData());

// d3.select(".randomize")
// .on("click", function(){
//     change(randomData());
// });

function mergeWithFirstEqualZero(first, second){
var secondSet = d3.set(); second.forEach(function(d) { secondSet.add(d.label); });

var onlyFirst = first
    .filter(function(d){ return !secondSet.has(d.label) })
    .map(function(d) { return {label: d.label, value: 0}; });
return d3.merge([ second, onlyFirst ])
    .sort(function(a,b) {
        return d3.ascending(a.label, b.label);
    });
}

function change(data) {

var data0 = svg.select(".slices").selectAll("path.slice")
    .data().map(function(d) { return d.data });
if (data0.length == 0) data0 = data;
var was = mergeWithFirstEqualZero(data, data0);
var is = mergeWithFirstEqualZero(data0, data);

/* ------- SLICE ARCS -------*/

var slice = svg.select(".slices").selectAll("path.slice")
    .data(pie(was), key);

slice.enter()
    .insert("path")
    .attr("class", "slice")
    .style("fill", function(d) { return color(d.data.label); })
    .each(function(d) {
        this._current = d;
    });

slice = svg.select(".slices").selectAll("path.slice")
    .data(pie(is), key);

slice		
    .transition()
    .attrTween("d", function(d) {
        var interpolate = d3.interpolate(this._current, d);
        var _this = this;
        return function(t) {
            _this._current = interpolate(t);
            return arc(_this._current);
        };
    });

slice = svg.select(".slices").selectAll("path.slice")
    .data(pie(data), key);

slice
    .exit().transition()
    .remove();

/* ------- TEXT LABELS -------*/

var text = svg.select(".labels").selectAll("text")
    .data(pie(was), key);

text.enter()
    .append("text")
    .attr("dy", ".35em")
    .style("opacity", 0)
    .text(function(d) {
        return d.data.label;
    })
    .each(function(d) {
        this._current = d;
    });

function midAngle(d){
    return d.startAngle + (d.endAngle - d.startAngle)/2;
}

text = svg.select(".labels").selectAll("text")
    .data(pie(is), key);

text.transition()
    .style("opacity", function(d) {
        return d.data.value == 0 ? 0 : 1;
    })
    .attrTween("transform", function(d) {
        var interpolate = d3.interpolate(this._current, d);
        var _this = this;
        return function(t) {
            var d2 = interpolate(t);
            _this._current = d2;
            var pos = outerArc.centroid(d2);
            pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
            return "translate("+ pos +")";
        };
    })
    .styleTween("text-anchor", function(d){
        var interpolate = d3.interpolate(this._current, d);
        return function(t) {
            var d2 = interpolate(t);
            return midAngle(d2) < Math.PI ? "start":"end";
        };
    });

text = svg.select(".labels").selectAll("text")
    .data(pie(data), key);

text
    .exit().transition()
    .remove();

/* ------- SLICE TO TEXT POLYLINES -------*/

var polyline = svg.select(".lines").selectAll("polyline")
    .data(pie(was), key);

polyline.enter()
    .append("polyline")
    .style("opacity", 0)
    .each(function(d) {
        this._current = d;
    });

polyline = svg.select(".lines").selectAll("polyline")
    .data(pie(is), key);

polyline.transition()
    .style("opacity", function(d) {
        return d.data.value == 0 ? 0 : 1;
    })
    .attrTween("points", function(d){
        this._current = this._current;
        var interpolate = d3.interpolate(this._current, d);
        var _this = this;
        return function(t) {
            var d2 = interpolate(t);
            _this._current = d2;
            var pos = outerArc.centroid(d2);
            pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
            return [arc.centroid(d2), outerArc.centroid(d2), pos];
        };			
    });

polyline = svg.select(".lines").selectAll("polyline")
    .data(pie(data), key);

polyline
    .exit().transition()
    .remove();
};

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
            <p id="piechart"></p>  
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




export default   PieChart1;




