
import { useState } from 'react';
import {
  Alert,
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import { signUp } from '../services/authService';

export default function SignupScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [nama, setNama] = useState('');
  const [nim, setNim] = useState('');
  const [prodi, setProdi] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (
      !email.trim() ||
      !nama.trim() ||
      !nim.trim() ||
      !prodi.trim() ||
      !password ||
      !confirmPassword
    ) {
      Alert.alert('Registrasi Gagal', 'Semua kolom wajib diisi.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Registrasi Gagal', 'Password minimal 6 karakter.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Registrasi Gagal', 'Konfirmasi password tidak cocok.');
      return;
    }

    try {
      setLoading(true);

      const data = await signUp(email, password, nama, nim, prodi);

      if (data.user && !data.session) {
        Alert.alert(
          'Registrasi Berhasil',
          'Silakan cek email untuk verifikasi akun.',
          [{ text: 'OK', onPress: () => router.replace('/login') }]
        );
      } else {
        Alert.alert(
          'Registrasi Berhasil',
          'Akun berhasil didaftarkan. Silakan login.',
          [{ text: 'OK', onPress: () => router.replace('/login') }]
        );
      }
    } catch (error) {
      Alert.alert(
        'Registrasi Gagal',
        error instanceof Error ? error.message : 'Terjadi kesalahan.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar AttendUMM</Text>
      <Text style={styles.subtitle}>Buat akun baru</Text>

      <TextInput
        style={styles.input}
        placeholder="Masukkan Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Masukkan Nama Mahasiswa"
        value={nama}
        onChangeText={setNama}
      />

      <TextInput
        style={styles.input}
        placeholder="Masukkan NIM"
        value={nim}
        onChangeText={setNim}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Masukkan Program Studi"
        value={prodi}
        onChangeText={setProdi}
      />

      <TextInput
        style={styles.input}
        placeholder="Masukkan Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Konfirmasi Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleSignup}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.buttonText}>DAFTAR</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.replace('/login')}
        disabled={loading}
      >
        <Text style={styles.loginText}>Sudah punya akun? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F7F4EF',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#7F1D1D',
    marginBottom: 8,
  },
  subtitle: {
    color: '#7A6F68',
    marginBottom: 28,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D8D2CC',
    borderRadius: 10,
    padding: 14,
    marginBottom: 16,
    color: '#3F342E',
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#3F7D58',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#3F7D58',
  },
});
