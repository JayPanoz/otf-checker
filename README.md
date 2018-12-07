# Open Type Checker
A minimum viable web app to test most latin open type features

## Warning

Please update to the latest version of your browser to get the best results.

Also, your browser must support: 

- CSS Grid;
- CSS variables;
- `:not`;
- JavaScript.

Finally, this was primarily designed as a desktop web app so it’s kind of crappy on smartphones at the moment.

## How to Use

Make sure the font you want to test is installed locally (should work with Typekit’s synced fonts), type its name in the text input and press return.

You can check alternates by selecting an option in the dropdown menus (one option at a time).

## The Problem

Open Type Features are a huge mess. 

There is no website “à la Google Fonts Pairing but for listing features”, testing features is a dauting task, type designers don’t agree how features should be managed e.g. small-caps or styleset as another font, ornaments or annotation as a styleset, historical forms as stylistic alternates…

This (currently crude) web app is an attempt at easing the whole process by providing a test case for most latin open type features. Oh, and it can also tell if your browser actually supports some features.

## To Do

- [short term] add ornaments
- [short term] ideally, defaults should be `textarea`s so that you can customize the section (sync related tests); please note it implies managing `lang` attribute because of localized forms
- [middle term] design a well thought out system for options, it’s super crude at the moment
- [middle term] depends on implementations but hide/show old/new syntax?
- [middle term] add character variant (this is a tough one)
- [long term] add support for server-side fonts

## License

[MIT Licence](https://opensource.org/licenses/MIT).

Copyright (C) 2017 Jiminy Panoz
