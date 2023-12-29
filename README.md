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




