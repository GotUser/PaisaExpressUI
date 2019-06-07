import React, { Component } from 'react';
import { Row, Col, Card, CardBody} from 'reactstrap';

import { connect } from 'react-redux';
import '../../../../public/CustomStyles.css';

import '../../../../scss/vendors/react-select/react-select.scss';
import CustomerBreadCrumb from '../../../components/ViewComponents/CustomBreadcrumb';

import CustomerMobileNoForm from './AllChildComponents/CustomerMobileNoForm';
// import CustomerMobileNoForm from './AllChildComponents/NewCustomerOTPVerification';
import CustomerRegForm from './AllChildComponents/CustomerRegForm';
import OTPVerificationOnBeneCreation from './AllChildComponents/OTPVerificationOnBeneCreation';
import NewCustomerVerified from './AllChildComponents/NewCustomerVerified';

import { GetRecentTrasactions ,GetMTPageInitialData,moneyTransferInitialLoad ,GetCustomerTemplate,SaveBeneficiaryInfo} from '../BankManagementAction'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {   
            focusedInput: '',
        };
        
    }
    componentWillMount(){
        this.props.moneyTransferInitialLoad();
        let accessToken = this.props.LoginDetails.accessToken;
        // this.props.GetMTPageInitialData(accessToken);
        this.props.GetRecentTrasactions(accessToken);
    }
    componentDidMount(){
        let accessToken = this.props.LoginDetails.accessToken;
        // this.props.GetMTPageInitialData(accessToken);

        // let accessToken = this.props.LoginDetails.accessToken;
        this.props.GetCustomerTemplate(accessToken);
        this.props.SaveBeneficiaryInfo("", 'mobileNo');

    }
    componentDidUpdate(){
        if(this.props.MTcustomer.NavigatePages.isExistingCustomer){
            this.props.history.push('/Customer');
        }
    }
   
    renderShowsTotal(start, end, total) {

        if(end===total){
            console.log("------------------------------list comes to an end")
        } 

        return (
            <span class="pull-right" style={ {  color: 'black' ,marginTop:6,    } }>
                Showing results  { start } - { end } of { total } 
            </span>    
        );
    }

      createCustomSearchField (props) {
        return (
          <SearchField
              className='my-custom-class'
              style={{borderRadius:20,fontSize:10,width:"50%",marginLeft:"40%"}}
              placeholder=' &#128269;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;
              '/>
        );
   
      }

      createCustomInsertButton  (onClick) {
        return (
            <Row>
                <Col  xs="12" lg="12" >
                    <label 
                    class="labelStyleHeadings"                    
                     >Recent Transactions  </label>  
                </Col>
            </Row>
        );
      }

      ReturnView(){
        if(this.props.MTcustomer.displayRegistFormInMThome){
            return <CustomerRegForm/>
        }  
        //  else if(this.props.MTcustomer.verifyingCustomerOTP){
        //     return <OTPVerificationOnBeneCreation/>
        // } 
        else if(this.props.MTcustomer.NavigatePages.displayVerifiedSuccess){
            return <NewCustomerVerified/>
        } else  return  <CustomerMobileNoForm/>
                
    }

    render() {

        const options = {
            page: 1,  //  page you want to show as default
            sizePerPageList: [ {
              text: '5', value: 5
            }, {
              text: '10', value: 10
            }, {
              text: '25', value: 25
            } ], // you can change the dropdown list for size per page
            sizePerPage: 5,  // max number of records to be displayed in a page
            pageStartIndex: 1, // where to start counting the pages
            // paginationPosition:'end',
            paginationSize: 5,  // max Links displayed at  a time 
            prePage: '<<', // Previous page button text
            nextPage: '>>', // Next page button text
            paginationPosition: 'bottom' , // default is bottom, top and both is all available
            paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
            withFirstAndLast: false, // Hide the going to First and Last page button      
            searchField:this.createCustomSearchField,
            sizePerPageDropUp: true,
            insertBtn: this.createCustomInsertButton,
          };
        return (
            <div className="animated fadeIn">
                <CustomerBreadCrumb from="MThome" />
                <Row>
                    <Col xs="12" lg="12">
                        <Card>
                            <CardBody  >  
                                {this.ReturnView()}
                                <BootstrapTable   version="4" data={this.props.MTcustomer.recentTrasactions }
                                    headerStyle={ { background: 'rgb(231, 230, 230)' } }
                                            bordered={ false }   
                                            containerStyle={ { marginTop:"4%"} } 
                                            bodyStyle={ {  } }     
                                            tdStyle={ {  } }
                                            pagination 
                                            search
                                            options={options}
                                            insertRow>
                                        <TableHeaderColumn dataField="date" tdStyle={ { borderBottom: '1px solid #dfdfdf',borderTop: 0,width:"9%" } } thStyle={{width:"9%"}}>Date</TableHeaderColumn>
                                        <TableHeaderColumn dataField="sendersName" tdStyle={ { borderBottom: '1px solid #dfdfdf',borderTop: 0,width:"12%" }}  thStyle={{width:"12%"}}>Sender Name</TableHeaderColumn>
                                        <TableHeaderColumn isKey dataField="sendersMobileNo" tdStyle={ { borderBottom: '1px solid #dfdfdf',borderTop: 0,width:"12%" } }>Sender Mobile</TableHeaderColumn>
                                        <TableHeaderColumn dataField="benificiaryName" tdStyle={ { borderBottom: '1px solid #dfdfdf',borderTop: 0,width:"14%" } }>Beneficiary Name</TableHeaderColumn>
                                        <TableHeaderColumn dataField="beneficiaryBank" tdStyle={ { borderBottom: '1px solid #dfdfdf',borderTop: 0,width:"14%" } }>Beneficiary Bank</TableHeaderColumn>
                                        <TableHeaderColumn dataField="beneficiaryAccountNo" tdStyle={ { borderBottom: '1px solid #dfdfdf',borderTop: 0,width:"20%" } }>Beneficiary Bank Account</TableHeaderColumn>
                                        <TableHeaderColumn dataField="amountTransferred"  tdStyle={ { borderBottom: '1px solid #dfdfdf',borderTop: 0,width:"8%" } }>Amount</TableHeaderColumn>
                                        <TableHeaderColumn dataField="amountTransferMode"  tdStyle={ { borderBottom: '1px solid #dfdfdf',borderTop: 0, } }>Transfer Mode</TableHeaderColumn>
                                    </BootstrapTable>
                            </CardBody>
                        </Card>
                    </Col>                             
                </Row>
            </div>
        )
    }

}

const mapStateToProps = ({ reportReducer, Authentication,bankManagement }) => {
    const { lpbAdminTrans } = reportReducer;
    const { LoginDetails } = Authentication;
    const {MTcustomer} =bankManagement;
    return { lpbAdminTrans, LoginDetails,MTcustomer };
};

export default connect(mapStateToProps, {
     GetRecentTrasactions ,GetMTPageInitialData ,moneyTransferInitialLoad ,GetCustomerTemplate,SaveBeneficiaryInfo
})(Home);

