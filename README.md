# problem statement
creates an azure servicebus (if doesn't already exist)

# example usage

> note: in examples, VERSION represents a version of the azure.servicebus.create pkg

## install

```shell
opctl pkg install github.com/opspec-pkgs/azure.servicebus.create#VERSION
```

## run

```
opctl run github.com/opspec-pkgs/azure.servicebus.create#VERSION
```

## compose

```yaml
run:
  op:
    pkg: { ref: github.com/opspec-pkgs/azure.servicebus.create#VERSION }
    inputs: 
      subscriptionId:
      loginId:
      loginSecret:
      name:
      resourceGroup:
      # begin optional args
      location:
      sku:
      messagingUnits:
      loginTenantId:
      loginType:
      # end optional args
```
