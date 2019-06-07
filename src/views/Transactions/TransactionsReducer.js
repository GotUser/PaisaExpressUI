import {

  OPEN_OR_CLOSE_EDIT_BANKDETAILS_MODAL,
  OPEN_OR_CLOSE_DELETE_BANKDETAILS_MODAL,

  STORE_EDITED_BANK_DETAILS_SUCCESSFYLLY,
  STORE_EDITED_BANK_DETAILS_FAILURE,

  GET_ALL_COMMISSIONS,
  GET_ALL_COMMISSIONS_SUCCESS,
  GET_ALL_COMMISSIONS_FAIL,
  GET_COMMISSION_BY_ID,
  GET_COMMISSION_BY_ID_SUCCESS,
  GET_COMMISSION_BY_ID_FAIL,
  DELETE_COMMISSION,
  DELETE_COMMISSION_SUCCESS,
  DELETE_COMMISSION_FAIL,
  NEW_COMMISSION,
  ADD_COMMISSION_FAIL,
  ADD_COMMISSION_SUCCESS,
  ADD_COMMISSION,


  GET_RATE_CARD,
  GET_RATE_CARD_SUCCES,
  GET_RATE_CARD_FAIL,

  UPLOAD_CHANGED_RATE_CARD,
  UPLOAD_CHANGED_RATE_CARD_SUCCESS,
  UPLOAD_CHANGED_RATE_CARD_FAIL,

  RESET_API_RESULT_PROP,

  Add_NEW_ROW_TO_RATE_CARD,
  EDIT_RATE_CARD_AMOUNT,
  EDITING_RATE_CARD_CHARGES_AND_INCENTIVE,
  REMOVE_RATE_CARD_ROW,
  RATE_CARD_AMOUNT_ERRORS_TO_DISPLAY,
  GET_BANK_DETAILS_OF_CASHDEPOSIT_SUCCESS,
  OPEN_RATE_CARD_COMP,
  SAVE_RATE_CARD_NAME,
  GET_RATE_CARD_TEMP,
  GET_RATE_CARD_TEMP_SUCCES,
  GET_RATE_CARD_TEMP_FAIL,
  SAVE_DEPOSIT_COMP_IP_DETAILS,
  GET_PENDING_DEPOSITS_LIST,
  GET_PENDING_DEPOSITS_LIST_SUCCESS,
  ACCEPT_PENDING_DEPOSIT_SUCCESS,
  GET_RATE_CARDS_LIST_SUCCESS,
  GENERATE_OTP_ON_FSE_DEPOSIT_SUCCESS,
  SHOW_RESENT_OTP_OPTION,
  RESET_RATECARD_DATA,

} from './Type';

import { RCchargesPercentage, NumberRegex } from '../AllRegexFormats';

import { REDUCER_INITIAL } from '../Authentication/types';

