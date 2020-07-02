# Financial Trasactions - API + Database
RocketSeat GoStack BootCamp - Database Challenge

## Preview
![preview](https://github.com/GermainPereira/DB-API-Challenge/blob/master/preview-transactions-database-integration-2020-07-01.gif?raw=true)


## Features

* All transactions and categories 

#### POST: `localhost:3333/transactions`
* Creates new rows in 2 of the database tables: 
	1) financial transactions table;  
	2) transactions categories table;
* request.body params: title (string), type ('outcome' | 'income'), value (number), category (string);
* note: 
	1) all entries receive automatically created_at, updated_at and some other values;
	2) if outcome value > balance.total value, the request is denied;

#### POST (IMPORT): `localhost:3333/import/`
* Imports all requests within a CSV file and adds them directly to the DB;
* Request muss contain the file to be imported (see preview above);

#### GET: `localhost:3333/transactions`
* Returns list containing previous request and balance   
* request.body - no body

#### DELETE `localhost:3333/transactions/:id`
* Delete a transaction by id
* request.body - no body


#### Possible Improvements
* Create customer model and authentication system;
* Add a JWT Token


