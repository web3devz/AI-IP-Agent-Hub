import { StoryClient, StoryConfig } from '@story-protocol/core-sdk';
import { uploadJSONToIPFS } from './ipfsService';

const storyConfig: StoryConfig = {
  account: process.env.WALLET_PRIVATE_KEY || '',
  transport: { url: process.env.RPC_PROVIDER_URL || '' },
  chainId: 'odyssey',
};

const storyClient = StoryClient.newClient(storyConfig);

export const registerAsset = async (title: string, description: string) => {
  const metadata = storyClient.ipAsset.generateIpMetadata({ title, description });
  const ipfsHash = await uploadJSONToIPFS(metadata);

  const ipId = await storyClient.ipAsset.registerIpAndAttachPilTerms({
    nftContract: process.env.NFT_CONTRACT_ADDRESS || '',
    tokenId: 1,
    terms: [],
    ipMetadata: {
      ipMetadataURI: `https://ipfs.io/ipfs/${ipfsHash}`,
      ipMetadataHash: ipfsHash,
    },
    txOptions: { waitForTransaction: true },
  });

  return ipId;
};