const INITIAL_STATE = {

  CashDeposit: {
    CashDepositBanks: [],
    IpDetails: {
      TrasType: '',
      amount: '',
      trasactionId: '',
      bankName: '',
      branchName: '',
      slipBase64: '',
      otp: ''
    },
    PendingDepositList: [],
    ApiResults: {
      getPendingDepositSuccess: false,
      AcceptDepositSuccess: false,
      OTPsentSuccess: false,
      message: ''
    }
  },


  editBankDetailsComponent: {

    AllBankAcs: [
      { Sn: '1', ACholderNAme: 'Prashanth Yejje', Mobile: '7382040877', IFSC: '5236588', bankName: 'HDFC', BankState: 'AP', BankDist: 'Atp', Branch: 'Anantapur', address: '9-85,Sk Nagar,Anantapur(Dist)' },
      { Sn: '2', ACholderNAme: 'Mahesh ', Mobile: '7382040874', IFSC: '5586588', bankName: 'SBI', BankState: 'TELANGANA', BankDist: 'Panjagutta', Branch: 'Maredpally', address: '9-85,mahesh nagar colony,SR Nagar ' },
      { Sn: '3', ACholderNAme: 'Mahesh ', Mobile: '7382040874', IFSC: '5586588', bankName: 'SBI', BankState: 'TELANGANA', BankDist: 'Kodadu', Branch: 'kukatpally', address: '9-85,mahesh nagar colony,SR Nagar ' },
    ],

    editModal: false,
    OpendeleteModal: false,
    EnableSaveInEditModal: false,
    bankDetailsToedit: {
      Sn: '',
      ACHolderName: '',
      MobileNO: '',
      IFSCCode: '',
      BankName: '',
      BankState: '',
      BankDist: '',
      BankBranch: '',
      BankAddress: '',
    },

    // BankDetailsToDelete: {
    //   Sn: '',
    //   ACHolderName: '',
    //   MobileNO: '',
    //   IFSCCode: '',
    //   BankName: '',
    //   BankState: '',
    //   BankDist: '',
    //   BankBranch: '',
    //   BankAddress: '',
    // },
  },
  commissions: {
    commissionList: [],
    toggleEdit: false,
    toggleDelete: false,
    commissionRes: {
      name: '',
      description: '',
      slabs: []
    },
    isAddCommissionSuccess: false,
    isDeleteCommissionSuccess: false
  },

  RateCard: {
    RateCardName: '',
    AddOrViewRateCard: '',
    // rateCardsList: [],

    RateCardData: [],
    RegexMsg: '',
    AmountInpurErrors: [],
    ErrorsInInputAmounts: false,
    ApiResult: {
      UpdateRateCardAPiResult: '',
      getRateCardFail: false,
      Error: ''
    }
  }

}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case REDUCER_INITIAL:

      return {
        ...INITIAL_STATE
      }

    case OPEN_OR_CLOSE_EDIT_BANKDETAILS_MODAL:

      console.log(" In Reducer :" + action.payload.closeModal);
      if (action.payload.closeModal) {
        return {
          ...state, editBankDetailsComponent: {
            ...state.editBankDetailsComponent,
            editModal: false,
            EnableSaveInEditModal: false,
          }
        };
      }
      else {
        return {
          ...state, editBankDetailsComponent: {
            ...state.editBankDetailsComponent,
            editModal: !state.editBankDetailsComponent.editModal,
            EnableSaveInEditModal: false,
            bankDetailsToedit: {
              ...state.editBankDetailsComponent.bankDetailsToedit,
              Sn: action.payload.Sn,
              ACHolderName: action.payload.ACHolderName,
              MobileNO: action.payload.MobileNO,
              IFSCCode: action.payload.IFSCCode,
              BankName: action.payload.BankName,
              BankState: action.payload.BankState,
              BankDist: action.payload.BankDist,
              BankBranch: action.payload.BankBranch,
              BankAddress: action.payload.BankAddress,

            }
          }

        };
      }

    case OPEN_OR_CLOSE_DELETE_BANKDETAILS_MODAL:

      return {
        ...state, editBankDetailsComponent: {
          ...state.editBankDetailsComponent, OpendeleteModal: !state.editBankDetailsComponent.OpendeleteModal
        }
      };

    case STORE_EDITED_BANK_DETAILS_SUCCESSFYLLY:

      console.log("In reducer val:" + action.payload.EditedValue);
      console.log(action.payload.Editedfield);

      if (action.payload.Editedfield === 'ACHolderName') {

        return {
          ...state, editBankDetailsComponent: {
            ...state.editBankDetailsComponent,
            EnableSaveInEditModal: true,
            bankDetailsToedit: {
              ...state.editBankDetailsComponent.bankDetailsToedit,
              ACHolderName: action.payload.EditedValue,
            }
          }
        }
      }

      else if (action.payload.Editedfield === 'MobileNo') {

        return {
          ...state, editBankDetailsComponent: {
            ...state.editBankDetailsComponent,
            EnableSaveInEditModal: true,
            bankDetailsToedit: {
              ...state.editBankDetailsComponent.bankDetailsToedit,
              MobileNO: action.payload.EditedValue,
            }
          }
        }
      }
      else if (action.payload.Editedfield === 'ifscCode') {

        return {
          ...state, editBankDetailsComponent: {
            ...state.editBankDetailsComponent,
            EnableSaveInEditModal: true,
            bankDetailsToedit: {
              ...state.editBankDetailsComponent.bankDetailsToedit,
              IFSCCode: action.payload.EditedValue,
            }
          }
        }
      }

      else if (action.payload.Editedfield === 'BankAddress') {

        return {
          ...state, editBankDetailsComponent: {
            ...state.editBankDetailsComponent,
            EnableSaveInEditModal: true,
            bankDetailsToedit: {
              ...state.editBankDetailsComponent.bankDetailsToedit,
              BankAddress: action.payload.EditedValue,
            }
          }
        }
      }

      else if (action.payload.Editedfield === 'BankName') {

        return {
          ...state, editBankDetailsComponent: {
            ...state.editBankDetailsComponent,
            EnableSaveInEditModal: true,
            bankDetailsToedit: {
              ...state.editBankDetailsComponent.bankDetailsToedit,
              BankName: action.payload.EditedValue,
            }
          }
        }
      }



      else if (action.payload.Editedfield === 'bankState') {

        return {
          ...state, editBankDetailsComponent: {
            ...state.editBankDetailsComponent,
            EnableSaveInEditModal: true,
            bankDetailsToedit: {
              ...state.editBankDetailsComponent.bankDetailsToedit,
              BankState: action.payload.EditedValue,
            }
          }
        }
      }

      else if (action.payload.Editedfield === 'BankDistrict') {

        return {
          ...state, editBankDetailsComponent: {
            ...state.editBankDetailsComponent,
            EnableSaveInEditModal: true,
            bankDetailsToedit: {
              ...state.editBankDetailsComponent.bankDetailsToedit,
              BankDist: action.payload.EditedValue,
            }
          }
        }
      }

      else if (action.payload.Editedfield === 'BankBranch') {

        return {
          ...state, editBankDetailsComponent: {
            ...state.editBankDetailsComponent,
            EnableSaveInEditModal: true,
            bankDetailsToedit: {
              ...state.editBankDetailsComponent.bankDetailsToedit,
              BankBranch: action.payload.EditedValue,
            }
          }
        }
      }

    case GET_ALL_COMMISSIONS:
      return {
        ...state, commissions: {
          ...state.commissions,
          commissionList: []
        }
      };

    case GET_ALL_COMMISSIONS_SUCCESS:
      console.log('GET_ALL_COMMISSION_SUCCESS')
      console.log(action.payload)
      return {
        ...state, commissions: {
          ...state.commissions,
          commissionList: action.payload
        }
      };

    case GET_ALL_COMMISSIONS_FAIL:
      return {
        ...state, commissions: {
          ...state.commissions,
          commissionList: []
        }
      };


    case GET_COMMISSION_BY_ID:
      return {
        ...state, commissions: {
          ...state.commissions,
          commissionRes: {
            ...INITIAL_STATE.commissions.commissionRes
          }
        }
      };

    case GET_COMMISSION_BY_ID_SUCCESS:
      console.log('GET_COMMISSION_BY_ID_SUCCESS')
      console.log(action.payload)
      return {
        ...state, commissions: {
          ...state.commissions,
          commissionRes: {
            ...state.commissions.commissionRes,
            name: action.payload.name,
            description: action.payload.description,
            slabs: action.payload.slabs
          }
        }
      };

    case GET_COMMISSION_BY_ID_FAIL:
      return {
        ...state, commissions: {
          ...state.commissions,
          commissionRes: {
            ...INITIAL_STATE.commissions.commissionRes
          }
        }
      };


    case NEW_COMMISSION:
      return {
        ...state, commissions: {
          ...state.commissions,
          commissionRes: {
            ...INITIAL_STATE.commissions.commissionRes
          }
        }
      };

    case ADD_COMMISSION:
      return {
        ...state, commissions: {
          ...state.commissions,
          isAddCommissionSuccess: false
        }
      };

    case ADD_COMMISSION_SUCCESS:
      console.log('GET_COMMISSION_BY_ID_SUCCESS')
      console.log(action.payload)
      return {
        ...state, commissions: {
          ...state.commissions,
          isAddCommissionSuccess: true
        }
      };

    case ADD_COMMISSION_FAIL:
      return {
        ...state, commissions: {
          ...state.commissions,
          isAddCommissionSuccess: false
        }
      };

    case DELETE_COMMISSION:
      return {
        ...state, commissions: {
          ...state.commissions,
          isDeleteCommissionSuccess: false
        }
      };

    case DELETE_COMMISSION_SUCCESS:
      console.log('GET_COMMISSION_BY_ID_SUCCESS')
      console.log(action.payload)
      return {
        ...state, commissions: {
          ...state.commissions,
          isDeleteCommissionSuccess: true
        }
      };

    case DELETE_COMMISSION_FAIL:
      return {
        ...state, commissions: {
          ...state.commissions,
          isDeleteCommissionSuccess: false
        }
      };

    case GET_RATE_CARD:
      return {
        ...state, RateCard: {
          ...state.RateCard,
          RateCardData: [],
          ApiResult: {
            ...state.RateCard.ApiResult,
            getRateCardFail: false,
            Error: ''
          }
        }
      }

    case GET_RATE_CARD_SUCCES:

      console.log(" On GET_RATE_CARD_SUCCES Reducer . . . .   ");
      console.log(action.payload.rateCard)

      console.log(action.payload.rateCard.sort((a, b) => parseFloat(a.slabId) - parseFloat(b.slabId)));


      return {
        ...state, RateCard: {
          ...state.RateCard,
          RateCardData: action.payload.rateCard,
          AmountInpurErrors: [],
          ErrorsInInputAmounts: false,
        }
      }

    case GET_RATE_CARD_FAIL:
      return {
        ...state, RateCard: {
          ...state.RateCard,
          ApiResult: {
            ...state.RateCard.ApiResult,
            getRateCardFail: true,
            Error: action.payload
          },
        }
      }

    case GET_RATE_CARD_TEMP:
      return {
        ...state
      }

    case GET_RATE_CARD_TEMP_SUCCES:

      return {
        ...state, RateCard: {
          ...state.RateCard,
          RateCardData: action.payload,
          AmountInpurErrors: [],
          ErrorsInInputAmounts: false,
        }
      }

    case GET_RATE_CARD_TEMP_FAIL:
      return {
        ...state, RateCard: {
          ...state.RateCard,

        }
      }

    case UPLOAD_CHANGED_RATE_CARD:
      return {
        ...state, RateCard: {
          ...state.RateCard,
          ApiResult: {
            ...state.RateCard.ApiResult,
            UpdateRateCardAPiResult: '',
            Error: ''
          }
        }
      }

    case UPLOAD_CHANGED_RATE_CARD_SUCCESS:
      return {
        ...state, RateCard: {
          ...state.RateCard,
          ApiResult: {
            ...state.RateCard.ApiResult,
            UpdateRateCardAPiResult: 'success',
            Error: ''
          }
        }
      }

    case UPLOAD_CHANGED_RATE_CARD_FAIL:
      return {
        ...state, RateCard: {
          ...state.RateCard,
          ApiResult: {
            ...state.RateCard.ApiResult,
            UpdateRateCardAPiResult: 'fail',
            Error: action.payload
          }
        }
      }

    case RESET_API_RESULT_PROP:
      return {
        ...state, RateCard: {
          ...state.RateCard,
          ApiResult: {
            ...state.RateCard.ApiResult,
            UpdateRateCardAPiResult: '',
            Error: ''
          }
        }
      }

    case Add_NEW_ROW_TO_RATE_CARD:

      return add_new_row_to_rate_card(state, action)

    case EDIT_RATE_CARD_AMOUNT:


      return EditRateCardBasedOnConditions(state, action);

    case EDITING_RATE_CARD_CHARGES_AND_INCENTIVE:

      return editing_rate_card_charges_and_incentive(state, action);

    case REMOVE_RATE_CARD_ROW:
      console.log(" Index value to remove a row:" + action.payload);
      return {
        ...state, RateCard: {
          ...state.RateCard,
          ...state.RateCard.RateCardData.splice(action.payload, 1)
        }
      }

    case RATE_CARD_AMOUNT_ERRORS_TO_DISPLAY:
      return {
        ...state, RateCard: {
          ...state.RateCard,
          AmountInpurErrors: action.payload,
          ErrorsInInputAmounts: true
        }
      }

    case GET_BANK_DETAILS_OF_CASHDEPOSIT_SUCCESS:

      return {
        ...state, CashDeposit: {
          ...state.CashDeposit,
          CashDepositBanks: action.payload
        }

      }

    case OPEN_RATE_CARD_COMP:

      console.log(" In RateCard Selection Reducer : ");
      console.log(action.payload.RateCardDetails)
      console.log(action.payload);

      if (action.payload.AddOrView === 'ADD') {
        return {
          ...state, RateCard: {
            ...state.RateCard,
            AddOrViewRateCard: action.payload.AddOrView,
          }
        }
      } else return {
        ...state, RateCard: {
          ...state.RateCard,
          RateCardName: action.payload.RateCardDetails.ratecardName,
          AddOrViewRateCard: action.payload.AddOrView,
          RateCardData: action.payload.RateCardDetails.ratecardData,
        }
      }



    case SAVE_RATE_CARD_NAME:

      return {
        ...state, RateCard: {
          ...state.RateCard,
          RateCardName: action.payload
        }

      }

    case SAVE_DEPOSIT_COMP_IP_DETAILS:

      return SaveDepositCompIpDetails(state, action);

    case GET_PENDING_DEPOSITS_LIST:

      return {
        ...state
      }
    case GET_PENDING_DEPOSITS_LIST_SUCCESS:
      return {
        ...state, CashDeposit: {
          ...state.CashDeposit,
          PendingDepositList: action.payload,
          ApiResults: {
            ...state.CashDeposit.ApiResults,
            getPendingDepositSuccess: true
          }

        }
      }
    case ACCEPT_PENDING_DEPOSIT_SUCCESS:
      return {
        ...state,
      }

    // case GET_RATE_CARDS_LIST_SUCCESS:
    //   console.log(" GetRateCard Success Reducer : ")
    //   console.log(action.payload);
    //   return {
    //     ...state, RateCard: {
    //       ...state.RateCard,
    //       rateCardsList: action.payload
    //     }
    //   }

    case GENERATE_OTP_ON_FSE_DEPOSIT_SUCCESS:
      return {
        ...state, CashDeposit: {
          ...state.CashDeposit,
          ApiResults: {
            ...state.CashDeposit.ApiResults,
            OTPsentSuccess: true,
            message: action.payload
          }

        }
      }
    case SHOW_RESENT_OTP_OPTION:
      return {
        ...state, CashDeposit: {
          ...state.CashDeposit,
          ApiResults: {
            ...state.CashDeposit.ApiResults,
            OTPsentSuccess: false,
          }
        }

      }

    default:
      return {
        ...state,
      }
  }
};

