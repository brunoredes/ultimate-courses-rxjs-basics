import { Observable } from 'rxjs';

const observer = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.log('error: ', error),
  complete: () => console.log('completed Observable'),
};

const observable = new Observable((subscriber) => {
  subscriber.next('Hello');
  subscriber.next('World');
  subscriber.complete();
});

observable.subscribe(observer);






// @deprecated — Instead of passing separate callback arguments, use an observer argument. Signatures taking separate callback arguments will be removed in v8.
const badObserver = observable.subscribe(
  (value) => console.log(value), // next
  null, //error
  () => {} //complete
);

const goodObserver = observable.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.log(error),
  complete: () => {},
});

