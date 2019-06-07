import React, { Component } from 'react';
import { Row, Col, Table } from 'reactstrap';
import { connect } from 'react-redux';
import { SelectIFSConSearchResult } from '../../BankManagementAction';
class IFSCCodeTable extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let BankDetails = this.props.MTBeneficiary.BankDetails.IFSCInfoObject;
        console.log(BankDetails);
        // console.log(Object.keys(BankDetails).length);
        let LengthOfBankDetails = BankDetails.length;
        if (LengthOfBankDetails !== 0) {
            return (
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>IFSC Code</th>
                                <th>Bank Name</th>
                                <th>Branch Name</th>
                                <th>Address</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {BankDetails.map((item) =>
                                <tr>
                                    <th scope="row">{item.ifsc}</th>
                                    <td>{item.bank}</td>
                                    <td>{item.branch}</td>
                                    <td>{item.address}</td>
                                    <td><button
                                        onClick={() => {
                                            console.log(" item  item  itemv item  ")
                                            console.log(item);
                                            this.props.SelectIFSConSearchResult(item);
                                        }}
                                        class="buttonStyle Submit">
                                        Select
                                 </button></td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            )
        } else return null;
    }
}

const mapStateToProps = ({ Authentication, bankManagement }) => {

    const { LoginDetails } = Authentication;
    const { MTBeneficiary } = bankManagement;
    return { LoginDetails, MTBeneficiary };
};

export default connect(mapStateToProps, {
    SelectIFSConSearchResult
})(IFSCCodeTable);



