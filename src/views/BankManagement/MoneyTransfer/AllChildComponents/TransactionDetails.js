import React, { Component } from 'react';
import {  Row, Col ,Label, Input,FormText} from 'reactstrap';
import { connect } from 'react-redux';
import '../../../../../scss/vendors/react-select/react-select.scss';

import { SaveMtTrasDetails,Get_Additional_Charges_Of_MT ,MoneyTransferRequest ,CancleInTransdetails } from '../../BankManagementAction';
import { NumberRegex } from '../../../AllRegexFormats';

import { ReturnCustomerId, ReturnCustomerMobileNo } from '../../../../GlobalVars';

export const Labelstyle4 = {
    fontSize: 11,
    marginTop: 5,
    marginBottom: 10,
    padding: 0,
    color: "rgb(171, 171, 171)",
}

class TransactionDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focusedInput: '',
        };
        // this.handleChange = this.handleChange.bind(this);
        this.TransferEvent = this.TransferEvent.bind(this);
    }

    componentDidUpdate(){

        let TransAmount =this.props.MTTransDetails.TransAmount
        if( TransAmount !=''&& this.props.MTTransDetails.Get_Additional_Charges) {
            let accessToken=this.props.LoginDetails.accessToken;
            console.log(" this.props.MTTransDetails.TransAmount.length this.props.MTTransDetails.TransAmount.length ");
            console.log(TransAmount);
            TransAmount.length >2?
            this.props.Get_Additional_Charges_Of_MT(accessToken,TransAmount,'TransAmount'):null
        }
    }

    render() {

        console.log(" In Trasdetails Reducer : ");
        console.log(this.props.MTTransDetails);
        const BENEINFO = this.props.MTTransDetails.BeneInfo;
        return (
            <div className="animated fadeIn">
                <Row style={{ marginLeft: 0, marginRight: 0 }} >
                    <Col xs="12" md="1"></Col>
                    <Col xs="12" lg="12" style={{ background: "white", padding: 10, marginBottom: "2%" }}>

                
                        <Row style={{ borderBottom: "1px solid #dfdfdf" }}>
                            <label
                                class="labelStyleHeadings"
                            >Transaction Details </label>
                        </Row>
                        <Row>
                            <Col
                            xs="12" lg="3"
                            
                            style={
                                BENEINFO.bankAccountVerified? { border:"1px solid #20c997",textAlign:"left",padding:25,background:"white",margin:"4%",borderRadius:15}
                                :{ border:"1px solid rgb(101, 28, 20)",textAlign:"left",padding:25,background:"white",margin:"4%",borderRadius:15}
                                }>
                            <Row style={{justifyContent:"flex-end"}}>    
                                        <div>
                                     {   BENEINFO.bankAccountVerified?    <div style={
                                                { border: "1px solid #20c997",background: "white", width: 22, height: 22,textAlign:" center", color: "#20c997",borderRadius:"50%"}}  >
                                            {/* &#x3f; */}
                                            	&#x2714;
                                            </div> : <div style={
                                                { border: "1px solid rgb(101, 28, 20)",background: "white", width: 22, height: 22,textAlign:" center", color: "rgb(101, 28, 20)",borderRadius:"50%"}}  >
                                            &#x3f;
                                            	{/* &#x2714; */}
                                            </div> 
                                        } 
                                        </div>
                                    </Row>
                               
                                <Row style={{ borderBottom: "1px solid #afabab", margin: 6 }}>
                                    <Col xs="12" lg="5" style={{ padding: 0 }}  ><Label style={Labelstyle4}>Beneficiary Name  </Label></Col>

                                    <Col xs="12" lg="7" style={{}} ><Label >{BENEINFO.fullName} </Label></Col>
                                </Row>
                                <Row style={{ borderBottom: "1px solid #afabab", margin: 6 }}>
                                    <Col xs="12" lg="5" style={{ padding: 0 }} ><Label style={Labelstyle4}>Mobile Number  </Label></Col>

                                    <Col xs="12" lg="7" style={{}}  ><Label >{BENEINFO.mobileNo}  </Label></Col>
                                </Row>
                                <Row style={{ borderBottom: "1px solid #afabab", margin: 6 }}>
                                    <Col xs="12" lg="5" style={{ padding: 0 }}><Label style={Labelstyle4}>Bank </Label></Col>

                                    <Col xs="12" lg="7" style={{}}  ><Label >{BENEINFO.bankName}  </Label></Col>
                                </Row>
                                <Row style={{ borderBottom: "1px solid #afabab", margin: 6 }}>
                                    <Col xs="12" lg="5" style={{ padding: 0 }}><Label style={Labelstyle4}>IFSC Code  </Label></Col>

                                    <Col xs="12" lg="7" style={{}} ><Label >{BENEINFO.ifsc}</Label></Col>
                                </Row>
                                <Row style={{ margin: 6 }}>
                                    <Col xs="12" lg="5" style={{ padding: 0 }}><Label style={Labelstyle4}>Account Number  </Label></Col>

                                    <Col xs="12" lg="7" style={{}}  ><Label >{BENEINFO.acccountNo}</Label></Col>
                                </Row>
                            </Col>

                            <Col xs="12" lg="6" style={{ textAlign: "left", margin: "4%" }}>

                                <Row>
                                    <Col xs="12" lg="4">
                                        <Label > Mode of Transfer </Label>
                                    </Col>
                                    <Col xs="12" lg="2">
                                        <Label>
                                            <input
                                                checked={this.props.MTTransDetails.TransMode === 'NEFT'}
                                                onClick={() => this.props.SaveMtTrasDetails("NEFT", 'TransMode')}
                                                type="radio" style={{ zoom: 1.2 }} />
                                            <Label style={{ paddingLeft: 9, fontSize: "initial" }}>  NEFT </Label>
                                        </Label>
                                    </Col>
                                    <Col xs="12" lg="2">
                                        <Label>
                                            <input
                                                checked={this.props.MTTransDetails.TransMode === 'IMPS'}
                                                onClick={() => this.props.SaveMtTrasDetails("IMPS", 'TransMode')}
                                                type="radio" style={{ zoom: 1.2 }} />
                                            <Label style={{ paddingLeft: 9, fontSize: "initial" }}>  IMPS </Label>
                                        </Label>
                                    </Col>
                                </Row>

                                <Row style={{ marginTop: 10 }}>
                                    <Col xs="12" lg="4">
                                        <Label > Transfer Amount</Label>
                                    </Col>
                                    <Col xs="12" lg="4">
                                        <Input
                                            value={this.props.MTTransDetails.TransAmount}
                                            onChange={(e) => {
                                                let Value = e.target.value;
                                                console.log(e);
                                                console.log(e.target.value);
                                                let accessToken=this.props.LoginDetails.accessToken;
                                                const re = /^[0-9\b]+$/;
                                                console.log("  Value Value / Value Value");
                                                console.log(Value);
                                                if (Value == '' || NumberRegex.test(Value)) {
                                                    this.props.SaveMtTrasDetails(Value, 'TransAmount')
                                                //    this.props.Get_Additional_Charges_Of_MT(accessToken,Value,'TransAmount')
                                                }}} placeholder="35,000" />
                                    </Col>
                                </Row>

                                    <Row style={{marginTop:10}}>
                                       <Col xs="12" lg="4">
                                            <Label> Additional Charges</Label>
                                       </Col> 
                                       <Col xs="12" lg="2">
                                               <Input disabled
                                               value={this.props.MTTransDetails.AdditionalCharges}
                                              />
                                              {/* {  this.props.MTTransDetails.TransAmount==""?null:
                                                  this.props.SaveMtTrasDetails(this.props.MTTransDetails.TransAmount, 'AdditionalCharges')} */}
                                       </Col> 
                                    </Row>
                                    <Row style={{marginTop:10}}>
                                       <Col xs="12" lg="4">
                                            <Label > Total Amount</Label>
                                       </Col> 
                                       <Col xs="12" lg="4">
                                               <Input disabled
                                                value={this.props.MTTransDetails.TotalAmount}
                                               />
                                       </Col> 
                                    </Row>
                                    <Row style={{marginTop:"2%",marginLeft:"0%"}}>
                                        <Label style={{color:"black",fontStyle:"italic",width:"100%"}}>
                                                <FormText style={{}}>  <b style={{color:"rgb(1, 142, 211)",paddingRight:"1%"}} >Note:  </b>   By clicking <b> 'Transfer' </b>,  
                                                you agree to the <a style={{color:"#36a9e1",cursor:"pointer"}}  
                                                onClick={() => {
                                                    // var win = window.open('/Disclaimer', '_blank');
                                                    //                              win.focus();
                                                    window.open('/#/Disclaimer', 'sharer', 'toolbar=0,status=0,width=700,height=555')
                                                    // window.open(' https://sites.google.com/view/paisaexpressdisclaimer/copy-of-home', 'sharer', 'toolbar=0,status=0,width=700,height=555')
                                                    }}
                                                     >Terms & Conditions.</a> </FormText> 
                                        </Label>
                                   </Row>

                                    <Row style={{ width: "100%" }}>
                                        <Col xs="12" lg="3" style={{ padding: 6 }}>
                                            <button  disabled={this.props.MTTransDetails.TransAmount === '' || this.props.MTTransDetails.TransAmount === undefined}
                                            onClick={this.TransferEvent}
                                            
                                            class="buttonStyle Submit" >Transfer </button>
                                        </Col>
                                        <Col xs="12" lg="3" style={{ padding: 6 }}>                                            
                                            <button 
                                             onClick={()=>this.props.CancleInTransdetails()}
                                            class="buttonStyle special2
                                            " >Cancel </button>
                                        </Col>
                                        </Row>
                                    <span style={{color:'red',fontSize:15,marginLeft:15}}>{this.props.MTTransDetails.ApiResult.ErrorMessage}</span>
                             </Col>
                         </Row>
         </Col>
    </Row>
 </div>
        )
    }

    TransferEvent() {

        let CustomerId = ReturnCustomerId(this.props.MTcustomer)
        let CustomerMobileNo = ReturnCustomerMobileNo(this.props.MTcustomer);

        console.log(" Customer Id ,CustomerMobileNo is :");
        console.log(CustomerId);
        console.log(CustomerMobileNo)
        let MTDetailsObject = {
            CustomerId: CustomerId,
            CustomerMobileNo: CustomerMobileNo,
            Amount: this.props.MTTransDetails.TransAmount,
            BeneficiaryId: this.props.MTTransDetails.BeneInfo.id,
            TermsAgreed: true
        }
        let accessToken = this.props.LoginDetails.accessToken;
        this.props.MoneyTransferRequest(accessToken, MTDetailsObject)


    }

}

const mapStateToProps = ({ Authentication, bankManagement }) => {
    const { LoginDetails } = Authentication;
    const { MTcustomer, MTBeneficiary, MTTransDetails } = bankManagement;
    return { LoginDetails, MTcustomer, MTBeneficiary, MTTransDetails };
};
export default connect(mapStateToProps, {
    SaveMtTrasDetails ,MoneyTransferRequest ,CancleInTransdetails ,
    Get_Additional_Charges_Of_MT
})(TransactionDetails);


