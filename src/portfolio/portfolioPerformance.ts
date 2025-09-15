interface PortfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
}
 
//
export function calculatePortfolioPerformance(
    initialInvestment: number,
    currentValue: number
):  PortfolioPerformance { 
   
    const profitOrLoss = currentValue - initialInvestment;
 
    const percentageChange = (profitOrLoss / initialInvestment) * 100;
    /**
     * 
     * @param percentageChange
     * @returns 
     */
    const performanceSummary = (percentageChange: number): string => {
    switch (true) {
        case percentageChange >= 20:
            return `The portfolio has gained significantly with a profit of $${profitOrLoss.toFixed(2)}.`;
        case percentageChange >= 10 && percentageChange < 20: 
            return `The portfolio has gained moderately with the profit of $${profitOrLoss.toFixed(2)}.`;
        case percentageChange >= 0.1 && percentageChange < 10:
            return `The portfolio has gained slightly with the profit of $${profitOrLoss.toFixed(2)}.`;
        case percentageChange === 0:
            return `There is no change in portfolio`;
        case percentageChange >= -9.99 && percentageChange < 0:
            return `The portfolio has lost slightly with the loss of $${profitOrLoss.toFixed(2)}.` ;   
        case percentageChange >= -19.99 && percentageChange <= -10:
            return `The portfolio has lost moderetaly with the loss of $${profitOrLoss.toFixed(2)}.`;
        case percentageChange <= -20:
            return `The portfolio has lost significantly with the loss of $${profitOrLoss.toFixed(2)}.`;
        default:
            return `No change in portfolio`;
        }
 
    };
 
    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary: performanceSummary(percentageChange),
    };
}

export interface Asset {
    name: string;
    value: number;
}

export function findLargestHolding(assets: Asset[]): Asset | null {
    return assets.length === 0 ? null :
    assets.reduce((largest, current) => 
    current.value > largest.value ? current : largest
    );
}