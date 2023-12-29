<img src="./images/oracle-tech-days.png" Height="120">
<img src="./images/title.png" Height="120">
<img src="./images/john-bryce.png" Height="120">

# NgRx New with Signals @ Oracle Tech Days 2023
* By Kobi Hari (30/12/2023) *

## Contact me
Please feel free to contact me for questions, or just to have a chat :-)
- Kobi Hari - hari@applicolors.com

## Material 

|   |    |  
|-------------- | -------------- 
| Our Project    | [here](./project/ngrx-new/)     |
| Our Presentation    | [here](./presentation/NgRx%20Signals%20Store.pdf)     |

## About today
In this seminar, we will talk about `Redux`. Specifically, we will discuss one, very popular, implementation of redux for Anguar: the `NgRx` suite. What special about this suite is the approach it takes to `Redux`. It combines the principals of `Redux` with Functional Programming, and Reactivity, to form an elegant solution.

Even in this package, there are today 3 different solutions. In this seminar we will talk about 2 of them. 
- The `@ngrx/store` The classic one, the one with which it all started and that's been popular for several years now.
- The `@ngrx/signals` The brand new one, the one that takes advantage of Angular's latest feature: `Signals` to provide a modern, super elegant, solution.

## Our project
To demonstrate the `@ngrx` solutions, we will use a project that is not complete, and we will complete it in two different ways. First we will complete it using `@ngrx/store`, `@ngrx/store-devtools` and `@ngrx/effects`. Then, we will rollback to the starting point, and complete it again in an alternative way, using `@ngrx/signals`

Our application is a "Quiz Box" app. It presents you with a list of multiple-answer-single-choice questions and lets you answer each question. When you are done answering all the questions, it gives you your score. You can restart the quiz at any point, should you feel like it. Also, the application is provided with a sophisticated engine that can generate random questions, and you can click a button to randomize a brand new quiz, and take it.

Since we do not want to waste time on UI, models and services (I assume you are well experienced in these topics already), we will start with an application that already contains all of these. It has a data model, service that generates data, components designed using `@angular/material`, pipes, directives, and everything we need. Almost... The application is missing only one thing. `State Management` - or `Store`. It's missing that service that manages the state and allows to perform operations and get a new state.

## Redux
Redux is a pattern that deals with the challanges that evolve around managing the state of the application. The state is an object that holds information that is common to the application as whole, not just a temporary piece of data relevant for one component. Specifically it manages the way components create data and consume it and how changes in the application flow. 

### The store - a single point of truth
Redux defines a term called `The source of truth`. This is the point were the changes originally happen, and from there they flow to all the components that rely on the information that changed. The aim of Redux is to define a single point of truth to the data in the application, or at least a single point for each set of data. That point is called the `Store`. This is a service that manages the state. It is the only service that is allowed to `change` the state, and it pushes these changes to the components.

### Strong decoupling: Selectors and Actions
Another principal in Redux is decoupling. It does not allow any components and services to be "familiar" with the structure of the state. Instead, they use various types of proxies in order to read and modify the state. Reading the state is done using `selectors`. Each selector provide a specific set of data, without knowing how it is stored and arranged. Writing changes to the data is done using `actions`. These are objects that describe a change that should be done to the state, but without knowing exactly how it is changed. 

### 2 Distinct paths of change flow.
Another principal is that changes from to and from the store in two distinct independant paths. Changes flow to the store using `actions`. A component (or service) dispatches an action, which is like a request for change. The store `catches` the action and performs a set of changes to the state. 

In a completely different path, the selectors that are affected by the change, notify the consuming components, that a change has occured and provide a new value. The component that triggered the action receives the new state using selectors and cannot connect between the action and the change it produces.

### State machine
Redux treats the state of the application like "a state machine". At each point the components reflect the current state visually, and actions move the application from one state to another. The application behaves like one big state machine. 

### Reactive and Functional programming
Redux believes in functional programming. As we can probably guess by now, the selectors provide the data using `Observables` so the change is reflected at all time. In addition to using reativity, Redux encourages us to use other principals from `Functional Programming` such as immutability. The state is an immutable object. That means that when the state "change" - it actually does not. It is replaced by a new, slightly different, state. But the original object remains the same. This way it's much easier to identify what has changed becuase when no objects ever change, the only way to perform change is to replace the objects completely. So if you are holding the same reference you have held before - you do not need to deep search it to find changes. If it's the same reference, it entirely the same.

### The reducer
Probably the most important part of `Redux` is the reducer. This is the function that calculates the new state from an early state, and an action. The reducer is basically the definition of the state machine. It is the logic of the application state, dictating how the state changes as result of actions. The reducer is a **Pure function** meaning that it is deterministic, without side effects, and that it draws all the information it requires from the parameters and from them only. Therefore, if you take the same initial state twice, and perform the same sequence of actions, you should expect to get to the exact same state again. The result of a sequence of actions is predictable. 

