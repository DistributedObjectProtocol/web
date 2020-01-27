# addType( type )

> Adds a custom type that will be used when patching or when encode/decode.

## Arguments

#### type `Object`

Must be an object that expose two or three functions. `patch` is optional

```js
addType({ 
    encode: ()=>{},
    decode: ()=>{},
    patch: ()=>{}
})
```


## Examples

To do...