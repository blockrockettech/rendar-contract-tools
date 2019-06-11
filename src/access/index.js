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
            address: '',
            deploymentBlock: 0,
            abi: require('../abi/RendarToken.abi')
        },
        ropsten: {
            address: '0xE1e2c10b47Bf9D07014F6b141695fdEB2C26FeE1',
            deploymentBlock: 5773843,
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
