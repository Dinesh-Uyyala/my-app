# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.




Angular Project Setup
=====================

1 Install NodeJs
  check: node -v
          npm -v

2 Install Angular
  npm install -g @angular/cli@15
  ceck : ng version

      <!-- Create angular application
          select directory : cd Desktop
          create new project : ng new my-app
          cd my-app -->
 3 in vscode start the server         
    ng serve
    open browser : http://localhost:4200

    2> if not running open powershell as administrator
      set-executionPolicy unrestricted




Project Hierarchy:
=================


Directives: Useful to alter the DOM
==========
1) STructural Directives:
    *ngFor, *ngIf


2) Attribut Directives:
    ngStyle, ngClass

Pipies: Useful to alter the data format.
================

|date
|json
<!-- 1) DatePipe
2) JsonPipe
3) UpperCasePipe
4) LowerCasePipe
5) DecimalPipe
6) CurrencyPipe
7) PercentPipe
8) SlicePipe
9) AsyncPipe
10) KeyValuePipe
11) JsonPipe
12) LowerCasePipe
13) UpperCasePipe
14) DecimalPipe
15) CurrencyPipe  
16) PercentPipe
17) SlicePipe
18) AsyncPipe 
19) KeyValuePipe
20) JsonPipe -->




DATA FLOW:
===============
HTML->TS-> Service->API


API Integration:
================
0) create vehicle component and service
1) Import HttpClientModule
2) Inject HttpClient in vehicle service
    write a get method to hit API
3) API call is observable so 
  subscribe it in ts to read data




All Possible API Calls
=====================
1) all           GET        get(URL)
2) specific      GET        get(URL/id)
2) filter        GET        get(URL?flter=red)
3) pagination    GET        get(URL?limit=10&page=1)
4) sort          GET        get(URL?sortBy=color&order=asc(or desc))

5) create        POST       post(URL,data)
6) update        PUT        put(URL/id,data)
7) delete        DELETE     delete(URL/id)



GIT
===

1) Link laptop wit github website

  git config --global user.name "xxxxxxxx"
  git config --global user.email "xxxxxxxx"
    check: git config --list

2) Link project with repository
  git init
  git remote add origin URL
    check: git remote -v


3) sync code
  git add .
  git commit -m "message"
  git push
    git push --set-upstream origin master -f //first time & -f means forcefully

4) Create branch  and do pull requests
  create branch from github
    check git fetch
  check current branch 
    check git branch
  checkout to new branch
    check git checkout <branch name>
    check git branch
  


Forms
======

1) FormGroup                 {}
2) Nested FormGroup         {{}}
3) Dynamic Forms
4) FormArray
5) Validations
6) Custom Validators




