import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, Table, Button, Input,Label  ,Pagination, PaginationItem, PaginationLink,} from 'reactstrap';
import CustomerBreadCrumb from '../../components/ViewComponents/CustomBreadcrumb';
class DummyComponent extends Component {

    constructor(props) {
        super(props);
        this.dataSet = [ {
            amount: 600,
            dateOfDeposit: "2019-01-27T00:00:00",
            tenantDepositMode: "RTGS",
            tenantName: "Retailership Business",
            tenantType: "Retailership"
        }];
        this.pageSize = 5;
        this.pagesCount = Math.ceil(this.dataSet.length / this.pageSize);
        this.state = {
                currentPage: 0,
                dropdownOpen: false,
                addBeneShow: false,
                value: false,
        };
    }

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
        return i <= currentPage + 2 ? i + 1 : '.';
    }

    render() {
        const { currentPage, products } = this.state;
        
        const pagesCount = Math.ceil(this.dataSet.length / this.pageSize);

        let from = (Number(currentPage) * Number(this.pageSize)) + 1;
        let to = (Number(currentPage) * Number(this.pageSize)) + Number(this.pageSize)
        let total = Number(pagesCount) * Number(this.pageSize);
        return (
            <div className="animated fadeIn">
                <div>
                    <CustomerBreadCrumb from="LedgerHistory" contentPath="/ Management / Ledger History" />
                    <Row>
                        <Col xs="12" lg="12">
                            <Card >
                                <CardHeader>
                                    <h5 className="font-weight-bold">  Ledger History</h5>
                                    <Input style={{ height: 33, width: '15%', borderRadius: 30, float: 'right', marginTop: '-30px' }} placeholder="Search"
                                        />
                                </CardHeader>
                                <CardBody>
                                    <Row style={{ marginBottom: 10}}>
                                        <div style={{ }}>
                                            <Input type="select">
                                                <option value="select">Select Retailer</option> 
                                                <option value="Retailer1">Retailer1</option> 
                                                <option value="Retailer2">Retailer2</option>      
                                            </Input>
                                        </div>
                                        {/* <div style={{ width: "30%" }}>
                                            <Input
                                                placeholder="Search"
                                                style={{
                                                    border: "1px solid transparent", fontSize: 30,
                                                    borderBottom: "1px solid lightgray"
                                                }}>
                                            </Input>
                                        </div> */}

                                        {/* <div style={{ width: "65%" }}>

                                            <Button color="warning" style={{ float: "right" }}>
                                                Export  Excel
                                                    </Button>
                                        </div> */}
                                    </Row>
                                    <Row>
                                        <Table style={{ overflowX: 'auto' }} responsive>
                                            <thead style={{ background: '#fabb3d', fontFamily: "serif", color: "white" }}>
                                                <tr>
                                                    <th>Date</th>
                                                    <th>Time</th>
                                                    <th>Transaction Id</th>
                                                    <th>Tran Amount</th>
                                                    <th>Original Amount</th>
                                                    <th>Description </th>
                                                    <th>Type</th>
                                                    <th>Opening Balance</th>
                                                    <th>Closing  Balance</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.dataSet.length != undefined ?
                                                    this.dataSet.map((item, i) => (
                                                        <tr key={i} >
                                                            <td> {item.dateOfDeposit} </td>
                                                            <td> {item.dateOfDeposit}</td>
                                                            <td> {1}</td>
                                                            <td> {item.amount}</td>
                                                            <td> {item.amount}</td>
                                                            <td> {item.tenantName}</td>
                                                            <td> {item.tenantDepositMode}</td>
                                                            <td> {item.amount}</td>
                                                            <td> {item.amount}</td>
                                                        </tr>
                                                    ))
                                                    :
                                                    null
                                                }
                                            </tbody>
                                        </Table>
                                    </Row>

                                    <div>                                  
                                            <Input style={{ width: '5%' }}
                                                onClick={(txt) => {
                                                    this.pageSize = txt.target.value
                                                    this.setState({ value: !this.state.value })
                                                }}
                                                type="select">
                                                <option value="5">5</option>
                                                <option value="10">10</option>
                                                <option value="20">20</option>
                                            </Input>
                                            <Label style={{}}>Per page</Label>

                                            <span style={{ color: 'black', marginTop: 6, marginLeft: "30%" }}>
                                                Showing results  {from} - {to} of {total}
                                            </span>

                                            <div class="pull-right" style={{ marginLeft: "2%" }}>
                                                <Pagination aria-label="Page navigation example">
                                                    <PaginationItem disabled={currentPage <= 0}>
                                                        {pagesCount > 1 ? <PaginationLink
                                                            onClick={e => {
                                                                // if (parseInt(currentPage) !== 1) {
                                                                this.handleClick(e, currentPage - 1)
                                                                // } else console.log(" Console.log(current page is 1 or below)")
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
                                                    {[...Array(pagesCount)].map((page, i) =>
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

                                                    <PaginationItem disabled={currentPage >= pagesCount - 1}>
                                                        {pagesCount > 1 ? <PaginationLink
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
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>

            </div >
        )
    }
}
export default DummyComponent;





