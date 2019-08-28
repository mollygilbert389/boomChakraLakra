var content = {
  crown: {
    info: "The Crown Chakra is located at the very top of the head. It represents spiritual connectedness, concerns inner and outer beauty, and pure bliss.",
    tip: "Since the Crown Chakra represents our spiritual connection to our surroundings, this Chakra does not benefit from healing foods. The Crown Chakra is more likely to respond to breathing clean and fresh air, sunshine, and meditation.",
    mantra: "I understand.."
  },
  thirdEye: {
    info: "The Third Eye Chakra is located on the forehead between the eyes. It represents our ability to focus on and see the big picture, and concerns intuition, imagination, wisdom and the ability to think and make decisions.",
    tip: "Child’s Pose in yoga is great for opening the Third Eye Chakra. Healing foods include lavender tea, blackberries, grapes, and chocolate.",
    mantra: "I see.."
  },
  throat: {
    info: "The Throat Chakra represents the ability to communicate, and concerns self-expression, emotions, speaking the truth, and holding secrets.",
    tip: "Singing and chanting heal the Throat Chakra. Liquids, especially tea, fruit juice, and water are beneficial, as well as figs and blueberries.",
    mantra: "I speak.."

  },
  heart: {
    info: "The Heart Chakra represents the ability to love, and concerns emotional bonds, joy, and inner peace.",
    tip: "Open your Heart Chakra with Bikram yoga and practicing loving interactions with others.  Green leafy vegetables such as spinach and kale, as well as green tea, are helpful.",
    mantra: "I love.."
  },
  solarPlexus: {
    info: "The Solar Plexus Chakra is located at the upper abdomen/stomach area. Representing confidence and the ability to be in control of your life, it concerns self-worth and self-esteem.",
    tip: "Dancing is great medicine for the Solar Plexus Chakra. Add grains and fiber to your diet, you can also try bananas, lentils, and squash.",
    mantra: "I do.."
  },
  sacrum: {
    info: "The Sacral Chakra is located in the lower abdomen just below the navel. It represents our connection and ability to accept others and new experiences, well-being, pleasure, and sexuality.",
    tip: "Try pelvic thrusts and the Cobra Pose to open up the Sacrum Chakra. Healing foods include oranges, seeds and nuts, carrots, and pumpkins.",
    mantra: "I feel.."
  },
  root: {
    info: "The Root Chakra is located at the base of the spine in the tailbone area. It represents our foundation and being grounded, and concerns financial independence, money, and food.",
    tip: "Try the Bridge Pose or just ground yourself by standing barefoot on earth or grass. The Root Chakra benefits from hot spices, animal proteins, roots (especially ginger), as well as apples, and beets.",
    mantra: "I am.."
  }
}

var months = {
january: {
  element: "Earth",
  color: "Black & Brown",
  day: "Saturday",
  ruler: "Saturn",
  luckyNumbers: "4, 8, 13, 22"
},
february: {
  element: "Air",
  color: "Light Blue & Silver",
  day: "Saturday",
  ruler: "Uranus & Saturn",
  luckyNumbers: "4, 7, 11, 22, 29"
},
march: {
  element: "Water",
  color: "Mauve, Lilac, Purple, Violet & Sea green",
  day: "Thursday",
  ruler: "Neptune & Jupiter",
  luckyNumbers: "3, 9, 12, 15, 18, 24"
},
april: {
  element: "Fire", 
  color: "Red",
  day: "Tuesday",
  ruler: "Mars",
  luckyNumbers: "1, 8, 17"
},
may :{
  element: "Earth",
  color: "Green & Pink",
  day: "Friday & Monday",
  ruler: "Venus",
  luckyNumbers: "2, 6, 9, 12, 24"
},
june: {
  element: "Earth",
  color: "Light-Green & Yellow",
  day: "Wednesday",
  ruler: "Mercury",
  luckyNumbers: "5, 7, 14, 23"
},
july: {
  element: "Water",
  color: "White",
  day: "Monday & Thursday",
  ruler: "Moon",
  luckyNumbers: "2, 3, 15, 20"
},
august: {
  element: "Fire",
  color: "Monday & Thursday",
  day: "Sunday",
  ruler: "Sun",
  luckyNumbers: "1, 3, 10, 19"
},
septmeber: {
  element: "Earth",
  color: "Grey, Beige & Pale-Yellow",
  day: "Wednesday",
  ruler: "Mercury",
  luckyNumbers: "5, 14, 15, 23, 32"
},
october: {
  element: "Air", 
  color: "Pink & Green",
  day: "Friday",
  ruler: "Venus",
  luckyNumbers: "4, 6, 13, 15, 24"
},
november: {
  element: "Water", 
  color: "Scarlet, Red & Rust",
  day: "Tuesday",
  ruler: "Pluto & Mars",
  luckyNumbers: "8, 11, 18, 22"
},
december: {
  element: "Fire", 
  color: "Blue",
  day: "Thursday",
  ruler: "Jupiter",
  luckyNumbers: "3, 7, 9, 12, 21"
}
}

