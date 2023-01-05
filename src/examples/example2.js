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
    subscriber.complete();
    counter++;
  }, ONE_SECOND_IN_MILISSECONDS);

  return () => {
    console.log('called');
    clearInterval(id);
  };
});

console.log('before');
observable.subscribe(observer);
console.log('after');
