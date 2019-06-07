import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from '../../views/Header/Header';
import HeaderDropdown from '../../views/Header/HeaderDropdown';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';
import IfscManagement from '../../views/Transactions/IfscManagement';

import BenificiaryBank from '../../views/BankManagement/BenificiaryBank';
import MoneyTransfer from '../../views/BankManagement/MoneyTransfer';



import DashboardNew from '../../views/Dashboard/DashboardNew';


import CommissionMgmt from '../../views/Transactions/CommissionMgmt';

import CommissionMeter from '../../views/Transactions/CommissionMeter';

import CreateCommission from '../../views/Transactions/CreateCommission';
import Role from '../../views/UsersManagement/Role';
import Distributor from '../../views/UsersManagement/Distributor';


// import AsyncExample from '../../views/UsersManagement/AsyncExample';

// import cashDeposit from '../../views/Transactions/cashDeposit';
import Agent from '../../views/UsersManagement/Agent';
import FSE from '../../views/UsersManagement/FSE';
import AddUser from '../../views/UsersManagement/User_Details_Edit_Modals/Add_New_User_Details';
import EditUser from '../../views/UsersManagement/User_Details_Edit_Modals/Edit_User_Basic_Details';

// import CME from '../../views/UsersManagement/CME';

import CreateOrganization from '../../views/UsersManagement/CreateOrganization';
// import CreateDistributor from '../../views/UsersManagement/CreateDistributor'

import PermissionsSettings from '../../views/UsersManagement/PermissionsSettings';
import EditDistributorOrRetailerBank from '../../views/UsersManagement/EditDistributorOrRetailerBank';

import { connect } from 'react-redux';

import AdminRetailer from '../../views/UsersManagement/AdminRetailer';



import TransactionHistory from '../../views/Reports/TransactionHistory/TransactionHistory';

import CashInTransactionHistory from '../../views/Reports/TransactionHistory/CashInTransactionHistory';

import SupportMain from '../../views/Support/SupportMain';


import LedgerHistoryOld from '../../views/Reports/LedgerHistory/LedgerHistory';

// import Ratecard from '../../views/BankManagement/RateCard';
// import RatecardHome from '../../views/BankManagement/RateCardHome';
import AddRatecard from '../../views/BankManagement/AddRateCard';

import PrintStatementOnMTansfer from '../../views/BankManagement/MoneyTrasferChildComponents/PrintStatementOnMTansfer';

import MoneyTransferNew from '../../views/BankManagement/MoneyTransferNew';

import CutAndPayModal from '../../views/Transactions/CutAndPayModal';

import GlobalModals from '../../views/GlobalModals'

import cashDeposit from '../../views/Transactions/cashDeposit';
import PendingDeposits from '../../views/Transactions/PendingDeposits';

import EditDocuments from '../../views/UsersManagement/Org_Users_Edit_Modals/Edit_Org_Documents';

import EditOrgBasicDetails from '../../views/UsersManagement/Org_Users_Edit_Modals/Org_Edit_Basic_Details';


import ApproveRetailer from '../../views/UsersManagement/ApproveRetailer';


import PendingDistributor from '../../views/UsersManagement/ApproveDistributor';
import RejectedUsers from '../../views/UsersManagement/RejectedUsers';

import APIs from '../../views/BankManagement/Apis';


import MoneyTrasHome from '../../views/BankManagement/MoneyTransfer/Home';
import MTCustomerHome from '../../views/BankManagement/MoneyTransfer/customerHome';
import Disclaimer from '../../views/BankManagement/MoneyTransfer/AllChildComponents/Disclaimer';

import ExpandableTable from '../../views/BankManagement/MoneyTransfer/AllChildComponents/ExpandabletableRow';


// Bank deposit Slip Components
import PaymentReciept from '../../views/BankManagement/MoneyTransfer/PaymentReciept';
import AdminDepositSlips from '../../views/BankManagement/BankDepositSlipsComponents_FSE/AdminDepositSlips';
import DepositSlips from '../../views/BankManagement/BankDepositSlipsComponents_FSE/DepositSlips';
import ViewDepositedSlip from '../../views/BankManagement/BankDepositSlipsComponents_FSE/ViewDepositedSlip';
import UploadSlip from '../../views/BankManagement/BankDepositSlipsComponents_FSE/UploadSlip';
// Bank deposit Slip Components for Retailer
import Deposits from '../../views/BankManagement/BankDepositComponents_Tenant/TenantDepositSlips';
import Deposit from '../../views/BankManagement/BankDepositComponents_Tenant/TenantUploadSlip';
import CDMStuck from '../../views/BankManagement/BankDepositComponents_Tenant/ApproveCDMStuck';
import ReportCDMStuck from '../../views/BankManagement/BankDepositComponents_Tenant/ReportCDMStuck';

