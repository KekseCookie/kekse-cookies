import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, ArrowRight, Check } from 'lucide-react';
import { PRODUCTS, WHATSAPP_NUMBER } from '../config';

export default function Cart({ isOpen, onClose, cart, onAdd, onRemove, onClear }) {
  const [clientName, setClientName] = useState('');
  const [deliveryType, setDeliveryType] = useState('retirada'); // 'retirada' or 'entrega'
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('pix');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  // Filter items in the cart
  const cartItems = PRODUCTS.map(p => ({
    product: p,
    qty: cart[p.id] || 0
  })).filter(item => item.qty > 0);

  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const totalQty = totalItems;
  const isMixedOrder = cartItems.length > 1;

  // Check if there are any products with qty >= 2
  const hasAnyQtyAtLeastTwo = cartItems.some(item => item.qty >= 2);

  // Identify if a product gets the special mixed discount for qty = 1
  let specialDiscountQtyOneProductId = null;
  if (isMixedOrder && totalQty >= 2 && !hasAnyQtyAtLeastTwo) {
    const lowestOverall = cartItems.reduce((prev, current) => 
      prev.product.basePrice < current.product.basePrice ? prev : current
    );
    specialDiscountQtyOneProductId = lowestOverall.product.id;
  }

  // Find the lowest value flavor in the cart based on its basePrice (for display/text)
  let overallLowestItem = null;
  if (cartItems.length > 0) {
    overallLowestItem = cartItems.reduce((prev, current) => 
      prev.product.basePrice < current.product.basePrice ? prev : current
    );
  }

  // To maintain compatibility with variables used downstream
  const applyDiscountToQtyOne = !!specialDiscountQtyOneProductId;
  const discountedProductId = specialDiscountQtyOneProductId;
  const lowestBasePriceItem = overallLowestItem;

  // Calculate pricing breakdown for each item in the cart
  const itemsBreakdown = cartItems.map(item => {
    let unitPrice = item.product.basePrice;
    let isDiscounted = false;

    if (item.qty >= 2) {
      // Any product with qty >= 2 always gets its discount
      unitPrice = item.product.calculatePrice(item.qty);
      isDiscounted = true;
    } else if (item.qty === 1 && item.product.id === specialDiscountQtyOneProductId) {
      // Special mixed order rule for qty = 1 (lowest base-price item gets discount)
      if (item.product.id === 'traditional') unitPrice = 10.00;
      else if (item.product.id === 'red_velvet') unitPrice = 13.00;
      else if (item.product.id === 'nutella') unitPrice = 14.00;
      isDiscounted = true;
    }
      
    const subtotal = item.qty * unitPrice;
    const hasActiveDiscount = unitPrice < item.product.basePrice;

    return {
      ...item,
      unitPrice,
      subtotal,
      isDiscounted,
      hasActiveDiscount
    };
  });

  const totalOrderValue = itemsBreakdown.reduce((sum, item) => sum + item.subtotal, 0);

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!clientName.trim()) {
      alert("Por favor, informe seu nome.");
      return;
    }
    if (deliveryType === 'entrega' && !address.trim()) {
      alert("Por favor, informe seu endereço para entrega.");
      return;
    }

    setIsSubmitting(true);

    // Format WhatsApp Message
    let message = `*Novo Pedido - Kekse Cookies*\n\n`;
    message += `*Nome do Cliente:* ${clientName}\n`;
    message += `*Entrega:* ${deliveryType === 'entrega' ? 'Entrega em Domicílio' : 'Retirada na Confeitaria'}\n`;
    if (deliveryType === 'entrega') {
      message += `*Endereço:* ${address}\n`;
    }
    
    // Map payment method name
    const payLabels = {
      pix: 'PIX',
      credito: 'Cartão de Crédito',
      debito: 'Cartão de Débito',
      dinheiro: 'Dinheiro'
    };
    message += `*Forma de Pagamento:* ${payLabels[paymentMethod]}\n\n`;
    
    message += `*Cookies Escolhidos:*\n`;
    
    itemsBreakdown.forEach(item => {
      const unitText = item.unitPrice.toFixed(2).replace('.', ',');
      const subtotalText = item.subtotal.toFixed(2).replace('.', ',');
      
      message += `- ${item.qty}x *${item.product.name}* (R$ ${unitText} cada) = R$ ${subtotalText}`;
      if (item.hasActiveDiscount) {
        message += ` *(c/ desconto)*`;
      } else if (isMixedOrder && item.product.id !== lowestBasePriceItem.product.id) {
        message += ` *(s/ desc. - pedido misto)*`;
      }
      message += `\n`;
    });
    
    message += `\n*Valor Total:* R$ ${totalOrderValue.toFixed(2).replace('.', ',')}`;

    // Create WhatsApp Link
    const cleanPhone = WHATSAPP_NUMBER.replace(/\D/g, '');
    const encodedText = encodeURIComponent(message);
    const waUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodedText}`;

    // Redirect to WhatsApp
    window.open(waUrl, '_blank');
    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-chocolate/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Cart Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-cream border-l border-chocolate/5 flex flex-col shadow-2xl animate-fade-in-up md:animate-none">
          
          {/* Header */}
          <div className="p-6 border-b border-chocolate/5 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-chocolate" />
              <h2 className="text-xl font-bold text-chocolate font-serif">Meu Pedido</h2>
            </div>
            <button 
              onClick={onClose}
              className="p-2 -mr-2 text-chocolate hover:text-gold transition-colors focus:outline-none"
              aria-label="Fechar Carrinho"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Contents */}
          <div className="flex-grow overflow-y-auto p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <span className="text-4xl">🍪</span>
                <h3 className="text-lg font-bold text-chocolate font-serif">Sua sacola está vazia</h3>
                <p className="text-xs text-brown-light max-w-xs">
                  Adicione alguns de nossos deliciosos cookies artesanais para começar seu pedido.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-chocolate text-cream text-xs font-bold rounded-lg hover:bg-brown-light transition-colors"
                >
                  Voltar ao Cardápio
                </button>
              </div>
            ) : (
              <>
                {/* Items List */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-brown-light uppercase tracking-wider">Produtos</span>
                    <button 
                      onClick={onClear}
                      className="text-xs text-red-500 hover:text-red-700 flex items-center space-x-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Limpar tudo</span>
                    </button>
                  </div>

                  <div className="divide-y divide-chocolate/5">
                    {itemsBreakdown.map((item) => (
                      <div key={item.product.id} className="py-4 flex gap-4">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          className="w-16 h-16 object-cover rounded-lg border border-beige/60 bg-white"
                        />
                        <div className="flex-grow space-y-1">
                          <div className="flex justify-between items-start">
                            <h4 className="text-sm font-bold text-chocolate font-serif">{item.product.name}</h4>
                            <span className="text-sm font-bold text-chocolate">
                              R$ {item.subtotal.toFixed(2).replace('.', ',')}
                            </span>
                          </div>

                          <p className="text-[10px] text-brown-light">
                            {item.qty} x R$ {item.unitPrice.toFixed(2).replace('.', ',')}
                          </p>

                          {/* Discount Tags & Information */}
                          <div className="pt-1 flex flex-wrap items-center gap-1.5">
                            {item.hasActiveDiscount ? (
                              <span className="inline-flex items-center text-[9px] bg-green-100 text-green-800 px-1.5 py-0.5 rounded font-bold">
                                <Check className="w-2.5 h-2.5 mr-0.5" />
                                Desconto de Qtde Ativo
                              </span>
                            ) : isMixedOrder && item.qty === 1 && applyDiscountToQtyOne && item.product.id !== discountedProductId ? (
                              <span className="text-[9px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-100 italic">
                                Sem desc. (apenas menor valor do mix recebe)
                              </span>
                            ) : null}
                          </div>

                          {/* Item Quantity Controller */}
                          <div className="pt-2 flex items-center space-x-2">
                            <button
                              onClick={() => onRemove(item.product.id)}
                              className="px-2 py-0.5 bg-chocolate/5 hover:bg-chocolate/10 text-chocolate rounded text-xs transition-colors"
                            >
                              -
                            </button>
                            <span className="text-xs font-bold px-1 text-chocolate">{item.qty}</span>
                            <button
                              onClick={() => onAdd(item.product.id)}
                              className="px-2 py-0.5 bg-chocolate/5 hover:bg-chocolate/10 text-chocolate rounded text-xs transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mixed Order Discount Notice */}
                {isMixedOrder && (
                  <div className="p-3 bg-amber-50/80 border border-amber-200/50 rounded-lg text-[11px] text-amber-800 space-y-1">
                    <p className="font-bold flex items-center">
                      <span className="mr-1">ℹ️</span> Regra de Desconto Misto:
                    </p>
                    {applyDiscountToQtyOne ? (
                      <p>
                        Como todos os sabores possuem apenas 1 unidade, aplicamos o desconto progressivo de quantidade ao sabor de menor valor base (<strong>{lowestBasePriceItem?.product.name}</strong>).
                      </p>
                    ) : (
                      <p>
                        Os sabores com 2 ou mais unidades recebem seus respectivos descontos de quantidade normalmente.
                      </p>
                    )}
                  </div>
                )}

                {/* Customer Checkout Form */}
                <form onSubmit={handleCheckout} className="space-y-4 pt-4 border-t border-chocolate/5">
                  <h3 className="text-xs font-bold text-brown-light uppercase tracking-wider">Dados de Entrega</h3>
                  
                  {/* Client Name Input */}
                  <div className="space-y-1">
                    <label htmlFor="client-name" className="text-xs font-medium text-chocolate">Seu Nome *</label>
                    <input 
                      id="client-name"
                      type="text" 
                      required
                      placeholder="Ex: Mariana Silva" 
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3 py-2.5 bg-white border border-beige rounded-lg text-sm text-chocolate placeholder-brown-light/50 focus:outline-none focus:border-gold"
                    />
                  </div>

                  {/* Delivery Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-chocolate">Como deseja receber?</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setDeliveryType('retirada')}
                        className={`py-2 px-3 border rounded-lg text-xs font-bold transition-all ${
                          deliveryType === 'retirada' 
                            ? 'bg-chocolate text-cream border-chocolate' 
                            : 'bg-white text-chocolate border-beige hover:bg-chocolate/5'
                        }`}
                      >
                        Retirada (Grátis)
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeliveryType('entrega')}
                        className={`py-2 px-3 border rounded-lg text-xs font-bold transition-all ${
                          deliveryType === 'entrega' 
                            ? 'bg-chocolate text-cream border-chocolate' 
                            : 'bg-white text-chocolate border-beige hover:bg-chocolate/5'
                        }`}
                      >
                        Entrega em Domicílio
                      </button>
                    </div>
                  </div>

                  {/* Address Input (conditional) */}
                  {deliveryType === 'entrega' && (
                    <div className="space-y-1 animate-fade-in-up">
                      <label htmlFor="delivery-address" className="text-xs font-medium text-chocolate">Endereço de Entrega *</label>
                      <textarea 
                        id="delivery-address"
                        required
                        rows="2"
                        placeholder="Rua, Número, Bairro, Cidade e Complemento" 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-beige rounded-lg text-sm text-chocolate placeholder-brown-light/50 focus:outline-none focus:border-gold resize-none"
                      />
                    </div>
                  )}

                  {/* Payment Method */}
                  <div className="space-y-1">
                    <label htmlFor="payment-method" className="text-xs font-medium text-chocolate">Forma de Pagamento</label>
                    <select
                      id="payment-method"
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-full px-3 py-2.5 bg-white border border-beige rounded-lg text-sm text-chocolate focus:outline-none focus:border-gold"
                    >
                      <option value="pix">PIX</option>
                      <option value="credito">Cartão de Crédito</option>
                      <option value="debito">Cartão de Débito</option>
                      <option value="dinheiro">Dinheiro</option>
                    </select>
                  </div>

                  {/* Pricing Summary */}
                  <div className="pt-4 border-t border-chocolate/5 space-y-2">
                    <div className="flex justify-between items-center text-xs text-brown-light">
                      <span>Subtotal:</span>
                      <span>R$ {totalOrderValue.toFixed(2).replace('.', ',')}</span>
                    </div>
                    {deliveryType === 'entrega' && (
                      <div className="flex justify-between items-center text-xs text-brown-light">
                        <span>Taxa de Entrega:</span>
                        <span className="italic text-gold">A combinar</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center text-sm font-bold text-chocolate border-t border-chocolate/5 pt-2">
                      <span>Total do Pedido:</span>
                      <span className="text-lg text-gold">
                        R$ {totalOrderValue.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gold hover:bg-gold-dark text-white font-bold text-sm rounded-lg flex items-center justify-center space-x-2 shadow-lg transition-colors disabled:opacity-50 btn-premium mt-6 cursor-pointer"
                  >
                    <span>Finalizar Pedido via WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
