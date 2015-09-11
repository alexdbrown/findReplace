describe('findReplace', function() {
    it('finds a word in a string of words', function() {
        expect(findReplace('down to clown', 'clown', 'party')).to.equal('clown');
    });

    // it('replaces a found word within a string of words with another word', function() {
    //     expect(findReplace('down to clown', 'clown', 'party')).to.eql
    // })
});
