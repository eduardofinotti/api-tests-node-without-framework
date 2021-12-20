
# Automação de testes de API sem framework

Automação de testes de API sem framework, com NODEJS.
Nesse projeto não foi utilizado nenhum framework robusto de testes, como Codeceptjs, JUnit, Cypress ou qualquer outro.

Foram utilizados apenas duas bibliotecas node. Mocha, para organizar as features e cenários, e para os asserts. 
E também o axios, para as chamadas na api.




## Installation

Install  with npm

```bash
    git clone https://github.com/eduardofinotti/api-tests-node-without-framework.git
    cd api-tests-node-without-framework
    npm install 
```


    
## Usage/Examples

**Teste:**

```javascript
var assert = require('assert');
var assert = require('chai').assert
const api = require('./commands/address_comands')

describe('Address', function () {
    it('Deve retornar os dados do CEP informando o CEP ', async function () {
        var cep = '01001-000'
        var res = await api.getAddressByCep(cep)
        assert.equal(res.data.cep, cep)
    });
});
```


**Comandos na API:**

```javascript
const axios = require('axios')

module.exports = {
    async getAddressByCep(cep) {
        return await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    }
}
```


## Running Tests

**To run all tests, run the following command.**

```bash
  npm run test
```

**To run a especific test.**

 Just send the '-g' with a partial text of the functionality (describe) or of the scenario itself (it).

```bash
  npx mocha -g 'Address'
```

**To generate a REPORT.**

```bash
  npx mocha --reporter mochawesome                                         
```

or 

```bash
  npx mocha --reporter mochawesome -g 'Address'         
```


## Authors

- [@eduardofinotti](https://github.com/eduardofinotti)

