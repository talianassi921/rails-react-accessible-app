split_factory = SplitIoClient::SplitFactory.new(YOUR_API_KEY)
split_client = split_factory.client
begin 
 split_client.block_until_ready 
rescue SplitIoClient::SDKBlockerTimeoutExpiredException
 puts 'SDK is not ready. Decide whether to continue or abort execution' 
end
Rails.configuration.split_client = split_factory.client
