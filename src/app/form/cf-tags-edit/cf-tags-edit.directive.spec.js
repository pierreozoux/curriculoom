describe('Unit testing great quotes', function () {
    var $compile,
        $rootScope, $scope;

    // Load the myApp module, which contains the directive
    beforeEach(module('curriculoom.form'));
    beforeEach(module('app-preprocessed-templates'));

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

        var element = angular.element("<div cf-tags-edit cf-tags-edit-tags=\"tags\" cf-tags-edit-max=\"6\" cf-tags-edit-title=\"{{ title }}\"></div>");
        
        var template = $compile(element)($scope);

        $rootScope.tags = ['test', 'truc'];
        $rootScope.title = 'Mon titre';

        // N ow run a $digest cycle to update your template with new data
        $rootScope.$digest();

        // Render the template as a string
        var templateAsHtml = template.html();

        expect(templateAsHtml).toContain($scope.title);
        
    });
});