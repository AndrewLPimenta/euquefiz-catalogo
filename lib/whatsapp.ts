export function generateWhatsAppLink(
  message: string,
  phoneNumber = '5519997785025'
) {
  const formattedPhone = phoneNumber.replace(/\D/g, '')
  return `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`
}
