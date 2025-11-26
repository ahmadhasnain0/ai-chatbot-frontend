import AuthGuard from '@/src/component/AuthGuard';
import LoginForm from '@/src/component/LoginForm';
import { Header } from '@/src/component/home/Header';

export default function login() {
  return (

    <>
      <Header />
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
        <AuthGuard requireAuth={false}>
        <LoginForm />
        </AuthGuard>
      </div>
    </>

  );
}