var results = {
  crownr: {
    chakra: "Crown",
    results: " The crown chakra is blocked. Work on: Getting fresh air, sunlight & nature. Try Meditation. ",
  },
  thirdEyer: {
    chakra: "Third Eye",
    results: " The third eye chakra is blocked. Eat more grapes, blueberries, plums & purple potatoes. ",
  },
  throatr: {
    chakra: "Throat",
    results: " The throat chakra is blocked. Eat more blueberries, figs & kelp. Drink more water. ",
  },
  heartr: {
    chakra: "Heart",
    results: " The heart chakra is blocked. Eat more broccoli, kale, leafy greens & kiwi. ",
  },
  solarPlexusr: {
    chakra: "Solar Plexus",
    results: " The solar plexus chakra is blocked. Eat more lentils, squash, grains & bananas. ",
  },
  sacrumr: {
    chakra: "Sacrum",
    results: " The sacrum chakra is blocked. Eat more seeds & nuts, oranges, carrots & pumpkins. ",
  },
  rootr: {
    chakra: "Root",
    results: " The root chakra is blocked. Eat more apples, roots, proteins & beets. ",
  }
}

var userName = ""
var dayOfBirth = ""
var monthOfBirth = ""
var yearOfBirth = ""
var email = ""

$(document).ready(function(){
  $('#modal1').modal({
    dismissible:false
  });
  $('#modal1').modal('open');
  $("#results").hide();
  $("#horoscopeBox").hide();
});

