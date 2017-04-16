module.exports =  {
  calcRiskPercentage: (num) => {
    let cash, index, reits, gold, intlEquity, indexReits, goldIntlEquity;
    let total = 100

    // cash's variability is a linear inverse relationship to risk
    cash = 10 - num;
    total -= cash;
    // index funds and reits as well as intlEquity and gold are grouped together into indexReits and goldIntlEquity because those two groupings have a relationship to each based on risk, and the individual investments within them have a relationship based on risk for the given percentage of total funds

    indexReits = Math.floor(total * (.6 - (2 * num)/100));
    total -= indexReits
    goldIntlEquity = total

    // indexFunds, even with a risk level of 10 will still comprise half of the indexReits total
    index = Math.floor((indexReits * .5) + (indexReits * (10 - num)/20));
    indexReits -= index
    reits = indexReits

    // favor gold overall with a base distribution of 20% of the goldIntlEquity at a risk level of 10, and a max propotion of ~97% at a risk level of 0
    gold = Math.floor((goldIntlEquity * .2) + (goldIntlEquity * ((10 - num)**2)/130))
    goldIntlEquity -= gold
    intlEquity = goldIntlEquity

    return {cash, index, reits, gold, intlEquity}
  }
}