var assert = require('assert');
var assert = require('chai').assert

const api = require('./commands/address_comands')

describe('Address', function () {
    it('Deve retornar os dados do CEP informando o CEP ', async function () {
        var cep = '01001-000'
        var res = await api.getAddressByCep(cep)
        assert.equal(res.data.cep, cep)
    });

    it('Deve retornar os dados do CEP informado o endereço', async function () {
        var res = await api.getAddressByAddress('RS/Porto Alegre/Domingos')

        res.data.forEach(element => {
            assert.typeOf(element.cep, 'string')
        });
    });
});
