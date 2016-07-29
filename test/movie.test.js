// Jasmine Test for lib/movie.js

describe('Movie', function() {

    // inject the HTML fixture for the test to run against
    beforeEach(function() {

        var fixture = '<div id="fixture" class="movie" data-idx="42">'
                    + ' <dl>'
                    + '   <dd><span id="votes">n/a</span></dd>'
                    + ' </dl>'
                    + ' <button id="upvote">Upvote</button>'
                    + ' <button id="downvote">Downvote</button>'
                    + '</div>';

        // add the HTML fixture via hook
        document.body.insertAdjacentHTML('afterbegin', fixture);

        // init our class to add the event listeners
        AL.movie.init();

    });

    // remove the html fixture from the DOM when completed
    afterEach(function() {
        document.body.removeChild(document.getElementById('fixture'));
    });

    // test the initial condition - 0 votes
    it('init should result in total votes = 0', function() {
        expect(document.getElementById('votes').innerHTML).toBe('0');
    });

    // test the upvote event, should result in 1 vote
    it('upvote should result in total votes = 1', function() {
        document.getElementById('upvote').click();
        expect(document.getElementById('votes').innerHTML).toBe('1');
    });

    // test the downvote event, should result in 0 votes 
    it('downvote should result in total votes = 0', function() {
        document.getElementById('downvote').click();
        expect(document.getElementById('votes').innerHTML).toBe('0');
    });

});