function SaveDepositCompIpDetails(state, action) {

  if (action.payload.field == 'TrasType') {
    return {
      ...state, CashDeposit: {
        ...state.CashDeposit,
        IpDetails: {
          ...state.CashDeposit.IpDetails,
          TrasType: action.payload.value
        }
      }
    }
  } else if (action.payload.field == 'amount') {
    return {
      ...state, CashDeposit: {
        ...state.CashDeposit,
        IpDetails: {
          ...state.CashDeposit.IpDetails,
          amount: action.payload.value
        }
      }
    }
  } else if (action.payload.field == 'trasactionId') {
    return {
      ...state, CashDeposit: {
        ...state.CashDeposit,
        IpDetails: {
          ...state.CashDeposit.IpDetails,
          trasactionId: action.payload.value
        }
      }
    }
  } else if (action.payload.field == 'bankName') {
    return {
      ...state, CashDeposit: {
        ...state.CashDeposit,
        IpDetails: {
          ...state.CashDeposit.IpDetails,
          bankName: action.payload.value
        }
      }
    }
  } else if (action.payload.field == 'branchName') {
    return {
      ...state, CashDeposit: {
        ...state.CashDeposit,
        IpDetails: {
          ...state.CashDeposit.IpDetails,
          branchName: action.payload.value
        }
      }
    }
  } else if (action.payload.field == 'slipBase64') {
    return {
      ...state, CashDeposit: {
        ...state.CashDeposit,
        IpDetails: {
          ...state.CashDeposit.IpDetails,
          slipBase64: action.payload.value
        }
      }
    }
  } else if (action.payload.field == 'otp') {
    return {
      ...state, CashDeposit: {
        ...state.CashDeposit,
        IpDetails: {
          ...state.CashDeposit.IpDetails,
          otp: action.payload.value
        }
      }
    }
  }
}

