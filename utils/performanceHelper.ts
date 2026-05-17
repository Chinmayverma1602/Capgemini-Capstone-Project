export class PerformanceHelper {

  static validateApiResponseTime(
    responseTime: number,
    maxTime: number = 2000
  ) {

    console.log(`API Response Time: ${responseTime} ms`);

    if (responseTime > maxTime) {
      throw new Error(
        `API response exceeded threshold. Actual: ${responseTime} ms`
      );
    }
  }

  static logPageLoadTime(loadTime: number) {
    console.log(`UI Page Load Time: ${loadTime} ms`);
  }
}