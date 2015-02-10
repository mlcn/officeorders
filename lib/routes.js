//============ Routes ===========
Router.route('/', function () {
  this.render('offices');
},{
  name:'offices.all'
});

Router.route('/offices/add', function () {
  this.render('addOffice');
},{
  name: 'office.add'
});

Router.route('/offices/:company', function () {
  this.render('officeView', {
    data: function () {
      return Offices.findOne({companyTitle: this.params.company});
    }
  });
},{
  name: 'office.single'
});

Router.route('/:company/neworder', function () {
  this.render('newOrder', {
    data: function () {
      return Offices.findOne({companyTitle: this.params.company});
    }
  });
},{
  name: 'office.neworder'
});
//=============================