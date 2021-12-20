const axios = require('axios')

module.exports = {

    async getAddressByCep(cep) {
        return await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    },

    async getAddressByAddress(address) {
        return await axios.get(`https://viacep.com.br/ws/${address}/json/`)
    },
    
    async getAddressByCepUnicode(cep) {
        return await axios.get(`https://viacep.com.br/ws/${cep}/json/unicode/`)
    },

}