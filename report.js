$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Book.feature");
formatter.feature({
  "name": "Booking flights on new Mercury Tours site",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Successful login with existing username and password",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "\"Welcome\" page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "Validation.pageTitleMatches(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide username and password",
  "rows": [
    {
      "cells": [
        "lah",
        "password"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Action.enterCredentials(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Sign-In button",
  "keyword": "And "
});
formatter.match({
  "location": "Action.signIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Find a Flight\" page opens",
  "keyword": "Then "
});
formatter.match({
  "location": "Validation.pageTitleMatches(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search for a flight for given example dates and destination",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "\"Find a Flight\" page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "Validation.pageTitleMatches(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide flight details",
  "rows": [
    {
      "cells": [
        "December 12",
        "December 19",
        "San Francisco"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Action.provideDetails(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue button",
  "keyword": "And "
});
formatter.match({
  "location": "Action.findFlights()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Select a Flight\" page opens",
  "keyword": "Then "
});
formatter.match({
  "location": "Validation.pageTitleMatches(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the result page contains \"out\" flights",
  "rows": [
    {
      "cells": [
        "Blue Skies Airlines$360$270$5:03"
      ]
    },
    {
      "cells": [
        "Blue Skies Airlines$361$271$7:10"
      ]
    },
    {
      "cells": [
        "Pangea Airlines$362$274$9:17"
      ]
    },
    {
      "cells": [
        "Unified Airlines$363$281$11:24"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Validation.checkFlightList(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the result page contains \"in\" flights",
  "rows": [
    {
      "cells": [
        "Blue Skies Airlines$630$270$12:23"
      ]
    },
    {
      "cells": [
        "Blue Skies Airlines$631$273$14:30"
      ]
    },
    {
      "cells": [
        "Pangea Airlines$632$282$16:37"
      ]
    },
    {
      "cells": [
        "Unified Airlines$633$303$18:44"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Validation.checkFlightList(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search for a given flight and book it",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "\"Find a Flight\" page is open",
  "keyword": "Given "
});
formatter.step({
  "name": "I provide flight details: \u003cdeparture\u003e \u003creturn\u003e \u003cdestination\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I click continue button",
  "keyword": "And "
});
formatter.step({
  "name": "\"Select a Flight\" page opens",
  "keyword": "Then "
});
formatter.step({
  "name": "\u003cflightOut\u003e is on the out flights list",
  "keyword": "And "
});
formatter.step({
  "name": "\u003cflightIn\u003e is on the in flights list",
  "keyword": "And "
});
formatter.step({
  "name": "I choose flight \u003cflightOut\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I choose flight \u003cflightIn\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I click continue button2",
  "keyword": "And "
});
formatter.step({
  "name": "\"Book a Flight\" page opens",
  "keyword": "Then "
});
formatter.step({
  "name": "I click Secure Purchase",
  "keyword": "When "
});
formatter.step({
  "name": "\"Flight Confirmation\" page opens",
  "keyword": "Then "
});
formatter.step({
  "name": "\"Your itinerary has been booked!\" message is displayed",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "departure",
        "return",
        "destination",
        "flightOut",
        "flightIn"
      ]
    },
    {
      "cells": [
        "\"December 12\"",
        "\"December 19\"",
        "\"Paris\"",
        "\"Blue Skies Airlines$360$270$5:03\"",
        "\"Pangea Airlines$632$282$16:37\""
      ]
    },
    {
      "cells": [
        "\"January 24\"",
        "\"January 30\"",
        "\"San Francisco\"",
        "\"Pangea Airlines$362$274$9:17\"",
        "\"Unified Airlines$633$303$18:44\""
      ]
    }
  ]
});
formatter.background({
  "name": "Successful login with existing username and password",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "\"Welcome\" page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "Validation.pageTitleMatches(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide username and password",
  "rows": [
    {
      "cells": [
        "lah",
        "password"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Action.enterCredentials(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Sign-In button",
  "keyword": "And "
});
formatter.match({
  "location": "Action.signIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Find a Flight\" page opens",
  "keyword": "Then "
});
formatter.match({
  "location": "Validation.pageTitleMatches(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search for a given flight and book it",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "\"Find a Flight\" page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "Validation.pageTitleMatches(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide flight details: \"December 12\" \"December 19\" \"Paris\"",
  "keyword": "When "
});
formatter.match({
  "location": "Action.provideDetails(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue button",
  "keyword": "And "
});
formatter.match({
  "location": "Action.findFlights()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Select a Flight\" page opens",
  "keyword": "Then "
});
formatter.match({
  "location": "Validation.pageTitleMatches(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Blue Skies Airlines$360$270$5:03\" is on the out flights list",
  "keyword": "And "
});
formatter.match({
  "location": "Validation.isOnFlightList(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Pangea Airlines$632$282$16:37\" is on the in flights list",
  "keyword": "And "
});
formatter.match({
  "location": "Validation.isOnFlightList(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I choose flight \"Blue Skies Airlines$360$270$5:03\"",
  "keyword": "When "
});
formatter.match({
  "location": "Action.chooseFlight(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I choose flight \"Pangea Airlines$632$282$16:37\"",
  "keyword": "And "
});
formatter.match({
  "location": "Action.chooseFlight(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue button2",
  "keyword": "And "
});
formatter.match({
  "location": "Action.reserveFlights()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Book a Flight\" page opens",
  "keyword": "Then "
});
formatter.match({
  "location": "Validation.pageTitleMatches(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Secure Purchase",
  "keyword": "When "
});
formatter.match({
  "location": "Action.purchase()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Flight Confirmation\" page opens",
  "keyword": "Then "
});
formatter.match({
  "location": "Validation.pageTitleMatches(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Your itinerary has been booked!\" message is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Validation.verifyMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Successful login with existing username and password",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "\"Welcome\" page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "Validation.pageTitleMatches(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide username and password",
  "rows": [
    {
      "cells": [
        "lah",
        "password"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Action.enterCredentials(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Sign-In button",
  "keyword": "And "
});
formatter.match({
  "location": "Action.signIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Find a Flight\" page opens",
  "keyword": "Then "
});
formatter.match({
  "location": "Validation.pageTitleMatches(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search for a given flight and book it",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "\"Find a Flight\" page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "Validation.pageTitleMatches(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide flight details: \"January 24\" \"January 30\" \"San Francisco\"",
  "keyword": "When "
});
formatter.match({
  "location": "Action.provideDetails(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue button",
  "keyword": "And "
});
formatter.match({
  "location": "Action.findFlights()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Select a Flight\" page opens",
  "keyword": "Then "
});
formatter.match({
  "location": "Validation.pageTitleMatches(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Pangea Airlines$362$274$9:17\" is on the out flights list",
  "keyword": "And "
});
formatter.match({
  "location": "Validation.isOnFlightList(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Unified Airlines$633$303$18:44\" is on the in flights list",
  "keyword": "And "
});
formatter.match({
  "location": "Validation.isOnFlightList(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I choose flight \"Pangea Airlines$362$274$9:17\"",
  "keyword": "When "
});
formatter.match({
  "location": "Action.chooseFlight(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I choose flight \"Unified Airlines$633$303$18:44\"",
  "keyword": "And "
});
formatter.match({
  "location": "Action.chooseFlight(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue button2",
  "keyword": "And "
});
formatter.match({
  "location": "Action.reserveFlights()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Book a Flight\" page opens",
  "keyword": "Then "
});
formatter.match({
  "location": "Validation.pageTitleMatches(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Secure Purchase",
  "keyword": "When "
});
formatter.match({
  "location": "Action.purchase()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Flight Confirmation\" page opens",
  "keyword": "Then "
});
formatter.match({
  "location": "Validation.pageTitleMatches(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Your itinerary has been booked!\" message is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Validation.verifyMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});