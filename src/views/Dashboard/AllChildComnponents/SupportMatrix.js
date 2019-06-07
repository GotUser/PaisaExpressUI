



import React, { Component } from 'react';
import {
    Pagination, PaginationItem, PaginationLink, Row, Col,Label,Input,Button,
    Card, CardBody, Table, ButtonGroup
} from 'reactstrap';

import { connect } from 'react-redux';
import '../../../../public/CustomStyles.css';
var moment = require('moment');
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ApproveLogo = require("../../../../public/img/Action_Approve.png");
const InTransitLogo = require("../../../../public/img/Action_InTransit.png");
const RejectLogo = require("../../../../public/img/Action_Reject.png");


class SupportMatrix extends Component {

    constructor() {
        super();
        // create dataSet of random length
        this.dataSet = [...Array(Math.ceil(10 + Math.random() * 10))].map(
            (a, i) =>    "record" + (i + 1)
        );
        this.pageSize = 5;
        this.pagesCount = Math.ceil(this.dataSet.length / this.pageSize);
        this.state = {
            currentPage: 0,
            dropdownOpen: false,
            startDate: moment(),
        };
        this.toggle = this.toggle.bind(this);
       
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

    //On click  assigns index of the clickedLink to currentPage
    handleClick(e, index) {
        console.log(this.pagesCount + "Index :" + index)
        e.preventDefault();
        this.setState({
            currentPage: index
        });
    }

    //Used to assign values to links 
    renderLinks(i) {
        const { currentPage } = this.state;      
        // return i <= currentPage + 2 ? i + 1 : '.';
        return i+1;
    }

    render() {

        const { currentPage, products } = this.state;
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="1"></Col>
                    <Col xs="12" md="12">
                        <Card>
                            <CardBody style={{paddingBottom:"6%"}}>
                                <React.Fragment>
                             
                                <Row style={{marginBottom:"1%"}}>
                            
                            <div   style={{width:"37%"}}>
                                <label  style={{fontSize:15}} class="labelStyleForMTHeadings">Support Matrix </label> 
                            </div>
                            <div style={{display:"flex",justifyContent:"flex-end",width:"63%"}}>
                                <Label style={{marginRight:"1%"}}>From  </Label>
                                <DatePicker
                                    className="form-control"  
                                    selected={moment()}
                                    onChange={this.SaveDOB}
                                    peekNextMonth
                                    showMonthDropdown
                                    showYearDropdown
                                    dropdownMode="select"
                                    maxDate={moment()}
                                    placeholderText="Pick the date "
                                />
                                 <Label style={{marginRight:"1%",marginLeft:"1%"}}>To  </Label>
                                <DatePicker
                                    className="form-control"
                                    selected={moment()}
                                    onChange={this.SaveDOB}
                                    peekNextMonth
                                    showMonthDropdown
                                    showYearDropdown
                                    dropdownMode="select"
                                    maxDate={moment()}
                                    placeholderText="Pick the date "
                                />
                            </div>

                           
                        </Row>

                              
                        <Row style={{marginBottom:"1%"}}>                                                   
                            <Col style={{}} > 
                                <Input type="search"
                                style={{borderRadius:20,fontSize:10,width:"25%",marginLeft:"75%"}}></Input>
                            </Col >  
                        </Row>

                              
                        
                        <Row > 
                                <div style={{width:"100%"}}>
                                    <Table style={{borderBottom:"1px solid lightgray",textAlign:"center"}}>
                                            <thead style={{fontSize:11}}>                                               
                                                <tr>
                                                    <th>Date</th>
                                                    <th>Raised</th>
                                                    <th>Resolved</th>
                                                    <th style={{paddingLeft:0}}>Total Pendings</th> 
                                                    <th style={{padding:0}}>
                                                        {<Col>
                                                            <div style={{borderBottom:"1px solid lightgray"}}>
                                                               <th style={{padding:0,border:0}}> <Label style={{marginLeft:"12%",width:"100%",marginBottom:0}}> Level-wise Pending </Label> </th>
                                                            </div>
                                                            <div style={{display:"flex"}}>
                                                                <div style={{padding:0,width:"35%"}}>
                                                                    <th  style={{padding:0,border:0}}>  <Label>Low</Label></th>
                                                                </div>
                                                                <div style={{padding:0,width:"40%"}}>
                                                                   <th  style={{padding:0,border:0}}>   <Label>Medium</Label></th>
                                                                </div>
                                                                <div style={{padding:0,width:"25%"}}>
                                                                    <th  style={{padding:0,border:0}}>  <Label>High</Label> </th>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        }
                                                    </th>
                                                                                               
                                                </tr>                                 
                                            </thead>
                                            <tbody style={{textAlign:"center"}}>
                                                { this.dataSet.slice(
                                                    currentPage * this.pageSize,
                                                    (currentPage + 1) * this.pageSize
                                                        )
                                                    .map((item, i) =>             
                                                            { return (  
                                                                    <tr key={item}>
                                                                        <td>{item}</td>
                                                                        <td>{item}</td>
                                                                        <td>{item}</td>
                                                                        <td>{item}</td>                                                                
                                                                        <td>

                                                                            {<Col style={{padding:0}}>
                                                                               
                                                                                <div style={{display:"flex"}}>
                                                                                    <div style={{padding:0,width:"40%"}}>
                                                                                        <td  style={{border:0,padding:0}} > {item} </td> 
                                                                                    </div>

                                                                                    <div style={{padding:0,width:"35%"}}>
                                                                                      <td   style={{border:0,padding:0}}> {item} </td>  
                                                                                    </div>

                                                                                    <div style={{padding:0,width:"25%"}}>
                                                                                      <td   style={{border:0,padding:0}}> {item} </td> 
                                                                                    </div>
                                                                                   
                                                                                </div>
                                                                            </Col>
                                                                            }
                                                                        </td>
                                                                    </tr>              
                                                            )}
                                                    )}
                                            </tbody>
                                        </Table>
                                     </div>
                                    </Row>
                                    <Row >
                                        <div  style={{width:"12%"}}>
                                            <Input style={{ width: '100%' }}
                                                onClick={(txt) => {
                                                    this.pageSize = txt.target.value
                                                    this.setState({ value: !this.state.value })
                                                }}
                                                type="select">
                                                <option value="5">5</option>
                                                <option value="10">10</option>
                                                <option value="20">20</option>
                                            </Input>
                                            
                                        </div>

                                        <div style={{paddingTop:5,width:"12%"}}>
                                            <Label >Per page</Label>
                                        </div>
                                      
                                        <div  style={{width:"72%",marginLeft:13}} >
                                            
                                            <span style={{ color: 'black', marginTop: 6,  }}>
                                                Showing results  {(currentPage * this.pageSize) + 1} - {currentPage * this.pageSize + this.pageSize} of {this.pageSize * this.pagesCount}
                                            </span>

                                            <div class="pull-right" style={{}}>
                                                <Pagination aria-label="Page navigation example">
                                                    <PaginationItem disabled={currentPage <= 0}>
                                                    {this.pagesCount > 1 ? <PaginationLink
                                                        onClick={e => {
                                                            this.handleClick(e, currentPage - 1)
                                                        }
                                                        }
                                                        next
                                                        href="#"> &#xab;
                                                    </PaginationLink>
                                                        :
                                                        null
                                                    }
                                                </PaginationItem>

                                                {/* [...Array(this.pagesCount)] is used to create Array of size pagesCount */}
                                                {[...Array(this.pagesCount)].map((page, i) =>
                                                    <PaginationItem active={i === currentPage} key={i}>
                                                        {
                                                            i >= currentPage && i <= currentPage + 2 ?
                                                                <PaginationLink onClick={e =>
                                                                    this.handleClick(e, i)} href="#">
                                                                    {this.renderLinks(i)}
                                                                </PaginationLink>
                                                                :
                                                                null
                                                        }

                                                    </PaginationItem>
                                                )}

                                                <PaginationItem disabled={currentPage >= this.pagesCount - 1}>
                                                    {this.pagesCount > 1 ? <PaginationLink
                                                        onClick={e => {
                                                            this.handleClick(e, currentPage + 1)
                                                        }
                                                        }
                                                        next
                                                        href="#"> &#xbb;
                                                    </PaginationLink>
                                                        :
                                                        null
                                                    }
                                                </PaginationItem>

                                                </Pagination>
                                            </div> 
                                        </div>                                     
                                    </Row>

                                </React.Fragment>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" md="1"></Col>
                </Row>
            </div>
        )
    }
}
const mapStateToProps = ({ reportReducer, Authentication }) => {
    const { lpbAdminTrans } = reportReducer;
    const { LoginDetails } = Authentication;
    return { lpbAdminTrans, LoginDetails };
};

export default connect(mapStateToProps, {
})(SupportMatrix);



