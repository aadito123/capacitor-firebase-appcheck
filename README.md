# firebase-app-check

I recommmend not to use this implementation. Use [this](https://github.com/capawesome-team/capacitor-firebase/tree/main/packages/app-check) instead. It is basically the same but with active maintainers.

Implements app attestation for Android and iOS with the Firebase wrapper

## Install

```bash
npm install firebase-app-check
npx cap sync
```

## API

<docgen-index>

* [`getToken()`](#gettoken)
* [`enableDebug()`](#enabledebug)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getToken()

```typescript
getToken() => Promise<{ token: string; expireTimeMillis: string; }>
```

**Returns:** <code>Promise&lt;{ token: string; expireTimeMillis: string; }&gt;</code>

--------------------


### enableDebug()

```typescript
enableDebug() => Promise<void>
```

--------------------

</docgen-api>
