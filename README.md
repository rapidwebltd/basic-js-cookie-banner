# Basic JS Cookie Banner
A basic JavaScript cookie banner (implied consent)

## Screenshot

![Cookie banner screenshot](http://i.imgur.com/3sLPVXl.png)

## Requirements

* Bootstrap (CSS) >= 3.3.5
* jQuery >= 1.11.3

## Installation

Can be installed via bower.

`bower install basic-js-cookie-banner`

## Usage
First, include the CSS files in the bottom of the `<head>`: (...or import it via LESS)
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
<link rel="stylesheet" href="basic-js-cookie-banner.min.css">
```

Insert the code into the bottom of your footer:
```html
<div class="alert alert-warning alert-dismissible cookie-banner" role="alert"><div style="display: none;" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></div> We use cookies to improve your experience. Please read our <a href="/cookiepolicy.html">cookie policy</a> for more information about how we use cookies.</div>
```

Ensure you have Bootstrap, jQuery and the Cookie Banner JavaScript file included at the bottom of the footer as well:
```html
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="basic-js-cookie-banner.js"></script>
```

## Licence
LGPL
