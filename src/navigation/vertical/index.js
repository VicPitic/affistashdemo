// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import Star from 'mdi-material-ui/Star'
import Fire from 'mdi-material-ui/Fire'
import Cash from 'mdi-material-ui/Cash'
import Script from 'mdi-material-ui/Script'


const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },

    {
      sectionTitle: 'Programs'
    },
    {
      title: 'Programs Of the Day',
      icon: Fire,
      path: '/pod',
      openInNewTab: false
    },
    {
      title: 'Affiliate Programs',
      icon: Cash,
      path: '/programs',
      openInNewTab: false
    },
    {
      title: 'Sale Scripts',
      icon: Script,
      path: '/soon',
      openInNewTab: false
    },

    {
      sectionTitle: 'Community'
    },
    {
      title: 'Affistashers Group',
      icon: AccountPlusOutline,
      path: '/soon',
      openInNewTab: false
    },
    {
      title: 'Success Stories',
      icon: Star,
      path: '/soon',
      openInNewTab: false
    },

    {
      sectionTitle: 'User'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/soon'
    },
    {
      title: 'Logout',
      icon: Login,
      path: 'https://affistash.com',
    },
  ]
}

export default navigation
