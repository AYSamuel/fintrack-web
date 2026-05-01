'use server';

import { supabase } from '@/lib/supabase';

export type WaitlistSource = 'hero' | 'cta';

export type WaitlistResult =
  | { success: true }
  | { success: false; error: 'duplicate' | 'invalid' | 'server' };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitWaitlist(
  email: string,
  source: WaitlistSource = 'hero'
): Promise<WaitlistResult> {
  const normalised = email.trim().toLowerCase();

  if (!EMAIL_REGEX.test(normalised)) {
    return { success: false, error: 'invalid' };
  }

  const { error } = await supabase
    .from('waitlist')
    .insert({ email: normalised, source });

  if (error) {
    // Postgres unique-constraint violation
    if (error.code === '23505') {
      return { success: false, error: 'duplicate' };
    }
    return { success: false, error: 'server' };
  }

  return { success: true };
}
