const msRestAzure = require('ms-rest-azure');
const AzureArmSb = require('azure-arm-sb');
const process = require('process');

const login = async () => {
    console.log('logging in');

    const loginType = process.env.loginType;
    const loginId = process.env.loginId;
    const loginSecret = process.env.loginSecret;
    const loginOpts = {domain: process.env.loginTenantId};

    let response;
    if (loginType === 'sp') {
        // https://github.com/Azure/azure-sdk-for-node/blob/master/runtime/ms-rest-azure/index.d.ts#L397
        response = await msRestAzure.loginWithServicePrincipalSecret(loginId, loginSecret, loginOpts);
    } else {
        // https://github.com/Azure/azure-sdk-for-node/blob/master/runtime/ms-rest-azure/index.d.ts#L356
        response = await msRestAzure.loginWithUsernamePassword(loginId, loginSecret, loginOpts);
    }

    console.log('login successful');

    return response;
};

const createOrUpdate = async (credentials) => {
    console.log('creating/updating namespace');
    const azureArmSb = new AzureArmSb(credentials, process.env.subscriptionId);

    // see https://github.com/Azure/azure-sdk-for-node/blob/master/lib/services/serviceBusManagement2/lib/operations/namespaces.js#L3234
    const options = {
        location: process.env.location,
        sku:{
            name: process.env.sku,
            tier: process.env.sku,
            capacity: parseInt(process.env.messagingUnits)
        }
    };

    await azureArmSb.namespaces.createOrUpdate(
        process.env.resourceGroup,
        process.env.name,
        options,
    );

    console.log('creating/updating namespace successful')
};

login().then(createOrUpdate).catch(error => {
    console.log(error);
    process.exit(1)
});