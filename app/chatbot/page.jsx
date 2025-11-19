import AuthGuard from '@/src/component/AuthGuard';
import ChatContainer from '@/src/component/ChatContainer';

export default function ChatbotPage() {
  return (
    <AuthGuard>
    <div className="min-h-screen bg-gray-100">
      <ChatContainer />
    </div>
    </AuthGuard>
  );
}
