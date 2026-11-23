
import { createClient } from '@supabase/supabase-js';
import { Platform } from 'react-native';
import { secureStorage } from '../utils/secureStorage';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

// Penyimpanan untuk Web
const webStorage = {
  getItem: async (key: string) => {
    return typeof localStorage !== 'undefined'
      ? localStorage.getItem(key)
      : null;
  },

  setItem: async (key: string, value: string) => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, value);
    }
  },

  removeItem: async (key: string) => {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(key);
    }
  },
};

// Konfigurasi Supabase
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      storage: Platform.OS === 'web'
        ? webStorage
        : secureStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);

// Fungsi untuk menguji koneksi Supabase
export const testSupabaseConnection = async (): Promise<boolean> => {
  try {
    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Supabase URL atau API Key belum dikonfigurasi.');
    }

    const response = await fetch(
      `${supabaseUrl}/auth/v1/health`,
      {
        method: 'GET',
        headers: {
          apikey: supabaseAnonKey,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    console.log('Koneksi ke Supabase berhasil!');
    return true;

  } catch (error) {
    console.error('Koneksi Supabase gagal:', error);
    return false;
  }
};
