////////////////////////////////////////////////////////////////////////////////////////////////////////
// Login Modal
////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
  console.log(instances)
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
  console.log(instances)
});

////////WORKS > have tried to get is on loading the page, but cannot.
//$(document).ready(function(event) { <<<< tried. Failed. 
$('#myModal').on('click', function(event) {
  event.preventDefault();
  console.log("clicked")
  $('#myModal').modal('show');
})

$('#login').on('click', function(event) {
  event.preventDefault();
});

$('#login').on('click', function(event) {
  var firstName = $('#firstName').val();
  var dayOfBirth = $('#dayOfBirth').val();
  var monthOfBirth = $('#monthOfBirth').val();
  var yearOfBirth = $('#yearOfBirth').val();
  var yourSign = $('#yourSign').val();
  var email = $('#email').val();
  console.warn(firstName, yourSign, dayOfBirth, monthOfBirth, yearOfBirth, email);
  var postObject = {
    firstName: firstName,
    dayOfBirth: dayOfBirth,
    monthOfBirth: monthOfBirth,
    yearOfBirth: yearOfBirth,
    email: email
  }
})

//end login modal

////////////////////////////////////////////////////////////////////////////////////////////////////////
// this is the API 
////////////////////////////////////////////////////////////////////////////////////////////////////////

var hardcodeData = {
  name: "MollyG",
  date: "8-3-1990",
  destiny_number: 3,
  radical_number:8,
  name_number:5,
  evil_num: "3,6",
  fav_color:"Black",
  fav_day:"Sunday, Monday, Saturday",
  fav_god: "Bhairav",
  fav_mantra: "Om Shang Shanaishcharay Namah",
  fav_metal: "Iron",
  fav_stone: "Blue Sapphire",
  fav_substone: "Amethyst & Blue Tourmaline",
  friendly_num: "2,1,4",
  neutral_num: "3,7,9",
  radical_num: "8",
  radical_ruler: "Saturn"
}

//for if we get the login working:
// $.get("/", function(data) {
//   console.log(data)
//   if (data.length !== 0) {
//   for (var i = 0; i < data.length; i++) {
  $(function () {
$("#horoscopeBox").append("<h5>" + "You: " + hardcodeData.name + "</h5>")
$("#horoscopeBox").append("<p>"+ "Your Birthday: " + hardcodeData.date + "</p>")
$("#horoscopeBox").append("<p>"+ "Your Destiny Number: " + hardcodeData.destiny_number+ "</p>")
$("#horoscopeBox").append("<p>"+ "Your Evil Number: " + hardcodeData.evil_num+ "</p>")
$("#horoscopeBox").append("<p>"+ "Your Favorite Day: " + hardcodeData.fav_day+ "</p>")
$("#horoscopeBox").append("<p>"+ "Your God: " + hardcodeData.fav_god+ "</p>")
$("#horoscopeBox").append("<p>"+ "Your Metal: " + hardcodeData.fav_metal+ "</p>")
$("#horoscopeBox").append("<p>"+ "Your Stone: " + hardcodeData.fav_stone+ "</p>")
$("#horoscopeBox").append("<p>"+ "Your Ruler: " + hardcodeData.radical_ruler+ "</p>")

//snipit incase we want to add classes
      // var row = $("<div>");
      // row.addClass("chirp");

})


////////////////////////////////////////////////////////////////////////////////////////////////////////
// these are the chakra button
////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//Trying to add hover effect with crystals. 
// var crystals = {

// }


$(function () {
  $("#chakraCrown").on("click", function (event) {
    console.log("I've been clicked")
    $("#infoBox").empty()
    $("#tipBox").empty()
    $("#infoBox").text(content.crown.info)
    $("#tipBox").text(content.crown.tip)
  })
})

$(function () {
  $("#thirdEye").on("click", function (event) {
    console.log("I've been clicked")
    $("#infoBox").empty()
    $("#tipBox").empty()
    $("#infoBox").text(content.thirdEye.info)
    $("#tipBox").text(content.thirdEye.tip)
  })
})

$(function () {
  $("#throat").on("click", function (event) {
    console.log("I've been clicked")
    $("#infoBox").empty()
    $("#tipBox").empty()
    $("#infoBox").text(content.throat.info)
    $("#tipBox").text(content.throat.tip)
  })
})

