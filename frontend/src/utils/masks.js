export default {
  phone: (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d)(\d{4})$/, '$1-$2')
      .substr(0, 15)
  },
  lowercase: (value) => {
    return value.toLowerCase()
  }
}
