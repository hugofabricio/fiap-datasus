import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://buscasus.hugofabricio.com/api/',
  timeout: 1000
})

export default {
  getStatistic: async (cid, year) => {
    try {
      const resp = await instance('statistics', { cid, year })
      console.log(resp)
    } catch (error) {
      console.error(error)
    }
  }
}
