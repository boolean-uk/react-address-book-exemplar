const formatDateNumber = (number) => {
  return String(number).padStart(2, '0')
}

export const formatDateYmd = (date) => {
  return `${date.getFullYear()}-${formatDateNumber(date.getMonth()+1)}-${formatDateNumber(date.getDate())}`
}