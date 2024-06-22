export function getWhatsAppLink(phoneNumber: string): string {
  if (!phoneNumber) {
    return "no-link";
  }
  // Remove any non-digit characters from the phone number
  const cleanNumber = phoneNumber.replace(/\D/g, "");

  // Construct the WhatsApp link
  return `https://wa.me/${cleanNumber}`;
}
