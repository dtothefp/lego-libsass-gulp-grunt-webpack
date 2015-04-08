#### Sandbox for Transitioning Lego to Libass Compatible

- From the command line:
```
grunt // builds src/main.scss with grunt-sass -- node-sass v2
gulp // builds src/main.scss with gulp-sass -- node-sass v2
webpack // builds src/index.js with sass-loader -- node-sass v3
```

*Interesting to Note*
Forked lego and added an index.js that exports an `includePaths` variable, basically passing the path to the lego `scss` directory.  Therefore, in grunt, gulp, and webpack sass configs you can `require('lego').includePath` and in your main scss file `import 'core/something-cool'` or whatever module you want in the scss directory without symlinking.
