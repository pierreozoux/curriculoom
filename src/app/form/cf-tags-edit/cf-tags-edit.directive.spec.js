describe('Unit testing great quotes', function () {
    var $compile,
        $rootScope, $scope;

    // Load the myApp module, which contains the directive
    beforeEach(module('curriculoom.form'));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function (_$compile_, _$rootScope_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $scope = _$rootScope_.$new();
        // http://daginge.com/technology/2013/12/14/testing-angular-templates-with-jasmine-and-karma/
    }));

    it('cf-tags-edit TEST', function () {

        var template = $compile("<div cf-tags-edit></div>")($scope);

        $scope.tags = ['test', 'truc'];
        $scope.title = 'Mon titre';
        $scope.max = 6;

        // Now run a $digest cycle to update your template with new data
        $scope.$digest();

        // Render the template as a string
        var templateAsHtml = template.html();
        
        console.log(templateAsHtml);
        
        expect(templateAsHtml).toContain($scope.title);

    });
});