$('#btnSubmit').on('click', function() {
  event.preventDefault();
  $("#horoscopeBox").show();
  var userName = $('#firstName').val();
  var dayOfBirth = $('#dayOfBirth').val();
  var monthOfBirth = $('#monthOfBirth').val();
  var yearOfBirth = $('#yearOfBirth').val();
  var email = $('#email').val();

  if (monthOfBirth === "01") {
    $("#horoscopeBox").append("<h6>" + "You: " + userName + "</h6>")
    $("#horoscopeBox").append("Your Element: " + months.january.element + "<br>")
    $("#horoscopeBox").append("Your Colors(s): " + months.january.color + "<br>")
    $("#horoscopeBox").append("Your Lucky Day: " + months.january.day + "<br>")
    $("#horoscopeBox").append("Your Ruler: " + months.january.ruler + "<br>")
    $("#horoscopeBox").append("Your Lucky Numbers: " + months.january.luckyNumbers + "<br>")
  } 
  if (monthOfBirth === "02") {
    $("#horoscopeBox").append("<h6>" + "You: " + userName + "</h6>")
    $("#horoscopeBox").append("Your Element: " + months.february.element + "<br>")
    $("#horoscopeBox").append("Your Colors(s): " + months.february.color + "<br>")
    $("#horoscopeBox").append("Your Lucky Day: " + months.february.day + "<br>")
    $("#horoscopeBox").append("Your Ruler: " + months.february.ruler + "<br>")
    $("#horoscopeBox").append("Your Lucky Numbers: " + months.february.luckyNumbers + "<br>")
  }
  if (monthOfBirth === "03") {
    $("#horoscopeBox").append("<h6>" + "You: " + userName + "</h6>")
    $("#horoscopeBox").append("Your Element: " + months.march.element + "<br>")
    $("#horoscopeBox").append("Your Colors(s): " + months.march.color + "<br>")
    $("#horoscopeBox").append("Your Lucky Day: " + months.march.day + "<br>")
    $("#horoscopeBox").append("Your Ruler: " + months.march.ruler + "<br>")
    $("#horoscopeBox").append("Your Lucky Numbers: " + months.march.luckyNumbers + "<br>")
  }
  if (monthOfBirth === "04") {
    $("#horoscopeBox").append("<h6>" + "You: " + userName + "</h6>")
    $("#horoscopeBox").append("Your Element: " + months.april.element + "<br>")
    $("#horoscopeBox").append("Your Colors(s): " + months.april.color + "<br>")
    $("#horoscopeBox").append("Your Lucky Day: " + months.april.day + "<br>")
    $("#horoscopeBox").append("Your Ruler: " + months.april.ruler + "<br>")
    $("#horoscopeBox").append("Your Lucky Numbers: " + months.april.luckyNumbers + "<br>")
  }
  if (monthOfBirth === "05") {
    $("#horoscopeBox").append("<h6>" + "You: " + userName + "</h6>")
    $("#horoscopeBox").append("Your Element: " + months.may.element + "<br>")
    $("#horoscopeBox").append("Your Colors(s): " + months.may.color + "<br>")
    $("#horoscopeBox").append("Your Lucky Day: " + months.may.day + "<br>")
    $("#horoscopeBox").append("Your Ruler: " + months.may.ruler + "<br>")
    $("#horoscopeBox").append("Your Lucky Numbers: " + months.may.luckyNumbers + "<br>")
  }
  if (monthOfBirth === "06") {
    $("#horoscopeBox").append("<h6>" + "You: " + userName + "</h6>")
    $("#horoscopeBox").append("Your Element: " + months.june.element + "<br>")
    $("#horoscopeBox").append("Your Colors(s): " + months.june.color + "<br>")
    $("#horoscopeBox").append("Your Lucky Day: " + months.june.day + "<br>")
    $("#horoscopeBox").append("Your Ruler: " + months.june.ruler + "<br>")
    $("#horoscopeBox").append("Your Lucky Numbers: " + months.june.luckyNumbers + "<br>")
  }
  if (monthOfBirth === "07") {
    $("#horoscopeBox").append("<h6>" + "You: " + userName + "</h6>")
    $("#horoscopeBox").append("Your Element: " + months.july.element + "<br>")
    $("#horoscopeBox").append("Your Colors(s): " + months.july.color + "<br>")
    $("#horoscopeBox").append("Your Lucky Day: " + months.july.day + "<br>")
    $("#horoscopeBox").append("Your Ruler: " + months.july.ruler + "<br>")
    $("#horoscopeBox").append("Your Lucky Numbers: " + months.july.luckyNumbers + "<br>")
  }
  if (monthOfBirth === "08") {
    $("#horoscopeBox").append("<h6>" + "You: " + userName + "</h6>")
    $("#horoscopeBox").append("Your Element: " + months.august.element + "<br>")
    $("#horoscopeBox").append("Your Colors(s): " + months.august.color + "<br>")
    $("#horoscopeBox").append("Your Lucky Day: " + months.august.day + "<br>")
    $("#horoscopeBox").append("Your Ruler: " + months.august.ruler + "<br>")
    $("#horoscopeBox").append("Your Lucky Numbers: " + months.august.luckyNumbers + "<br>")
  }
  if (monthOfBirth === "09") {
    $("#horoscopeBox").append("<h6>" + "You: " + userName + "</h6>")
    $("#horoscopeBox").append("Your Element: " + months.septmeber.element + "<br>")
    $("#horoscopeBox").append("Your Colors(s): " + months.septmeber.color + "<br>")
    $("#horoscopeBox").append("Your Lucky Day: " + months.septmeber.day + "<br>")
    $("#horoscopeBox").append("Your Ruler: " + months.septmeber.ruler + "<br>")
    $("#horoscopeBox").append("Your Lucky Numbers: " + months.septmeber.luckyNumbers + "<br>")
  }
  if (monthOfBirth === "10") {
    $("#horoscopeBox").append("<h6>" + "You: " + userName + "</h6>")
    $("#horoscopeBox").append("Your Element: " + months.october.element + "<br>")
    $("#horoscopeBox").append("Your Colors(s): " + months.october.color + "<br>")
    $("#horoscopeBox").append("Your Lucky Day: " + months.october.day + "<br>")
    $("#horoscopeBox").append("Your Ruler: " + months.october.ruler + "<br>")
    $("#horoscopeBox").append("Your Lucky Numbers: " + months.october.luckyNumbers + "<br>")
  }

  if (monthOfBirth === "11") {
    $("#horoscopeBox").append("<h6>" + "You: " + userName + "</h6>")
    $("#horoscopeBox").append("Your Element: " + months.november.element + "<br>")
    $("#horoscopeBox").append("Your Colors(s): " + months.november.color + "<br>")
    $("#horoscopeBox").append("Your Lucky Day: " + months.november.day + "<br>")
    $("#horoscopeBox").append("Your Ruler: " + months.november.ruler + "<br>")
    $("#horoscopeBox").append("Your Lucky Numbers: " + months.november.luckyNumbers + "<br>")
  }
  if (monthOfBirth === "12") {
    $("#horoscopeBox").append("<h6>" + "You: " + userName + "</h6>")
    $("#horoscopeBox").append("Your Element: " + months.december.element + "<br>")
    $("#horoscopeBox").append("Your Colors(s): " + months.december.color + "<br>")
    $("#horoscopeBox").append("Your Lucky Day: " + months.december.day + "<br>")
    $("#horoscopeBox").append("Your Ruler: " + months.december.ruler + "<br>")
    $("#horoscopeBox").append("Your Lucky Numbers: " + months.december.luckyNumbers + "<br>")
  }

  var postObject = {
    userName: userName,
    dayOfBirth: dayOfBirth,
    monthOfBirth: monthOfBirth,
    yearOfBirth: yearOfBirth,
    astro_sign: astro_sign,
    email: email
  }

  $.post("/api/post",postObject, function(data){
    getSignData(data)
  })
})


