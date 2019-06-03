# Proof of concept for react native web using typescript

<p float="left">
<img src="https://raw.githubusercontent.com/nialloc9/ReactNativeWebPoc/master/screenshots/web.png" alt='web' width="300">

<img src="https://raw.githubusercontent.com/nialloc9/ReactNativeWebPoc/master/screenshots/ios.png" alt='ios' width="300">
</p>

### Prerequisites

- install xcode: <a href="https://developer.apple.com/xcode">https://developer.apple.com/xcode</a>

- install android studio (if you want to run android): <a href="https://developer.android.com/studio">https://developer.android.com/studio</a>

- install react native: <a href="https://facebook.github.io/react-native">https://facebook.github.io/react-native</a> 

## install

```sh
npm i -g yarn

git clone git@github.com:nialloc9/ReactNativeWebPoc.git

cd ReactNativeWebPoc

yarn install
```

### run

```sh
    yarn start:ios
```

```sh
    yarn start:android
```

```sh
    yarn start:web
```

### lint

```sh
    yarn lint
```

### test

```sh
    yarn test
```

### deploy

```sh
    yarn build
```

### Minimum Criteria

- Components can run across ios, android, and web.

- Find a way to not use inline styling on web (react native web does this)

- Component style should be easily (and fully) customisable.

- A common style interface should be used for ios, android, and web.

- Typescript is to be implemented.



### Approach

- Components are modulized where base/core components (view/text/image etc) are built and more complicated components (collections) built on top of these.

- Base components can be used on their own to allow greater flexibility in the event the user wishes to create their own custom collections.

- Limit styles allowed to only ones that are needed. As more are needed they can be added.

- For web components a new file is created for each base component where it maps styles to web values. Style is removed from props before being passed to the Dom.

- Web components implement <a href="https://www.styled-components.com/docs/api">styled-components</a> library to eliminate the need to use inline styling as react-native-web does.

- Collections pass down multiple objects as props to override the style for each base element used.