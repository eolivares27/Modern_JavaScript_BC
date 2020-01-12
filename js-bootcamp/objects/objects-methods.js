let restaurant = {
  name: 'Cellar 49',
  guestCapacity: 75,
  guestCount: 0,
  checAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount 
    return partySize <= seatsLeft
  },
  seatParty: function (partySize) {
    this.guestCount = this.guestCount + partySize
  },
removeParty: function (partySize) {
  this.guestCount = this.guestCount - partySize
  }
}

// seatParty
// removeParty

let status = restaurant.checAvailability(4)

restaurant.seatParty(72)
console.log(restaurant.checAvailability(4))
restaurant.removeParty(5)

console.log(restaurant.checAvailability(4))