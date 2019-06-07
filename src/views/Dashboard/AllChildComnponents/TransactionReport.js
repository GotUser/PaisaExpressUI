import React, { Component } from 'react';
import {
    Pagination, PaginationItem, PaginationLink, Row, Col,Label,Input,Button,
    Card, CardBody, Table, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

import { connect } from 'react-redux';
import '../../../../public/CustomStyles.css';

class TransactionReport extends Component {

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

        };
        this.toggle = this.toggle.bind(this);
       
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
                        <Card >
                            <CardBody style={{padding:0}}>
                                <React.Fragment>
                        
                        <Row style={{marginTop:"2%"}}>
                            
                            <div >
                                <label  style={{fontSize:15}} class="labelStyleForMTHeadings">Transaction Report </label> 
                            </div>

                          
                          
                            <Col xs="12" md="3" style={{marginLeft:"24%"}} > 
                                <Input type="search"
                                style={{borderRadius:20,fontSize:10,width:"100%",marginLeft:"26%"}}></Input>
                            </Col >

                            
                            </Row>
                          
                            <div>
                                        <Table style={{borderBottom:"1px solid lightgray",textAlign:"center"}}>
                                            <thead> 
                                                <tr>
                                                    <th  style={{paddingTop: 2,paddingBottom:2}}>Date</th>
                                                    <th  style={{paddingTop: 2,paddingBottom:2}}>From</th>
                                                    <th  style={{paddingTop: 2,paddingBottom:2}}>To</th>
                                                    <th  style={{paddingTop: 2,paddingBottom:2}}>Transaction Type</th>
                                                    <th  style={{paddingTop: 2,paddingBottom:2}}>Amount</th>
                                                    <th  style={{paddingTop: 2,paddingBottom:2}}>Balance </th>
                                                    <th  style={{paddingTop: 2,paddingBottom:2}}>Cash Type </th>                                               
                                                  
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
                                                                        <td  style={{paddingTop: 8,paddingBottom:8}}>{item}</td>
                                                                        <td  style={{paddingTop: 8,paddingBottom:8}}>{item}</td>
                                                                        <td  style={{paddingTop: 8,paddingBottom:8}}>{item}</td>
                                                                        <td  style={{paddingTop: 8,paddingBottom:8}}>{ 
                                                                           <div> <Button style={{background:"#67c2ef66",color:"black",borderRadius:18,width:"65%",padding:0}}> Credit</Button></div>}
                                                                        </td>
                                                                        <td  style={{paddingTop: 8,paddingBottom:8}}>{item}</td>
                                                                        <td  style={{paddingTop: 8,paddingBottom:8}}>{ item}</td>
                                                                        <td  style={{paddingTop: 8,paddingBottom:8}}>{ 
                                                                           <div> <Button style={{background:"white",color:"black",border:"2px dashed",borderRadius:18,width:"100%",padding:0}}> e-Cash</Button></div>}
                                                                        </td>
                                                                    </tr>              
                                                            )}
                                                    )}
                                            </tbody>
                                        </Table>
                                    </div>
                                    <Row  style={{paddingLeft:"3%",paddingRight:"3%"}}>
                                        <div>
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

                                        <Col style={{paddingTop:5}}>
                                            <Label >Per page</Label>
                                        </Col>
                                      
                                        <Col xs="12" md="8" >
                                            
                                            <span style={{ color: 'black', marginTop: 6,  }}>
                                                Showing results  {(currentPage * this.pageSize) + 1} - {currentPage * this.pageSize + this.pageSize} of {this.pageSize * this.pagesCount}
                                            </span>

                                            <div class="pull-right" style={{ marginLeft: "2%" }}>
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
                                        </Col>                                     
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
})(TransactionReport);



