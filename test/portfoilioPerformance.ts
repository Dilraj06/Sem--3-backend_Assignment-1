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
describe('calculatePortfolioPerformance', () => {
    it('should calculate the case with no profit', () => {
        const result = calculatePortfolioPerformance(5000, 5000);
 
        expect(result.initialInvestment).toBe(5000);
        expect(result.currentValue).toBe(5000);
        expect(result.profitOrLoss).toBe(0);
        expect(result.percentageChange).toBe(0);
        expect(result.performanceSummary).toBe('There is no change in portfolio');
    });
});
 
describe('calculatePortfolioPerformance', () => {
    it('should calculate the case with loss', () => {
        const result = calculatePortfolioPerformance(10000, 5000);
 
        expect(result.initialInvestment).toBe(10000);
        expect(result.currentValue).toBe(5000);
        expect(result.profitOrLoss).toBe(-5000);
        expect(result.percentageChange).toBe(-50);
        expect(result.performanceSummary).toBe('The portfolio has lost significantly with the loss of $-5000.00.');
    });   
});