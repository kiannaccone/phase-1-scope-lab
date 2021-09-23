var customerName = 'bob';

function upperCaseCustomerName (){
    return customerName = customerName.toUpperCase();
}

var bestCustomer;

function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer() {
    return bestCustomer= 'maybe bob';
}

const leastFavoriteCustomer = 'karen'

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'gary';
    return leastFavoriteCustomer;
}