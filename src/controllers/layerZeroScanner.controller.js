import axios from 'axios';
import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiResponse} from '../utils/ApiResponse.js'
import {ApiError} from '../utils/ApiError.js'


const layerZeroScanner = asyncHandler(async (req, res) => {
	try {
        const chains = [
            {
                chainId: 101,
                name: "Ethereum",
                nativeCoin: "ETH",
                decimals: 18
            },
            {
                chainId: 102,
                name: "BNB Chain",
                nativeCoin: "BNB"
            },
            {
                chainId: 106,
                name: "Avalanche",
                nativeCoin: "AVAX"
            },
            {
                chainId: 108,
                name: "Aptos",
                nativeCoin: "APT"
            },
            {
                chainId: 109,
                name: "Polygon",
                nativeCoin: "MATIC"
            },
            {
                chainId: 110,
                name: "Arbitrum",
                nativeCoin: "ETH"
            },
            {
                chainId: 111,
                name: "Optimism",
                nativeCoin: "ETH"
            },
            {
                chainId: 112,
                name: "Fantom",
                nativeCoin: "FTM"
            },
            {
                chainId: 115,
                name: "DFK",
                nativeCoin: "JEWEL"
            },
            {
                chainId: 116,
                name: "Harmony",
                nativeCoin: "ONE"
            },
            {
                chainId: 118,
                name: "Dexalot",
                nativeCoin: "ALOT"
            },
            {
                chainId: 125,
                name: "Celo",
                nativeCoin: "CELO"
            },
            {
                chainId: 126,
                name: "Moonbeam",
                nativeCoin: "GLMR"
            },
            {
                chainId: 138,
                name: "Fuse",
                nativeCoin: "FUSE"
            },
            {
                chainId: 145,
                name: "Gnosis",
                nativeCoin: "XDAI"
            },
            {
                chainId: 149,
                name: "DOS",
                nativeCoin: "DOS"
            },
            {
                chainId: 150,
                name: "Klaytn",
                nativeCoin: "KLAY"
            },
            {
                chainId: 151,
                name: "Metis",
                nativeCoin: "METIS"
            },
            {
                chainId: 153,
                name: "CoreDAO",
                nativeCoin: "CORE"
            },
            {
                chainId: 155,
                name: "OKT (OKX)",
                nativeCoin: "OKT"
            },
            {
                chainId: 158,
                name: "Polygon zkEVM",
                nativeCoin: "ETH"
            },
            {
                chainId: 159,
                name: "Canto",
                nativeCoin: "CANTO"
            },
            {
                chainId: 161,
                name: "Sepolia",
                nativeCoin: "ETH"
            },
            {
                chainId: 165,
                name: "zkSync Era",
                nativeCoin: "ETH"
            },
            {
                chainId: 167,
                name: "Moonriver",
                nativeCoin: "MOVR"
            },
            {
                chainId: 173,
                name: "Tenet",
                nativeCoin: "TENET"
            },
            {
                chainId: 175,
                name: "Arbitrum Nova",
                nativeCoin: "ETH"
            },
            {
                chainId: 176,
                name: "Meter.io",
                nativeCoin: "MTR"
            },
            {
                chainId: 177,
                name: "Kava",
                nativeCoin: "KAVA"
            },
            {
                chainId: 181,
                name: "Mantle",
                nativeCoin: "MNT"
            },
            {
                chainId: 183,
                name: "Linea",
                nativeCoin: "ETH"
            },
            {
                chainId: 184,
                name: "Base",
                nativeCoin: "ETH"
            },
            {
                chainId: 195,
                name: "Zora",
                nativeCoin: "ETH"
            },
            {
                chainId: 196,
                name: "Viction",
                nativeCoin: "VIC"
            },
            {
                chainId: 197,
                name: "Loot",
                nativeCoin: "AGLD"
            },
            {
                chainId: 198,
                name: "MeritCircle (aka Beam)",
                nativeCoin: "BEAM"
            },
            {
                chainId: 199,
                name: "Telos",
                nativeCoin: "TLOS"
            },
            {
                chainId: 202,
                name: "OpBNB",
                nativeCoin: "BNB"
            },
            {
                chainId: 210,
                name: "Astar",
                nativeCoin: "ASTR"
            },
            {
                chainId: 211,
                name: "Aurora",
                nativeCoin: "ETH"
            },
            {
                chainId: 212,
                name: "Conflux",
                nativeCoin: "CFX"
            },
            {
                chainId: 213,
                name: "Orderly",
                nativeCoin: "ETH"
            },
            {
                chainId: 214,
                name: "Scroll",
                nativeCoin: "ETH"
            },
            {
                chainId: 215,
                name: "Horizen EON",
                nativeCoin: "ZEN"
            },
            {
                chainId: 216,
                name: "XPLA",
                nativeCoin: "XPLA"
            },
            {
                chainId: 217,
                name: "Manta",
                nativeCoin: "ETH"
            },
            {
                chainId: 218,
                name: "Public Goods Network (PGN)",
                nativeCoin: "ETH"
            },
            {
                chainId: 230,
                name: "ShimmerEVM",
                nativeCoin: "SMR"
            },
            {
                chainId: 235,
                name: "Rarible",
                nativeCoin: "ETH"
            }
        ];

        function generateDateRanges() {
            const startDate = new Date('2022-01-01T00:00:00.000Z');
            const endDate = new Date();
            const dateRanges = [];
        
            let currentDate = startDate;
            while (currentDate <= endDate) {
                const nextDate = new Date(currentDate);
                nextDate.setDate(nextDate.getDate() + 14); // Move ahead by 14 days
                const newEndDate = nextDate < endDate ? nextDate : new Date(endDate); // Ensure end date does not exceed end of the year
        
                dateRanges.push({
                    startDate: new Date(currentDate.getTime() - (24 * 60 * 60 * 1000)), // Subtract 1 day in milliseconds // new Date(currentDate),
                    endDate: newEndDate
                });
        
                currentDate = new Date(newEndDate);
                currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
            }
            return dateRanges;
        }

        const dateRanges = generateDateRanges();

        let allTransactions = [];
        let totalTransactions = 0;

        const walletAddress = req.body.walletAddress;

        const headers = {
            'authority': 'layerzeroscan.com', 
            'accept': '*/*', 
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8', 
            'content-type': 'application/json', 
            'referer': `https://layerzeroscan.com/address/${walletAddress}`, 
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
        }

        // Array to store all the promises for API requests
        const requests1 = dateRanges.map(async dateRange => {
            const startDate = dateRange.startDate.toISOString();
            const endDate = dateRange.endDate.toISOString();

            const config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://layerzeroscan.com/api/trpc/messages.list?input={"limit":300, "filters":{"address":"${walletAddress}","stage":"mainnet","created":{"gte":"${startDate}","lte":"${endDate}"}}}`,
                headers
            };

            const response = await axios.request(config);
            const data = response.data.result.data;
            totalTransactions += data.count;
            allTransactions = allTransactions.concat(data.messages);
        });

        // Execute all requests1 concurrently
        await Promise.all(requests1);

        //old working start
        // Array to store all the promises for API requests2
        // const requests2 = allTransactions.map(async transaction => {
        //     const config = {
        //         method: 'get',
        //         maxBodyLength: Infinity,
        //         url: `https://layerzeroscan.com/api/trpc/transactions.getByTxHash?input={"txHash":"${transaction.srcTxHash}"}`,
        //         headers
        //     };

        //     try {
        //         const response = await axios.request(config);
        //         const data = response.data.result.data;

        //         let value = typeof data.value !== 'undefined' ? data.value : 0; // Convert value to Ether
        //         transaction.volume = value;
        //     } catch (error) {
        //         // console.log(`Error for ${transaction.srcTxHash}: ${error}`);
        //     }
        // });

        // // Execute all requests concurrently
        // await Promise.all(requests2);        
        //old working end

        //new start
        const batchSize = 500;
        const chunks = [];
        
        for (let i = 0; i < allTransactions.length; i += batchSize) {
            chunks.push(allTransactions.slice(i, i + batchSize));
        }
        
        const requests2 = chunks.map(async chunk => {
            const batchRequests = chunk.map(async transaction => {
                const config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: `https://layerzeroscan.com/api/trpc/transactions.getByTxHash?input={"txHash":"${transaction.srcTxHash}"}`,
                    headers
                };
        
                try {
                    const response = await axios.request(config);
                    const data = response.data.result.data;
        
                    let value = typeof data.value !== 'undefined' ? data.value : 0; // Convert value to Ether
                    transaction.volume = value;
                } catch (error) {
                    // console.log(`Error for ${transaction.srcTxHash}: ${error}`);
                }
            });
        
            await Promise.all(batchRequests);
        });
        
        await Promise.all(requests2);
        //new end

        let allTokensArr = [];
        allTransactions.map(transaction => {
            const token = chains.find((chain)=>{
                return chain.chainId === transaction.srcChainId
            });

            if(token){
                if (!allTokensArr.includes(token.nativeCoin)) {
                    allTokensArr.push(token.nativeCoin);
                }
                
                transaction.nativeToken = token.nativeCoin;
                transaction.volumeInNative = transaction.volume / 1e18;
            }
            else {
                transaction.nativeToken = 0;
                transaction.volumeInNative = 0;
            }      
        });

        let allTokens = '';
        allTokensArr.forEach((token) => {
            allTokens += token+',';
        });

        let formatedTransactionData = [];
        let ethPrice = 0;
        let tempTotalUsdValue = 0;

        await axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${allTokens}&tsyms=USD`)
        .then((result) => {
            ethPrice = result.data.ETH.USD;
            allTransactions.map(transaction => {
                let txnEthValue = 0;
                if(result.data[transaction.nativeToken]){
                    txnEthValue = result.data[transaction.nativeToken] == 'ETH' ? transaction.volumeInNative : (transaction.volumeInNative * result.data[transaction.nativeToken].USD) / ethPrice;
                }
                tempTotalUsdValue += txnEthValue * ethPrice;

                formatedTransactionData.push({
                    "txHash": transaction.srcTxHash,
                    "timeStamp": transaction.created,
                    "value": txnEthValue?txnEthValue:0,
                    "gasPrice": "0",
                    "gasUsed": "0",
                })
            });
        }).catch((err) => {
            console.log(err)
        });

		return res.status(200).json(new ApiResponse(200, {totalTransaction: formatedTransactionData.length, totalVolumeInUsd: tempTotalUsdValue, formatedTransactionData}, `Transactions data fetched successfully for address ${walletAddress}`));
	} catch (error) {
        console.log(222)
        console.log(error)
		throw new ApiError(500, error?.message || "Unable to fetch transactions data.");
	}
});

export {layerZeroScanner}