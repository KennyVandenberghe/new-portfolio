FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('portfolioLayout', {content: 'portfolioHome'});
  }
});

FlowRouter.route('/projects', {
  action: function() {
    BlazeLayout.render('portfolioLayout', {content: 'portfolioProjects'});
  }
});

FlowRouter.route('/contact', {
  action: function() {
    BlazeLayout.render('portfolioLayout', {content: 'portfolioContact'});
  }
});

FlowRouter.route('/about', {
  action: function() {
    BlazeLayout.render('portfolioLayout', {content: 'portfolioAbout'});
  }
});

FlowRouter.route('/login', {
  action: function() {
    BlazeLayout.render('portfolioLayout', {content: 'portfolioLogin'});
  }
});
