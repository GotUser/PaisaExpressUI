import React from 'react';
import { BootstrapTable, TableHeaderColumn, InsertButton } from 'react-bootstrap-table';
import {
  Pagination, PaginationItem, PaginationLink, Row, Col, Label, Input, Button,
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
    Date:"20-01-2019",
    OpeningBalance:200,
    CR:220,
    DR:210,
    Account :12345662222,
    CounterAccount:12345662222,
    Purpose:"PP",
    Status:"Fail"
    });
  }
}

addProducts(1);

export default class Home extends React.Component {


  onClickProductSelected(cell, row, rowIndex) {
    this.props.history.push("/DetailsTransaction");
    console.log('Product #', rowIndex);
    console.log('row #', row);
  }

  cellButton(cell, row, enumObject, rowIndex) {
    return (
      <Button style={{ background: "rgb(248, 176, 24)" }}
        type="button"
        onClick={() =>
          this.onClickProductSelected(cell, row, rowIndex)} >
        Details 
      </Button>
    )
  }

  createCustomExportCSVButton(onClick) {
    return (
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "flex-start", width: 450 }}>
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
        <Label style={{ width: 50, color: "transparent" }}>a</Label>
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
      <CustomerBreadCrumb from="AccountingTransaction" />
      <div >
        <BootstrapTable data={products} options={options}  pagination={ true } exportCSV>
          <TableHeaderColumn dataField='Date' isKey={true}>Date</TableHeaderColumn>
          <TableHeaderColumn dataField='OpeningBalance'>Opening Balance</TableHeaderColumn>
          <TableHeaderColumn dataField='CR'>CR</TableHeaderColumn>
          <TableHeaderColumn dataField='DR'>DR</TableHeaderColumn>
          <TableHeaderColumn dataField='Account'>Account </TableHeaderColumn>
          <TableHeaderColumn dataField='CounterAccount'>Counter Account</TableHeaderColumn>
          <TableHeaderColumn dataField='Purpose'>Purpose</TableHeaderColumn>
          <TableHeaderColumn dataField='Status'>Status(Success/Fail)</TableHeaderColumn>
          {/* <TableHeaderColumn dataField='details' dataFormat={this.cellButton.bind(this)}>Details</TableHeaderColumn> */}
        </BootstrapTable>
      </div>
      </div>

    );
  }
}