// function getSignData(data) {
//   console.log(data)
//     $.get("/api/"+ data.userName, function(signinfo){
//       DisplayData(signinfo)
//     })
// }


////////////////////////////////////////////////////////////////////////////////////////////////////////
// this is the API 
////////////////////////////////////////////////////////////////////////////////////////////////////////

// function DisplayData(data){
//   var hardcodeData = JSON.parse(data)
//   console.log(hardcodeData)
// $("#horoscopeBox").append("<h6>" + "You: " + hardcodeData["name"] + "</h6>")
// $("#horoscopeBox").append("Your Birthday: " + hardcodeData["date"] + "<br>")
// $("#horoscopeBox").append("Your Destiny Number: " + hardcodeData["destiny_number"]+ "<br>")
// $("#horoscopeBox").append("Your Evil Number: " + hardcodeData["evil_num"]+ "<br>")
// $("#horoscopeBox").append("Your Favorite Day: " + hardcodeData["fav_day"]+ "<br>")
// $("#horoscopeBox").append("Your God: " + hardcodeData["fav_god"]+ "<br>")
// $("#horoscopeBox").append("Your Metal: " + hardcodeData["fav_metal"]+ "<br>")
// $("#horoscopeBox").append("Your Stone: " + hardcodeData["fav_stone"]+ "<br>")
// $("#horoscopeBox").append("Your Ruler: " + hardcodeData["radical_ruler"]+ "<br>")
// }


$(function () {
  $("#chakraCrown").on("click", function () {
    $("#infoBox").empty()
    $("#tipBox").empty()
    $("#infoBox").text(content.crown.info)
    $("#tipBox").text(content.crown.tip)
  })

  $("#chakraCrown").hover(function () {
    $("#mantra").empty()
    $("#mantra").text(content.crown.mantra)
    $("#crystal").empty()
    });

  $("#thirdEye").on("click", function () {
    $("#infoBox").empty()
    $("#tipBox").empty()
    $("#infoBox").text(content.thirdEye.info)
    $("#tipBox").text(content.thirdEye.tip)
  })

  $("#thirdEye").hover(function () {
    $("#mantra").empty()
    $("#mantra").text(content.thirdEye.mantra)
  })

  $("#throat").on("click", function () {
    $("#infoBox").empty()
    $("#tipBox").empty()
    $("#infoBox").text(content.throat.info)
    $("#tipBox").text(content.throat.tip)
  })

  $("#throat").hover(function () {
    $("#mantra").empty()
    $("#mantra").text(content.throat.mantra)
  })

  $("#heartbutton").on("click", function () {
    $("#infoBox").empty()
    $("#tipBox").empty()
    $("#infoBox").text(content.heart.info)
    $("#tipBox").text(content.heart.tip)
  })

  $("#heartbutton").hover(function () {
    $("#mantra").empty()
    $("#mantra").text(content.heart.mantra)
  })

  $("#solarPlexus").on("click", function () {
    $("#infoBox").empty()
    $("#tipBox").empty()
    $("#infoBox").text(content.solarPlexus.info)
    $("#tipBox").text(content.solarPlexus.tip)
  })

  $("#solarPlexus").hover(function () {
    $("#mantra").empty()
    $("#mantra").text(content.solarPlexus.mantra)
  })

  $("#sacrum").on("click", function () {
    $("#infoBox").empty()
    $("#tipBox").empty()
    $("#infoBox").text(content.sacrum.info)
    $("#tipBox").text(content.sacrum.tip)
  })

  $("#sacrum").hover(function () {
    $("#mantra").empty()
    $("#mantra").text(content.sacrum.mantra)
  })

  $("#root").on("click", function () {
    $("#infoBox").empty()
    $("#tipBox").empty()
    $("#infoBox").text(content.root.info)
    $("#tipBox").text(content.root.tip)
  })

  $("#root").hover(function () {
    $("#mantra").empty()
    $("#mantra").text(content.root.mantra)
  })


})

