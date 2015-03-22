describe('Test directive tags-edit', function () {
    var $compile,
        $rootScope, $scope;

    // load module containing the directive
    beforeEach(module('curriculoom.form'));
    
    // load templates
    beforeEach(module('app-preprocessed-templates'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        // the injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $scope = _$rootScope_.$new();
    }));

    it('cf-tags-edit TEST', function () {

        // compile the template
        var element = angular.element("<div cf-tags-edit cf-tags-edit-tags=\"tags\" cf-tags-edit-max=\"6\" cf-tags-edit-title=\"{{ title }}\"></div>");
        var template = $compile(element)($scope);

        // update the scope
        $scope.tags = ['test', 'truc'];
        $scope.title = 'Mon titre';

        // run a $digest cycle to update your template with new data
        $rootScope.$digest();

        // Render the template as a string
        var templateAsHtml = template.html();

        // check title
        expect(template.find('label.control-label').text()).toContain($scope.title);

        // check tags size
        expect(template.find('.tags .tag').size()).toBe(2);

    });
});