function add_new_row_to_rate_card(state, action) {

  console.log(" .  .  .  .  .  .  .  .  .  IN Add New Rate Card Reducer Comp : 0");
  console.log(action.payload);
  console.log(state.RateCard.RateCardData);

  return {
    ...state, RateCard: {
      ...state.RateCard,
      RateCardData: [...state.RateCard.RateCardData, action.payload]
    }
  }
}

function EditRateCardBasedOnConditions(state, action) {

  console.log(" VAlues IN Reducer :");
  console.log(action.payload);
  state.RateCard.RateCardData.map((item, i) => {
    i === action.payload.indx ? console.log(" Index Matched Index is :{i} , action.payload.valueis: " + i + action.payload.value)
      : console.log(" Index Not Matched Index is: " + i);
  })

  if (action.payload.field === 'ownerMinValue') {
    console.log(" ... ... ... Amount(OutSide) Is :" + action.payload.value);
    const re = /^[0-9\-\/]+$/;

    if (action.payload.value == NaN) {
      console.log(" action.payload.value == NaN ");
    }

    if (action.payload.value === NaN) {
      console.log(" action.payload.value === NaN ");
    }
    if (action.payload.value === 'NaN') {
      console.log(" action.payload.value === 'NaN' ");
    }

    if (action.payload.value == null) {
      console.log(" action.payload.value == null ");
    }
    if (action.payload.value === null) {
      console.log(" action.payload.value === null ");
    }

    if (action.payload.value == undefined) {
      console.log(" action.payload.value == undefined ");
    }
    if (action.payload.value === undefined) {
      console.log(" action.payload.value === undefined ");
    }

    if (action.payload.value == '' || re.test(action.payload.value || action.payload.value === NaN || action.payload.value === null ||
      action.payload.value === undefined)) {

      return {
        ...state, RateCard: {
          ...state.RateCard,
          ...state.RateCard.RateCardData.map((item, i) => {
            i === action.payload.indx ? item.ownerMinValue = action.payload.value : item
          }),
          RegexMsg: '',
          AmountInpurErrors: [],
          ErrorsInInputAmounts: false
        }
      }
    } else return {
      ...state, RateCard: {
        ...state.RateCard,
        RegexMsg: 'Please Enter Only Numbers(0-9), - And /'
      }
    }
  } else if (action.payload.field === 'ownerMaxValue') {
    console.log(" ... ... ... Amount(OutSide) Is :" + action.payload.value);
    const re = /^[0-9\-\/]+$/;
    if (action.payload.value == '' || re.test(action.payload.value || action.payload.value === NaN || action.payload.value === null ||
      action.payload.value === undefined)) {

      return {
        ...state, RateCard: {
          ...state.RateCard,
          ...state.RateCard.RateCardData.map((item, i) => {
            i === action.payload.indx ? item.ownerMaxValue = action.payload.value : item
          }),
          RegexMsg: '',
          AmountInpurErrors: [],
          ErrorsInInputAmounts: false
        }
      }
    } else return {
      ...state, RateCard: {
        ...state.RateCard,
        RegexMsg: 'Please Enter Only Numbers(0-9), - And /'
      }
    }
  }

}

