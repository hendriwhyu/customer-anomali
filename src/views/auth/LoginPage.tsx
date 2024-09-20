import Link from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import LoginForm from '@/components/common/auth/LoginForm';

function LoginPage() {
  return (
    <div className="h-full content-center">
      <LoginForm />
    </div>
  );
}

export default LoginPage;