import TransactionDescriptionNdOtpVerify from '../../views/BankManagement/MoneyTransfer/TransactionDescription';
import TransactionSuccess from '../../views/BankManagement/MoneyTransfer/TransactionSuccess';

import RateCardHome from '../../views/BankManagement/RateCard/RateCardHome';
import RateCardMain from '../../views/BankManagement/RateCard/RateCardMain';

import FUS from '../../views/UsersManagement/Pages/FUS';

import Admin from '../../views/UsersManagement/Pages/AdminComponents/Admin';
import AddBank from '../../views/UsersManagement/Pages/AdminComponents/Add_Bank';
import UpdateBank from '../../views/UsersManagement/Pages/AdminComponents/Update_Bank';
import Banks from '../../views/UsersManagement/Pages/AdminComponents/Banks';
import ApiPool from '../../views/UsersManagement/Pages/AdminComponents/API_Pool';
import AddAPI from '../../views/UsersManagement/Pages/AdminComponents/Add_API';
import UpdateAPI from '../../views/UsersManagement/Pages/AdminComponents/Update_API';
import APITransactionHistory from '../../views/UsersManagement/Pages/AdminComponents/APITransactionHistory';
import BanksTransactionHistory from '../../views/UsersManagement/Pages/AdminComponents/BanksTransactionHistory';
import AccountingTransaction from '../../views/UsersManagement/Pages/AdminComponents/AccountingTransactions';
import DetailsTransaction from '../../views/UsersManagement/Pages/AdminComponents/DetailsTransaction';
import RetailerTransactions from '../../views/UsersManagement/Pages/AdminComponents/RetailerTransactions';
import RetailerIncentiveMonitoring from '../../views/UsersManagement/Pages/AdminComponents/RetailerIncentiveMonitoring';
import RetailerFSECashIn from '../../views/UsersManagement/Pages/AdminComponents/Retailer_FSE_CashIn';



import FsePage from '../../views/UsersManagement/Pages/FSEComponents/FseLoginMenu';
import FSELedgerHistory from '../../views/UsersManagement/Pages/FSEComponents/FSELedgerHistory';
import FSETransactionHistory from '../../views/UsersManagement/Pages/FSEComponents/FSETransactionHistory';
import FSECashInHistory from '../../views/UsersManagement/Pages/FSEComponents/FSECashInHistory';

import RetailerPage from '../../views/UsersManagement/Pages/RetailerComponents/RetailerLoginMenu';
import RetailerLedgerHistory from '../../views/UsersManagement/Pages/RetailerComponents/RetailerLedgerHistory';
import RetailerTransactionHistory from '../../views/UsersManagement/Pages/RetailerComponents/RetailerTransactionHistory';
import RetailerCashInHistory from '../../views/UsersManagement/Pages/RetailerComponents/RetailerCashInHistory';

import AgentPage from '../../views/UsersManagement/Pages/AgentComponents/AgentLoginMenu';
import AsyncExample from '../../views/UsersManagement/AsyncExample';
class Full extends Component {

  componentWillMount() {
    console.log(" ----------------------------------  Full.Js componentWillMount ------------------   ");
  }

