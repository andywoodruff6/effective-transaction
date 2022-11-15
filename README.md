# effective-transaction

Calculating The effective transactions on Cardano

## Summary

One metric that is often used to compare different blockchains is Transactions Per Second or TPS. The current method for counting transactions is basic, count the number of transactions accepted into the blockchain over a period of time. This method is easy to calculate and works great if the network only has basic transactions. When transactions get more complex and multiple users and multiple assets are all transacted at the same time, this complexity is lost in the nuance of our calculation of the metric.F

## Knowns

- All blockchains have a native coin (coin)
  - Example: Bitcoin for Bitcoin, Ether for Ethereum or Ada for Cardano
- Many blockchains can support additional user created tokens (token)
  - Example: Shiba Innu on Ethereum or Hosky on Cardano
- Many blockchains can support multi person transactions

## Solution

What is a basic transaction?
A basic transaction is the transfer of any value from one address to a second address.

The effective transaction should take a complex transaction and count up the number of basic transactions that are in it.
