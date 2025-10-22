// WhatsApp utility functions to handle different devices and browsers
export const openWhatsApp = (phoneNumber = '6289516438703', message = '') => {
  // Detect mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  // Encode message if provided
  const encodedMessage = message ? encodeURIComponent(message) : '';
  const messageParam = encodedMessage ? `&text=${encodedMessage}` : '';
  
  // Different URLs for different scenarios
  const urls = {
    mobileApp: `whatsapp://send?phone=${phoneNumber}${messageParam}`,
    webApi: `https://api.whatsapp.com/send?phone=${phoneNumber}${messageParam}`,
    webMe: `https://wa.me/${phoneNumber}${messageParam ? `?text=${encodedMessage}` : ''}`,
    phone: `tel:+${phoneNumber}`
  };
  
  // Try to open WhatsApp based on device
  if (isMobile) {
    // On mobile, try app intent first
    try {
      window.location.href = urls.mobileApp;
      return true;
    } catch (error) {
      console.warn('WhatsApp app not available, trying web version');
    }
  }
  
  // Try web API version
  try {
    const newWindow = window.open(urls.webApi, '_blank', 'noopener,noreferrer,width=600,height=600');
    if (newWindow) {
      return true;
    }
  } catch (error) {
    console.warn('API endpoint failed, trying wa.me');
  }
  
  // Try wa.me as fallback
  try {
    const newWindow = window.open(urls.webMe, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      return true;
    }
  } catch (error) {
    console.warn('wa.me failed, trying phone fallback');
  }
  
  // Final fallback to phone call
  try {
    window.location.href = urls.phone;
    return true;
  } catch (error) {
    console.error('All WhatsApp methods failed');
    return false;
  }
};

// Simplified version without message to avoid 429 errors
export const openWhatsAppSimple = (phoneNumber = '6289516438703') => {
  return openWhatsApp(phoneNumber, '');
};