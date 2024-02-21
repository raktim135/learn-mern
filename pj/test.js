5582: function(en, ef, ei) {
			"use strict";
			Object.defineProperty(ef, "__esModule", {
				value: !0
			}), ef.mainnetChainsMetadata = ef.chainIdToMetadata = ef.chainMetadata = ef.viction = ef.test3 = ef.test2 = ef.test1 = ef.eclipsetestnet = ef.solanadevnet = ef.solanatestnet = ef.solana = ef.sepolia = ef.scrollsepolia = ef.scroll = ef.proteustestnet = ef.polygonzkevmtestnet = ef.polygonzkevm = ef.polygon = ef.optimismgoerli = ef.optimism = ef.neutron = ef.nautilus = ef.mumbai = ef.moonbeam = ef.moonbasealpha = ef.mantapacific = ef.lineagoerli = ef.injective = ef.inevm = ef.gnosis = ef.goerli = ef.fuji = ef.ethereum = ef.chiado = ef.celo = ef.bsctestnet = ef.bsc = ef.basegoerli = ef.base = ef.avalanche = ef.arbitrumgoerli = ef.arbitrum = ef.alfajores = ef.solToken = ef.xDaiToken = ef.maticToken = ef.etherToken = ef.celoToken = ef.bnbToken = ef.avaxToken = void 0, ef.solanaChainToClusterName = ef.testnetChainsMetadata = void 0;
			let ea = ei(45689),
				eo = ei(46131),
				eu = ei(72510);
			ef.avaxToken = {
				decimals: 18,
				name: "Avalanche",
				symbol: "AVAX"
			}, ef.bnbToken = {
				decimals: 18,
				name: "BNB",
				symbol: "BNB"
			}, ef.celoToken = {
				decimals: 18,
				name: "CELO",
				symbol: "CELO"
			}, ef.etherToken = {
				decimals: 18,
				name: "Ether",
				symbol: "ETH"
			}, ef.maticToken = {
				decimals: 18,
				name: "MATIC",
				symbol: "MATIC"
			}, ef.xDaiToken = {
				decimals: 18,
				name: "xDai",
				symbol: "xDai"
			}, ef.solToken = {
				decimals: 9,
				name: "Sol",
				symbol: "SOL"
			}, ef.alfajores = {
				blockExplorers: [{
					apiUrl: "https://api-alfajores.celoscan.io/api",
					family: eo.ExplorerFamily.Etherscan,
					name: "CeloScan",
					url: "https://alfajores.celoscan.io"
				}, {
					apiUrl: "https://explorer.celo.org/alfajores/api",
					family: eo.ExplorerFamily.Blockscout,
					name: "Blockscout",
					url: "https://explorer.celo.org/alfajores"
				}],
				blocks: {
					confirmations: 1,
					estimateBlockTime: 5,
					reorgPeriod: 0
				},
				chainId: 44787,
				displayName: "Alfajores",
				domainId: 44787,
				isTestnet: !0,
				name: eu.Chains.alfajores,
				nativeToken: ef.celoToken,
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://alfajores-forno.celo-testnet.org"
				}]
			}, ef.arbitrum = {
				blockExplorers: [{
					apiUrl: "https://api.arbiscan.io/api",
					family: eo.ExplorerFamily.Etherscan,
					name: "Arbiscan",
					url: "https://arbiscan.io"
				}],
				blocks: {
					confirmations: 1,
					estimateBlockTime: 3,
					reorgPeriod: 0
				},
				chainId: 42161,
				displayName: "Arbitrum",
				domainId: 42161,
				gasCurrencyCoinGeckoId: "ethereum",
				gnosisSafeTransactionServiceUrl: "https://safe-transaction-arbitrum.safe.global/",
				name: eu.Chains.arbitrum,
				nativeToken: ef.etherToken,
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://arb1.arbitrum.io/rpc"
				}]
			}, ef.arbitrumgoerli = {
				blocks: {
					confirmations: 1,
					estimateBlockTime: 3,
					reorgPeriod: 1
				},
				chainId: 421613,
				displayName: "Arbitrum Goerli",
				displayNameShort: "Arb. Goerli",
				domainId: 421613,
				isTestnet: !0,
				name: eu.Chains.arbitrumgoerli,
				nativeToken: ef.etherToken,
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://goerli-rollup.arbitrum.io/rpc"
				}]
			}, ef.avalanche = {
				blockExplorers: [{
					apiUrl: "https://api.snowtrace.io/api",
					family: eo.ExplorerFamily.Other,
					name: "SnowTrace",
					url: "https://snowtrace.io"
				}],
				blocks: {
					confirmations: 3,
					estimateBlockTime: 2,
					reorgPeriod: 3
				},
				chainId: 43114,
				displayName: "Avalanche",
				domainId: 43114,
				gasCurrencyCoinGeckoId: "avalanche-2",
				gnosisSafeTransactionServiceUrl: "https://safe-transaction-avalanche.safe.global/",
				name: eu.Chains.avalanche,
				nativeToken: ef.avaxToken,
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://api.avax.network/ext/bc/C/rpc",
					pagination: {
						maxBlockRange: 1e5,
						minBlockNumber: 6765067
					}
				}]
			}, ef.base = {
				blockExplorers: [{
					apiUrl: "https://api.basescan.org/api",
					family: eo.ExplorerFamily.Etherscan,
					name: "BaseScan",
					url: "https://basescan.org"
				}],
				blocks: {
					confirmations: 1,
					estimateBlockTime: 2,
					reorgPeriod: 1
				},
				chainId: 8453,
				displayName: "Base",
				domainId: 8453,
				gasCurrencyCoinGeckoId: "ethereum",
				gnosisSafeTransactionServiceUrl: "https://safe-transaction-base.safe.global/",
				name: eu.Chains.base,
				nativeToken: ef.etherToken,
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://base.publicnode.com/"
				}, {
					http: "https://mainnet.base.org"
				}, {
					http: "https://base.blockpi.network/v1/rpc/public"
				}]
			}, ef.basegoerli = {
				blockExplorers: [{
					apiUrl: "https://api-goerli.basescan.org/api",
					family: eo.ExplorerFamily.Etherscan,
					name: "BaseScan",
					url: "https://goerli.basescan.org"
				}],
				blocks: {
					confirmations: 1,
					estimateBlockTime: 3,
					reorgPeriod: 1
				},
				chainId: 84531,
				displayName: "Base Goerli",
				domainId: 84531,
				isTestnet: !0,
				name: eu.Chains.basegoerli,
				nativeToken: ef.etherToken,
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://base-goerli.publicnode.com"
				}, {
					http: "https://goerli.base.org"
				}]
			}, ef.bsc = {
				blockExplorers: [{
					apiUrl: "https://api.bscscan.com/api",
					family: eo.ExplorerFamily.Etherscan,
					name: "BscScan",
					url: "https://bscscan.com"
				}],
				blocks: {
					confirmations: 1,
					estimateBlockTime: 3,
					reorgPeriod: 15
				},
				chainId: 56,
				displayName: "Binance Smart Chain",
				displayNameShort: "Binance",
				domainId: 56,
				gasCurrencyCoinGeckoId: "binancecoin",
				gnosisSafeTransactionServiceUrl: "https://safe-transaction-bsc.safe.global/",
				name: eu.Chains.bsc,
				nativeToken: ef.bnbToken,
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://rpc.ankr.com/bsc"
				}, {
					http: "https://bsc.drpc.org"
				}, {
					http: "https://bscrpc.com"
				}]
			}, ef.bsctestnet = {
				blockExplorers: [{
					apiUrl: "https://api-testnet.bscscan.com/api",
					family: eo.ExplorerFamily.Etherscan,
					name: "BscScan",
					url: "https://testnet.bscscan.com"
				}],
				blocks: {
					confirmations: 1,
					estimateBlockTime: 3,
					reorgPeriod: 9
				},
				chainId: 97,
				displayName: "BSC Testnet",
				domainId: 97,
				isTestnet: !0,
				name: eu.Chains.bsctestnet,
				nativeToken: ef.bnbToken,
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://bsc-testnet.publicnode.com"
				}, {
					http: "https://bsc-testnet.blockpi.network/v1/rpc/public"
				}]
			}, ef.celo = {
				blockExplorers: [{
					apiUrl: "https://api.celoscan.io/api",
					family: eo.ExplorerFamily.Etherscan,
					name: "CeloScan",
					url: "https://celoscan.io"
				}, {
					apiUrl: "https://explorer.celo.org/mainnet/api",
					family: eo.ExplorerFamily.Blockscout,
					name: "Blockscout",
					url: "https://explorer.celo.org"
				}],
				blocks: {
					confirmations: 1,
					estimateBlockTime: 5,
					reorgPeriod: 0
				},
				chainId: 42220,
				displayName: "Celo",
				domainId: 42220,
				gnosisSafeTransactionServiceUrl: "https://mainnet-tx-svc.celo-safe-prod.celo-networks-dev.org/",
				name: eu.Chains.celo,
				nativeToken: ef.celoToken,
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://forno.celo.org"
				}]
			}, ef.chiado = {
				blockExplorers: [{
					apiUrl: "https://gnosis-chiado.blockscout.com/api",
					family: eo.ExplorerFamily.Blockscout,
					name: "GnosisScan",
					url: "https://gnosis-chiado.blockscout.com"
				}],
				blocks: {
					confirmations: 1,
					estimateBlockTime: 5,
					reorgPeriod: 14
				},
				chainId: 10200,
				displayName: "Chiado",
				domainId: 10200,
				isTestnet: !0,
				name: eu.Chains.chiado,
				nativeToken: ef.xDaiToken,
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://gnosis-chiado.publicnode.com"
				}]
			}, ef.ethereum = {
				blockExplorers: [{
					apiUrl: "https://api.etherscan.io/api",
					family: eo.ExplorerFamily.Etherscan,
					name: "Etherscan",
					url: "https://etherscan.io"
				}, {
					apiUrl: "https://blockscout.com/eth/mainnet/api",
					family: eo.ExplorerFamily.Blockscout,
					name: "Blockscout",
					url: "https://blockscout.com/eth/mainnet"
				}],
				blocks: {
					confirmations: 7,
					estimateBlockTime: 13,
					reorgPeriod: 14
				},
				chainId: 1,
				displayName: "Ethereum",
				domainId: 1,
				gnosisSafeTransactionServiceUrl: "https://safe-transaction-mainnet.safe.global/",
				name: eu.Chains.ethereum,
				nativeToken: ef.etherToken,
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://ethereum.publicnode.com"
				}, {
					http: "https://cloudflare-eth.com"
				}]
			}, ef.fuji = {
				blockExplorers: [{
					apiUrl: "https://api-testnet.snowtrace.io/api",
					family: eo.ExplorerFamily.Etherscan,
					name: "SnowTrace",
					url: "https://testnet.snowtrace.io"
				}],
				blocks: {
					confirmations: 3,
					estimateBlockTime: 2,
					reorgPeriod: 3
				},
				chainId: 43113,
				displayName: "Fuji",
				domainId: 43113,
				isTestnet: !0,
				name: eu.Chains.fuji,
				nativeToken: ef.avaxToken,
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://api.avax-test.network/ext/bc/C/rpc",
					pagination: {
						maxBlockRange: 2048
					}
				}]
			}, ef.goerli = {
				blockExplorers: [{
					apiUrl: "https://api-goerli.etherscan.io/api",
					family: eo.ExplorerFamily.Etherscan,
					name: "Etherscan",
					url: "https://goerli.etherscan.io"
				}],
				blocks: {
					confirmations: 1,
					estimateBlockTime: 13,
					reorgPeriod: 2
				},
				chainId: 5,
				displayName: "Goerli",
				domainId: 5,
				isTestnet: !0,
				name: eu.Chains.goerli,
				nativeToken: ef.etherToken,
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
				}, {
					http: "https://rpc.ankr.com/eth_goerli"
				}]
			}, ef.gnosis = {
				blockExplorers: [{
					apiUrl: "https://api.gnosisscan.io/api",
					family: eo.ExplorerFamily.Etherscan,
					name: "GnosisScan",
					url: "https://gnosisscan.io"
				}],
				blocks: {
					confirmations: 1,
					estimateBlockTime: 5,
					reorgPeriod: 14
				},
				chainId: 100,
				displayName: "Gnosis",
				domainId: 100,
				gasCurrencyCoinGeckoId: "xdai",
				gnosisSafeTransactionServiceUrl: "https://safe-transaction-gnosis-chain.safe.global/",
				name: eu.Chains.gnosis,
				nativeToken: ef.xDaiToken,
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://rpc.gnosischain.com",
					pagination: {
						maxBlockRange: 1e4,
						minBlockNumber: 25997478
					}
				}]
			}, ef.inevm = {
				blockExplorers: [{
					apiUrl: "https://inevm.calderaexplorer.xyz/api",
					family: eo.ExplorerFamily.Blockscout,
					name: "Caldera inEVM Explorer",
					url: "https://inevm.calderaexplorer.xyz"
				}],
				blocks: {
					confirmations: 1,
					estimateBlockTime: 3,
					reorgPeriod: 0
				},
				chainId: 2525,
				displayName: "Injective EVM",
				displayNameShort: "inEVM",
				domainId: 2525,
				name: eu.Chains.inevm,
				nativeToken: {
					decimals: 18,
					name: "Injective",
					symbol: "INJ"
				},
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://inevm.calderachain.xyz/http"
				}]
			}, ef.injective = {
				bech32Prefix: "inj",
				blockExplorers: [],
				blocks: {
					confirmations: 1,
					estimateBlockTime: 1,
					reorgPeriod: 10
				},
				chainId: "injective-1",
				displayName: "Injective",
				domainId: 6909546,
				grpcUrls: [{
					http: "sentry.chain.grpc.injective.network:443"
				}],
				name: eu.Chains.injective,
				nativeToken: {
					decimals: 18,
					name: "Injective",
					symbol: "INJ"
				},
				protocol: ea.ProtocolType.Cosmos,
				restUrls: [{
					http: "https://sentry.lcd.injective.network:443"
				}],
				rpcUrls: [{
					http: "https://sentry.tm.injective.network:443"
				}],
				slip44: 118
			}, ef.lineagoerli = {
				blockExplorers: [{
					apiUrl: "https://explorer.goerli.linea.build/api",
					family: eo.ExplorerFamily.Blockscout,
					name: "Linea Explorer",
					url: "https://explorer.goerli.linea.build"
				}],
				blocks: {
					confirmations: 1,
					estimateBlockTime: 12,
					reorgPeriod: 2
				},
				chainId: 59140,
				displayName: "Linea Goerli",
				domainId: 59140,
				isTestnet: !0,
				name: eu.Chains.lineagoerli,
				nativeToken: ef.etherToken,
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://rpc.goerli.linea.build"
				}]
			}, ef.mantapacific = {
				blockExplorers: [{
					apiUrl: "https://pacific-explorer.manta.network/api",
					family: eo.ExplorerFamily.Blockscout,
					name: "Manta Pacific Explorer",
					url: "https://pacific-explorer.manta.network"
				}],
				blocks: {
					confirmations: 1,
					estimateBlockTime: 3,
					reorgPeriod: 1
				},
				chainId: 169,
				displayName: "Manta Pacific",
				displayNameShort: "Manta",
				domainId: 169,
				isTestnet: !1,
				name: eu.Chains.mantapacific,
				nativeToken: {
					decimals: 18,
					name: "Ether",
					symbol: "ETH"
				},
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://pacific-rpc.manta.network/http"
				}]
			}, ef.moonbasealpha = {
				blockExplorers: [{
					apiUrl: "https://api-moonbase.moonscan.io/api",
					family: eo.ExplorerFamily.Etherscan,
					name: "MoonScan",
					url: "https://moonbase.moonscan.io"
				}],
				blocks: {
					confirmations: 1,
					estimateBlockTime: 12,
					reorgPeriod: 1
				},
				chainId: 1287,
				displayName: "Moonbase Alpha",
				displayNameShort: "Moonbase",
				domainId: 1287,
				isTestnet: !0,
				name: eu.Chains.moonbasealpha,
				nativeToken: {
					decimals: 18,
					name: "DEV",
					symbol: "DEV"
				},
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://rpc.api.moonbase.moonbeam.network"
				}]
			}, ef.moonbeam = {
				blockExplorers: [{
					apiUrl: "https://api-moonbeam.moonscan.io/api",
					family: eo.ExplorerFamily.Etherscan,
					name: "MoonScan",
					url: "https://moonscan.io"
				}],
				blocks: {
					confirmations: 2,
					estimateBlockTime: 12,
					reorgPeriod: 2
				},
				chainId: 1284,
				displayName: "Moonbeam",
				domainId: 1284,
				gnosisSafeTransactionServiceUrl: "https://transaction.multisig.moonbeam.network",
				name: eu.Chains.moonbeam,
				nativeToken: {
					decimals: 18,
					name: "GLMR",
					symbol: "GLMR"
				},
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://rpc.api.moonbeam.network"
				}]
			}, ef.mumbai = {
				blockExplorers: [{
					apiUrl: "https://api-testnet.polygonscan.com/api",
					family: eo.ExplorerFamily.Etherscan,
					name: "PolygonScan",
					url: "https://mumbai.polygonscan.com"
				}],
				blocks: {
					confirmations: 3,
					estimateBlockTime: 5,
					reorgPeriod: 32
				},
				chainId: 80001,
				displayName: "Mumbai",
				domainId: 80001,
				isTestnet: !0,
				name: eu.Chains.mumbai,
				nativeToken: ef.maticToken,
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://rpc.ankr.com/polygon_mumbai",
					pagination: {
						maxBlockRange: 1e4,
						minBlockNumber: 229e5
					}
				}]
			}, ef.nautilus = {
				blocks: {
					confirmations: 1,
					estimateBlockTime: 1,
					reorgPeriod: 1
				},
				chainId: 22222,
				displayName: "Nautilus",
				domainId: 22222,
				name: eu.Chains.nautilus,
				nativeToken: {
					decimals: 18,
					name: "Zebec",
					symbol: "ZBC"
				},
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://api.nautilus.nautchain.xyz"
				}]
			}, ef.neutron = {
				bech32Prefix: "neutron",
				blockExplorers: [{
					apiUrl: "https://www.mintscan.io/neutron",
					family: eo.ExplorerFamily.Other,
					name: "Mintscan",
					url: "https://www.mintscan.io/neutron"
				}],
				blocks: {
					confirmations: 1,
					estimateBlockTime: 3,
					reorgPeriod: 1
				},
				chainId: "neutron-1",
				displayName: "Neutron",
				domainId: 1853125230,
				grpcUrls: [{
					http: "grpc-kralum.neutron-1.neutron.org:80"
				}],
				isTestnet: !1,
				name: eu.Chains.neutron,
				nativeToken: {
					decimals: 6,
					name: "Neutron",
					symbol: "NTRN"
				},
				protocol: ea.ProtocolType.Cosmos,
				restUrls: [{
					http: "https://rest-lb.neutron.org"
				}],
				rpcUrls: [{
					http: "https://rpc-kralum.neutron-1.neutron.org"
				}],
				slip44: 118
			}, ef.optimism = {
				blockExplorers: [{
					apiUrl: "https://api-optimistic.etherscan.io/api",
					family: eo.ExplorerFamily.Etherscan,
					name: "Etherscan",
					url: "https://optimistic.etherscan.io"
				}],
				blocks: {
					confirmations: 1,
					estimateBlockTime: 3,
					reorgPeriod: 0
				},
				chainId: 10,
				displayName: "Optimism",
				domainId: 10,
				gasCurrencyCoinGeckoId: "ethereum",
				gnosisSafeTransactionServiceUrl: "https://safe-transaction-optimism.safe.global/",
				name: eu.Chains.optimism,
				nativeToken: ef.etherToken,
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://mainnet.optimism.io"
				}]
			}, ef.optimismgoerli = {
				blockExplorers: [{
					apiUrl: "https://api-goerli-optimism.etherscan.io/api",
					family: eo.ExplorerFamily.Etherscan,
					name: "Etherscan",
					url: "https://goerli-optimism.etherscan.io"
				}],
				blocks: {
					confirmations: 1,
					estimateBlockTime: 3,
					reorgPeriod: 1
				},
				chainId: 420,
				displayName: "Optimism Goerli",
				displayNameShort: "Opt. Goerli",
				domainId: 420,
				isTestnet: !0,
				name: eu.Chains.optimismgoerli,
				nativeToken: ef.etherToken,
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://goerli.optimism.io"
				}]
			}, ef.polygon = {
				blockExplorers: [{
					apiUrl: "https://api.polygonscan.com/api",
					family: eo.ExplorerFamily.Etherscan,
					name: "PolygonScan",
					url: "https://polygonscan.com"
				}],
				blocks: {
					confirmations: 200,
					estimateBlockTime: 2,
					reorgPeriod: 256
				},
				chainId: 137,
				displayName: "Polygon",
				domainId: 137,
				gasCurrencyCoinGeckoId: "matic-network",
				gnosisSafeTransactionServiceUrl: "https://safe-transaction-polygon.safe.global/",
				name: eu.Chains.polygon,
				nativeToken: ef.etherToken,
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://polygon-bor.publicnode.com"
				}, {
					http: "https://polygon-rpc.com"
				}, {
					http: "https://rpc.ankr.com/polygon"
				}]
			}, ef.polygonzkevm = {
				blockExplorers: [{
					apiUrl: "https://api-zkevm.polygonscan.com/api",
					family: eo.ExplorerFamily.Etherscan,
					name: "PolygonScan",
					url: "https://zkevm.polygonscan.com"
				}],
				blocks: {
					confirmations: 1,
					estimateBlockTime: 10,
					reorgPeriod: 1
				},
				chainId: 1101,
				displayName: "Polygon zkEVM",
				displayNameShort: "zkEVM",
				domainId: 1101,
				gasCurrencyCoinGeckoId: "ethereum",
				name: eu.Chains.polygonzkevm,
				nativeToken: ef.etherToken,
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://zkevm-rpc.com"
				}, {
					http: "https://rpc.ankr.com/polygon_zkevm"
				}]
			}, ef.polygonzkevmtestnet = {
				blockExplorers: [{
					apiUrl: "https://api-testnet-zkevm.polygonscan.com/api",
					family: eo.ExplorerFamily.Etherscan,
					name: "PolygonScan",
					url: "https://testnet-zkevm.polygonscan.com"
				}],
				blocks: {
					confirmations: 1,
					estimateBlockTime: 3,
					reorgPeriod: 1
				},
				chainId: 1442,
				displayName: "Polygon zkEVM Testnet",
				displayNameShort: "ZkEvm Testnet",
				domainId: 1442,
				isTestnet: !0,
				name: eu.Chains.polygonzkevmtestnet,
				nativeToken: ef.etherToken,
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://rpc.public.zkevm-test.net"
				}]
			}, ef.proteustestnet = {
				blocks: {
					confirmations: 1,
					estimateBlockTime: 1,
					reorgPeriod: 1
				},
				chainId: 88002,
				displayName: "Proteus Testnet",
				domainId: 88002,
				name: eu.Chains.proteustestnet,
				nativeToken: {
					decimals: 18,
					name: "Zebec",
					symbol: "ZBC"
				},
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://api.proteus.nautchain.xyz/solana"
				}]
			}, ef.scroll = {
				blockExplorers: [{
					apiUrl: "https://api.scrollscan.com/api",
					family: eo.ExplorerFamily.Etherscan,
					name: "Scroll Explorer",
					url: "https://scrollscan.com/"
				}],
				blocks: {
					confirmations: 1,
					estimateBlockTime: 3,
					reorgPeriod: 1
				},
				chainId: 534352,
				displayName: "Scroll",
				domainId: 534352,
				gasCurrencyCoinGeckoId: "ethereum",
				name: eu.Chains.scroll,
				nativeToken: ef.etherToken,
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://scroll.blockpi.network/v1/rpc/public"
				}]
			}, ef.scrollsepolia = {
				blockExplorers: [{
					apiUrl: "https://api-sepolia.scrollscan.com/api",
					family: eo.ExplorerFamily.Etherscan,
					name: "Scroll Explorer",
					url: "https://sepolia.scrollscan.dev/"
				}],
				blocks: {
					confirmations: 1,
					estimateBlockTime: 3,
					reorgPeriod: 1
				},
				chainId: 534351,
				displayName: "Scroll Sepolia",
				domainId: 534351,
				isTestnet: !0,
				name: eu.Chains.scrollsepolia,
				nativeToken: ef.etherToken,
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://sepolia-rpc.scroll.io"
				}]
			}, ef.sepolia = {
				blockExplorers: [{
					apiUrl: "https://api-sepolia.etherscan.io/api",
					family: eo.ExplorerFamily.Etherscan,
					name: "Etherscan",
					url: "https://sepolia.etherscan.io"
				}],
				blocks: {
					confirmations: 1,
					estimateBlockTime: 13,
					reorgPeriod: 2
				},
				chainId: 11155111,
				displayName: "Sepolia",
				domainId: 11155111,
				isTestnet: !0,
				name: eu.Chains.sepolia,
				nativeToken: ef.etherToken,
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://ethereum-sepolia.publicnode.com"
				}, {
					http: "https://ethereum-sepolia.blockpi.network/v1/rpc/public"
				}, {
					http: "https://rpc.sepolia.org"
				}]
			}, ef.solana = {
				blockExplorers: [{
					apiUrl: "https://explorer.solana.com",
					family: eo.ExplorerFamily.Other,
					name: "Solana Explorer",
					url: "https://explorer.solana.com"
				}],
				blocks: {
					confirmations: 1,
					estimateBlockTime: .4,
					reorgPeriod: 0
				},
				chainId: 1399811149,
				displayName: "Solana",
				domainId: 1399811149,
				name: "solana",
				nativeToken: ef.solToken,
				protocol: ea.ProtocolType.Sealevel,
				rpcUrls: [{
					http: "https://api.mainnet-beta.solana.com"
				}]
			}, ef.solanatestnet = {
				blockExplorers: [{
					apiUrl: "https://explorer.solana.com",
					family: eo.ExplorerFamily.Other,
					name: "Solana Explorer",
					url: "https://explorer.solana.com"
				}],
				blocks: {
					confirmations: 1,
					estimateBlockTime: .4,
					reorgPeriod: 0
				},
				chainId: 1399811150,
				displayName: "Solana Testnet",
				displayNameShort: "Sol Testnet",
				domainId: 1399811150,
				isTestnet: !0,
				name: "solanatestnet",
				nativeToken: ef.solToken,
				protocol: ea.ProtocolType.Sealevel,
				rpcUrls: [{
					http: "https://api.testnet.solana.com"
				}]
			}, ef.solanadevnet = {
				blockExplorers: [{
					apiUrl: "https://explorer.solana.com",
					family: eo.ExplorerFamily.Other,
					name: "Solana Explorer",
					url: "https://explorer.solana.com"
				}],
				blocks: {
					confirmations: 1,
					estimateBlockTime: .4,
					reorgPeriod: 0
				},
				chainId: 1399811151,
				displayName: "Solana Devnet",
				displayNameShort: "Sol Devnet",
				domainId: 1399811151,
				isTestnet: !0,
				name: "solanadevnet",
				nativeToken: ef.solToken,
				protocol: ea.ProtocolType.Sealevel,
				rpcUrls: [{
					http: "https://api.devnet.solana.com"
				}]
			}, ef.eclipsetestnet = {
				blocks: {
					confirmations: 1,
					estimateBlockTime: .4,
					reorgPeriod: 0
				},
				chainId: 239092742,
				displayName: "Eclipse Testnet",
				domainId: 239092742,
				isTestnet: !0,
				name: "eclipsetestnet",
				nativeToken: {
					...ef.etherToken,
					decimals: 9
				},
				protocol: ea.ProtocolType.Sealevel,
				rpcUrls: [{
					http: "https://testnet.dev2.eclipsenetwork.xyz"
				}]
			}, ef.test1 = {
				blockExplorers: [],
				blocks: {
					confirmations: 1,
					estimateBlockTime: 3,
					reorgPeriod: 0
				},
				chainId: 13371,
				displayName: "Test 1",
				domainId: 13371,
				isTestnet: !0,
				name: eu.Chains.test1,
				nativeToken: ef.etherToken,
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "http://127.0.0.1:8545"
				}]
			}, ef.test2 = {
				blockExplorers: [],
				blocks: {
					confirmations: 1,
					estimateBlockTime: 3,
					reorgPeriod: 1
				},
				chainId: 13372,
				displayName: "Test 2",
				domainId: 13372,
				isTestnet: !0,
				name: eu.Chains.test2,
				nativeToken: ef.etherToken,
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "http://127.0.0.1:8545"
				}]
			}, ef.test3 = {
				blockExplorers: [],
				blocks: {
					confirmations: 1,
					estimateBlockTime: 3,
					reorgPeriod: 2
				},
				chainId: 13373,
				displayName: "Test 3",
				domainId: 13373,
				isTestnet: !0,
				name: eu.Chains.test3,
				nativeToken: ef.etherToken,
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "http://127.0.0.1:8545"
				}]
			}, ef.viction = {
				blockExplorers: [{
					apiUrl: "https://www.vicscan.xyz/api",
					family: eo.ExplorerFamily.Other,
					name: "Vicscan",
					url: "https://www.vicscan.xyz/"
				}],
				blocks: {
					confirmations: 1,
					estimateBlockTime: 2,
					reorgPeriod: 0
				},
				chainId: 88,
				displayName: "Viction",
				domainId: 88,
				name: eu.Chains.viction,
				nativeToken: {
					decimals: 18,
					name: "Viction",
					symbol: "VIC"
				},
				protocol: ea.ProtocolType.Ethereum,
				rpcUrls: [{
					http: "https://rpc.tomochain.com/"
				}, {
					http: "https://viction.blockpi.network/v1/rpc/public"
				}]
			}, ef.chainMetadata = {
				alfajores: ef.alfajores,
				arbitrum: ef.arbitrum,
				arbitrumgoerli: ef.arbitrumgoerli,
				avalanche: ef.avalanche,
				base: ef.base,
				basegoerli: ef.basegoerli,
				bsc: ef.bsc,
				bsctestnet: ef.bsctestnet,
				celo: ef.celo,
				chiado: ef.chiado,
				eclipsetestnet: ef.eclipsetestnet,
				ethereum: ef.ethereum,
				fuji: ef.fuji,
				gnosis: ef.gnosis,
				goerli: ef.goerli,
				inevm: ef.inevm,
				injective: ef.injective,
				lineagoerli: ef.lineagoerli,
				mantapacific: ef.mantapacific,
				moonbasealpha: ef.moonbasealpha,
				moonbeam: ef.moonbeam,
				mumbai: ef.mumbai,
				nautilus: ef.nautilus,
				neutron: ef.neutron,
				optimism: ef.optimism,
				optimismgoerli: ef.optimismgoerli,
				polygon: ef.polygon,
				polygonzkevm: ef.polygonzkevm,
				polygonzkevmtestnet: ef.polygonzkevmtestnet,
				proteustestnet: ef.proteustestnet,
				scroll: ef.scroll,
				scrollsepolia: ef.scrollsepolia,
				sepolia: ef.sepolia,
				solana: ef.solana,
				solanadevnet: ef.solanadevnet,
				solanatestnet: ef.solanatestnet,
				test1: ef.test1,
				test2: ef.test2,
				test3: ef.test3,
				viction: ef.viction
			}, ef.chainIdToMetadata = Object.values(ef.chainMetadata).reduce((en, ef) => (en[ef.chainId] = ef, en), {}), ef.mainnetChainsMetadata = eu.Mainnets.map(en => ef.chainMetadata[en]), ef.testnetChainsMetadata = eu.Testnets.map(en => ef.chainMetadata[en]), ef.solanaChainToClusterName = {
				solana: "mainnet-beta",
				solanadevnet: "devnet",
				solanatestnet: "testnet"
			}
		},