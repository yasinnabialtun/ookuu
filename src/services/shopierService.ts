import { PaymentRequest, PaymentResponse, Product } from '../types/payment';

// Shopier API konfigürasyonu
const SHOPIER_CONFIG = {
  apiKey: import.meta.env.VITE_SHOPIER_API_KEY || 'test_api_key',
  secretKey: import.meta.env.VITE_SHOPIER_SECRET_KEY || 'test_secret_key',
  environment: import.meta.env.MODE === 'production' ? 'production' : 'sandbox'
};

// Shopier ödeme servisi
export class ShopierService {
  private static instance: ShopierService;
  private apiKey: string;
  private secretKey: string;
  private environment: string;

  constructor() {
    this.apiKey = SHOPIER_CONFIG.apiKey;
    this.secretKey = SHOPIER_CONFIG.secretKey;
    this.environment = SHOPIER_CONFIG.environment;
  }

  public static getInstance(): ShopierService {
    if (!ShopierService.instance) {
      ShopierService.instance = new ShopierService();
    }
    return ShopierService.instance;
  }

  // Test modu kontrolü
  private isTestMode(): boolean {
    return this.apiKey === 'test_api_key' || this.apiKey === 'your_shopier_api_key_here';
  }

  // Ödeme başlatma
  async createPayment(paymentRequest: PaymentRequest): Promise<PaymentResponse> {
    try {
      // Test modunda ise simüle edilmiş ödeme yap
      if (this.isTestMode()) {
        return this.simulatePayment(paymentRequest);
      }

      // Gerçek Shopier API endpoint'i
      const apiUrl = this.environment === 'production' 
        ? 'https://api.shopier.com/payment/create'
        : 'https://sandbox-api.shopier.com/payment/create';

      // Ödeme verilerini hazırla
      const paymentData = {
        apiKey: this.apiKey,
        amount: paymentRequest.amount,
        currency: paymentRequest.currency,
        description: paymentRequest.description,
        customerEmail: paymentRequest.customerEmail,
        customerName: paymentRequest.customerName,
        customerPhone: paymentRequest.customerPhone,
        products: paymentRequest.products.map(product => ({
          id: product.shopierProductId || product.id,
          name: product.name,
          price: product.price,
          quantity: 1
        })),
        callbackUrl: paymentRequest.callbackUrl,
        successUrl: paymentRequest.successUrl,
        cancelUrl: paymentRequest.cancelUrl,
        timestamp: Date.now()
      };

      // API isteği gönder
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.secretKey}`
        },
        body: JSON.stringify(paymentData)
      });

      const result = await response.json();

      if (result.success) {
        return {
          success: true,
          paymentUrl: result.paymentUrl,
          transactionId: result.transactionId
        };
      } else {
        return {
          success: false,
          error: result.error || 'Ödeme başlatılamadı'
        };
      }
    } catch (error) {
      console.error('Shopier ödeme hatası:', error);
      return {
        success: false,
        error: 'Ödeme işlemi sırasında bir hata oluştu'
      };
    }
  }

  // Test modu için simüle edilmiş ödeme
  private simulatePayment(paymentRequest: PaymentRequest): Promise<PaymentResponse> {
    return new Promise((resolve) => {
      // 2 saniye bekle (gerçek API çağrısını simüle et)
      setTimeout(() => {
        // %90 başarı oranı ile simüle et
        const isSuccess = Math.random() > 0.1;
        
        if (isSuccess) {
          const transactionId = `TEST_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
          
          // Başarılı ödeme - success sayfasına yönlendir
          const successUrl = `${paymentRequest.successUrl}?transaction_id=${transactionId}&amount=${paymentRequest.amount}&currency=${paymentRequest.currency}`;
          
          resolve({
            success: true,
            paymentUrl: successUrl,
            transactionId: transactionId
          });
        } else {
          // Başarısız ödeme - cancel sayfasına yönlendir
          resolve({
            success: true,
            paymentUrl: paymentRequest.cancelUrl,
            transactionId: undefined
          });
        }
      }, 2000);
    });
  }

  // Ödeme durumu kontrolü
  async checkPaymentStatus(transactionId: string): Promise<PaymentResponse> {
    try {
      // Test modunda ise simüle edilmiş durum döndür
      if (this.isTestMode()) {
        return {
          success: true,
          transactionId: transactionId,
          error: undefined
        };
      }

      const apiUrl = this.environment === 'production'
        ? `https://api.shopier.com/payment/status/${transactionId}`
        : `https://sandbox-api.shopier.com/payment/status/${transactionId}`;

      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.secretKey}`
        }
      });

      const result = await response.json();

      return {
        success: result.status === 'completed',
        transactionId: transactionId,
        error: result.status !== 'completed' ? 'Ödeme tamamlanmadı' : undefined
      };
    } catch (error) {
      console.error('Ödeme durumu kontrol hatası:', error);
      return {
        success: false,
        error: 'Ödeme durumu kontrol edilemedi'
      };
    }
  }

  // Test ödeme (geliştirme ortamı için)
  async createTestPayment(product: Product, customerEmail: string, customerName: string): Promise<PaymentResponse> {
    const paymentRequest: PaymentRequest = {
      amount: product.price,
      currency: product.currency,
      description: `${product.name} - Test Ödemesi`,
      customerEmail,
      customerName,
      products: [product],
      callbackUrl: `${window.location.origin}/payment/callback`,
      successUrl: `${window.location.origin}/payment/success`,
      cancelUrl: `${window.location.origin}/payment/cancel`
    };

    return this.createPayment(paymentRequest);
  }
}

export default ShopierService.getInstance();
