const daysInCountry = 1062;
if (daysInCountry < 183) {
    console.log('You are a tourist');
} else if (daysInCountry >= 183 && daysInCountry < 5 * 365) {
    console.log('You are a temporary resident');
} else  if (daysInCountry >= 5 * 365 && daysInCountry < 10 * 365) {
    console.log('You are a permanent resident');
} else {
    console.log('You are a citizen');
}
