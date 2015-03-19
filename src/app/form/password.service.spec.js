'use strict';

describe('curriculoom form password service', function () {

    var passwordService;
    
    beforeEach(module('curriculoom.form'));
    
    beforeEach(inject(function (_passwordService_) {
        passwordService = _passwordService_;
    }));

    it('short password (< 4 characters) should result to strongness 1', function () {
       var strongness = passwordService.checkStrongness('123');
        expect(strongness).toEqual(1);
    });

    it('medium password (5 characters) should result to strongness 3', function () {
       var strongness = passwordService.checkStrongness('12345');
        expect(strongness).toEqual(3);
    });

    it('long password (> 8 characters) should result to strongness 5', function () {
       var strongness = passwordService.checkStrongness('123456789');
        expect(strongness).toEqual(5);
    });


});
