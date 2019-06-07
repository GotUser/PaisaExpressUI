
import React, { Component } from 'react';
import {
    Col, Button,  Form, FormGroup,Card,CardBody,CardFooter,CardHeader,
    FormText, Label, Input,Row
} from 'reactstrap';

import { connect } from 'react-redux';
import LaddaButton, { EXPAND_LEFT} from 'react-ladda';

import CustomerBreadCrumb from '../../../components/ViewComponents/CustomBreadcrumb';
import { DisplaySpinner } from '../../GlobalModals';

import { NumberRegex,  EmailId } from '../../AllRegexFormats';

import {
    CloseUserSettingsModal, SendUserDetailsToDB, Save_Creating_User_Details, IpWarnings_At_Creating_User_Details,clearResponseOfUserApis
} from '../UserManagementAction';

import { Labelstyle1, InputTextStyle, toTitleCase } from '../../../GlobalVars';

class Add_New_User_Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchingValue: '',
            fields: {},
            errors: {},
            CitiesOfState: {}
        };
    }
        componentWillMount(){
            if (this.props.UserDetails.UserApiResults.Error !== '' ) {
                setTimeout(() => {
                    this.props.clearResponseOfUserApis()
                }, 15000);
            }

        }
    
  
    componentDidUpdate(){
            let EditingUserType = this.props.UserDetails.EditingUserType;

            if(!this.props.UserDetails.AddUserClicked){
                EditingUserType == "FSE" ? this.props.history.push("/FSE") :  this.props.history.push("/Agent")
            } 
    }

    handleChange(field, e) {
        e.preventDefault();
        let value = e.target.value;
        console.log("In handleChange values are");
        console.log("field: " + field + " and value: " + value);

        if (field === 'fullName') {
            if (value === '' || value.match(/^[a-zA-Z_ ]+$/)) {
                console.log(" Before TitleCaseVal ");
                console.log(value);
                let TitleCaseVal = toTitleCase(value)
                this.props.Save_Creating_User_Details(TitleCaseVal, field);
            } else this.props.IpWarnings_At_Creating_User_Details(" Please Enter Letters Only", field);

        } else if (field === 'mobileNo') {
            if (value === '' || value.match(NumberRegex)) {
                this.props.Save_Creating_User_Details(value, field);
            } else this.props.IpWarnings_At_Creating_User_Details(" Please Enter Numbers Only", field);

        } else if (field === 'emailId') {
            if (value === '' || value.match(EmailId)) {
                this.props.Save_Creating_User_Details(value, field);
            } else this.props.IpWarnings_At_Creating_User_Details(" Please Enter Valid  Email ID", field);
        }
 
        else if (field === 'pinCode') {
            if (value === '' || value.match(NumberRegex)) {
                this.props.Save_Creating_User_Details(value, field);
            } else this.props.IpWarnings_At_Creating_User_Details(" Please Enter Numbers Only", field);

        }
    }
    handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        if (file.type === 'image/png' || file.type === 'image/jpeg') {
            reader.onloadend = () => {
                let Image = reader.result.split(',');
                let Base64 = Image[1];
                this.props.Save_Creating_User_Details(Base64, 'picture');
            }
            reader.readAsDataURL(file)
        } else {
            this.props.IpWarnings_At_Edit_User_Basic_Details("Image type should be either PNG or JPEG", 'picture')
        }
    }
    contactSubmit(e) {
        if (this.handleValidation(e)) {
            this.SaveUserDetails()
        } else {
            console.log(this.props.UserDetails.CreateUserDataWarning);
        }
    }



    handleValidation(e) {
        let errors = {};
        let formIsValid = true;
        let user = this.props.UserDetails.CreateUser;
        let warning = this.props.UserDetails.CreateUserDataWarning;

   
        if (user.fullName === '' || user.fullName === null || user.fullName==undefined) {
            formIsValid = false;
            warning.fullName = "Required First Name";
           
        }
        else {
            if (!user.fullName.match(/^[a-zA-Z ]+$/)) {
                formIsValid = false;
                warning.fullName = "Enter Only letters";
                
            }
        }

        if (user.mobileNo === undefined) {
            formIsValid = false;
            warning.mobileNo = "Mobile number is requied";
           

        }else if (user.mobileNo === '' || user.mobileNo === null || user.mobileNo.length !== 10) {
            formIsValid = false;
    
            warning.mobileNo = "Enter a valid 10 digit Mobile Number";
        }
        else {
            if (!user.mobileNo.match(/^[0-9]+$/)) {
                formIsValid = false;
                warning.mobileNo = "Mobile Number Is Invalid";
             
            }
        }

        if (this.props.UserDetails.EditingUserType == 'Agent') {
            if (user.addressDetails.addressLine1 === '' || user.addressDetails.addressLine1 === null || user.addressDetails.addressLine1 == undefined ) {
                formIsValid = false;
                warning.addressLine1 = "Required Address Line1";
         
            }
            if (user.addressDetails.addressLine2 === '' || user.addressDetails.addressLine2 === null || user.addressDetails.addressLine2 == undefined) {
                formIsValid = false;
                warning.addressLine2 = "Required Address Line 2";
  
            }
            if (user.addressDetails.pinCode === '' || user.addressDetails.pinCode === null || user.addressDetails.pinCode == undefined ) {
                formIsValid = false;
                warning.pinCode = "Required pinCode";
               
            }
        }

        //Email
        if (user.emailId === '' || user.emailId === null  || user.emailId == undefined) {
            formIsValid = false;
            warning.emailId = "Required Email Id";
            // this.props.IpWarnings_At_Creating_User_Details("Required Email Id", "emailId");
        }
        else {
            let lastAtPos = user.emailId.lastIndexOf('@');
            let lastDotPos = user.emailId.lastIndexOf('.');
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 &&
                user.emailId.indexOf('@@') == -1 &&
                lastDotPos > 2 && (user.emailId.length - lastDotPos) > 2)) {
                formIsValid = false;
                warning.emailId = "Email is not valid"; 
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    }



    SaveUserDetails() {
       
        const User = this.props.UserDetails.CreateUser;
        console.log("Agent Details");
        console.log(User);
        let AccessToken = this.props.LoginDetails.accessToken;

        const EditingUserType = this.props.UserDetails.EditingUserType;

        console.log(" > > > >  > > > >> EditingUserType >> >> > > > > > > ");
        console.log(EditingUserType);
        this.props.SendUserDetailsToDB({ User, AccessToken,EditingUserType });
    }

    StoreStateCities(state) {
        let StatesObj = this.props.OrganizationDetails.OrganizationStoreInfo.statesAndCities;
        {
            Object.keys(StatesObj).map((t, i) => {
                if (t === state) {
                    this.setState({ CitiesOfState: StatesObj[t] });
                }
            } )
        }
    }

  
    render() {
        let StatesObj = this.props.OrganizationDetails.OrganizationStoreInfo.statesAndCities;
        return (
            <div className="animated fadeIn">  
              <CustomerBreadCrumb from="User" />
                    {
                       !this.props.ProgressIndicator.InProgress ? 
                       
                       <Row>
                      
                       <Col xs="12" md="12">
                           <Card>

                               <CardHeader> Add {this.props.UserDetails.EditingUserType} </CardHeader>

                               <CardBody>

                               <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">

                                       <FormGroup row>
                                           <Col md="2">
                                               <Label style={Labelstyle1} htmlFor="agentfullName">User Name {RequireIconForIpFiled()}</Label>
                                           </Col>
                                           <Col xs="12" md="5">
                                               <Input
                                                   style={InputTextStyle}
                                                   onChange={this.handleChange.bind(this, "fullName")}
                                                   value={this.props.UserDetails.CreateUser.fullName != null ? this.props.UserDetails.CreateUser.fullName : ''}
                                                   placeholder= 'Enter Full Name'
                                               />
                                               <FormText color="red"> {this.props.UserDetails.CreateUserDataWarning.fullName} </FormText>
                                           </Col>
                                       </FormGroup>
                                       <FormGroup row>
                                           <Col md="2">
                                               <Label style={Labelstyle1} htmlFor="agentMobileNo">Mobile No {RequireIconForIpFiled()}</Label>
                                           </Col>
                                           <Col xs="12" md="5">
                                               <Input type="text" maxLength={10}
                                                   onChange={this.handleChange.bind(this, "mobileNo")}
                                                   value={this.props.UserDetails.CreateUser.mobileNo != null ? this.props.UserDetails.CreateUser.mobileNo : ''}
                                                   placeholder='Enter Mobile No'
                                                   id='agentMobileNo' />
                                               <FormText
                                                   color="red"> {this.props.UserDetails.CreateUserDataWarning.mobileNo} </FormText>
                                           </Col>
                                       </FormGroup>

                                       <FormGroup row>
                                           <Col md="2">
                                               <Label style={Labelstyle1} htmlFor="agentEmailId">Email Id  {RequireIconForIpFiled()}</Label>
                                           </Col>
                                           <Col xs="12" md="5">
                                               <Input type="email"
                                                   value={this.props.UserDetails.CreateUser.emailId != null ? this.props.UserDetails.CreateUser.emailId : ''}
                                                   onChange={this.handleChange.bind(this, "emailId")}
                                                   placeholder= 'Enter email Id'
                                                   id='agentEmailId' />
                                               <FormText
                                                   color="red">{this.props.UserDetails.CreateUserDataWarning.emailId} </FormText>
                                           </Col>
                                       </FormGroup>

                                      
                                       {/* Below Used Conditional Operator to hide or show the addresDetails fields  */}
                                       {(this.props.UserDetails.EditingUserType == 'Agent') ? <div>
                                           <FormGroup row>
                                               <Col md="2">
                                                   <Label style={Labelstyle1} >Address  {RequireIconForIpFiled()} </Label>
                                               </Col>
                                               <Col xs="12" md="4">

                                                   <Input type="text"
                                                       style={InputTextStyle}
                                                       
                                                       onChange={(txt) => {
                                                           let value = txt.target.value;
                                                           let TitleCaseVal = toTitleCase(value)
                                                           console.log(" / / / / / / / /  // / / / // / / / //   TitleCaseVal of Address:0 ");
                                                           console.log(TitleCaseVal);
                                                           this.props.Save_Creating_User_Details(TitleCaseVal, "addressLine1")
                                                       }
                                                       }
                                                       value={this.props.UserDetails.CreateUser.addressDetails.addressLine1 != null ? this.props.UserDetails.CreateUser.addressDetails.addressLine1 : ''}
                                                       placeholder= 'Enter address Line 1'
                                                       id='agentAddressLine1' />

                                                   <FormText
                                                       color="red"> {this.props.UserDetails.CreateUserDataWarning.addressLine1} </FormText>
                                               </Col>
                                               <Col xs="12" md="4">
                                                   <Input type="text"
                                                       style={InputTextStyle}
                                                       
                                                       onChange={(txt) => {
                                                           let value = txt.target.value;
                                                           let TitleCaseVal = toTitleCase(value)
                                                           this.props.Save_Creating_User_Details(TitleCaseVal, "addressLine2")
                                                       }
                                                       }
                                                       value={this.props.UserDetails.CreateUser.addressDetails.addressLine2 != null ? this.props.UserDetails.CreateUser.addressDetails.addressLine2 : ''}
                                                       placeholder= 'Enter address Line 2'

                                                       id='agentAddressLine2' />
                                                   <FormText
                                                       color="red">{this.props.UserDetails.CreateUserDataWarning.addressLine2} </FormText>
                                               </Col>
                                           </FormGroup>
                                           <FormGroup row>
                                               <Col md="2">
                                                   <Label style={Labelstyle1}></Label>
                                               </Col>
                                               <Col xs="12" md="3">
                                                   <FormText style={{ marginLeft: 15, fontSize: 13 }} > State/Provinence </FormText>
                                                   <Input type="select"
                                                       style={InputTextStyle}
                                                       onChange={(txt) =>
                                                           this.StoreStateCities(txt.target.value) 
                                                       }
                                                   >
                                                       <option value="select">Select State</option>
                                                       {Object.keys(StatesObj).map((t, i) =>
                                                           <option key={i} >{t}</option>)}
                                                   </Input>
                                                   {/* <FormText color="red"> {this.props.UserDetails.EditUserBasicDetails.EditUserDataWarning.addressLine1} </FormText> */}
                                               </Col>
                                               <Col xs="12" md="3">
                                                   <FormText style={{ marginLeft: 15, fontSize: 13 }} > City </FormText>
                                                   <Input type="select"
                                                       style={InputTextStyle}
                                                       onChange={(txt) =>
                                                           
                                                           this.props.Save_Creating_User_Details(txt.target.value, "cityId")

                                                       }
                                                   >
                                                       <option value="select">Select City</option>
                                                       {Object.keys(this.state.CitiesOfState).map((t, i) =>
                                                           <option key={i} value={t} > {this.state.CitiesOfState[t]} </option>)}
                                                   </Input>
                                                </Col>
                                               <Col xs="12" md="3">
                                                   <FormText style={{ marginLeft: 15, fontSize: 13 }} > pinCode </FormText>
                                                   <Input type="text" maxLength={6}

                                                       onChange={this.handleChange.bind(this, "pinCode")}
                                                       value={this.props.UserDetails.CreateUser.addressDetails.pinCode != null ? this.props.UserDetails.CreateUser.addressDetails.pinCode : ''}
                                                       placeholder= 'Enter pinCode'
                                                   />
                                                   <FormText color="red"> {this.props.UserDetails.CreateUserDataWarning.pinCode} </FormText>
                                               </Col>
                                           </FormGroup>
                                       </div>
                                           : null}

                                       <FormGroup row>
                                           <Col md="2">
                                               <Label style={Labelstyle1} htmlFor="file-input">Profile Pic</Label>
                                           </Col>
                                           <Col xs="12" md="4">
                                               <Input type="file"
                                                   onChange={(e) => { this.handleImageChange(e) }}
                                                   id="file-input" name="file-input" />
                                               <FormText color="red"> {this.props.UserDetails.CreateUserDataWarning.picture} </FormText>
                                           </Col>
                                       </FormGroup>
                                       </Form>

                                       <span style={{ marginLeft: '5%', fontSize: 16, color: 'red' }} >
                                       {this.props.UserDetails.UserApiResults.Error}</span>

                               </CardBody>


                               <CardFooter>

                               {/* <Button color="warning" style={{marginRight:20}}
                                   disabled={this.props.UserDetails.UserApiResults.Error !== ''}
                                   onClick={this.contactSubmit.bind(this)}> Save</Button> */}

                                   <LaddaButton       
                                               className="btn btn-warning btn-ladda"
                                               loading={this.props.ProgressIndicator.InProgress}
                                               onClick={this.contactSubmit.bind(this)}
                                               data-color="warning"
                                               data-style={EXPAND_LEFT} 
                                               style={{marginRight:20}}  >
                                        Save
                                   </LaddaButton>

                               <Button color="secondary"
                                   onClick={() => {
                                       let AccessToken = this.props.LoginDetails.accessToken;
                                       this.props.CloseUserSettingsModal(AccessToken), this.setState({ errors: {} })
                                       this.props.history.goBack();
                                   }}>Cancel</Button>

                               </CardFooter>

                           </Card>
                       </Col>
                   </Row>
                       : 
                       
                    <Row style={{margin:"13%"}}>
                       {DisplaySpinner()} 
                   </Row>

                     }

                      
            </div>                   
            ) 
        }  


}

const mapStateToProps = ({ userManagementReducer, Authentication }) => {
    const { UserDetails, OrganizationDetails, role,ProgressIndicator } = userManagementReducer;
    const { LoginDetails } = Authentication;
    return { UserDetails, OrganizationDetails, LoginDetails, role ,ProgressIndicator};
};

export default connect(mapStateToProps, {
    CloseUserSettingsModal, SendUserDetailsToDB,
    Save_Creating_User_Details, IpWarnings_At_Creating_User_Details,clearResponseOfUserApis

})(Add_New_User_Details);



function RequireIconForIpFiled() {
    return <span style={{ color: 'red', marginLeft: 5 }} > *</span>

}
