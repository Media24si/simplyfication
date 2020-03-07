# Simplyfication

A simple notification component for Vue.js

<p align="center">
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square" alt="Software License" />
  </a>
  <a href="https://npmjs.org/package/simplyfication">
    <img src="https://img.shields.io/npm/v/simplyfication.svg?style=flat-square" alt="Packagist" />
  </a>
</p>

* [Vue.js](http://vuejs.org/) (tested with 2.6.11).

# Installation

`npm install simplyfication`

# Usage

```js
import simplyfication from 'simplyfication'

Vue.use(simplyfication)
```

Include the notification component inside of your application (preferrably inside the root)
```html
<div id="vue-app">
  <!-- Code --->

  <simplyfication />
</div>
```

Call your notification
```js
this.$notify({
  title: 'Whoops',
  message: 'Something went wrong',
  type: 'warning'
})
```