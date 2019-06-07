import React from 'react';
import { BootstrapTable, TableHeaderColumn, InsertButton } from 'react-bootstrap-table';
import {
    Pagination, PaginationItem, PaginationLink, Row, Col,Label,Input,Button,
    Card, CardBody, Table, ButtonGroup
} from 'reactstrap';
import CustomerBreadCrumb from '../../../../components/ViewComponents/CustomBreadcrumb';

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      LedgerHeadId: id,
      // Cl:  id + "-06-2019",
      // transDate:  id + "-06-2019",
      TransactionType:"Debit",
      DateTime:id + "-06-2019"+"10:10 am", 
      DateTime : id + "-06-2019"+"10:10 am", 
      TransactionNo:"TXNO202" ,
      AccountId :"1",
      OpeningBalance :2000,
      Amount :100,
      ClosingBalance:100,
      ReferenceNo :"REFNO20",
      CounterAccountId:"22"
    });
  }
}

addProducts(1);           

export default class Home extends React.Component {

  createCustomExportCSVButton  (onClick) {
    return (
            <div style={{display:"flex",width:"100%",justifyContent:"right"}}>
                <Button className="btn btn-warning" onClick={ onClick }>Download As Excel</Button>
            </div>
    );
  }
  createCustomButtonGroup  (props ) {
    return (
        <ButtonGroup className='my-custom-class' >
                   <div style={{display:"flex"}}>
                     <Label style={{background:"transparent",color:"transparent",border:"1px solid transparent"}}>A</Label>
                    </div>
                    { props.exportCSVBtn }
        </ButtonGroup>
    );
  }

  render() {
    const options = {
      exportCSVBtn: this.createCustomExportCSVButton,
      btnGroup: this.createCustomButtonGroup,
     
    };
    return (
      <div className="animated fadeIn">
      <div>
      <CustomerBreadCrumb from="DetailsTransaction"  />
                <BootstrapTable data={ products } options={ options } >
                                    <TableHeaderColumn dataField='LedgerHeadId' isKey={ true }>LedgerHeadId</TableHeaderColumn>
                                    <TableHeaderColumn dataField='TransactionType'  >TransactionType</TableHeaderColumn>
                                    <TableHeaderColumn dataField='TransactionNo'>TransactionNo</TableHeaderColumn>
                                    <TableHeaderColumn dataField='AccountId'>AccountId</TableHeaderColumn>
                                    <TableHeaderColumn dataField='OpeningBalance'>OpeningBalance</TableHeaderColumn>
                                    <TableHeaderColumn dataField='Amount'>Amount</TableHeaderColumn>
                                    <TableHeaderColumn dataField='ClosingBalance'>ClosingBalance</TableHeaderColumn>
                                    <TableHeaderColumn dataField='ReferenceNo'>ReferenceNo</TableHeaderColumn>
                                    <TableHeaderColumn dataField='CounterAccountId'>CounterAccountId</TableHeaderColumn>
                                    <TableHeaderColumn dataField='DateTime'>DateTime</TableHeaderColumn>
                                    <TableHeaderColumn dataField='DateTime'>DateTime</TableHeaderColumn>
                </BootstrapTable>
        </div>
        </div>
   
    );
  }
}




