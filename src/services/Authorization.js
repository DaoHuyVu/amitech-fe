import axios from "axios";

// hàm lấy token, hoặc có thể gán trực tiếp token nếu đã biết
const getToken = () => {
  // Hàm này trả về token
  return 'db039ed19eeadef24d428398246e5f10dad7be75c9235f541db26838b57abe9503a67151a00456a4080ba9a89134ee0a338395312a75e692bc76bc9f92aeb7eaf5fd257462acdf031a2156b69dda6810e9ecbcafc251cc2e500314a16e8e75bb0745cc4b5c43453de7c3ceb6ff2947919574d77a6d840243a65015757083bd33';
};

export const baseAPI = axios.create({

  baseURL: 'http://localhost:1337/api',
  headers: {
    'Authorization': `Bearer ${getToken()}`
  }
});