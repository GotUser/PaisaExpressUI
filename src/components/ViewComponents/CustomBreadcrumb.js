import React, { Component } from 'react';
import {
    Badge, Row, Col, Card, CardHeader, CardBody, Table, Pagination, PaginationItem,
    PaginationLink, Button, Label, Input, Breadcrumb, BreadcrumbItem
} from 'reactstrap';

import { connect } from 'react-redux';

import { Route, Link, Switch } from 'react-router-dom';
import Role from '../../views/UsersManagement/Role';

class CustomBreadcrumb extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDates: '',
            endDates: '',
            focusedInput: ''

        }
    }

    BreadcrumbContent() {
  
        let Role = localStorage.getItem('UserRole');
        Role=="Retailer" ? Role= "RetailerPage": 
        Role=="Admin" ? Role= "Admin":
        Role=="Agent" ? Role= "AgentPage":
        Role=="FSE" ? Role= "FsePage":
        Role=="Distributor" ? Role= "DistributorPage":null
        let from = this.props.from;
        console.log(from);
        let PresentCreatingOrgType = this.props.OrganizationDetails.PresentCreatingOrgType;
        if (from === 'Dashboard') {
            return <BreadcrumbItem>
                    Home 
                    </BreadcrumbItem>
        }
        else if (from === 'TransactionHistory') {
            return  <BreadcrumbItem>
                        <Link to='/Dashboard'>
                            Home 
                        </Link> / TransactionHistory
                    </BreadcrumbItem>;
        }
        else if (from === 'AdminUser') {
            if (localStorage.getItem('UserRole') === 'Admin') {
                return  <BreadcrumbItem> 
                            <Link to='/Admin'>
                                Home 
                            </Link> / Management / AdminUser
                        </BreadcrumbItem>
            }
        }
        else if (from === 'CashInHistory') {
            if (localStorage.getItem('UserRole') === 'Admin') {
                return <BreadcrumbItem> 
                            <Link to='/Admin'>
                                Home 
                            </Link> / CashIn History
                        </BreadcrumbItem>
            }

            else if (localStorage.getItem('UserRole') === 'Distributor') {
                return      <BreadcrumbItem> 
                                <Link to='/Dashboard'>
                                    Home 
                                </Link> / CashIn History
                            </BreadcrumbItem>
            }
        }
        else if (from === 'LedgerHistory') {
            return <BreadcrumbItem> 
                        <Link to={Role}>
                        Home 
                        </Link> / Ledger History
                    </BreadcrumbItem>
        }else if (from === 'Role') {
            return this.HomelinkBreasCrumb();
        }
        else if (from === 'Retailer' || from === 'AdminRetailer') {
            return  <BreadcrumbItem> 
                        <Link to={Role}>
                        Home 
                        </Link> / Retailers
                    </BreadcrumbItem>
        }
        else if (from === 'Distributor') {
            return this.DistributorBreadcrumb();
        }
        else if (from === 'Agent' ) {

            return this.AgentBreadcrumb(Role);
        }  else if ( from === 'FSE') {
            return this.AgentBreadcrumb(Role);
        }
        else if (from === 'Support') {
            return this.SupportBreadcrumb();
        }
        else if (from === 'UserRegistration') {
            if (this.props.fromcomponent === 'AdminRetailer') {
                return      <BreadcrumbItem> 
                                <Link to='/Dashboard'>
                                 Home 
                                </Link> / 
                                <Link to='/AdminRetailer'>
                                 Retailers
                                </Link> / Add Retailer
                            </BreadcrumbItem>;
        }else if (this.props.fromcomponent === 'Distributor') {
                return      <BreadcrumbItem> 
                                <Link to='/Dashboard'>
                                Home 
                                    </Link> / <Link to='/Distributor'>
                                Distributor
                                    </Link> / Create Organization
                            </BreadcrumbItem>;
            }
        }else if (from === 'MoneyTransfer') {
            return this.HomelinkBreasCrumb();           
        } else if (from === 'EditDistributorOrRetailerBank') {
                    if (this.props.fromcomponent === 'Distributor') {
                        return this.EditBankFromDistributorBreasCrumb();
                    }
                    else if (this.props.fromcomponent === 'AdminRetailer') {
                        return  <BreadcrumbItem> 
                                        <Link to='/Dashboard'>
                                            Home 
                                        </Link> /
                                        <Link to='/AdminRetailer'>
                                            Retailers
                                        </Link> / EditOrAddBank
                                </BreadcrumbItem>
                    }
                    else if (this.props.fromcomponent === 'Retailer') {
                        return this.EditBankFromRetailerBreasCrumb();
                    }
        } else if (from === 'CashDeposit') {
                return     <BreadcrumbItem> 
                                    <Link to='/Dashboard'>
                                    Home 
                                    </Link> / Transactions /{this.props.from}
                            </BreadcrumbItem>
        } else if (from === 'EditDocuments') {
            return          <BreadcrumbItem> 
                                    <Link to='/Dashboard'>
                                        Home 
                                    </Link> / <Link to='/AdminRetailer'>
                                            {
                                            PresentCreatingOrgType == "AdminRetailer" ?   "Retailers" : 
                                            PresentCreatingOrgType == "PendingRetailer" ? "Approve Retailer" :
                                            PresentCreatingOrgType == "Distributor" ? "Distributor" :
                                            PresentCreatingOrgType == "PendingDistributor" ? "Approve Distributor" :
                                            null
                                            } 
                                    </Link> / {this.props.from}
                            </BreadcrumbItem>
        }else if (from === 'EditBasicDetails') {
            return              <BreadcrumbItem> 
                                        <Link to='/Dashboard'>
                                            Home 
                                        </Link> / <Link to='/AdminRetailer'>
                                            {
                                            PresentCreatingOrgType == "AdminRetailer" ?   "Retailers" : 
                                            PresentCreatingOrgType == "PendingRetailer" ? "Approve Retailer" :
                                            PresentCreatingOrgType == "Distributor" ? "Distributor" :
                                            PresentCreatingOrgType == "PendingDistributor" ? "Approve Distributor" :
                                            null
                                            } 
                                        </Link> / {this.props.from}
                                </BreadcrumbItem>
        }  
        else if(from==='User') {
                return          <BreadcrumbItem> 
                                    <Link to='/Dashboard'>
                                        Home  
                                    </Link>
                                    <Link to={"/"+this.props.UserDetails.EditingUserType}>
                                        / {this.props.UserDetails.EditingUserType}  
                                    </Link> 
                                        / {this.props.UserDetails.EditUserClicked ? "Edit" : "Add"}  {this.props.UserDetails.EditingUserType}
                                </BreadcrumbItem>
        }
        else if (from === 'PendingUsers') {
            return                  <BreadcrumbItem>
                                        <Link to='/Dashboard'>
                                        Home 
                                        </Link> / Pending Users
                                    </BreadcrumbItem>
        } else if (from === 'ApproveRetailer') {
            return                  <BreadcrumbItem>
                                        <Link to='/Admin'>
                                        Home 
                                        </Link> / Approve Retailer
                                    </BreadcrumbItem>
        } else if (from === 'ApproveDistributor') {
            return                  <BreadcrumbItem>
                                        <Link to='/Admin'>
                                        Home 
                                        </Link> / Approve Distributor
                                    </BreadcrumbItem>
        }

        else if (from === 'APIs') {
                return      <BreadcrumbItem>
                            <Link to='/Dashboard'>
                                Home 
                                    </Link> / MoneyTrasfer APIs
                            </BreadcrumbItem>
        } else if (from === 'pendingDeposits') {
            return      <BreadcrumbItem>
                                    <Link to='/Dashboard'>
                                    Home 
                                    </Link> / Pending Deposits
                        </BreadcrumbItem>
        } else if (from === 'RejectedUsers') {
            return <BreadcrumbItem>
                                    <Link to='/Admin'>
                                    Home 
                                    </Link> 
                                    / Rejected Users
                    </BreadcrumbItem>
        } else if (from === 'RateCardHome') {
            return      <BreadcrumbItem> 
                                <Link to='/Admin'>
                                Home 
                                </Link> / All RateCards
                        </BreadcrumbItem>
        } else if (from === 'RateCard') {
            return <BreadcrumbItem> <Link to='/Admin'>
                                Home 
                                </Link>/<Link to='/RatecardHome'>
                                All Ratecards
                                </Link> / Rate Card
                    </BreadcrumbItem>
        } else if (from === 'MTcustomer') {
            return <BreadcrumbItem> <Link to='/Dashboard'>
                            Home 
                            </Link>/<Link to='/MoneyTransfer'>
                            MoneyTransfer
                            </Link> / Customer Details

                            </BreadcrumbItem>
        } else if (from === 'MThome') {
            return <BreadcrumbItem> <Link to={Role}>
                            Home 
                            </Link> / Money Transfer
                            </BreadcrumbItem>
        }
 
        else if(from==='DepositSlips'){
            return      <BreadcrumbItem> <Link to={Role}>
                        Home
                        </Link> / Deposit Slips
                        </BreadcrumbItem>
        } 
        
        else if(from==='UploadSlip') {
            return <BreadcrumbItem> 
                            <Link to={Role}>
                            Home 
                            </Link>
                            /
                            <Link to='/DepositSlips'>
                                Deposit Slips 
                            </Link> 
                            / Upload Slip
                    </BreadcrumbItem>
            }else if(from==='AdminDepositSlips') {
                    return    <BreadcrumbItem> 
                                <Link to={Role}>
                                Home 
                                </Link>
                                 / Admin Deposit Slips 
                               
                            </BreadcrumbItem>
           }else if(from==='ViewDepositedSlip') {
                            let roleName=this.props.LoginDetails.roleName;
                            return <BreadcrumbItem> 
                                            <Link to={Role}>
                                            Home 
                                            </Link>
                                            /
                                            <Link to='/AdminDepositSlips'>
                                               { roleName == "Admin" ?  "Admin Deposit Slips"  :  "Deposit Slips"  } 
                                            </Link> 
                                                / View Deposited Slip
                                </BreadcrumbItem>
            }else if(from==='AccountingTransaction') {
                return <BreadcrumbItem> 
                                <Link to={Role}>
                                Home 
                                </Link>
                                / Accounting Transactions          
                    </BreadcrumbItem>
            }else if(from==='RetailerTransactions') {
                    return <BreadcrumbItem> 
                                    <Link to={Role}>
                                    Home 
                                    </Link>
                                    / Retailer Transactions          
                        </BreadcrumbItem>
            }else if(from==='RetailerTransactions') {  
                return <BreadcrumbItem> 
                                <Link to={Role}>
                                Home 
                                </Link>
                                / Retailer Transactions          
                    </BreadcrumbItem>
            }else if(from==='Banks') { 
                    return <BreadcrumbItem> 
                                    <Link to={Role}>
                                    Home 
                                    </Link>
                                    / Banks          
                        </BreadcrumbItem>
            } else if(from==='BanksTransactionHistory') { 
                        return <BreadcrumbItem> 
                                        <Link to={Role}>
                                        Home 
                                        </Link>
                                        / Banks Transaction History          
                            </BreadcrumbItem>
            } else if(from==='APIPool') { 
                return <BreadcrumbItem> 
                                <Link to={Role}>
                                Home 
                                </Link>
                                / API Pool         
                    </BreadcrumbItem>
            }else if(from==='DetailsTransaction') { 
                return <BreadcrumbItem> 
                                <Link to={Role}>
                                Home  
                                </Link> 
                                <Link to="/AccountingTransaction">
                                /  Accounting Transactions
                                </Link>
                                /  Transaction Details        
                    </BreadcrumbItem>
            }
    }

    EditBankFromRetailerBreasCrumb() {

        if (localStorage.getItem('UserRole') === 'Admin') {
            return <BreadcrumbItem>
                                    <Link to='/Dashboard'>
                                    Home 
                                    </Link> / <Link to='/Retailer'>
                                    Retailers
                                    </Link> / EditOrAddBank
                   </BreadcrumbItem>
        }
        else if (localStorage.getItem('UserRole') === 'Retailer') {
            return <BreadcrumbItem> 
                                    <Link to='/Dashboard'>
                                    Home 
                                    </Link> /<Link to='/Retailer'>
                                    Retailers
                                    </Link> / EditOrAddBank
                   </BreadcrumbItem>
        }
        else if (localStorage.getItem('UserRole') === 'Distributor') {
            return <BreadcrumbItem> 
                                    <Link to='/Dashboard'>
                                    Home
                                    </Link> / <Link to='/Retailer'>
                                    Retailers
                                    </Link> / EditOrAddBank
                   </BreadcrumbItem>
        }
        else if (localStorage.getItem('UserRole') === 'Agent') {
            return <BreadcrumbItem> 
                                    <Link to='/Dashboard'>
                                    Home
                                    </Link> / <Link to='/Retailer'>
                                    Retailers
                                    </Link> / EditOrAddBank
                   </BreadcrumbItem>
        }
    }

    EditBankFromDistributorBreasCrumb() {

        if (localStorage.getItem('UserRole') === 'Admin') {
            return <BreadcrumbItem> 
                                    <Link to='/Dashboard'>
                                    Home
                                    </Link> / <Link to='/Distributor'>
                                    Distributors
                                    </Link> / EditOrAddBank
                   </BreadcrumbItem>
        }
        else if (localStorage.getItem('UserRole') === 'Retailer') {
            return <BreadcrumbItem>
                                    <Link to='/Dashboard'>
                                    Home
                                    </Link> /<Link to='/Distributor'>
                                    Distributors
                                    </Link> / EditOrAddBank
                   </BreadcrumbItem>
        }
        else if (localStorage.getItem('UserRole') === 'Distributor') {
            return <BreadcrumbItem> <Link to='/Dashboard'>
                                    Home
                                    </Link> / <Link to='/Distributor'>
                                     Distributors
                                    </Link> / EditOrAddBank
                   </BreadcrumbItem>
        }
        else if (localStorage.getItem('UserRole') === 'Agent') {
            return <BreadcrumbItem> <Link to='/Dashboard'>
                                    Home
                                    </Link> / <Link to='/Distributor'>
                                        Distributors
                                    </Link> / EditOrAddBank
                   </BreadcrumbItem>
        }


    }



    HomelinkBreasCrumb() {

        // console.log("3");
        if (localStorage.getItem('UserRole') === 'Admin') {
            return  <BreadcrumbItem> 
                                    <Link to='/Admin'>
                                        Home
                                    </Link> {this.props.contentPath}
                    </BreadcrumbItem>
        }
        else if (localStorage.getItem('UserRole') === 'Retailer') {
            return  <BreadcrumbItem> 
                                    <Link to='/RetailerPage'>
                                    Home
                                    </Link> {this.props.contentPath}
                    </BreadcrumbItem>
        }
        else if (localStorage.getItem('UserRole') === 'Distributor') {
            return  <BreadcrumbItem> 
                                    <Link to='/Dashboard'>
                                    Home
                                    </Link> 
                                    {this.props.contentPath}
                    </BreadcrumbItem>
        }
        else if (localStorage.getItem('UserRole') === 'Agent') {
            return <BreadcrumbItem> 
                                    <Link to='/AgentPage'>
                                    Home
                                    </Link> {this.props.contentPath}
                    </BreadcrumbItem>
        }
        
    }
   
    DistributorBreadcrumb() {
        return      <BreadcrumbItem> 
                                <Link to='/Dashboard'>
                                Home
                                </Link> / Management / Distributors
                   </BreadcrumbItem>
    }
    AgentBreadcrumb(Role) {
       

        return      <BreadcrumbItem> 
                                <Link to= {Role} >
                                Home
                                </Link> / Management / {this.props.from}
                    </BreadcrumbItem>

    }
    SupportBreadcrumb() {
        if (localStorage.getItem('UserRole') === 'Admin') {
            return <BreadcrumbItem> 
                                <Link to='/Admin'>
                                Home
                                </Link> / Support
                   </BreadcrumbItem>
        }
        else if (localStorage.getItem('UserRole') === 'Retailer') {
            return <BreadcrumbItem> 
                                <Link to='/RetailerPage'>
                                Home
                                </Link> / Support
                   </BreadcrumbItem>
        }
        else if (localStorage.getItem('UserRole') === 'Distributor') {
            return <BreadcrumbItem> 
                                <Link to='/Dashboard'>
                                Home
                                </Link> / Support
                   </BreadcrumbItem>
        }
        else if (localStorage.getItem('UserRole') === 'Agent') {
            return <BreadcrumbItem> 
                                <Link to='/AgentPage'>
                                Home
                                </Link> / Support
                   </BreadcrumbItem>
        }
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Breadcrumb style={{ marginLeft: -40,marginTop:40 }} >
                    {this.BreadcrumbContent()}
                </Breadcrumb>
            </div>
        )
    }
}

const mapStateToProps = ({ reportReducer, userManagementReducer,Authentication }) => {
    const { OrganizationDetails,UserDetails } = userManagementReducer;
    const { lpbAdminTrans } = reportReducer;
    const { LoginDetails } = Authentication;
    return { lpbAdminTrans, OrganizationDetails , UserDetails, LoginDetails};
};

export default connect(mapStateToProps, {

})(CustomBreadcrumb);


