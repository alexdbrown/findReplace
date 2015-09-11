describe('findReplace', function() {
    //*note for code review - let's talk about writing out specs that will always
    //*work, I seem to do this a lot where when I get to the meat of it my functionality
    // *ends up not working anymore

    // it('finds a word in a string of words', function() {
    //     expect(findReplace('down to clown', 'clown', 'party')).to.equal('clown');
    // });

    it('replaces a matched word within a string of words with another word', function() {
        expect(findReplace('down to clown', 'clown', 'party')).to.equal('down to party');
    });

});
