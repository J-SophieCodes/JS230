let platinum = {
  name: "platinum",
  amount: "$75,000",
  bullets: [
    "Recognition at all WITS events in 2021 - 2 summits, 11 monthly Connect events, plus the 10th Anniversary Celebration",
    "Opportunity to customize sponsorship with WITS",
    "Year long direct communication with the WITS community via WITS newsletter and WITS event app",
    "National social media and press recognition",
    "Prominent exhibition space via the event app at WITS 2021 Virtual Summits - to include personalized sponsor page and premium banner placement throughout the app",
    "Digital recognition at all WITS 2021 Connect events and digital and physical recognition at the in-person WITS 10th Anniversary Celebration",
    "Personalized connection with quality potential hires",
    "Featured profile or interview on WITS Medium and/or in WITS newsletter",
    "1-Minute Video “commercial” provided by sponsor company to be played during the WITS 2021 Virtual Summits"
  ]
};

let gold = {
  name: "gold",
  amount: "$25,000",
  bullets: [
    "Prominent Recognition at selected WITS 2021 Virtual Summit(s)",
    "Prominent logo placement on digital marketing materials and in the event app",
    "Personalized sponsor page in the event app for the selected virtual summit(s)",
    "Logo and link on event website",
    "Dedicated social media posts",
    "Profile on WITS Medium and/or in WITS newsletter "
  ]
};

let silver = {
  name: "silver",
  amount: "$15,000",
  bullets: [
    "Sponsorship recognition for selected WITS 2021 Virtual Summit(s)",
    "Logo placement on digital materials for virtual summit",
    "Social media mentions across WITS social media properties",
    "Personalized sponsor page in the event app for the selected WITS 2021 Virtual Summit(s)"
  ]
};

let bronze = {
  name: "bronze",
  amount: "$7,000",
  bullets: [
    "Sponsorship recognition for selected WITS 2021 Virtual Summit(s)",
    "Logo placement on digital materials for selected WITS 2021 Virtual Summit",
    "Social media mentions across WITS social media properties",
    "Sponsor listing in virtual summit event app"
  ]
};

let levels = [];
levels.push(platinum, gold, silver, bronze);

Handlebars.registerHelper("capitalize", function(word) {
  return word[0].toUpperCase() + word.slice(1);
});

Handlebars.registerPartial("article", $("#article").html());

let navList = Handlebars.compile($("#navList").html());
$("nav ul").append(navList({levels: levels}));

let articleList = Handlebars.compile($("#articleList").html());
$("section").append(articleList({levels: levels}));

$(function() {
  $('nav a').on('click', function(e) {
    e.preventDefault();
    let navItem = $(this).parent();
    navItem.addClass('selected');
    $('nav li').not(navItem).removeClass('selected');
    $('article').hide().filter('[data-block=' + $(this).attr('data-block') + ']').show();
  });
});