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
            address: '0x21fbda27636e29feb90df0cb96e9fd8aaaf15eea',
            deploymentBlock: 8251225,
            abi: require('../abi/RendarToken.abi')
        },
        ropsten: {
            address: '0x4E6Ce9418C29B8B56eb8Ef03d741DfE216a2CbF3',
            deploymentBlock: 6090820,
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
