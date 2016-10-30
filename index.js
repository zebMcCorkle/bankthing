const web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

const account = web3.eth.accounts[0];
const etherbankContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"recalculateInterest","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"savingsInterestRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"balance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"loanInterestRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"type":"function"},{"inputs":[{"name":"sir","type":"uint256"},{"name":"lir","type":"uint256"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addr","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"balance","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addr","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"balance","type":"uint256"}],"name":"Withdraw","type":"event"}]);
const etherbank = etherbankContract.new(
  10000,
  0,
  {
    from: account,
    data: '60606040818152806103e7833960a0815290516080516001828155600282905533600160a060020a03166000908152602081905293909320928301549192909161009291906100a29082904303620f424081810a90880182900a811561000257835491900402808355600192830191825533600160a060020a031660009081526020819052604090209081559054910155565b50506102bf806101286000396000f35b805434810110156100b257610002565b805434908101808355600160a060020a0333166000818152602081815260409182902093845560018087015494019390935584548151928352928201939093528083019190915290517f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a159181900360600190a15056606060405236156100565760e060020a6000350463090299be811461005b578063196a29eb146100685780632e1a7d4d14610076578063b69ef8a814610108578063c222bcea14610139578063d0e30db014610147575b610002565b346100025761016a61009d565b346100025761012760015481565b346100025761016a600435600160a060020a033316600090815260208190526040902061016c5b600160a060020a03331660009081526020819052604090206001808201549054439190910390620f424082810a910182900a811561000257835491900402808355600192830191825533600160a060020a031660009081526020819052604090209081559054910155565b346100025733600160a060020a03166000908152602081905260409020545b60408051918252519081900360200190f35b346100025761012760025481565b61016a600160a060020a033316600090815260208190526040902061023961009d565b005b805460009083900310801590610183575060008210155b156102115780548290038155604051600160a060020a0333169083156108fc029084906000818181858888f1935050505015156101c557805482018155610002565b805460408051600160a060020a03331681526020810185905280820192909252517ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5689181900360600190a15b33600160a060020a031660009081526020819052604090208154815560019182015491015550565b8054348101101561024957610002565b805434908101808355600160a060020a0333166000818152602081815260409182902093845560018087015494019390935584548151928352928201939093528083019190915290517f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a159181900360600190a15056',
    gas: 4700000
  }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
      console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
  }
);

$(() => {
  const withdrawWatcher = etherbank.Withdraw({});
  withdrawWatcher.watch(event => {
    $('#balance').text(web3.eth.getBalance(account));
  });

  $('#balance').text(web3.eth.getBalance(account));
});
