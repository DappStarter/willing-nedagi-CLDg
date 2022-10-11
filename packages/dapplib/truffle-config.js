require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note ridge prosper gesture deputy equal general'; 
let testAccounts = [
"0x7ac1f6663ac78368821ce6c720d6ebf1eadf1c8aecdeede223ba507b3e25fd73",
"0x755d448fad7c597111277fcca7ae6e8ce3da819fd0eae8a8504d5dd7225406a4",
"0xe2b70243656767a48764bdadf8ad23d52a74ffcb563cfd38b7b73a922d4801a8",
"0x458af5c07c000cdae17c3558ede4c5c3d68855946f1fcdb49072a959c2d9ea7e",
"0x0dec909619fa61a4e8260b9afc4c80183a4da869fb13724d808f311cf15551cd",
"0xd47480ca9c9d87712d946ff8485b814200334a45fb8f1e650de689e16bbb03bb",
"0xc36c2f0c62615a6f7eed8cb634f992badac85ff53543d34637b435190bb951d2",
"0x247fe338462f705a35a7e47d3e2c90f285163b73bddf46729661f6183722d077",
"0xd539d4927371d0ab8414ed19a0567ee972445c254afcec9c21a0f9efdb697bd7",
"0x308e413d8c47966e1b04feed4550602390541ce2c8ff2872ea53df26bf192bce"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

