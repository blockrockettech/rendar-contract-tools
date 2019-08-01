const networkSplitter = (network, {ropsten, rinkeby, mainnet, local}) => {
    switch (network) {
        case 1:
        case '1':
        case 'mainnet':
            return mainnet;
        case 3:
        case '3':
        case 'ropsten':
            return ropsten;
        case 4:
        case '4':
        case 'rinkeby':
            return rinkeby;
        case 5777:
        case '5777':
        case 'local':
            // This may change if a clean deploy of KODA locally is not done
            return local;
        default:
            throw new Error(`Unknown network ID ${network}`);
    }
};

const getNetwork = (network) => {
    return networkSplitter(network, {
        mainnet: 'mainnet',
        ropsten: 'ropsten',
        rinkeby: 'rinkeby',
        local: 'local'
    });
};

const getRendarToken = (network) => {
    return networkSplitter(network, {
        mainnet: {
            address: '0x03c67746d9482ffeE0D48Cf03c56aD914687a31E',
            deploymentBlock: 8266277,
            abi: require('../abi/RendarToken.abi')
        },
        ropsten: {
            address: '0x3a3BDc602CcF8776d3C0D7FBDe72E886FAb8Ba04',
            deploymentBlock: 6106362,
            abi: require('../abi/RendarToken.abi')
        },
        rinkeby: {
            address: '',
            deploymentBlock: 0,
            abi: require('../abi/RendarToken.abi')
        },
        local: {
            address: '',
            deploymentBlock: 0,
            abi: require('../abi/RendarToken.abi')
        }
    });
};

module.exports = {
    getNetwork,
    networkSplitter,
    getRendarToken,
};
