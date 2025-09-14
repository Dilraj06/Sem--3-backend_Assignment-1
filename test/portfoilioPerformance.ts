import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";
 
describe('calculatePortfolioPerformance', () => {
    it('should calculate profit when the case is profit', () => {
        const result = calculatePortfolioPerformance(5000, 7500);
 
        expect(result.initialInvestment).toBe(5000);
        expect(result.currentValue).toBe(7500);
        expect(result.profitOrLoss).toBe(2500);
        expect(result.percentageChange).toBe(50);
        expect(result.performanceSummary).toBe('The portfolio has gained significantly with a profit of $2500.00.');
    });
});