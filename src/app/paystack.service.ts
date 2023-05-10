// import { Injectable } from '@angular/core';
// import { PaystackOptions } from 'angular4-paystack';

// import * as PaystackPop from 'angular4-paystack';

// @Injectable({
//   providedIn: 'root'
// })
// export class PaystackService {
//   private paystackOptions: PaystackOptions = {
//     email: 'customer@example.com',
//     amount: 0,
//     ref: '',
//     currency: 'NGN',
//     metadata: {},
//     key: 'pk_live_60db3af35e4c5a3b71212944c7dc81d61dcbb568',
   
//   };

//   constructor() { }

//   initializePayment(amount: number, reference: string) {
//     this.paystackOptions.amount = amount * 100; // Paystack API requires amount to be in kobo (i.e. multiplied by 100)
//     this.paystackOptions.ref = reference;

//     const handler = PaystackPop. setup(this.paystackOptions);
//     handler.openIframe();
    
//   }
// }
