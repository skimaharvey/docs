# LSP9Vault

:::info Soldity contract

[`LSP9Vault.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)

:::

> Implementation of LSP9Vault built on top of [ERC725], [LSP-1-UniversalReceiver]

Could be owned by an EOA or by a contract and is able to receive and send assets. Also allows for registering received assets by levereging the key-value storage.

## Methods

### constructor

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#constructor)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)

:::

```solidity
constructor(address newOwner);
```

_New owner set, `newOwner`._

Sets the owner of the contract and sets the `SupportedStandards:LSP9Vault` Data Key.

#### Parameters

| Name       |   Type    | Description                    |
| ---------- | :-------: | ------------------------------ |
| `newOwner` | `address` | The new owner of the contract. |

### fallback

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#fallback)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)

:::

```solidity
fallback() external payable;
```

Forwards the call to an extension contract (address). This address can be retrieved from the ERC725Y data key-value store using the data key below (function selector appended to the prefix): `_LSP17_FALLBACK_EXTENSIONS_HANDLER_ + function-selector`. If there is no extension stored under the data key, return.
The call to the extension is appended with bytes20 (msg.sender) and bytes32 (msg.value).
Returns the return value on success and revert in case of failure.
If the `msg.data` is shorter than 4 bytes do not check for an extension and return.
Executed when:

- The first 4 bytes of the calldata do not match any publicly callable functions from the contract ABI.

- Receiving native tokens with some calldata.

<blockquote>

**Emitted events:**

- [`ValueReceived`](#valuereceived) when receiving native tokens.

</blockquote>

### receive

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#receive)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)

:::

```solidity
receive() external payable;
```

Executed:

- When receiving some native tokens without any additional data.

- On empty calls to the contract.

<blockquote>

**Emitted events:**

- [`ValueReceived`](#valuereceived) when receiving native tokens.

</blockquote>

### RENOUNCE_OWNERSHIP_CONFIRMATION_DELAY

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#renounce_ownership_confirmation_delay)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Function signature: `RENOUNCE_OWNERSHIP_CONFIRMATION_DELAY()`
- Function selector: `0xead3fbdf`

:::

```solidity
function RENOUNCE_OWNERSHIP_CONFIRMATION_DELAY()
  external
  view
  returns (uint256);
```

#### Returns

| Name |   Type    | Description |
| ---- | :-------: | ----------- |
| `0`  | `uint256` | -           |

### RENOUNCE_OWNERSHIP_CONFIRMATION_PERIOD

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#renounce_ownership_confirmation_period)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Function signature: `RENOUNCE_OWNERSHIP_CONFIRMATION_PERIOD()`
- Function selector: `0x01bfba61`

:::

```solidity
function RENOUNCE_OWNERSHIP_CONFIRMATION_PERIOD()
  external
  view
  returns (uint256);
```

#### Returns

| Name |   Type    | Description |
| ---- | :-------: | ----------- |
| `0`  | `uint256` | -           |

### acceptOwnership

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#acceptownership)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Function signature: `acceptOwnership()`
- Function selector: `0x79ba5097`

:::

```solidity
function acceptOwnership() external nonpayable;
```

Transfer ownership of the contract from the current [`owner()`](#`owner) to the [`pendingOwner()`](#`pendingowner). Once this function is called:

- the current [`owner()`](#`owner) will loose access to the functions restricted to the [`owner()`](#`owner) only.

- the [`pendingOwner()`](#`pendingowner) will gain access to the functions restricted to the [`owner()`](#`owner) only.

<blockquote>

**Requirements:**

- When notifying the previous owner via LSP1, the typeId used MUST be `keccak256('LSP9OwnershipTransferred_SenderNotification')`
- When notifying the new owner via LSP1, the typeId used MUST be `keccak256('LSP9OwnershipTransferred_RecipientNotification')`

</blockquote>

### batchCalls

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#batchcalls)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Function signature: `batchCalls(bytes[])`
- Function selector: `0x6963d438`

:::

```solidity
function batchCalls(bytes[] data) external nonpayable returns (bytes[] results);
```

Allows a caller to batch different function calls in one call. Perform a `delegatecall` on self, to call different functions with preserving the context. It is not possible to send value along the functions call due to the use of `delegatecall`.

#### Parameters

| Name   |   Type    | Description                                                          |
| ------ | :-------: | -------------------------------------------------------------------- |
| `data` | `bytes[]` | An array of ABI encoded function calls to be called on the contract. |

#### Returns

| Name      |   Type    | Description                                            |
| --------- | :-------: | ------------------------------------------------------ |
| `results` | `bytes[]` | An array of values returned by the executed functions. |

### execute

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#execute)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Function signature: `execute(uint256,address,uint256,bytes)`
- Function selector: `0x44c028fe`

:::

:::info

The `operationType` 4 `DELEGATECALL` is disabled by default in the LSP9 Vault.

:::

```solidity
function execute(
  uint256 operationType,
  address target,
  uint256 value,
  bytes data
) external payable returns (bytes);
```

_Calling address `target` using `operationType`, transferring `value` wei and data: `data`. _

Generic executor function to:

- send native tokens to any address.

- interact with any contract by passing an abi-encoded function call in the `data` parameter.

- deploy a contract by providing its creation bytecode in the `data` parameter.

<blockquote>

**Emitted events:**

- [`Executed`](#executed) event, when a call is executed under `operationType` 0 and 3.
- [`ContractCreated`](#contractcreated) event, when a contract is created under `operationType` 1 and 2.
- [`ValueReceived`](#valuereceived) event, when receives native token.

</blockquote>

#### Parameters

| Name            |   Type    | Description                                                                                           |
| --------------- | :-------: | ----------------------------------------------------------------------------------------------------- |
| `operationType` | `uint256` | The operation type used: CALL = 0; CREATE = 1; CREATE2 = 2; STATICCALL = 3; DELEGATECALL = 4          |
| `target`        | `address` | The address of the EOA or smart contract. (unused if a contract is created via operation type 1 or 2) |
| `value`         | `uint256` | The amount of native tokens to transfer (in Wei)                                                      |
| `data`          |  `bytes`  | The call data, or the creation bytecode of the contract to deploy if `operationType` is `1` or `2`.   |

#### Returns

| Name |  Type   | Description |
| ---- | :-----: | ----------- |
| `0`  | `bytes` | -           |

### executeBatch

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#executebatch)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Function signature: `executeBatch(uint256[],address[],uint256[],bytes[])`
- Function selector: `0x31858452`

:::

:::info

The `operationType` 4 `DELEGATECALL` is disabled by default in the LSP9 Vault.

:::

```solidity
function executeBatch(
  uint256[] operationsType,
  address[] targets,
  uint256[] values,
  bytes[] datas
) external payable returns (bytes[]);
```

_Calling multiple addresses `targets` using `operationsType`, transferring `values` wei and data: `datas`. _

Batch executor function that behaves the same as [`execute`](#execute) but allowing multiple operations in the same transaction.

<blockquote>

**Emitted events:**

- [`Executed`](#executed) event, when a call is executed under `operationType` 0 and 3.
- [`ContractCreated`](#contractcreated) event, when a contract is created under `operationType` 1 and 2.
- [`ValueReceived`](#valuereceived) event, when receives native token.

</blockquote>

#### Parameters

| Name             |    Type     | Description                                                                                                     |
| ---------------- | :---------: | --------------------------------------------------------------------------------------------------------------- |
| `operationsType` | `uint256[]` | The list of operations type used: `CALL = 0`; `CREATE = 1`; `CREATE2 = 2`; `STATICCALL = 3`; `DELEGATECALL = 4` |
| `targets`        | `address[]` | The list of addresses to call. `targets` will be unused if a contract is created (operation types 1 and 2).     |
| `values`         | `uint256[]` | The list of native token amounts to transfer (in Wei).                                                          |
| `datas`          |  `bytes[]`  | The list of calldata, or the creation bytecode of the contract to deploy if `operationType` is `1` or `2`.      |

#### Returns

| Name |   Type    | Description |
| ---- | :-------: | ----------- |
| `0`  | `bytes[]` | -           |

### getData

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#getdata)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Function signature: `getData(bytes32)`
- Function selector: `0x54f6127f`

:::

```solidity
function getData(bytes32 dataKey) external view returns (bytes dataValue);
```

_Reading the ERC725Y storage for data key `dataKey` returned the following value: `dataValue`._

Get in the ERC725Y storage the bytes data stored at a specific data key `dataKey`.

#### Parameters

| Name      |   Type    | Description                                   |
| --------- | :-------: | --------------------------------------------- |
| `dataKey` | `bytes32` | The data key for which to retrieve the value. |

#### Returns

| Name        |  Type   | Description                                          |
| ----------- | :-----: | ---------------------------------------------------- |
| `dataValue` | `bytes` | The bytes value stored under the specified data key. |

### getDataBatch

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#getdatabatch)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Function signature: `getDataBatch(bytes32[])`
- Function selector: `0xdedff9c6`

:::

```solidity
function getDataBatch(
  bytes32[] dataKeys
) external view returns (bytes[] dataValues);
```

_Reading the ERC725Y storage for data keys `dataKeys` returned the following values: `dataValues`._

Get in the ERC725Y storage the bytes data stored at multiple data keys `dataKeys`.

#### Parameters

| Name       |    Type     | Description                                |
| ---------- | :---------: | ------------------------------------------ |
| `dataKeys` | `bytes32[]` | The array of keys which values to retrieve |

#### Returns

| Name         |   Type    | Description                               |
| ------------ | :-------: | ----------------------------------------- |
| `dataValues` | `bytes[]` | The array of data stored at multiple keys |

### owner

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#owner)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Function signature: `owner()`
- Function selector: `0x8da5cb5b`

:::

```solidity
function owner() external view returns (address);
```

Returns the address of the current owner.

#### Returns

| Name |   Type    | Description |
| ---- | :-------: | ----------- |
| `0`  | `address` | -           |

### pendingOwner

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#pendingowner)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Function signature: `pendingOwner()`
- Function selector: `0xe30c3978`

:::

```solidity
function pendingOwner() external view returns (address);
```

The address that ownership of the contract is transferred to. This address may use [`acceptOwnership()`](#acceptownership) to gain ownership of the contract.

#### Returns

| Name |   Type    | Description |
| ---- | :-------: | ----------- |
| `0`  | `address` | -           |

### renounceOwnership

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#renounceownership)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Function signature: `renounceOwnership()`
- Function selector: `0x715018a6`

:::

```solidity
function renounceOwnership() external nonpayable;
```

Renounce ownership of the contract in a two step process.

1. the first call will initiate the process of renouncing ownership.

2. the second is used as a confirmation and will leave the contract without an owner.

### setData

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#setdata)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Function signature: `setData(bytes32,bytes)`
- Function selector: `0x7f23690c`

:::

```solidity
function setData(bytes32 dataKey, bytes dataValue) external payable;
```

_Setting the following data key value pair in the ERC725Y storage. Data key: `dataKey`, data value: `dataValue`. _

Sets a single bytes value `dataValue` in the ERC725Y storage for a specific data key `dataKey`. The function is marked as payable to enable flexibility on child contracts. For instance to implement a fee mechanism for setting specific data.

<blockquote>

**Emitted events:**

- [`DataChanged`](#datachanged) event.

</blockquote>

#### Parameters

| Name        |   Type    | Description                                |
| ----------- | :-------: | ------------------------------------------ |
| `dataKey`   | `bytes32` | The data key for which to set a new value. |
| `dataValue` |  `bytes`  | The new bytes value to set.                |

### setDataBatch

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#setdatabatch)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Function signature: `setDataBatch(bytes32[],bytes[])`
- Function selector: `0x97902421`

:::

```solidity
function setDataBatch(bytes32[] dataKeys, bytes[] dataValues) external payable;
```

_Setting the following data key value pairs in the ERC725Y storage. Data keys: `dataKeys`, data values: `dataValues`. _

Batch data setting function that behaves the same as [`setData`](#setdata) but allowing to set multiple data key/value pairs in the ERC725Y storage in the same transaction.

<blockquote>

**Emitted events:**

- [`DataChanged`](#datachanged) event.

</blockquote>

#### Parameters

| Name         |    Type     | Description                                          |
| ------------ | :---------: | ---------------------------------------------------- |
| `dataKeys`   | `bytes32[]` | An array of data keys to set bytes values for.       |
| `dataValues` |  `bytes[]`  | An array of bytes values to set for each `dataKeys`. |

### supportsInterface

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#supportsinterface)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Function signature: `supportsInterface(bytes4)`
- Function selector: `0x01ffc9a7`

:::

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool);
```

Returns true if this contract implements the interface defined by `interfaceId`. If the contract doesn't support the `interfaceId`, it forwards the call to the `supportsInterface` extension according to LSP17, and checks if the extension implements the interface defined by `interfaceId`.

#### Parameters

| Name          |   Type   | Description |
| ------------- | :------: | ----------- |
| `interfaceId` | `bytes4` | -           |

#### Returns

| Name |  Type  | Description |
| ---- | :----: | ----------- |
| `0`  | `bool` | -           |

### transferOwnership

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#transferownership)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Function signature: `transferOwnership(address)`
- Function selector: `0xf2fde38b`

:::

```solidity
function transferOwnership(address newOwner) external nonpayable;
```

Initiate the process of transferring ownership of the contract by setting the new owner as the pending owner. If the new owner is a contract that supports + implements LSP1, this will also attempt to notify the new owner that ownership has been transferred to them by calling the [`universalReceiver()`](#`universalreceiver) function on the `newOwner` contract.

<blockquote>

**Requirements:**

- When notifying the new owner via LSP1, the typeId used MUST be `keccak256('LSP9OwnershipTransferStarted')`

</blockquote>

#### Parameters

| Name       |   Type    | Description                   |
| ---------- | :-------: | ----------------------------- |
| `newOwner` | `address` | the address of the new owner. |

### universalReceiver

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#universalreceiver)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Function signature: `universalReceiver(bytes32,bytes)`
- Function selector: `0x6bb56a14`

:::

```solidity
function universalReceiver(
  bytes32 typeId,
  bytes receivedData
) external payable returns (bytes returnedValues);
```

_Forwards the call to the addresses stored in the [ERC725Y] storage under the the Vault version of [LSP1UniversalReceiverDelegate] Data Key and the `typeId` Key (param) respectively. The call will be discarded if no addresses are set._

<blockquote>

**Emitted events:**

- [`UniversalReceiver`](#universalreceiver) when this function gets executed successfully.

</blockquote>

#### Parameters

| Name           |   Type    | Description                |
| -------------- | :-------: | -------------------------- |
| `typeId`       | `bytes32` | The type of call received. |
| `receivedData` |  `bytes`  | The data received.         |

#### Returns

| Name             |  Type   | Description                                                                                                                    |
| ---------------- | :-----: | ------------------------------------------------------------------------------------------------------------------------------ |
| `returnedValues` | `bytes` | The ABI encoded return value of the the Vault version of [LSP1UniversalReceiverDelegate] call and the LSP1TypeIdDelegate call. |

## Events

### ContractCreated

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#contractcreated)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Event signature: `ContractCreated(uint256,address,uint256,bytes32)`
- Event hash: `0xa1fb700aaee2ae4a2ff6f91ce7eba292f89c2f5488b8ec4c5c5c8150692595c3`

:::

```solidity
event ContractCreated(uint256 indexed operationType, address indexed contractAddress, uint256 indexed value, bytes32 salt);
```

_Deployed new contract at address `contractAddress` and funded with `value` wei (deployed using opcode: `operationType`)._

Emitted when a new contract was created and deployed.

#### Parameters

| Name                            |   Type    | Description                                                                                                                               |
| ------------------------------- | :-------: | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `operationType` **`indexed`**   | `uint256` | The opcode used to deploy the contract (`CREATE` or `CREATE2`).                                                                           |
| `contractAddress` **`indexed`** | `address` | The created contract address.                                                                                                             |
| `value` **`indexed`**           | `uint256` | The amount of native tokens (in Wei) sent to fund the created contract on deployment.                                                     |
| `salt`                          | `bytes32` | The salt used to deterministically deploy the contract (`CREATE2` only). If `CREATE` opcode is used, the salt value will be `bytes32(0)`. |

### DataChanged

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#datachanged)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Event signature: `DataChanged(bytes32,bytes)`
- Event hash: `0xece574603820d07bc9b91f2a932baadf4628aabcb8afba49776529c14a6104b2`

:::

```solidity
event DataChanged(bytes32 indexed dataKey, bytes dataValue);
```

_The following data key/value pair has been changed in the ERC725Y storage: Data key: `dataKey`, data value: `dataValue`._

Emitted when data at a specific `dataKey` was changed to a new value `dataValue`.

#### Parameters

| Name                    |   Type    | Description                                  |
| ----------------------- | :-------: | -------------------------------------------- |
| `dataKey` **`indexed`** | `bytes32` | The data key for which a bytes value is set. |
| `dataValue`             |  `bytes`  | The value to set for the given data key.     |

### Executed

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#executed)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Event signature: `Executed(uint256,address,uint256,bytes4)`
- Event hash: `0x4810874456b8e6487bd861375cf6abd8e1c8bb5858c8ce36a86a04dabfac199e`

:::

```solidity
event Executed(uint256 indexed operationType, address indexed target, uint256 indexed value, bytes4 selector);
```

_Called address `target` using `operationType` with `value` wei and `data`._

Emitted when calling an address `target` (EOA or contract) with `value`.

#### Parameters

| Name                          |   Type    | Description                                                                                          |
| ----------------------------- | :-------: | ---------------------------------------------------------------------------------------------------- |
| `operationType` **`indexed`** | `uint256` | The low-level call opcode used to call the `target` address (`CALL`, `STATICALL` or `DELEGATECALL`). |
| `target` **`indexed`**        | `address` | The address to call. `target` will be unused if a contract is created (operation types 1 and 2).     |
| `value` **`indexed`**         | `uint256` | The amount of native tokens transferred along the call (in Wei).                                     |
| `selector`                    | `bytes4`  | The first 4 bytes (= function selector) of the data sent with the call.                              |

### OwnershipRenounced

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#ownershiprenounced)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Event signature: `OwnershipRenounced()`
- Event hash: `0xd1f66c3d2bc1993a86be5e3d33709d98f0442381befcedd29f578b9b2506b1ce`

:::

```solidity
event OwnershipRenounced();
```

emitted when the ownership of the contract has been renounced.

### OwnershipTransferStarted

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#ownershiptransferstarted)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Event signature: `OwnershipTransferStarted(address,address)`
- Event hash: `0x38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e22700`

:::

```solidity
event OwnershipTransferStarted(address indexed previousOwner, address indexed newOwner);
```

emitted when starting the `transferOwnership(..)` 2-step process.

#### Parameters

| Name                          |   Type    | Description |
| ----------------------------- | :-------: | ----------- |
| `previousOwner` **`indexed`** | `address` | -           |
| `newOwner` **`indexed`**      | `address` | -           |

### OwnershipTransferred

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#ownershiptransferred)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Event signature: `OwnershipTransferred(address,address)`
- Event hash: `0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0`

:::

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
```

#### Parameters

| Name                          |   Type    | Description |
| ----------------------------- | :-------: | ----------- |
| `previousOwner` **`indexed`** | `address` | -           |
| `newOwner` **`indexed`**      | `address` | -           |

### RenounceOwnershipStarted

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#renounceownershipstarted)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Event signature: `RenounceOwnershipStarted()`
- Event hash: `0x81b7f830f1f0084db6497c486cbe6974c86488dcc4e3738eab94ab6d6b1653e7`

:::

```solidity
event RenounceOwnershipStarted();
```

emitted when starting the `renounceOwnership(..)` 2-step process.

### UniversalReceiver

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#universalreceiver)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Event signature: `UniversalReceiver(address,uint256,bytes32,bytes,bytes)`
- Event hash: `0x9c3ba68eb5742b8e3961aea0afc7371a71bf433c8a67a831803b64c064a178c2`

:::

```solidity
event UniversalReceiver(address indexed from, uint256 indexed value, bytes32 indexed typeId, bytes receivedData, bytes returnedValue);
```

_Emitted when the universalReceiver function is succesfully executed_

#### Parameters

| Name                   |   Type    | Description                                             |
| ---------------------- | :-------: | ------------------------------------------------------- |
| `from` **`indexed`**   | `address` | The address calling the universalReceiver function      |
| `value` **`indexed`**  | `uint256` | The amount sent to the universalReceiver function       |
| `typeId` **`indexed`** | `bytes32` | The hash of a specific standard or a hook               |
| `receivedData`         |  `bytes`  | The arbitrary data passed to universalReceiver function |
| `returnedValue`        |  `bytes`  | The value returned by the universalReceiver function    |

### ValueReceived

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#valuereceived)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Event signature: `ValueReceived(address,uint256)`
- Event hash: `0x7e71433ddf847725166244795048ecf3e3f9f35628254ecbf736056664233493`

:::

```solidity
event ValueReceived(address indexed sender, uint256 indexed value);
```

_Emitted when receiving native tokens._

#### Parameters

| Name                   |   Type    | Description                           |
| ---------------------- | :-------: | ------------------------------------- |
| `sender` **`indexed`** | `address` | The address of the sender.            |
| `value` **`indexed`**  | `uint256` | The amount of native tokens received. |

## Errors

### CannotTransferOwnershipToSelf

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#cannottransferownershiptoself)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Error signature: `CannotTransferOwnershipToSelf()`
- Error hash: `0x43b248cd`

:::

```solidity
error CannotTransferOwnershipToSelf();
```

reverts when trying to transfer ownership to the address(this)

### ERC725X_ContractDeploymentFailed

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#erc725x_contractdeploymentfailed)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Error signature: `ERC725X_ContractDeploymentFailed()`
- Error hash: `0x0b07489b`

:::

```solidity
error ERC725X_ContractDeploymentFailed();
```

Reverts when contract deployment failed via [`execute`](#execute) or [`executeBatch`](#executebatch) functions, This error can occur using either operation type 1 (`CREATE`) or 2 (`CREATE2`).

### ERC725X_CreateOperationsRequireEmptyRecipientAddress

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#erc725x_createoperationsrequireemptyrecipientaddress)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Error signature: `ERC725X_CreateOperationsRequireEmptyRecipientAddress()`
- Error hash: `0x3041824a`

:::

```solidity
error ERC725X_CreateOperationsRequireEmptyRecipientAddress();
```

Reverts when passing a `to` address that is not `address(0)` (= address zero) while deploying a contract via [`execute`](#execute) or [`executeBatch`](#executebatch) functions. This error can occur using either operation type 1 (`CREATE`) or 2 (`CREATE2`).

### ERC725X_ExecuteParametersEmptyArray

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#erc725x_executeparametersemptyarray)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Error signature: `ERC725X_ExecuteParametersEmptyArray()`
- Error hash: `0xe9ad2b5f`

:::

```solidity
error ERC725X_ExecuteParametersEmptyArray();
```

Reverts when one of the array parameter provided to the [`executeBatch`](#executebatch) function is an empty array.

### ERC725X_ExecuteParametersLengthMismatch

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#erc725x_executeparameterslengthmismatch)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Error signature: `ERC725X_ExecuteParametersLengthMismatch()`
- Error hash: `0x3ff55f4d`

:::

```solidity
error ERC725X_ExecuteParametersLengthMismatch();
```

Reverts when there is not the same number of elements in the `operationTypes`, `targets` addresses, `values`, and `datas` array parameters provided when calling the [`executeBatch`](#executebatch) function.

### ERC725X_InsufficientBalance

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#erc725x_insufficientbalance)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Error signature: `ERC725X_InsufficientBalance(uint256,uint256)`
- Error hash: `0x0df9a8f8`

:::

```solidity
error ERC725X_InsufficientBalance(uint256 balance, uint256 value);
```

Reverts when trying to send more native tokens `value` than available in current `balance`.

#### Parameters

| Name      |   Type    | Description                                                                                                                                |
| --------- | :-------: | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `balance` | `uint256` | The balance of native tokens of the ERC725X smart contract.                                                                                |
| `value`   | `uint256` | The amount of native tokens sent via `ERC725X.execute(...)`/`ERC725X.executeBatch(...)` that is greater than the contract&#39;s `balance`. |

### ERC725X_MsgValueDisallowedInStaticCall

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#erc725x_msgvaluedisallowedinstaticcall)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Error signature: `ERC725X_MsgValueDisallowedInStaticCall()`
- Error hash: `0x72f2bc6a`

:::

```solidity
error ERC725X_MsgValueDisallowedInStaticCall();
```

Reverts when trying to send native tokens (`value` / `values[]` parameter of [`execute`](#execute) or [`executeBatch`](#executebatch) functions) while making a `staticcall` (`operationType == 3`). Sending native tokens via `staticcall` is not allowed because it is a state changing operation.

### ERC725X_NoContractBytecodeProvided

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#erc725x_nocontractbytecodeprovided)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Error signature: `ERC725X_NoContractBytecodeProvided()`
- Error hash: `0xb81cd8d9`

:::

```solidity
error ERC725X_NoContractBytecodeProvided();
```

Reverts when no contract bytecode was provided as parameter when trying to deploy a contract via [`execute`](#execute) or [`executeBatch`](#executebatch). This error can occur using either operation type 1 (`CREATE`) or 2 (`CREATE2`).

### ERC725X_UnknownOperationType

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#erc725x_unknownoperationtype)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Error signature: `ERC725X_UnknownOperationType(uint256)`
- Error hash: `0x7583b3bc`

:::

```solidity
error ERC725X_UnknownOperationType(uint256 operationTypeProvided);
```

Reverts when the `operationTypeProvided` is none of the default operation types available. (CALL = 0; CREATE = 1; CREATE2 = 2; STATICCALL = 3; DELEGATECALL = 4)

#### Parameters

| Name                    |   Type    | Description                                                                                            |
| ----------------------- | :-------: | ------------------------------------------------------------------------------------------------------ |
| `operationTypeProvided` | `uint256` | The unrecognised operation type number provided to `ERC725X.execute(...)`/`ERC725X.executeBatch(...)`. |

### ERC725Y_DataKeysValuesLengthMismatch

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#erc725y_datakeysvalueslengthmismatch)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Error signature: `ERC725Y_DataKeysValuesLengthMismatch()`
- Error hash: `0x3bcc8979`

:::

```solidity
error ERC725Y_DataKeysValuesLengthMismatch();
```

Reverts when there is not the same number of elements in the `datakeys` and `dataValues` array parameters provided when calling the [`setDataBatch`](#setdatabatch) function.

### ERC725Y_MsgValueDisallowed

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#erc725y_msgvaluedisallowed)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Error signature: `ERC725Y_MsgValueDisallowed()`
- Error hash: `0xf36ba737`

:::

```solidity
error ERC725Y_MsgValueDisallowed();
```

Reverts when sending value to the [`setData`](#setdata) or [`setDataBatch`](#setdatabatch) function.

### LSP1DelegateNotAllowedToSetDataKey

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#lsp1delegatenotallowedtosetdatakey)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Error signature: `LSP1DelegateNotAllowedToSetDataKey(bytes32)`
- Error hash: `0x199611f1`

:::

```solidity
error LSP1DelegateNotAllowedToSetDataKey(bytes32 dataKey);
```

_Couldn't set the Data Key: `dataKey`._

Reverts when the Vault version of [LSP1UniversalReceiverDelegate] sets LSP1/6/17 Data Keys.

#### Parameters

| Name      |   Type    | Description                                                                                   |
| --------- | :-------: | --------------------------------------------------------------------------------------------- |
| `dataKey` | `bytes32` | The data key that the Vault version of [LSP1UniversalReceiverDelegate] is not allowed to set. |

### NoExtensionFoundForFunctionSelector

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#noextensionfoundforfunctionselector)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Error signature: `NoExtensionFoundForFunctionSelector(bytes4)`
- Error hash: `0xbb370b2b`

:::

```solidity
error NoExtensionFoundForFunctionSelector(bytes4 functionSelector);
```

reverts when there is no extension for the function selector being called with

#### Parameters

| Name               |   Type   | Description |
| ------------------ | :------: | ----------- |
| `functionSelector` | `bytes4` | -           |

### NotInRenounceOwnershipInterval

:::note Links

- Specification details in [**LSP-9-Vault**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-9-Vault.md#notinrenounceownershipinterval)
- Solidity implementation in [**LSP9Vault**](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/contracts/LSP9Vault/LSP9Vault.sol)
- Error signature: `NotInRenounceOwnershipInterval(uint256,uint256)`
- Error hash: `0x8b9bf507`

:::

```solidity
error NotInRenounceOwnershipInterval(
  uint256 renounceOwnershipStart,
  uint256 renounceOwnershipEnd
);
```

reverts when trying to renounce ownership before the initial confirmation delay

#### Parameters

| Name                     |   Type    | Description |
| ------------------------ | :-------: | ----------- |
| `renounceOwnershipStart` | `uint256` | -           |
| `renounceOwnershipEnd`   | `uint256` | -           |

<!-- prettier-ignore-start -->

<!-- SPECS -->

[ERC-725]: https://github.com/ERC725Alliance/ERC725/blob/main/docs/ERC-725.md
[LSP-0-ERC725Account]: https://github.com/lukso-network/LIPs/tree/main/LSPs/LSP-0-ERC725Account.md
[LSP-1-UniversalReceiver]: https://github.com/lukso-network/LIPs/tree/main/LSPs/LSP-1-UniversalReceiver.md
[LSP-2-ERC725YJSONSchema]: https://github.com/lukso-network/LIPs/tree/main/LSPs/LSP-2-ERC725YJSONSchema.md
[LSP-3-UniversalProfile-Metadata]: https://github.com/lukso-network/LIPs/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md
[LSP-4-DigitalAsset-Metadata]: https://github.com/lukso-network/LIPs/tree/main/LSPs/LSP-4-DigitalAsset-Metadata.md
[LSP-5-ReceivedAssets]: https://github.com/lukso-network/LIPs/tree/main/LSPs/LSP-5-ReceivedAssets.md
[LSP-6-KeyManager]: https://github.com/lukso-network/LIPs/tree/main/LSPs/LSP-6-KeyManager.md
[LSP-7-DigitalAsset]: https://github.com/lukso-network/LIPs/tree/main/LSPs/LSP-7-DigitalAsset.md
[LSP-8-IdentifiableDigitalAsset]: https://github.com/lukso-network/LIPs/tree/main/LSPs/LSP-8-IdentifiableDigitalAsset.md
[LSP-9-Vault.md]: https://github.com/lukso-network/LIPs/tree/main/LSPs/LSP-9-Vault.md.md
[LSP-10-ReceivedVaults]: https://github.com/lukso-network/LIPs/tree/main/LSPs/LSP-10-ReceivedVaults.md
[LSP-11-BasicSocialRecovery]: https://github.com/lukso-network/LIPs/tree/main/LSPs/LSP-11-BasicSocialRecovery.md
[LSP-12-IssuedAssets]: https://github.com/lukso-network/LIPs/tree/main/LSPs/LSP-12-IssuedAssets.md
[LSP-14-Ownable2Step]: https://github.com/lukso-network/LIPs/tree/main/LSPs/LSP-14-Ownable2Step.md
[LSP-15-TransactionRelayServiceAPI]: https://github.com/lukso-network/LIPs/tree/main/LSPs/LSP-15-TransactionRelayServiceAPI.md
[LSP-16-UniversalFactory]: https://github.com/lukso-network/LIPs/tree/main/LSPs/LSP-16-UniversalFactory.md
[LSP-17-ContractExtension]: https://github.com/lukso-network/LIPs/tree/main/LSPs/LSP-17-ContractExtension.md
[LSP-20-CallVerification]: https://github.com/lukso-network/LIPs/tree/main/LSPs/LSP-20-CallVerification.md

<!-- DOCS -->

[ERC725]: https://docs.lukso.tech/standards/lsp-background/erc725
[UniversalProfile]: https://docs.lukso.tech/standards/universal-profile/introduction
[LSP0ERC725Account]: https://docs.lukso.tech/standards/universal-profile/lsp0-erc725account
[LSP1UniversalReceiver]: https://docs.lukso.tech/standards/generic-standards/lsp1-universal-receiver
[LSP1UniversalReceiverDelegate]: https://docs.lukso.tech/standards/generic-standards/lsp1-universal-receiver-delegate
[LSP2ERC725YJSONSchema]: https://docs.lukso.tech/standards/generic-standards/lsp2-json-schema
[LSP4DigitalAssetMetadata]: https://docs.lukso.tech/standards/nft-2.0/LSP4-Digital-Asset-Metadata
[LSP5ReceivedVaults]: https://docs.lukso.tech/standards/universal-profile/lsp5-received-assets
[LSP6KeyManager]: https://docs.lukso.tech/standards/universal-profile/lsp6-key-manager
[LSP7DigitalAsset]: https://docs.lukso.tech/standards/nft-2.0/LSP7-Digital-Asset
[LSP8IdentifiableDigitalAsset]: https://docs.lukso.tech/standards/nft-2.0/LSP8-Identifiable-Digital-Asset
[LSP10ReceivedVaults]: https://docs.lukso.tech/standards/universal-profile/lsp10-received-vaults
[LSP14Ownable2Step]: https://docs.lukso.tech/standards/generic-standards/lsp14-ownable-2-step
[LSP17ContractExtension]: https://docs.lukso.tech/standards/generic-standards/lsp17-contract-extension
[LSP20CallVerification]: https://docs.lukso.tech/standards/generic-standards/lsp20-call-verification

<!-- ERC725 LIBRARY -->

[`ERC725.sol`]: https://github.com/ERC725Alliance/ERC725/blob/v5.1.0/implementations/contracts/ERC725.sol
[`ERC725Init.sol`]: https://github.com/ERC725Alliance/ERC725/blob/v5.1.0/implementations/contracts/ERC725Init.sol
[`ERC725InitAbstract.sol`]: https://github.com/ERC725Alliance/ERC725/blob/v5.1.0/implementations/contracts/ERC725InitAbstract
[`IERC725X.sol`]: https://github.com/ERC725Alliance/ERC725/blob/v5.1.0/implementations/contracts/interfaces/IERC725X.sol
[`ERC725XInit.sol`]: https://github.com/ERC725Alliance/ERC725/blob/v5.1.0/implementations/contracts/ERC725XInit.sol
[`ERC725XInitAbstract.sol`]: https://github.com/ERC725Alliance/ERC725/blob/v5.1.0/implementations/contracts/ERC725XInitAbstract.sol
[`IERC725Y.sol`]: https://github.com/ERC725Alliance/ERC725/blob/v5.1.0/implementations/contracts/interfaces/IERC725Y.sol
[`ERC725YInit.sol`]: https://github.com/ERC725Alliance/ERC725/blob/v5.1.0/implementations/contracts/ERC725YInit.sol
[`ERC725YInitAbstract.sol`]: https://github.com/ERC725Alliance/ERC725/blob/v5.1.0/implementations/contracts/ERC725YInitAbstract.sol

<!-- EXTERNAL LIBRARIES -->

[`Create2.sol`]: https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Create2.sol
[`ECDSA.sol`]: https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/cryptography/ECDSA.sol
[`ERC165Checker.sol`]: https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/introspection/ERC165Checker.sol
[`Address.sol`]: https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Address.sol
[`ERC165.sol`]: https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/introspection/ERC165.sol
[`Initializable.sol`]: https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/proxy/utils/Initializable.sol
[`EnumerableSet.sol`]: https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/structs/EnumerableSet.sol
[`ERC725Y.sol`]: https://github.com/ERC725Alliance/ERC725/blob/main/implementations/contracts/ERC725Y.sol
[`ERC725YCore.sol`]: https://github.com/ERC725Alliance/ERC725/blob/main/implementations/contracts/ERC725YCore.sol
[`ERC725X.sol`]: https://github.com/ERC725Alliance/ERC725/blob/main/implementations/contracts/ERC725X.sol
[`ERC725XCore.sol`]: https://github.com/ERC725Alliance/ERC725/blob/main/implementations/contracts/ERC725XCore.sol
[`OwnableUnset.sol`]: https://github.com/ERC725Alliance/ERC725/blob/main/implementations/contracts/custom/OwnableUnset.sol
[`BytesLib.sol`]: https://github.com/GNSPS/solidity-bytes-utils/blob/master/contracts/BytesLib.sol

<!-- SOLIDITY IMPLEMENTATION -->

[`LSP0ERC725AccountCore.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP0ERC725Account/LSP0ERC725AccountCore.sol
[`LSP0Utils.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP0ERC725Account/LSP0Utils.sol
[`LSP0ERC725AccountInitAbstract.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP0ERC725Account/LSP0ERC725AccountInitAbstract.sol
[`ILSP0ERC725Account.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP0ERC725Account/ILSP0ERC725Account.sol
[`LSP0ERC725Account.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP0ERC725Account/LSP0ERC725Account.sol
[`LSP0ERC725AccountInit.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP0ERC725Account/LSP0ERC725AccountInit.sol
[`LSP0Constants.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP0ERC725Account/LSP0Constants.sol
[`UniversalProfileInitAbstract.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/UniversalProfileInitAbstract.sol
[`UniversalProfile.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/UniversalProfile.sol
[`UniversalProfileInit.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/UniversalProfileInit.sol
[`LSP1UniversalReceiverDelegateUP.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP1UniversalReceiver/LSP1UniversalReceiverDelegateUP/LSP1UniversalReceiverDelegateUP.sol
[`LSP1Utils.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP1UniversalReceiver/LSP1Utils.sol
[`LSP1UniversalReceiverDelegateVault.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP1UniversalReceiver/LSP1UniversalReceiverDelegateVault/LSP1UniversalReceiverDelegateVault.sol
[`ILSP1UniversalReceiver.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP1UniversalReceiver/ILSP1UniversalReceiver.sol
[`LSP1Constants.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP1UniversalReceiver/LSP1Constants.sol
[`LSP1Errors.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP1UniversalReceiver/LSP1Errors.sol
[`LSP4DigitalAssetMetadataInitAbstract.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP4DigitalAssetMetadata/LSP4DigitalAssetMetadataInitAbstract.sol
[`LSP4DigitalAssetMetadata.sol`]: chttps://github.com/code-423n4/2023-06-lukso/tree/main/ontracts/LSP4DigitalAssetMetadata/LSP4DigitalAssetMetadata.sol
[`LSP4Compatibility.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP4DigitalAssetMetadata/LSP4Compatibility.sol
[`LSP4Constants.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP4DigitalAssetMetadata/LSP4Constants.sol
[`ILSP4Compatibility.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP4DigitalAssetMetadata/ILSP4Compatibility.sol
[`LSP4Errors.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP4DigitalAssetMetadata/LSP4Errors.sol
[`LSP6SetDataModule.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP6KeyManager/LSP6Modules/LSP6SetDataModule.sol
[`LSP6KeyManagerCore.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP6KeyManager/LSP6KeyManagerCore.sol
[`LSP6ExecuteModule.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP6KeyManager/LSP6Modules/LSP6ExecuteModule.sol
[`LSP6Utils.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP6KeyManager/LSP6Utils.sol
[`LSP6Constants.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP6KeyManager/LSP6Constants.sol
[`ILSP6KeyManager.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP6KeyManager/ILSP6KeyManager.sol
[`LSP6Errors.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP6KeyManager/LSP6Errors.sol
[`LSP6OwnershipModule.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP6KeyManager/LSP6Modules/LSP6OwnershipModule.sol
[`LSP6KeyManagerInitAbstract.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP6KeyManager/LSP6KeyManagerInitAbstract.sol
[`LSP6KeyManager.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP6KeyManager/LSP6KeyManager.sol
[`LSP6KeyManagerInit.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP6KeyManager/LSP6KeyManagerInit.sol
[`LSP7DigitalAssetCore.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP7DigitalAsset/LSP7DigitalAssetCore.sol
[`LSP7CompatibleERC20InitAbstract.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP7DigitalAsset/extensions/LSP7CompatibleERC20InitAbstract.sol
[`LSP7CompatibleERC20.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP7DigitalAsset/extensions/LSP7CompatibleERC20.sol
[`ILSP7DigitalAsset.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP7DigitalAsset/ILSP7DigitalAsset.sol
[`LSP7DigitalAssetInitAbstract.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP7DigitalAsset/LSP7DigitalAssetInitAbstract.sol
[`LSP7CappedSupply.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP7DigitalAsset/extensions/LSP7CappedSupply.sol
[`LSP7CappedSupplyInitAbstract.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP7DigitalAsset/extensions/LSP7CappedSupplyInitAbstract.sol
[`LSP7DigitalAsset.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP7DigitalAsset/LSP7DigitalAsset.sol
[`LSP7MintableInitAbstract.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP7DigitalAsset/presets/LSP7MintableInitAbstract.sol
[`LSP7CompatibleERC20MintableInitAbstract.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP7DigitalAsset/presets/LSP7CompatibleERC20MintableInitAbstract.sol
[`LSP7Mintable.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP7DigitalAsset/presets/LSP7Mintable.sol
[`LSP7CompatibleERC20Mintable.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP7DigitalAsset/presets/LSP7CompatibleERC20Mintable.sol
[`LSP7Errors.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP7DigitalAsset/LSP7Errors.sol
[`LSP7CompatibleERC20MintableInit.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP7DigitalAsset/presets/LSP7CompatibleERC20MintableInit.sol
[`LSP7MintableInit.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP7DigitalAsset/presets/LSP7MintableInit.sol
[`ILSP7CompatibleERC20.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP7DigitalAsset/extensions/ILSP7CompatibleERC20.sol
[`ILSP7Mintable.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP7DigitalAsset/presets/ILSP7Mintable.sol
[`LSP7Burnable.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP7DigitalAsset/extensions/LSP7Burnable.sol
[`LSP7BurnableInitAbstract.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP7DigitalAsset/extensions/LSP7BurnableInitAbstract.sol
[`LSP7Constants.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP7DigitalAsset/LSP7Constants.sol
[`LSP8IdentifiableDigitalAssetCore.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP8IdentifiableDigitalAsset/LSP8IdentifiableDigitalAssetCore.sol
[`LSP8CompatibleERC721InitAbstract.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP8IdentifiableDigitalAsset/extensions/LSP8CompatibleERC721InitAbstract.sol
[`LSP8CompatibleERC721.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP8IdentifiableDigitalAsset/extensions/LSP8CompatibleERC721.sol
[`ILSP8IdentifiableDigitalAsset.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP8IdentifiableDigitalAsset/ILSP8IdentifiableDigitalAsset.sol
[`LSP8EnumerableInitAbstract.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP8IdentifiableDigitalAsset/extensions/LSP8EnumerableInitAbstract.sol
[`LSP8Enumerable.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP8IdentifiableDigitalAsset/extensions/LSP8Enumerable.sol
[`LSP8CappedSupplyInitAbstract.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP8IdentifiableDigitalAsset/extensions/LSP8CappedSupplyInitAbstract.sol
[`LSP8CappedSupply.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP8IdentifiableDigitalAsset/extensions/LSP8CappedSupply.sol
[`LSP8IdentifiableDigitalAssetInitAbstract.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP8IdentifiableDigitalAsset/LSP8IdentifiableDigitalAssetInitAbstract.sol
[`LSP8MintableInitAbstract.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP8IdentifiableDigitalAsset/presets/LSP8MintableInitAbstract.sol
[`ILSP8CompatibleERC721.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP8IdentifiableDigitalAsset/extensions/ILSP8CompatibleERC721.sol
[`LSP8IdentifiableDigitalAsset.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP8IdentifiableDigitalAsset/LSP8IdentifiableDigitalAsset.sol
[`LSP8CompatibleERC721MintableInitAbstract.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP8IdentifiableDigitalAsset/presets/LSP8CompatibleERC721MintableInitAbstract.s
[`LSP8Mintable.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP8IdentifiableDigitalAsset/presets/LSP8Mintable.sol
[`LSP8CompatibleERC721Mintable.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP8IdentifiableDigitalAsset/presets/LSP8CompatibleERC721Mintable.sol
[`LSP8CompatibleERC721MintableInit.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP8IdentifiableDigitalAsset/presets/LSP8CompatibleERC721MintableInit.sol
[`LSP8Errors.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP8IdentifiableDigitalAsset/LSP8Errors.sol
[`LSP8MintableInit.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP8IdentifiableDigitalAsset/presets/LSP8MintableInit.sol
[`LSP8Burnable.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP8IdentifiableDigitalAsset/extensions/LSP8Burnable.sol
[`ILSP8Mintable.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP8IdentifiableDigitalAsset/presets/ILSP8Mintable.sol
[`LSP8Constants.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP8IdentifiableDigitalAsset/LSP8Constants.s
[`LSP14Ownable2Step.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP14Ownable2Step/LSP14Ownable2Step.sol
[`ILSP14Ownable2Step.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP14Ownable2Step/ILSP14Ownable2Step.sol
[`LSP14Constants.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP14Ownable2Step/LSP14Constants.sol
[`LSP14Errors.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP14Ownable2Step/LSP14Errors.sol
[`LSP17Extendable.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP17ContractExtension/LSP17Extendable.sol
[`LSP17Extension.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP17ContractExtension/LSP17Extension.sol
[`LSP17Constants.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP17ContractExtension/LSP17Constants.sol
[`LSP17Errors.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP17ContractExtension/LSP17Errors.sol
[`LSP17Utils.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP17ContractExtension/LSP17Utils.sol
[`LSP20CallVerification.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP20CallVerification/LSP20CallVerification.sol
[`ILSP20CallVerifier.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP20CallVerification/ILSP20CallVerifier.sol
[`LSP20Constants.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP20CallVerification/LSP20Constants.sol
[`LSP20Errors.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP20CallVerification/LSP20Errors.sol
[`LSP2Utils.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP2ERC725YJSONSchema/LSP2Utils.sol
[`LSP5Utils.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP5ReceivedAssets/LSP5Utils.sol
[`LSP5Constants.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP5ReceivedAssets/LSP5Constants.sol
[`LSP10Utils.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP10ReceivedVaults/LSP10Utils.sol
[`LSP10Constants.sol`]: https://github.com/lukso-network/lsp-smart-contracts/tree/main/contracts/LSP10ReceivedVaults/LSP10Constants.sol

<!-- prettier-ignore-end -->