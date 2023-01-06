// asynchronous stream with rxjs;

import { Observable } from 'rxjs';

const ONE_SECOND_IN_MILISSECONDS = 1000;

const observer = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.log('error: ', error),
  complete: () => console.log('completed Observable'),
};

const observable = new Observable((subscriber) => {
  let counter = 0;

  const id = setInterval(() => {
    subscriber.next(counter);
    counter++;
  }, ONE_SECOND_IN_MILISSECONDS);

  return () => {
    console.log('called');
    clearInterval(id);
  };
});

const subscription = observable.subscribe(observer);

const subscriptionTwo = observable.subscribe(observer);

subscription.add(subscriptionTwo);

setTimeout(() => {
  subscription.unsubscribe();
}, 3500);