  componentDidUpdate() {
    console.log("  .  .  .  .  .  .  .  .  .  .  .   .  /  /  /  /  /  /  /  /  /  /  /  /  Component Did Update In Full.js File .. .. // // ");
  }
  // this.props.logOut ? <Redirect to='/' /> :
  render() {
    return <div className="app">
      <Header />
      <div className="app-body"style={{marginTop:"10%",marginBottom:"10%",userSelect:"none"}}>
        {/* <Sidebar {...this.props} /> */}
        <main className="main" style={{marginLeft:10}}>
          {/* <Breadcrumb /> */}
          <Container style={{ marginTop: 15 }} fluid>
            <Switch>
              <Route path="/Dashboard" name="DashboardNew" component={DashboardNew} />
            </Switch>
            <Switch>
              <Route path="/Role" name="Role" component={Role} />
              <Route path="/FSE" name="FSE" component={FSE} />
              <Route path="/AddUser" name="AddUser" component={AddUser} />
              <Route path="/EditUser" name="EditUser" component={EditUser} />
         
              {/* <Route path="/CME" name="CME" component={CME} /> */}
              <Route path="/Distributor" name="Distributor" component={Distributor} />

              <Route path="/AsyncExample" name="AsyncExample" component={AsyncExample} />

              <Route path="/Agent" name="Agent" component={Agent} />
              <Route path="/UsersManagement/PermissionsSettings" name="PermissionsSettings" component={PermissionsSettings} />
              <Route path="/CreateOrganization" name="CreateOrganization" component={CreateOrganization} />
              {/* <Route path="/CreateDistributor" name="CreateDistributor" component={CreateDistributor} /> */}
              <Route path="/AddRetailer" name="AddRetailer" component={CreateOrganization} />
              <Route path="/EditDistributorOrRetailerBank" name="EditDistributorOrRetailerBank" component={EditDistributorOrRetailerBank} />
              <Route path="/AdminRetailer" name="AdminRetailer" component={AdminRetailer} />
              <Route path="/LedgerHistoryOld" name="LedgerHistoryOld" component={LedgerHistoryOld} />
              
              <Route path="/cashDeposit" name="cashDeposit" component={cashDeposit} />
              <Route path="/PendingDeposits" name="PendingDeposits" component={PendingDeposits} />
              <Route path="/EditDocuments" name="EditDocuments" component={EditDocuments} />
              <Route path="/EditOrgBasicDetails" name="EditOrgBasicDetails" component={EditOrgBasicDetails} />
              
              <Route path='/Header' name="Header" component={Header} ></Route>
              <Route path='/HeaderDropdown' name="HeaderDropdown" component={HeaderDropdown} ></Route>
              <Route path='/PendingRetailer' name="ApproveRetailer" component={ApproveRetailer} ></Route>
              <Route path='/ApproveRetailer' name="ApproveRetailer" component={ApproveRetailer} ></Route>

              {/* <Route path='/RetailersOfDistributor' name="RetailersOfDistributor" component={RetailersOfDistributor} ></Route> */}
              <Route path='/PendingDistributor' name="PendingDistributor" component={PendingDistributor} ></Route>
              <Route path='/RejectedUsers' name="RejectedUsers" component={RejectedUsers} ></Route>
            </Switch>

            <Switch>
              <Route path="/IfscManagement" name="IfscManagement" component={IfscManagement} />
            </Switch>

            <Switch>
              <Route path="/TransactionHistory" name="TransactionHistory" component={TransactionHistory} />
              <Route path="/CashInTransactionHistory" name="CashInTransactionHistory" component={CashInTransactionHistory} />
             
              {/* <Route path="/RateCard" name="RateCard" component={Ratecard} /> */}
              <Route path="/RateCardHome" name="RateCardHome" component={RateCardHome} />
              <Route path="/RateCardMain" name="RateCardMain" component={RateCardMain} />
        

              <Route path="/AddRateCard" name="AddRateCard" component={AddRatecard} />
            </Switch>

            <Switch path="/MoneyTransfer">
              {/* <Route path="/BankManagement/Benificiary" name="BankMng" component={BenificiaryBank} /> */}
              {/* <Route path="/MoneyTransfer" name="MoneyTrnsfr" component={MoneyTransfer} /> */}
              <Route path="/PrintStatementOnMTansfer" name="PrintStatementOnMTansfer" component={PrintStatementOnMTansfer} />
              <Route path="/MoneyTransferNew" name="MoneyTrnsfr" component={MoneyTransferNew} />
              {/* <Route path='/PrintStatementOnMTansfer' name="PrintStatementOnMTansfer" component={PrintStatementOnMTansfer}/> */}
              <Route path="/MoneyTransfer" name="MoneyTrasferHome" component={MoneyTrasHome} />
              <Route path="/ExpandableTable" name="ExpandableTable" component={ExpandableTable} />
              <Route path="/Customer" name="MTCustomerDetails" component={MTCustomerHome} />
              <Route path="/MoneyTransferOtpVerification" name="MoneyTransferOtpVerification" component={TransactionDescriptionNdOtpVerify} />
              <Route path="/MoneyTrasferSuccess" name="ConfirmationSuccess" component={TransactionSuccess} />

              <Route path="/Disclaimer" name="Disclaimer" component={Disclaimer} />

              {/* BankDepositSlip Comp */}
              <Route path="/PaymentReciept" name="PaymentReciept" component={PaymentReciept} />
              <Route path="/AdminDepositSlips" name="AdminDepositSlip" component={AdminDepositSlips} />
              <Route path="/DepositSlips" name="DepositSlips" component={DepositSlips} />
              <Route path="/ViewDepositedSlip" name="ViewDepositedSlip" component={ViewDepositedSlip} />
              <Route path="/UploadSlip" name="UploadSlip" component={UploadSlip} />

              
              <Route path="/Deposits" name="Deposits" component={Deposits} />
              <Route path="/Deposit" name="Deposit" component={Deposit} />
              <Route path="/CDMStuck" name="CDMStuck" component={CDMStuck} />
              <Route path="/ReportCDMStuck" name="ReportCDMStuck" component={ReportCDMStuck} />
      
              <Route path="/FUS" name="FUS" component={FUS} />
              <Route path="/Admin" name="Admin" component={Admin} />
              <Route path="/Banks" name="Banks" component={Banks} />
              <Route path="/AddAPI" name="AddAPI" component={AddAPI} />
              <Route path="/UpdateAPI" name="UpdateAPI" component={UpdateAPI} />
              <Route path="/ApiPool" name="ApiPool" component={ApiPool} />
              <Route path="/AddBank" name="Admin" component={AddBank} />
              <Route path="/UpdateBank" name="Admin" component={UpdateBank} />
              <Route path="/APITransactionHistory" name="APITransactionHistory" component={APITransactionHistory} />
              <Route path="/BanksTransactionHistory" name="BanksTransactionHistory" component={BanksTransactionHistory} />
              <Route path="/AccountingTransaction" name="AccountingTransaction" component={AccountingTransaction} />
              <Route path="/DetailsTransaction" name="DetailsTransaction" component={DetailsTransaction} />
              <Route path="/RetailerTransactions" name="RetailerTransactions" component={RetailerTransactions} />
              <Route path="/RetailerIncentiveMonitoring" name="RetailerIncentiveMonitoring" component={RetailerIncentiveMonitoring} />
              <Route path="/RetailerFSECashIn" name="RetailerFSECashIn" component={RetailerFSECashIn} />
              
              
              <Route path="/FsePage" name="FsePage" component={FsePage} />
              <Route path="/FSELedgerHistory" name="FSELedgerHistory" component={FSELedgerHistory} />
              <Route path="/FSETransactionHistory" name="FSETransactionHistory" component={FSETransactionHistory} />
              <Route path="/FSECashInHistory" name="FSECashInHistory" component={FSECashInHistory} />


              <Route path="/RetailerPage" name="RetailerPage" component={RetailerPage} />
              <Route path="/RetailerLedgerHistory" name="RetailerLedgerHistory" component={RetailerLedgerHistory} />
              <Route path="/RetailerTransactionHistory" name="RetailerTransactionHistory" component={RetailerTransactionHistory} />
              <Route path="/RetailerCashInHistory" name="RetailerCashInHistory" component={RetailerCashInHistory} />


              
              <Route path="/AgentPage" name="AgentPage" component={AgentPage} />
              
            
            </Switch>

            <Switch>
              <Route path="/Commissions/Commissions" name="Commission" component={CommissionMgmt} />
              <Route path="/CommissionMeter" name="Commission" component={CommissionMeter} />
              <Route path="/Commissions/Create" name="CreateCommission" component={CreateCommission} />
              <Route path="/Commissions/CutAndPayModal" name="CutAndPayModal" component={CutAndPayModal} />
              <Route path="/Commissions/CutAndPayModal" name="CutAndPayModal" component={CutAndPayModal} />
            </Switch>

            <Switch>
              <Route path="/apis" name="APIs" component={APIs} />
            </Switch>
            
            
        
          </Container>
        </main>
        {/* <Aside /> */}
        {/* <GlobalModals /> */}
      </div>

      <Footer />
    </div>
  }
}

const mapStateToProps = ({ Authentication, userManagementReducer }) => {
  const { LoginDetails, logOut } = Authentication;
  return { LoginDetails, logOut };
};

export default connect(mapStateToProps, {

})(Full);
