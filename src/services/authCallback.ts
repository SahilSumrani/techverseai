export type AuthCallbackKind = 'invite' | 'recovery' | 'error' | null;

export function getAuthCallbackKind(hash: string): AuthCallbackKind {
  const params = new URLSearchParams(hash.startsWith('#') ? hash.slice(1) : hash);
  const type = params.get('type');
  if (type === 'invite' || type === 'recovery') return type;
  return params.has('error_code') ? 'error' : null;
}

export function getAuthLandingPath(pathname: string, hash: string): string {
  return getAuthCallbackKind(hash) ? '/employee' : pathname;
}

export function needsPasswordSetup(search: string, hash: string): boolean {
  const params = new URLSearchParams(search);
  return params.get('setup') === '1' || params.get('recovery') === '1' || getAuthCallbackKind(hash) !== null;
}

export function isPasswordRecovery(search: string, hash: string): boolean {
  return new URLSearchParams(search).get('recovery') === '1'
    || getAuthCallbackKind(hash) === 'recovery'
    || getAuthCallbackKind(hash) === 'error';
}