////////////////////////////////////////////////////////////////////////////////////////////////////////
// reccomendation results box
////////////////////////////////////////////////////////////////////////////////////////////////////////


function helper(help) {

  (resultz.includes(help)) ?
    void (0) :
    (resultz.push(help), $("#results").append(help), $("#instructBox").text("Please see your recommendations below: "))
}
var resultz = []
$(document).ready(function () {

  $("#sleep").bind().on("click", function (e) {
    $(this).unbind('click');
    $("#results").show();
    helper(results.crownr.results)
  })
  $("#asthma").bind().on("click", function (e) {
    $(this).unbind('click');
    $("#results").show();
    helper(results.crownr.results)
  })
  $("#poorIntuition").bind().on("click", function (e) {
    $(this).unbind('click');
    $("#results").show();
    helper(results.thirdEyer.results)
  })
  $("#soreThroat").bind().on("click", function (e) {
    $(this).unbind('click');
    $("#results").show();
    helper(results.throatr.results)
  })
  $("#thyroidProblems").bind().on("click", function (e) {
    $(this).unbind('click');
    $("#results").show();
    helper(results.throatr.results)
  })
  $("#concentration").bind().on("click", function (e) {
    $(this).unbind('click');
    $("#results").show();
    helper(results.crownr.results)
  })
  $("#fear").bind().on("click", function (e) {
    $(this).unbind('click');
    $("#results").show();
    helper(results.heartr.results)
  })
  $("#gas").bind().on("click", function (e) {
    $(this).unbind('click');
    $("#results").show();
    helper(results.solarPlexusr.results)
  })
  $("#eatingDis").bind().on("click", function (e) {
    $(this).unbind('click');
    $("#results").show();
    helper(results.solarPlexusr.results)
  })
  $("#concentration").bind().on("click", function (e) {
    $(this).unbind('click');
    $("#results").show();
    helper(results.crownr.results)
  })
  $("#procrastination").bind().on("click", function (e) {
    $(this).unbind('click');
    $("#results").show();
    helper(results.solarPlexusr.results)
  })
  $("#alienation").bind().on("click", function (e) {
    $(this).unbind('click');
    $("#results").show();
    helper(results.crownr.results)
  })
  $("#heart").bind().on("click", function (e) {
    $(this).unbind('click');
    $("#results").show();
    helper(results.heartr.results)
  })
  $("#hipPain").bind().on("click", function (e) {
    $(this).unbind('click');
    $("#results").show();
    helper(results.sacrumr.results)
  })
  $("#sexDis").bind().on("click", function (e) {
    $(this).unbind('click');
    $("#results").show();
    helper(results.sacrumr.results)
  })
  $("#depression").bind().on("click", function (e) {
    $(this).unbind('click');
    $("#results").show();
    helper(results.thirdEyer.results)
  })
  $("#creativeBlocks").bind().on("click", function (e) {
    $(this).unbind('click');
    $("#results").show();
    helper(results.sacrumr.results)
  })
  $("#colonIssues").bind().on("click", function (e) {
    $(this).unbind('click');
    $("#results").show();
    helper(results.rootr.results)
  })
  $("#lowerBack").bind().on("click", function (e) {
    $(this).unbind('click');
    $("#results").show();
    helper(results.rootr.results)
  })
  $("#varicoseVeins").bind().on("click", function (e) {
    $(this).unbind('click');
    $("#results").show();
    helper(results.rootr.results)
  })
  $("#difficult").bind().on("click", function (e) {
    $(this).unbind('click');
    $("#results").show();
    helper(results.throatr.results)
  })
  $("#eyesight").bind().on("click", function (e) {
    $(this).unbind('click');
    $("#results").show();
    helper(results.thirdEyer.results)
  })
})



