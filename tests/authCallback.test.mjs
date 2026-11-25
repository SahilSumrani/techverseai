import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getAuthCallbackKind,
  getAuthLandingPath,
  isPasswordRecovery,
  needsPasswordSetup,
} from '../src/services/authCallback.ts';

test('invite callback opens the password setup screen', () => {
  const hash = '#access_token=placeholder&type=invite';
  assert.equal(getAuthCallbackKind(hash), 'invite');
  assert.equal(getAuthLandingPath('/', hash), '/employee');
  assert.equal(needsPasswordSetup('', hash), true);
  assert.equal(isPasswordRecovery('', hash), false);
});

test('recovery callback opens the password reset screen', () => {
  const hash = '#access_token=placeholder&type=recovery';
  assert.equal(getAuthCallbackKind(hash), 'recovery');
  assert.equal(getAuthLandingPath('/', hash), '/employee');
  assert.equal(needsPasswordSetup('', hash), true);
  assert.equal(isPasswordRecovery('', hash), true);
});

test('expired Auth links still route to a useful recovery screen', () => {
  const hash = '#error=access_denied&error_code=otp_expired';
  assert.equal(getAuthCallbackKind(hash), 'error');
  assert.equal(getAuthLandingPath('/', hash), '/employee');
  assert.equal(needsPasswordSetup('', hash), true);
  assert.equal(isPasswordRecovery('', hash), true);
});

test('ordinary URLs keep their requested page', () => {
  assert.equal(getAuthCallbackKind(''), null);
  assert.equal(getAuthLandingPath('/admin', ''), '/admin');
  assert.equal(needsPasswordSetup('', ''), false);
  assert.equal(isPasswordRecovery('', ''), false);
});

test('explicit setup and recovery query parameters work without a callback hash', () => {
  assert.equal(needsPasswordSetup('?setup=1', ''), true);
  assert.equal(needsPasswordSetup('?recovery=1', ''), true);
  assert.equal(isPasswordRecovery('?recovery=1', ''), true);
});
