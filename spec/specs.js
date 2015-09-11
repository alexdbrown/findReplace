describe('findReplace', function() {
    // it('finds a word in a string of words', function() {
    //     expect(findReplace('down to clown', 'clown', 'party')).to.equal('clown');
    // });

    it('replaces a matched word within a string of words with another word', function() {
        expect(findReplace('down to clown', 'clown', 'party')).to.equal('down to party');
    });

});
