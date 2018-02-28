Reproduces error for - https://github.com/benmosher/eslint-plugin-import/issues/1034

Using a webpack config using aliases (and eslint-import-resolver-webpack), each import for an internal modules is being treated as a separate "group". With `'newlines-between': 'always-and-inside-groups'`, they each have to be separated by a new line

```js
resolve: {
  alias: {
    '~': path.resolve(__dirname, 'src'),
  },
},
```

```js
import React from 'react';

import Foo from '~/components/Foo'; // [eslint] There should be at least one empty line between import groups (import/order)
import Bar from '~/components/Bar'; // no error

import Baz from '~/components/Baz'; // no error
```