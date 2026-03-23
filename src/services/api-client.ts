import axios, { AxiosInstance } from 'axios';

/**
 * Hàm lấy Token từ Server:
 * Chỉ thực hiện khi code đang chạy trên Server (Server Components / Actions).
 * Nếu chạy ở Client, trình duyệt sẽ tự động gửi kèm Cookie nếu cùng Domain.
 */
const getAuthToken = async () => {
  // Kiểm tra nếu không phải môi trường trình duyệt (tức là đang ở Server)
  if (typeof window === 'undefined') {
    try {
      const { cookies } = await import('next/headers');
      const cookieStore = await cookies();
      return cookieStore.get('auth_token')?.value;
    } catch (error) {
      // Có thể đang trong quá trình build tĩnh (Static Generation)
      return undefined;
    }
  }
  return undefined; 
};

const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
apiClient.interceptors.request.use(async (config) => {
  // Lấy token từ Cookie (chỉ lấy được khi chạy trên Server)
  const token = await getAuthToken();
  
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
}, (error) => Promise.reject(error));

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Nếu gặp lỗi 401 trên Server, bạn có thể xử lý logic redirect ở Middleware
    return Promise.reject(error.response?.data || { message: error.message });
  }
);

export default apiClient;