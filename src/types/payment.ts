export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  currency: string;
  image?: string;
  category: string;
  duration?: string;
  features?: string[];
  shopierProductId?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface PaymentConfig {
  shopierApiKey: string;
  shopierSecretKey: string;
  environment: 'sandbox' | 'production';
}

export interface PaymentRequest {
  amount: number;
  currency: string;
  description: string;
  customerEmail: string;
  customerName: string;
  customerPhone?: string;
  products: Product[];
  callbackUrl: string;
  successUrl: string;
  cancelUrl: string;
}

export interface PaymentResponse {
  success: boolean;
  paymentUrl?: string;
  error?: string;
  transactionId?: string;
}
