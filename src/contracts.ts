export const networkContracts = {
	1: {
		name: 'mainnet',
		CONTRACT_DAI: '0x6b175474e89094c44da98b954eedeac495271d0f',
		CONTRACT_DRIPS_HUB: '0x73043143e0a6418cc45d82d4505b096b802fd365',
		CONTRACT_DRIPS_HUB_LOGIC: '0x8d321e80487356c846f34456d31ce761776ef697',
		CONTRACT_RESERVE: '0xf9bbb2df44cfe46e501cf91c99b2f8fef9d9d44a',
		CONTRACT_RADICLE_REGISTRY: '0x40e9340BE9326b2e026fDBEfe775F1515939bD46',
		CONTRACT_BUILDER: '0x058be54b173e324f80ec03672ec14c4d079b82ac',
		NETWORK: 'ethlive',
		DEPLOY_ADDRESS: '0xAbadeFE1CE7bB6f1D5146f3f476701F791b18c6C',
		CYCLE_SECS: '2592000',
		COMMIT_HASH: 'd47193a8d282f0e91e048bc39aeca0f8fe954458',
		GOVERNANCE_ADDRESS: '0x8da8f82d2bbdd896822de723f55d6edf416130ba',
		CONTRACT_DRIPS_GOVERNANCE: '0x1bc6075d1b811f0f0c0913ac7a3ac1d3d01a8b6f',
		CONTRACT_TOKEN_TEMPLATE: '0x885e158c7e6605c895e014116661651b22770f7b',
		CONTRACT_METADATA: '0x1C465B0249Fb7c92896709768b9d4aBD0135DBc9'
	},
	4: {
		name: 'rinkeby',
		CONTRACT_DAI: '0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea',
		CONTRACT_DRIPS_HUB: '0xfbcD6918907902c106A99058146CBdBb76a812f6',
		CONTRACT_DRIPS_HUB_LOGIC: '0x756E821D9E88D76ef15d2e719bbd4CC3A2167EC1',
		CONTRACT_RESERVE: '0x880D5095606c7b541AdDE0F94A6858CbABb63F69',
		CONTRACT_RADICLE_REGISTRY: '0xc2a8F699317795956bE5Cc4f9FF61FD4E7667670',
		CONTRACT_BUILDER: '0x688662533E0341D518Bcc965525aFc70550CEE39',
		NETWORK: 'rinkeby',
		DEPLOY_ADDRESS: 'eca823848221a1da310e1a711e19d82f43101b07',
		CYCLE_SECS: '86400',
		COMMIT_HASH: '9edf9be0e2fa227dcb778db98aec8bcaf89fe1d5',
		GOVERNANCE_ADDRESS: '0xeca823848221a1da310e1a711e19d82f43101b07',
		CONTRACT_DRIPS_GOVERNANCE: '0x038d28F839e6d83B2270c6B42BC8B01a5c75cad0',
		CONTRACT_METADATA: '0x1C465B0249Fb7c92896709768b9d4aBD0135DBc9'
	},
	137: {
		name: 'matic',
		CONTRACT_DAI: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
		CONTRACT_DRIPS_HUB: '0x8715FA4d3831301Ae46EbF19bE37F7a2CA9655D3',
		CONTRACT_DRIPS_HUB_LOGIC: '0x3f3Cf6683819bBa7C13572A3D58244A87C47FAdD',
		CONTRACT_RESERVE: '0x875FDaF0055A16c9c19fb4B424F446877793D64D',
		CONTRACT_RADICLE_REGISTRY: '0x2f91577AC283a57C2AA06dc579d1ce1391151103',
		CONTRACT_BUILDER: '0x8b4b9D494EaCC4f0b471dCc72380d67305254baD',
		NETWORK: 'polygon',
		DEPLOY_ADDRESS: '0x8557Ec3DB1C6Ee9BB4ADefe1753689BC32936366',
		CYCLE_SECS: '2592000',
		COMMIT_HASH: 'cfc5a83f9a324c936bd153f2593c335910a27f6a',
		GOVERNANCE_ADDRESS: '0x8da8f82d2bbdd896822de723f55d6edf416130ba',
		CONTRACT_DRIPS_GOVERNANCE: '0xfbd9C349F5a2A2D245927476317fc3DDa8708F70',
		CONTRACT_TOKEN_TEMPLATE: '0xab8206534e8853fe650253217859282ad13d8921',
		POLYGON_FX_CHILD: '0x8397259c983751DAf40400790063935a11afa28a',
		CONTRACT_METADATA: '0x1C465B0249Fb7c92896709768b9d4aBD0135DBc9'
	},
	80001: {
		name: 'mumbai',
		CONTRACT_DAI: '0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1',
		CONTRACT_DRIPS_HUB: '0xC3f15dA8F5B77F514eE84B34007108623f7a828D',
		CONTRACT_DRIPS_HUB_LOGIC: '0xee4Bc8c028390261548E4d8299e218eE8D45a500',
		CONTRACT_RESERVE: '0xd8D6D0F0D2d705677F07156F2e51871eF4a6323A',
		CONTRACT_RADICLE_REGISTRY: '0x4e31F3538c9BE4Cf1E0911D08290f5DDF4E57747',
		CONTRACT_BUILDER: '0x0799DA170Cc2669747f6ea4F5877c5977436187C',
		NETWORK: 'polygon-mumbai',
		DEPLOY_ADDRESS: '0x341a08926dCa7fa7D135F96E4d76b696e5f6d38d',
		CYCLE_SECS: '604800',
		COMMIT_HASH: '2b1d61af40d617cfbbb90704496707b8f459d9f9',
		GOVERNANCE_ADDRESS: '0x341a08926dCa7fa7D135F96E4d76b696e5f6d38d',
		CONTRACT_DRIPS_GOVERNANCE: '0x443CC173e7918cdACfd781d52bA9E5d8dD8F6C54',
		POLYGON_SPELL_SCHEDULER: '0x39eD0B2d1010518Eb433cb9A433f05e91644ED79',
		CONTRACT_METADATA: '0x1C465B0249Fb7c92896709768b9d4aBD0135DBc9'
	}
};

export function getContractsForNetwork(network: any) {
	return Object.values(networkContracts).find((n) => n.name === network);
}