$(function () {
  $("#heart").on("click", function (event) {
    console.log("I've been clicked")
    $("#infoBox").empty()
    $("#tipBox").empty()
    $("#infoBox").text(content.heart.info)
    $("#tipBox").text(content.heart.tip)
  })
})

$(function () {
  $("#solarPlexus").on("click", function (event) {
    console.log("I've been clicked")
    $("#infoBox").empty()
    $("#tipBox").empty()
    $("#infoBox").text(content.solarPlexus.info)
    $("#tipBox").text(content.solarPlexus.tip)
  })
})
$(function () {
  $("#sacrum").on("click", function (event) {
    console.log("I've been clicked")
    $("#infoBox").empty()
    $("#tipBox").empty()
    $("#infoBox").text(content.sacrum.info)
    $("#tipBox").text(content.sacrum.tip)
  })
})
$(function () {
  $("#root").on("click", function (event) {
    console.log("I've been clicked")
    $("#infoBox").empty()
    $("#tipBox").empty()
    $("#infoBox").text(content.root.info)
    $("#tipBox").text(content.root.tip)
  })
})

//////////Mantras

$(function () {
  $("#chakraCrown").hover(function (event) {
    $("#mantra").empty()
    $("#mantra").text(content.crown.mantra)
    $("#crystal").empty() //actually empties this
    // $("#crystal").image(url, )
    // $('#cyrstal').prepend($('<img>',{id:'crown',src:'/images/amethyst.png'}))
    // $('#crystal').prepend('<img id="crown" src="./images/amethyst.png" />')
    // $("#crystal").prepend("<img src=/../images/amethyst.png/>")
      // mouseOver function
  //     $("#chakracrown").hover(function (event){
  //     $('#crownc').show();
  // })
    });
})

$(function () {
  $("#thirdEye").hover(function (event) {
    $("#mantra").empty()
    $("#mantra").text(content.thirdEye.mantra)
  })
})

$(function () {
  $("#throat").hover(function (event) {
    $("#mantra").empty()
    $("#mantra").text(content.throat.mantra)
  })
})

$(function () {
  $("#heart").hover(function (event) {
    $("#mantra").empty()
    $("#mantra").text(content.heart.mantra)
  })
})
$(function () {
  $("#solarPlexus").hover(function (event) {
    $("#mantra").empty()
    $("#mantra").text(content.solarPlexus.mantra)
  })
})
$(function () {
  $("#sacrum").hover(function (event) {
    $("#mantra").empty()
    $("#mantra").text(content.sacrum.mantra)
  })
})
$(function () {
  $("#root").hover(function (event) {
    $("#mantra").empty()
    $("#mantra").text(content.root.mantra)
  })
})


//////////////////////////////////////////////END CHAKRA BUTTONS///////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////
// reccomendation results box
////////////////////////////////////////////////////////////////////////////////////////////////////////

var results = {
  crownr: {
  chakra: "Crown",
  results: "Work on: Getting fresh air, sunlight & nature. Try Meditation.",
  },
  thirdEyer: {
    chakra: "Third Eye",
    results: "Eat more grapes, blueberries, plums & purple potatoes",
  },
  throatr: {
    chakra: "Throat",
    results: "Eat more blueberries, figs & kelp. Drink more water.",
  },
  heartr: {
    chakra: "Heart",
    results: "Eat more broccoli, kale, leafy greens & kiwi.",
  },
  solarPlexusr: {
    chakra: "Solar Plexus",
    results: "Eat more lentils, squash, grains & bananas.",
  },
  sacrumr: {
    chakra: "Sacrum",
    results: "Eat more seeds & nuts, oranges, carrots & pumpkins.",
  },
  rootr: {
    chakra: "Root",
    results: "Eat more apples, roots, proteins & beets.",
  },

}

$(function () { 
  // $("#sleep").click(function() {
  // $("#sleep").toggle(this.checked)
  // })
  // if ($("#sleep") = checked) {
  //   $("#results").text(results.crownr.results)
  // }



$("#sleep").click(function() {
  $("#sleep").toggle(this.checked)
  $("#results").empty()
  $("#results").text(results.crownr.results)
})
// $("#sleep").click(function(){
//   $("sleep").toggle(this.unchecked);
//   $("#results").empty()
})


