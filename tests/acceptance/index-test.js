import { test } from 'qunit';
import moduleForAcceptance from 'numeric-sequence-calculator-frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting / works', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('visiting / and inputing a valid number', function(assert) {
  visit('/');
  fillIn('.form-control', 10);
  click('.btn-primary');
  andThen(function() {
    var results = find('.results').text();
    assert.equal(results.indexOf('Sequence of numbers from 0 to 10') > -1, true);
  });
});

test('visiting / and inputing a invalid number', function(assert) {
  visit('/');
  fillIn('.form-control', -10);
  click('.btn-primary');
  andThen(function() {
    var results = find('.alert-danger').text();
    assert.equal(results.indexOf('Number cannot be negative or zero') > -1, true);
  });
});
