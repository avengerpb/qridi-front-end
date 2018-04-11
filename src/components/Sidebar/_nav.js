export default {
  items: [
    {
      name: 'Qridi Dashboard',
      url: '/base/tables',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
      }
    },
    {
      name: 'Personal Details',
      url: '/base/tables',
      icon: 'icon-user',
    },
    {
      name: 'Group Details',
      url: '/base/tables',
      icon: 'icon-people',
    },
    {
      name: 'Activity',
      url: '/base/tables',
      icon: 'icon-puzzle',
    },

// item end 

    {
      name: 'Login with polar id',
      url: '/Login',
      icon: 'icon-cursor',
    },
    {
      name: 'Charts',
      url: '/charts',
      icon: 'icon-pie-chart'
    },
    {
      name: 'Icons',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7'
          }
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'icon-star'
        }
      ]
    },
    {
      divider: true
    },
  ]
};