## @ngrx/store
`NgRx` provides us with a package that allows us to create a store, actions and selectors easily. The project demonstrates how to do that. In addition `@ngrx/store-devtools` is a package that allows our code to connect to the `Redux Extension` for chrome and observe the set of actions that occured and how they affected the state at each point. Further more, since with this pattern, the components are nothing but visual representation of the state, and the selectors push the current state to the components, it turns out that we can "travel back in time" by pushing an old state to the store and seeing how all the application is affected by it. The `Store Devtools` allow us to do just that:
1. Observe the latest state
2. Observe the list of actions that occured so far
3. Observe the state after each action
4. Compare any two states and observing the differences between them.
5. Dispatching any action manually and seeing how it affects the state
6. Going back in time to any state in history.
7. Replaying a sequence of states at real time or faster

## Effects
NgRx store is synchronic. Evey action that is dispatched, produces a new state "Instantly", before the function ends. Sometimes in any application, we are required to perform asynchronous actions. We do that using effects, and this is how reactivity really joins the story. 

An effect is an observable of actions, that are being handled by the reducer. Usually, the actions are a result of other actions. When you write an effect you take a source observable (usually it is an objservable of actions), then, using RxJS operators, perform side effects and finally produce a sequence of new actions. The store then handles these actions and affect the state.

So actions can trigger 2 very different things
1. An action can be handled by the store, to produce a new state using a reducer.
2. An action can be handled by an effect, to perform an asynchronous operation and produce a new action.

   
## Signal Store
In Angular 16, the team introduced a new concept: `signal`. This new entity comes to replace the - rather completed - observable in some specific scenarios. It is important to understand that signals do not replace observables completely. There are many scenarios where there is no alternative to RxJS, and it will always have merit. But for cases where our observables are actually synchronious, signals may be a great replacement because they are much simpler. 

Specifically, signals are great to represent the current state of a component. It is much easier for binding. It has much easier syntax for computed data that depends on several pieces of changing data. 

Signal stores are an addition to the angular's feature. In my opinion - the signal store completes this feature and makes it a lot more usable. The signal store is a "baby" store. It is much easier to define it. It does not use "actions" and "reducers", instead they use updater methods. It uses computed signals instead of selectors, and it has the ability to be extended using `custom features`. 

### Creating a signal store
Signal stores take "functional programming" on steriods. There are no classes, objects, everything is done using a function. You call the `signalStore` function in order to create a new store type. You pass functions as arguments, each of these functions extend the store. So you have functions that take functions as arguments, and produce richer functions. The holy grail of functional programming. 

To extend the signal store you can use one of the following 4 functions: 
1. `withState` adds new slices of state to the store. The store will automatically define a property of type computed signal for each property of the state. 
2. `withComputed` adds more computed signals, so you can take any signal that was previously defined (either as direct state, or computed value) and derive a new computed value from it.
3. `withMethods` adds methods to the store. These are methods that users can call, and that pissibly change the state. Think of them as action+reducer together. There are 3 types of actions that exist
    - Synchronous functions: Take arguments, perform changes to the state instantly, and return.
    - async promise functions: Take arguments, perform operation using `async await` possibly changing the state varius times along the way
    - rxMethod functions: The arguments as observables, an using operators convert them into asynchronous side effects, possibly changing the state every now and then. These are the closest thing to an effect.
4. `withHooks` allows you to react to 2 events in the lifecycle of a signal store: `onInit` and `onDestroy`. There are 2 ways you can react to them
    - By performing a one time operation, for example log, allocate a resource, or freeing it at the end. Subscribing or unsubscribing to external observable. And so on.
    - By defining a "signal effect". A method that relies on signals, and that is re-executed every time any of the signals it relies on, change.
  
### Signal Store Custom features
The 4 methods:  `withState`, `withComputed`, `withHooks` and `withMethods` are called "feature". A feature is a function that takes a signal store and enhances it, effectively creating a new, more powerful, store. In a way, a feature does to a store what reducers do to state. When you create a signal store, you create an empty one with place holders to 4 things: 
1. state slices
2. computed signals
3. methods
4. hook implementation

Each `withXXX` method, takes a store and changes it a little bit
1. `withState` adds more slices, and creates computed signals to each property and sub property of them
2. `withComputed` adds more computed signals, based on previous computed signals.
3. `withMethods` adds methods
4. `withHooks` adds implementation to the hooks. Notice that if you add more than one hook to the same events, they will all be executed in a sequence.

`@ngrx/signals` provide you with another, more higher level, feature: `withEntities`. It defines a slice of state holding mapping between id and entity. I then defines 3 computed signals that return all the ids, all the entities, and the mapping. It defines a few methods to add, modify and remove an entity. It adds hooks to initialize the set of entities. So it uses the primitive features to produce a higher level feature.

And the best thing is... you can add custom features too. You can create functions, that use other - more primitive - features, to produce your own new feature, and reuse it between many stores. Here are some examples for features that the community has already created:
- `withUndoRedu` - adds the methods `undo` and `redo` to move back and forth in the state. Effectively allowing you to undo any change.
- `withCallState` - imaging that you have many places where you hold date from a server and you need to reprent states where the data is valid, when it is pending because you are now waiting for data, and when it is faulted becuase the server call produced an error. This feature adds a `load` method, and `isLoading`, `isLoaded` and `isFaulted` computed signals.

You know - I am pretty sure you can think of many more.

I did - In this seminar I have created a custom feature that connects the store to the redux devtools :-)




