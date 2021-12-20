require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid gloom tape slab chest note mad sniff harvest climb orange turn'; 
let testAccounts = [
"0xd2514c056b679642b533c7b014ebc5780ea479bf225efd95c52b28d28ffe091d",
"0x3942637af2808bedbf3de3c12dda6a881da31392402d386a31cb4d929191859e",
"0xa5d56f965ee2ea45a40751eb53737f05bccd65ee559ad3160ef3f454de1797ae",
"0x0acc97c95de73439b6e15015ba140fcd97e2dbe9b3664d5a53214edf7bf497eb",
"0x6d28d2fd018faa8baf8e38cfa8bf67074a4a7c77306a562ad39761e8c1626f6d",
"0x2e37afb14fa8baa400ce06a6ab239b52a82c1fb334a37f565f2bec7aa01ad994",
"0x96d261815cd88e8f21dc99570dbaf73d249ad32e10c28a09bc20f2f4bcbafec2",
"0x8f6163be4f6dbcc102fccf6bfb5f951fdb2cc5c002d770b7e9faf23851ab83c2",
"0xe82ccb3e9ecc9be725f9f1d9f11244210d7f4d2f7325145ac71803bc564326fc",
"0x9bcc19c21c1de9617aca5218e257e4fc7ffc0f736ad33404e5ba8db0c8bc37a4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


