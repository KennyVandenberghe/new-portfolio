Template.portfolioLayout.helpers({
  showMask: function(){
    return Session.get('showMask');
  },
  props: function() {
    return {
      title: 'Portfolio',
      navItems: [
        {
          title: 'projecten',
          slug: '/projects'
        },
        {
          title: 'over mij',
          slug: '/about'
        },
        {
          title: 'contact',
          slug: '/contact'
        },
        {
          title: 'login',
          slug: '/login'
        }
      ]
    }
  }
});

Template.portfolioLayout.events({
  'click .logout': function(e, tpl){
    e.preventDefault();
    Meteor.logout();
  }
});
