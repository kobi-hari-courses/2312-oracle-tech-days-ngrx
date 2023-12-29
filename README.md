# Orace Teck Days 2023 - NgRx new
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

   




