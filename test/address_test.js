var assert = require('assert');
var assert = require('chai').assert
var valid_cep = '01001-000'

const api = require('./commands/address_comands')

describe('Address', function () {
    it('Deve retornar os dados do CEP informando o CEP ', async function () {
        var res = await api.getAddressByCep(valid_cep)
        assert.equal(res.data.cep, valid_cep)
    });

    it('Deve retornar os dados do CEP informado o endereço', async function () {
        var res = await api.getAddressByAddress('RS/Porto Alegre/Domingos')

        res.data.forEach(element => {
            assert.typeOf(element.cep, 'string')
        });
    });

    it('Deve retornar os dados do CEP com formtato unicode no console informando o CEP', async function () {
        var res = await api.getAddressByCepUnicode(valid_cep)
         assert.equal(res.data.cep, valid_cep)
     });
});
