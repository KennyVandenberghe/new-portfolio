Template.portfolioLogin.onCreated(function(){
  Session.setDefault('showLogin', true);
});

Template.portfolioLogin.helpers({
  showLogin: function() {
    return Session.get('showLogin');
  }
});

Template.portfolioLogin.events({
  'click .mdl-button.register': function(e, tpl) {
    e.preventDefault();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    Accounts.createUser({
      email: email,
      password: password
    });
    FlowRouter.go('/');
  },
  'click .mdl-button.login': function(e, tpl){
    e.preventDefault();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    Meteor.loginWithPassword(email, password, function(err, data) {
      console.log(err, data);
    });
  },
  'click .switch': function(e, tpl){
    Session.set('showLogin', !Session.get('showLogin'));
  }
});
