'use strict';

describe('curriculoom form password service', function () {

    var passwordService;
    
    beforeEach(module('curriculoom.form'));
    
    beforeEach(inject(function (_passwordService_) {
        passwordService = _passwordService_;
    }));

    it("short password (< 4 characters) should result to strongness 1", function () {
       var strongness = passwordService.checkStrongness('123');
        expect(strongness).toEqual(1);
    });
/*
    it("short password (4 < x < 6 characters) should result to strongness 2", function () {
       var strongness = passwordService.checkStrongness('123456');
        expect(strongness).toEqual(2);
    });*/

});
