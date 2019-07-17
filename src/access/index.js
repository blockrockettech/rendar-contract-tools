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
            address: '0x81c596fde30e406294af8b7107a577c81fa703b7',
            deploymentBlock: 6006107,
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
