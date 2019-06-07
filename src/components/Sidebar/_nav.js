export default {
  items: [

    {
      name: 'Dashboard',
      displayName: 'Dashboard',
      url: '/Dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: 'Management',
      displayName: 'Management',
      url: '/User',
      icon: 'icon-people',
      children: [

        {
          name: 'RateCard',
          displayName: 'Rate Card',
          url: '/RateCardHome',
          icon: 'icon-note'
        },
        {
          name: 'Authorization',
          displayName: 'Roles',
          url: '/Role',
          icon: 'icon-briefcase'
        },
        {
          name: 'FSE',
          displayName: 'FSE',
          url: '/FSE',
          icon: 'icon-user'
        },
        // {
        //   name: 'CME',
        //   displayName: 'CME',
        //   url: '/CME',
        //   icon: 'icon-user'
        // },
        {
          name: 'Distributer',
          displayName: 'Distributors',
          url: '/Distributor',
          icon: 'icon-user'
        },
  
        {
          name: 'Retailer',
          displayName: 'Retailers',
          url: '/AdminRetailer',
          icon: 'icon-user'
        },
        {
          name: 'Agent',
          displayName: 'Agents',
          url: '/Agent',
          icon: 'icon-user'
        },
        
        {
          name: 'PendingRetailer',          // this name we will receive from the server. in the list of module permissions.
          displayName: 'PendingRetailer',
          url: '/ApproveRetailer',
          icon: 'icon-user'
        },

        {
          name: 'AdminUser',
          displayName: 'Admin Users',
          url: '/AdminUser',
          icon: 'icon-user'
        },
      ]
    },

    {
      name: 'Banking',
      displayName: 'Banking',
      url: '/Bank',
      icon: 'fa fa-bank fa-lg',
      children: [
        {
          name: 'MoneyTransfer',
          displayName: 'Money Transfer',
          url: '/MoneyTransfer',
          icon: 'fa fa-exchange fa-lg'
        }
      ]
    },
    {
      name: 'IFSC Management',
      displayName: 'IFSC Management',
      url: '/IfscManagement',
      icon: 'icon-bell',
      badge: {
        variant: 'info',
      }
    },
    {
      name: 'cashDeposit',
      displayName: 'cash Deposit',
      url: '/cashDeposit',
      icon: 'fa fa-money fa-lg'
    },
    {
      name: 'CommissionMeter',
      displayName: 'Commissions',
      url: '/Commissions',
      icon: 'icon-energy',
      children: [
        {
          name: 'Commissions Grid',
          displayName: 'Commissions Grid',
          url: '/Commissions/Commissions',
          icon: 'icon-list'
        }
      ],
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },

    {
      name: 'Business',
      displayName: 'Business',
      url: '/Reports/TransactionHistory',
      icon: 'icon-hourglass',
      children: [

        {
          name: 'CashInTransactionHistory',
          displayName: 'CashIn History',
          url: '/CashInTransactionHistory',
          icon: 'icon-user'
        },
        {
          name: 'LedgerHistory',
          displayName: 'Ledger History',
          url: '/LedgerHistory',
          icon: 'icon-user'
        },
        {
          name: 'TransactionHistory',
          displayName: 'Transaction History',
          url: '/TransactionHistory',
          icon: 'icon-user'
        },
      ]
    },
    {
      name: 'Support',
      displayName: 'Support',
      url: '/Support',
      icon: 'icon-user',
    },
  ]
};
