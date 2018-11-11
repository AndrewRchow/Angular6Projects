import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs/';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  numbersObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = interval(1000);
    this.numbersObsSubscription = myNumbers.subscribe(
      (number: number)=> {
        console.log(number);
      }
    );

    const myObservable = Observable.create(
      (observer: Observer<string>)=>{
        setTimeout(()=>{
          observer.next('first package');
        }, 2000); 
        setTimeout(()=>{
          observer.next('second package');
        }, 3000); 
        setTimeout(()=>{
          observer.error('errorr');
        }, 4000); 
        setTimeout(()=>{
          observer.next('second package');
        }, 5000); 
      });
      this.customObsSubscription = myObservable.subscribe(
        (data: string) => { console.log(data);},
        (error: string) => { console.log(error);},
        () => {console.log('completed'); }
      );
  }

  ngOnDestroy() {
    this.numbersObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }

}
