# Geocacher

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

#### A program that allows the user to get a physical address from lat long coordinates and allows the user to get lat long coordinates of an inputted address.

#### By **Jordan Mysliwiec** 07.23.17

## Description

A Website that allows the user to input latitudinal and longitudinal coordinates into a form and once submitted gets a response from the google goecoding api in the form of a physical addrress. The user may also enter a physical address into a form to recieve latitudinal and longitudinal coordinates of that address.

## Setup/Installation Requirements

1. Clone this repository.
2. Sign up for a free geocoding api key from google at https://developers.google.com/maps/documentation/geocoding/start
3. Add this key into a new file named "api-keys.ts" placed in the /src/app folder
4. Your api-keys.ts should read as follows:
export const geoKey = "Your Key Here"
5. Navigate to the project home directory and enter the following into your terminal
  * _bower install_
  * _npm install_
  * _ng serve_
  * _ Load http://localhost:4200/ into your browser

## Known Bugs
  * No known bugs at this time.

## Technologies Used
  * Google Geocoding Api
  * Javascript
  * Angular Cli
  * Node Package Manager
  * Typescript
  * Bower
  * HTML
  * CSS

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Support and contact details

_For anybugs or issues please message me on github._

### License

*{This software is licensed under MIT license}*

Copyright  (c) 2017 **_Jordan Mysliwiec_**
