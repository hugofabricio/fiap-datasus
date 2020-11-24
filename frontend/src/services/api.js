import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://buscasus.com.br/api/'
})

export default {
  getStatistic: async (cid, year) => {
    try {
      const { data } = await instance.get(`statistics/${cid}/${year}`)

      return data
    } catch (error) {
      console.error(error)
      return []
    }
  }
}
