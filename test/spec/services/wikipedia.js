'use strict';

describe('wikipedia service test', function() {
	var wikipedia;

	beforeEach(module('typingPracticeApp'));

	beforeEach(inject(function($injector) {
		wikipedia = $injector.get('wikipedia');
	}));

	describe("getArticle method", function(){
		it('should be defined', function(){
			expect( wikipedia.getArticle ).toBeDefined();
		});
	});

	describe("getParagraph method", function(){
		it('should be defined', function(){
			expect( wikipedia.getParagraph ).toBeDefined();
		});
	});

	describe("isLoggedIn method", function(){
		it('should be defined', function(){
			expect( auth.isLoggedIn ).toBeDefined();
		});
	});
});
