// export class TestDataGenerator {
//   static generateUniqueUsername(baseUsername: string): string {
//     const timestamp = Date.now();
//     const randomNum = Math.floor(Math.random() * 10000);
//     return `${baseUsername}_${timestamp}_${randomNum}`;
//   }

//   static generateUniqueUserData(baseUserData: any): any {
//     return {
//       ...baseUserData,
//       username: this.generateUniqueUsername(baseUserData.username),
//     };
//   }
// }