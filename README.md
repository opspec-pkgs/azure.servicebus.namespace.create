# Problem statement
creates an azure servicebus namespace (if doesn't already exist)

# Example usage

> note: in examples, VERSION represents a version of the azure.servicebus.namespace.create pkg

## install

```shell
opctl pkg install github.com/opspec-pkgs/azure.servicebus.namespace.create#VERSION
```

## run

```
opctl run github.com/opspec-pkgs/azure.servicebus.namespace.create#VERSION
```

## compose

```yaml
op:
  pkg: { ref: github.com/opspec-pkgs/azure.servicebus.namespace.create#VERSION }
  inputs: 
    subscriptionId:
    loginId:
    loginSecret:
    loginTenantId:
    name:
    resourceGroup:
    # begin optional args
    location:
    loginType:
    messagingUnits:
    sku:
    # end optional args
```

# Support

join us on [![Slack](https://opspec-slackin.herokuapp.com/badge.svg)](https://opspec-slackin.herokuapp.com/)
or [open an issue](https://github.com/opspec-pkgs/azure.servicebus.namespace.create/issues)
