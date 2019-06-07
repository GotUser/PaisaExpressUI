import { combineReducers } from 'redux';
import transactionReducer from '../src/views/Transactions/TransactionsReducer';
import UserManagementReducer from './views/UsersManagement/UserManagementReducer';
import AuthenticationReducer from './views/Authentication/AuthenticationReducer';
import BankManagementReducer from './views/BankManagement/BankManagementReducer';
import reportReducer from './views/Reports/ReportsReducer';
import supportReducer from './views/Support/SupportReducer';


export default combineReducers({
  transaction: transactionReducer,
  userManagementReducer: UserManagementReducer,
  Authentication: AuthenticationReducer,
  bankManagement: BankManagementReducer,
  reportReducer: reportReducer,
  supportReducer: supportReducer
});