function editing_rate_card_charges_and_incentive(state, action) {

  if (action.payload.chargesType === 'rs') {

    console.log(" IN Reducer Rs Condition : ");

    if (action.payload.value === '' || NumberRegex.test(action.payload.value)) {

      console.log(" IN Reducer Rs Condition Regex Accepted Pattern : ");

      return {
        ...state, RateCard: {
          ...state.RateCard,
          ...state.RateCard.RateCardData.map((item, i) => {
            i === action.payload.indx ? action.payload.field === 'ownerFixedRate' ?
              item.ownerFixedRate = action.payload.value : action.payload.field === 'ownerVariableRate' ? item.ownerVariableRate = action.payload.value
                : action.payload.field === 'ownerAdditionalFixedIncentive' ?
                  item.ownerAdditionalFixedIncentive = action.payload.value :
                  action.payload.field === 'ownerAdditionalVariableIncentive' ?
                    item.ownerAdditionalVariableIncentive = action.payload.value :
                    action.payload.field === 'orgFixedRate' ?
                      item.orgFixedRate = action.payload.value :
                      item.orgVariableRate = action.payload.value
              : item
          }),
          RegexMsg: ''
        }
      }
    } else return {
      ...state, RateCard: {
        ...state.RateCard,
        RegexMsg: 'Please Enter Only Numbers(0-9)'
      }
    }
  } else if (action.payload.chargesType === '%') {
    console.log(" IN Reducer P% Condition  : ");
    if (action.payload.value === '' || RCchargesPercentage.test(action.payload.value)) {
      console.log(" IN Reducer P% Condition Regex Accepted Pattern : ");

      return {
        ...state, RateCard: {
          ...state.RateCard,
          ...state.RateCard.RateCardData.map((item, i) => {
            i === action.payload.indx ? action.payload.field === 'ownerFixedRate' ?
              item.ownerFixedRate = action.payload.value : action.payload.field === 'ownerVariableRate' ? item.ownerVariableRate = action.payload.value
                : action.payload.field === 'ownerAdditionalFixedIncentive' ?
                  item.ownerAdditionalFixedIncentive = action.payload.value :
                  action.payload.field === 'ownerAdditionalVariableIncentive' ?
                    item.ownerAdditionalVariableIncentive = action.payload.value :
                    action.payload.field === 'orgFixedRate' ?
                      item.orgFixedRate = action.payload.value :
                      item.orgVariableRate = action.payload.value
              : item
          }),
          RegexMsg: ''
        }
      }

    } else return {
      ...state, RateCard: {
        ...state.RateCard,
        RegexMsg: 'Please Enter Only Numbers(0-9) And .(dot)'
      }
    }
  }

}

