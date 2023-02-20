var mongoose = require("mongoose");
var Booking = mongoose.model("Booking");
var User = mongoose.model("User");
var Job = mongoose.model("Job");

module.exports = {
  create: function (req, res) {
    Job.findOne({ _id: req.params.id }, function (err, listing) {
      var newReserve = new Booking({
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        amtGuests: req.body.amtGuests,
        _booker: req.session.user._id,
      });
      newReserve._listing = listing._id;
      listing.bookings.push(newReserve);
      listing.save(function (err) {
        if (err) {
          console.log("Booking create function; failed to save to listing");
        } else {
          newReserve.save(function (err, booking) {
            if (err) {
              console.log("Booking create function: failed to create reserve");
            } else {
              res.json({ booking: booking });
            }
          });
        }
      });
    });
  },

  approve: function (req, res) {
    Booking.findById(req.params.id, function (err, booking) {
      if (err) {
        console.log("In approve reserve function: could not find reserve");
      } else {
        bookStatus: req.body.bookStatus;
        booking.save(function (err, booking) {
          if (err) {
            console.log(
              "In approve reserve function: could not save bookStatus"
            );
          } else {
            res.json({ booking: booking });
          }
        });
      }
    });
  },

  update: function (req, res) {
    Booking.findById(req.params.id, function (err, booking) {
      if (err) {
        console.log("In update reserve function: could not find reserve");
      } else {
        booking.startDate = req.body.startDate;
        booking.endDate = req.body.endDate;
        booking.amtGuests = req.body.amtGuests;
        booking.save(function (err, booking) {
          if (err) {
            console.log("In update reserve function: could not save new info");
          } else {
            res.json({ booking: booking });
          }
        });
      }
    });
  },

  show: function (req, res) {
    Booking.find({ _booker: req.session.user }, function (err, bookings) {
      if (err) {
        res.json({ error: err });
      } else {
        res.json({ bookings: bookings });
      }
    });
  },

  find: function (req, res) {
    Booking.findOne({ _id: req.params.id })
      .populate("_booker")
      .populate("_listing")
      .exec(function (err, booking) {
        if (err) {
          console.log("In find function, couldn't find booking");
        } else {
          res.json({ booking: booking });
        }
      });
  },
};
