import AuthGuard from '@/src/component/AuthGuard';
import ChatContainer from '@/src/component/ChatContainer';

export default function ChatbotPage() {
  return (
    
    <div className="min-h-screen bg-white">
      <AuthGuard>
      <ChatContainer />
      </AuthGuard>
    </div>
   
  );
}
