import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://buscasus.hugofabricio.com/api/'
})

export default {
  getStatistic: async (cid) => {
    try {
      const { data } = await instance.get(`statistics/${cid}`)

      return data
    } catch (error) {
      console.error(error)
      return []
    }
  }
}
