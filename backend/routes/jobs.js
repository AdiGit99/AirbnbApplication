var mongoose = require("mongoose");
var Job = mongoose.model("Job");
var User = mongoose.model("User");

module.exports = {
  create: function (req, res) {
    User.findById({ _id: req.session.user._id }, function (err, user) {
      console.log(req.body);
      var newJob = new Job({
        title: req.body.title,
        description: req.body.description,
        roomType: req.body.roomType,
        price: req.body.price,
        amountBeds: req.body.amountBeds,
        location: req.body.location,
        bookStatus: false,
        image: req.body.image,
      });
      newJob._host = user._id;
      newJob.conversations = [];
      newJob.reservations = [];
      newJob.reviews = [];
      user.listings.push(newJob);
      console.log(newJob);
      user.save(function (err) {
        if (err) {
          console.log("Couldn't save listing to user", err);
        } else {
          newJob.save(function (err, listings) {
            if (err) {
              console.log("Couldn't save listing", err);
            } else {
              console.log(listings);
              res.json({ listings: listings });
            }
          });
        }
      });
    });
  },

  findAllUser: function (req, res) {
    Job.find({ _user: req.session.user }, function (err, listings) {
      if (err) {
        res.json({ error: err });
      } else {
        res.json({ listings: listings });
      }
    });
  },

  findAll: function (req, res) {
    Job.find({}, function (err, listings) {
      if (err) {
        console.log("Inside find all listings function, could not find any");
      } else {
        res.json({ listings: listings });
      }
    });
  },

  findOne: function (req, res) {
    console.log(
      "Commented out first function!! Params from route:",
      req.params.id
    );
    Job.findById({ _id: req.params.id })
      .populate("reviews")
      .exec(function (err, listing) {
        if (err) {
          console.log("In findOne function, couldn't find listing");
        } else {
          console.log("this should not hit!!!", listing);
          res.json({ listing: listing });
        }
      });
  },

  // **WORK ON FILTER WHEN ERIC FINISHES SEARCH**

  update: function (req, res) {
    Job.findById(req.params.id, function (err, listing) {
      if (err) {
        console.log("listing update function: could not find listing");
      } else {
        listing.title = req.body.title;
        listing.description = req.body.description;
        listing.roomType = req.body.roomType;
        listing.price = req.body.price;
        listing.amountBeds = req.body.amountBeds;
        listing.location = req.body.location;
        listing.save(function (err, listing) {
          if (err) {
            res.json({ error: "Update attempt unsuccessful" });
          } else {
            res.json({ listing: listing });
          }
        });
      }
    });
  },

  filter: (req, res, next) => {
    Job.find({
      $or: [
        { title: { $regex: req.body.filterBy } },
        { description: { $regex: req.body.filterBy } },
      ],
    })
      .then((listings) => {
        res.json(listings);
      })
      .catch((err) => {
        res.status(488).json(err);
      });
  },
};
