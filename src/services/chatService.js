import API from "./axiosInstance";

export const createConversation = async () => {
  return await API.post("/chat/conversation");
};

export const sendMessageToConversation = async (conversationId, message) => {
  return await API.post(`/chat/conversation/${conversationId}/message`, { message });
};

export const getConversationMessages = async (conversationId) => {
  return await API.get(`/chat/conversation/${conversationId}/messages`);
};
