/*
 *
 *
 *
 */

// Default layout
Router.configure({
    layoutTemplate: 'layout2'
});

Router.route('/',
    function () {
        this.layout('layout2');
        this.render('nav',      {to: 'nav'});
        this.render('masthead', {to: 'masthead'});
        this.render('main',     {to: 'content'});
        this.render('leftcol',  {to: 'leftcol'});
    }
);

Router.route('/page1',
    function () {
        this.layout('layout2');
        this.render('nav',      {to: 'nav'});
        this.render('masthead', {to: 'masthead'});
        this.render('page1',     {to: 'content'});
        this.render('leftcol',  {to: 'leftcol'});
    }
);

Router.route('/page2',
    function () {
        this.layout('layout2');
        this.render('nav',      {to: 'nav'});
        this.render('masthead', {to: 'masthead'});
        this.render('page2',     {to: 'content'});
        this.render('leftcol',  {to: 'leftcol'});
    }
);

/*

Router.route('/items', function () {
        this.render('Items');
    },
    {
        name: 'Items'
    });

Router.route('/items/:_id', function () {
    var item = Items.findOne({_id: this.params._id});
    this.render('ShowItem', {data: item});
});

Router.route('/files/:filename', function () {
    this.response.end('hi from the server\n');
}, {where: 'server'});

Router.route('/restful', {where: 'server'})
    .get(function () {
        this.response.end('get request\n');
    })
    .post(function () {
        this.response.end('post request\n');
    });

Router.route('/post/:_id', function () {
    // use the template named ApplicationLayout for our layout
    this.layout('ApplicationLayout');

    // render the Post template into the "main" region
    // {{> yield}}
    this.render('Post');

    // render the PostAside template into the yield region named "aside"
    // {{> yield "aside"}}
    this.render('PostAside', {to: 'aside'});

    // render the PostFooter template into the yield region named "footer"
    // {{> yield "footer"}}
    this.render('PostFooter', {to: 'footer'});
});

    */
