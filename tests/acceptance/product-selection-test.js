import { test } from 'qunit';
import moduleForAcceptance from 'stupy/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | product selection');

test('visit /', function(assert) {
  visit('/');
  click('.arsenal-tv');
  click('.sky-news');
  click('.checkout-button');

  andThen(function() {
    findWithAssert('.arsenal-tv');
    findWithAssert('.sky-news');
    assert.equal(currentURL(), '/checkout');
  });
});
