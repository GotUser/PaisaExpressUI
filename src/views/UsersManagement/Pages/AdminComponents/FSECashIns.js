import React from 'react';
import { BootstrapTable, TableHeaderColumn, InsertButton } from 'react-bootstrap-table';
import {
    Pagination, PaginationItem, PaginationLink, Row, Col,Label,Input,Button,
    Card, CardBody, Table, ButtonGroup
} from 'reactstrap';
import CustomerBreadCrumb from '../../../../components/ViewComponents/CustomBreadcrumb';
var moment = require('moment');
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      transDate: 'Item name ' + id,
      details: "Details"
    });
  }
}

addProducts(1);

export default class Home extends React.Component {

  createCustomExportCSVButton(onClick) {
    return (
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "flex-start", width: 450,marginLeft:25 }}>
          <Label style={{ width: 70 }}>From  </Label>
          <DatePicker
            className="form-control"
            selected={moment()}
            // onChange={this.SaveDOB}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            maxDate={moment()}
            placeholderText="Pick the date "
          />
          <Label style={{ width: 70, marginLeft: 30 }}>To  </Label>
          <DatePicker
            className="form-control"
            selected={moment()}
            // onChange={this.SaveDOB}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            maxDate={moment()}
            placeholderText="Pick the date "
          />
        </div>
        <Label style={{ width: 900, color: "transparent" }}>a</Label>
        <Button onClick={onClick} style={{ background: "rgb(248, 176, 24)" }} >Show</Button>
      </div>
    );
  }

  createCustomToolBar(props) {
    return (
      <div style={{ margin: '15px' }}>
        {props.components.btnGroup}
      </div>
    );
  }


  render() {
    const options = {
      exportCSVBtn: this.createCustomExportCSVButton,
      toolBar: this.createCustomToolBar,
      page: 1,  
      sizePerPageList: [ {
        text: '20', value: 20
      }, {
        text: '50', value: 50
      }, {
        text: 'All', value: products.length
      } ], 
      sizePerPage: 20,  
      pageStartIndex: 1,
    };
    return (
        <div className="animated fadeIn">
            <div>
            {/* <CustomerBreadCrumb from="RetailerTransactions"  /> */}
                          <div style={{display:"flex",justifyContent:"flex-start",margin:"1%"}}>
                                <Label style={{width:70}}>FSE  </Label>
                                <Input type="select" style={{width:175}} >
                                  <option>select</option>
                                </Input>                              
                            </div>

                            <BootstrapTable data={ products } options={ options } pagination exportCSV>
                                    <TableHeaderColumn dataField='id' isKey={ true }>FSE Name</TableHeaderColumn>
                                    <TableHeaderColumn dataField='transDate'  >Cashin To Retailer Name</TableHeaderColumn>
                                    <TableHeaderColumn dataField='debitAcId'>Retailer Login ID </TableHeaderColumn>
                                    <TableHeaderColumn dataField='amount'>Amount</TableHeaderColumn>
                                    <TableHeaderColumn dataField='trans_Type'>Date</TableHeaderColumn>
                                    <TableHeaderColumn dataField='creditAcId'>Time</TableHeaderColumn>
                                    <TableHeaderColumn dataField='reconDate'>Status(Success/Fail)</TableHeaderColumn>
                            
                                    {/* <TableHeaderColumn dataField='transRemarks '>TransRemarks</TableHeaderColumn>
                                    <TableHeaderColumn dataField='details'>Details</TableHeaderColumn> */}
                        </BootstrapTable>
        </div>
        </div>
   
    );
  }
}




