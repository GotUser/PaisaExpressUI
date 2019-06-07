import React, { Component } from 'react';
import products from './products.json';
// import DetailComponent from './detailComp'
import {Row,Table,Input,FormText,Col,Button} from 'reactstrap';



import { Grid, GridColumn as Column, GridDetailRow } from '@progress/kendo-react-grid';


class DetailComponent extends GridDetailRow {
    render() {
        const dataItem = this.props.dataItem;
        return (
            // <section>
            //     <p><strong>In Stock:</strong> {dataItem.UnitsInStock} units</p>
            //     <p><strong>On Order:</strong> {dataItem.UnitsOnOrder} units</p>
            //     <p><strong>Reorder Level:</strong> {dataItem.ReorderLevel} units</p>
            //     <p><strong>Discontinued:</strong> {dataItem.Discontinued}</p>
            //     <p><strong>Category:</strong> {dataItem.Category.CategoryName} - {dataItem.Category.Description}</p>
            // </section>
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th>Date</th>
                                                        <th>Retailer</th>
                                                        <th>Amount</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                              
                                                <tbody>
                                                        <tr>
                                                            <td> {dataItem.UnitsInStock} </td>
                                                            <td> {dataItem.ReorderLevel}</td>
                                                            <td>{dataItem.ReorderLevel}</td>
                                                            <td>
                                                                <Button color="success" >View</Button>
                                                            </td>
                                                        </tr>
                                                                                          
                                                </tbody>
                                            </Table>
        );
    }
}

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            data: products.slice(0),
            sam:""
        }
    }
   

    expandChange (event)    {
        event.dataItem.expanded = !event.dataItem.expanded;
       
        this.setState({
            sam:"hh"
        })
    }

    render() {
        return (
            <Grid
                data={this.state.data}
                detail={DetailComponent}
                style={{ height: '400px' }}
                expandField="expanded"
                onExpandChange={event=>this.expandChange(event)}>
                <Column field="ProductName" title="Date" width="300px" />
                <Column field="ProductID" title="Type" wi-dth="50px" />
                <Column field="UnitPrice" title="
                Retailer" width="100px" />
                <Column field="QuantityPerUnit" title="Amount" />
            </Grid>
        );
    }
}
export default App;

