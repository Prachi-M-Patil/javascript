import { Component, OnDestroy } from '@angular/core';
import { interval, map, Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-api-calling',
  standalone: false,
  templateUrl: './api-calling.component.html',
  styleUrl: './api-calling.component.css'
})
export class APICallingComponent implements OnDestroy{
  private stockPriceSubject= new Subject<number>();
  latestprice: number| null = null;
  subscription: Subscription| null = null;
  count: number =0;

  constructor(){
    interval(2000)
    .pipe(map(()=> (Math.random()*1000).toFixed(2)))
    .subscribe(price =>{
      console.log('New stock price', price);
      this.stockPriceSubject.next(parseFloat(price));
    })
  }

  subscribeToUpdates(){
    this.subscription = this.stockPriceSubject.subscribe(price =>{
      this.latestprice =  price;
      console.log('recieved stock price:', price);
    });
    this.count++;
  }

  unsubscribeFromUpdate(){
    this.subscription?.unsubscribe();
    this.count--;
    console.log('unsubscribed from stock updates');
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
//   stockPrice: number| undefined;
//   subscription: Subscription| null = null;
//   flag:boolean =false;

//   fetchStockPrice(){
//     this.getStockPrice().subscribe(price => {
//       this.stockPrice =price;
//       console.log('New Stock price fetched:', price);
//     });
//   }

//   getStockPrice(): Observable<number>{
//     return new Observable(observer => {
//       const price =(Math.random()*1000).toFixed(2);
//       observer.next(parseFloat(price));
//       observer.complete();
//     })

//   }

//   unsubscribe(){
//       if(this.subscription){
//         this.subscription.unsubscribe();
//       console.log('unsubscribed');
//       this.subscription= null;
//       this.flag=true;
  
//       }

// }
// }
}
