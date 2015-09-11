describe('findReplace', function() {
    it('finds a word in a string of words', function() {
        expect(findReplace('down to clown', 'clown', 'party')).to.eql(['clown']);
    });
});
