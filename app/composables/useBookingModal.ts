export const useBookingModal = () => {
  const isBookingOpen = useState('booking-modal-open', () => false)

  const openBooking = () => {
    isBookingOpen.value = true
  }

  const closeBooking = () => {
    isBookingOpen.value = false
  }

  return {
    isBookingOpen,
    openBooking,
    closeBooking
  }
}
