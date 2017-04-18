# investment-calc

This is a theoretical business application that takes a predfined, dynamic investment strategy based on investment risk, and returns an ideal investment portfolio based on that risk.


To get started clone the repo, then run `npm install && npm start`.

Then go to `localhost:3000` and you're ready to go. 

Here's an example of the functionality of the web version:

### web

<img src="https://github.com/abb1991/investment-calc/blob/master/web-demo.gif" alt="web-demo">

It has been built with responsive design to look good on mobile and table:

### tablet
<img src="https://github.com/abb1991/investment-calc/blob/master/tablet-demo.gif" alt="table-demo">


### mobile

<img src="https://github.com/abb1991/investment-calc/blob/master/mobile-demo.gif" alt="mobile-demo">

# main contributions

## React and Redux

The application is composed of four main fascets:

* Generating an investment portfolio percentage through an [investment distribution module](https://github.com/abb1991/investment-calc/blob/master/public/js/InvestmentDistribution.js), displayed as a [donut chart](https://github.com/abb1991/investment-calc/blob/master/public/js/Chart.js)

* Allowing users to choose their investment risk tolerance through a [bar slider](https://github.com/abb1991/investment-calc/blob/master/public/js/SliderBar.js)

* Taking a user's current [invetment portfolio](https://github.com/abb1991/investment-calc/blob/master/public/js/CurrentPortfolio.js) and [scrubbing](https://github.com/abb1991/investment-calc/blob/master/public/js/InvestmentDistribution.js#L43-L58) it to [store as a state](https://github.com/abb1991/investment-calc/blob/master/public/js/reducers.js)

* Taking the user's inverstment portfolio and returning a [chart](https://github.com/abb1991/investment-calc/blob/master/public/js/FundsChart.js) that displays user's current portfolio, that +/- changes in dollars they need to make to acheive their ideal portfolio

## CSS and Responsive design

The styles for this site were designed to be slat and responsive, with styles organized by React components, with media queries based on [iphone and ipad](https://github.com/abb1991/investment-calc/blob/master/public/css/main.css#L242-L291). Style sheets for the [slider](https://github.com/abb1991/investment-calc/blob/master/public/css/slider.css) and [donut chart](https://github.com/abb1991/investment-calc/tree/master/node_modules/react-donut-chart/lib/dist) were provided through the npm module. Additional stylings for those componenets were included in the [main stylesheet](https://github.com/abb1991/investment-calc/blob/master/public/css/main.css#L115-L202).
