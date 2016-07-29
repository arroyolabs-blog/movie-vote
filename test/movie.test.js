// Jasmine Test for lib/movie.js

describe('Movie', function() {

    // inject the HTML fixture for the tests
    beforeEach(function() {

      var fixture = '<div id="fixture" class="movie" data-idx="42">'
                  + ' <dl>'
                  + '   <dd><span id="votes">n/a</span></dd>'
                  + ' </dl>'
                  + ' <button id="upvote">Upvote</button>'
                  + ' <button id="downvote">Downvote</button>'
                  + '</div>';

      document.body.insertAdjacentHTML(
        'afterbegin', 
        fixture);

      AL.movie.init();

    });

    // remove the html fixture from the DOM
    afterEach(function() {
        document.body.removeChild(document.getElementById('fixture'));
    });

    it('init should result in total votes = 0', function() {
        expect(document.getElementById('votes').innerHTML).toBe('0');
    });

    it('upvote should result in total votes = 1', function() {
        document.getElementById('upvote').click();
        expect(document.getElementById('votes').innerHTML).toBe('1');
    });

    it('downvote should result in total votes = 0', function() {
        document.getElementById('downvote').click();
        expect(document.getElementById('votes').innerHTML).toBe('0');
    });

});
