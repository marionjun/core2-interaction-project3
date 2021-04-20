// console.log("Is our script file working?");

// load the airtable library, call it "Airtable";
var Airtable = require("airtable");
console.log(Airtable);

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "keynewDjfpaz0B4p0" }).base(
  "appHPWR7mVCIrJKvW"
);

// get our collection base, select all the records
// specify functions that will receive the data
base("crystal")
  .select({})
  .eachPage(gotPageOfCrystals, gotAllCrystals);

// an empty array to hold our data
var crystals = [];

// callback function that receives our data
function gotPageOfCrystals(stones, fetchNextPage) {
  console.log("gotPageOfCrystals()");
  // add the records from this page to our array
  crystals.push(...stones);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllCrystals(err) {
  console.log("gotAllCrystals()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogCrystals();
  showCrystals();
}

// just loop through the books and console.log them
function consoleLogCrystals() {
  console.log("consoleLogCrystals()");
  crystals.forEach(crystal => {
    console.log("Crystal:", crystal);
  });
}

// look through our airtable data, create elements
function showCrystals() {
  console.log("showCrystals()");
  crystals.forEach(crystal => {
    console.log(crystal);
     // create container for each song
     var crystalContainer = document.createElement("div");
     crystalContainer.classList.add("crystal-container");
     document.querySelector(".container").append(crystalContainer);

     // add song titles
     var crystalTitle = document.createElement("h1");
     crystalTitle.classList.add("crystal-title");
     crystalTitle.innerText = crystal.fields.crystal_title;
     crystalContainer.append(crystalTitle);

     var crystalImage = document.createElement("img");
     crystalImage.classList.add("crystal-image");
     crystalImage.src = crystal.fields.crystal_image[0].url;
     crystalContainer.append(crystalImage);
  
    //  // add event listener to add active class to song container
     crystalContainer.addEventListener("click", function(event) {
       // crystalMeaning.classList.toggle("active");
       crystalImage.classList.toggle("active");
     });

     // get genre field from airtable
     // loop through the array and add each genre as
     // a class to the song container
     var crystalMeaning = crystal.fields.meaning;
     console.log(crystalMeaning);
     crystalMeaning.forEach(function(meaning) {       
       crystalContainer.classList.add(meaning);
       console.log("container:", crystalContainer);
     });

    //  // clicking on filter by brown 1
    //  // change background of pop genres to red
    //  // else change to white
     var filterGrounding = document.querySelector(".js-grounding");
     filterGrounding.addEventListener("click", function() {    
       if (crystalContainer.classList.contains("grounding")) {
         crystalContainer.style.background = "white";
       } else {
         crystalContainer.style.background = "none";
       }
     });

     // filter by red 2
     var filterEmpowerment = document.querySelector(".js-empowerment");
     filterEmpowerment.addEventListener("click", function() {
       if (crystalContainer.classList.contains("empowerment")) {
         crystalContainer.style.background = "white";
       } else {
         crystalContainer.style.background = "none";
       }
     });

     // filter by green 3
     var filterTruth = document.querySelector(".js-truth");
     filterTruth.addEventListener("click", function() {
       if (crystalContainer.classList.contains("truth")) {
         crystalContainer.style.background = "white";
       } else {
         crystalContainer.style.background = "none";
       }
     });

     // filter by purple 4
     var filterWarmth = document.querySelector(".js-warmth");
     filterWarmth.addEventListener("click", function() {
       if (crystalContainer.classList.contains("warmth")) {
         crystalContainer.style.background = "white";
       } else {
         crystalContainer.style.background = "none";
       }
     });

      // filter by orange 5
      var filterThirdEye = document.querySelector(".js-thirdEye");
      filterThirdEye.addEventListener("click", function() {
        if (crystalContainer.classList.contains("thirdEye")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });


         // filter by blue 6
         var filterFulfillment = document.querySelector(".js-fulfillment");

         filterFulfillment.addEventListener("click", function() {
         if (crystalContainer.classList.contains("fulfillment")) {
             crystalContainer.style.background = "white";
           } else {
             crystalContainer.style.background = "none";
           }
         });

            // filter by black 7
      var filterCleansing = document.querySelector(".js-cleansing");

      filterCleansing.addEventListener("click", function() {
       if (crystalContainer.classList.contains("cleansing")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
       }
      });

         // filter by yellow 8
         var filterLove = document.querySelector(".js-love");

         filterLove.addEventListener("click", function() {
           if (crystalContainer.classList.contains("love")) {
             crystalContainer.style.background = "white";
           } else {
             crystalContainer.style.background = "none";
           }
         });

            // filter by grey 9
      var filterIntuition = document.querySelector(".js-intuition");

      filterIntuition.addEventListener("click", function() {
        if (crystalContainer.classList.contains("intuition")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

         // filter by white 10
         var filterPeace = document.querySelector(".js-peace");

         filterPeace.addEventListener("click", function() {
           if (crystalContainer.classList.contains("peace")) {
             crystalContainer.style.background = "white";
           } else {
             crystalContainer.style.background = "none";
          }
         });

            // filter by pink 11
      var filterProsperity = document.querySelector(".js-prosperity");

      filterProsperity.addEventListener("click", function() {
        if (crystalContainer.classList.contains("prosperity")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

            // filter by pink 12
            var filterPatience = document.querySelector(".js-patience");

            filterPatience.addEventListener("click", function() {
              if (crystalContainer.classList.contains("patience")) {
                crystalContainer.style.background = "white";
              } else {
                crystalContainer.style.background = "none";
              }
            });

                  // filter by pink 13
      var filterPurification = document.querySelector(".js-purification");

      filterPurification.addEventListener("click", function() {
        if (crystalContainer.classList.contains("purification")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

            // filter by pink 14
            var filterHope = document.querySelector(".js-hope");

            filterHope.addEventListener("click", function() {
              if (crystalContainer.classList.contains("hope")) {
                crystalContainer.style.background = "white";
              } else {
                crystalContainer.style.background = "none";
              }
            });


                  // filter by pink 15
      var filterSerenity = document.querySelector(".js-serenity");

      filterSerenity.addEventListener("click", function() {
        if (crystalContainer.classList.contains("serenity")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

            // filter by pink 16
            var filterInspiration = document.querySelector(".js-inspiration");

            filterInspiration.addEventListener("click", function() {
              if (crystalContainer.classList.contains("inspiration")) {
                crystalContainer.style.background = "white";
              } else {
                crystalContainer.style.background = "none";
              }
            });


                  // filter by pink 17
      var filterCalming = document.querySelector(".js-calming");

      filterCalming.addEventListener("click", function() {
        if (crystalContainer.classList.contains("calming")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

            // filter by pink 18
            var filterDevelopment = document.querySelector(".js-development");

            filterDevelopment.addEventListener("click", function() {
              if (crystalContainer.classList.contains("development")) {
                crystalContainer.style.background = "white";
              } else {
                crystalContainer.style.background = "none";
              }
            });

                  // filter by pink 19
      var filterVitality = document.querySelector(".js-vitality");

      filterVitality.addEventListener("click", function() {
        if (crystalContainer.classList.contains("vitality")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

            // filter by pink 20
            var filterHealing = document.querySelector(".js-healing");

            filterHealing.addEventListener("click", function() {
              if (crystalContainer.classList.contains("healing")) {
                crystalContainer.style.background = "white";
              } else {
                crystalContainer.style.background = "none";
              }
            });

                  // filter by pink 21
      var filterPerspective = document.querySelector(".js-perspective");

      filterPerspective.addEventListener("click", function() {
        if (crystalContainer.classList.contains("perspective")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

            // filter by pink 22
            var filterDiscipline = document.querySelector(".js-discipline");

            filterDiscipline.addEventListener("click", function() {
              if (crystalContainer.classList.contains("discipline")) {
                crystalContainer.style.background = "white";
              } else {
                crystalContainer.style.background = "none";
              }
            });

                  // filter by pink 23
      var filterWisdom = document.querySelector(".js-wisdom");

      filterWisdom.addEventListener("click", function() {
        if (crystalContainer.classList.contains("wisdom")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

            // filter by pink 24
            var filterLoyalty = document.querySelector(".js-loyalty");

            filterLoyalty.addEventListener("click", function() {
              if (crystalContainer.classList.contains("loyalty")) {
                crystalContainer.style.background = "white";
              } else {
                crystalContainer.style.background = "none";
              }
            });

                  // filter by pink 25
      var filterInitiation = document.querySelector(".js-initiation");

      filterInitiation.addEventListener("click", function() {
        if (crystalContainer.classList.contains("initiation")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

            // filter by pink 26
            var filterPassion = document.querySelector(".js-passion");

            filterPassion.addEventListener("click", function() {
              if (crystalContainer.classList.contains("passion")) {
                crystalContainer.style.background = "white";
              } else {
                crystalContainer.style.background = "none";
              }
            });

                  // filter by pink 27
      var filterRenewal = document.querySelector(".js-renewal");

      filterRenewal.addEventListener("click", function() {
        if (crystalContainer.classList.contains("renewal")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

            // filter by pink 28
            var filterStrength = document.querySelector(".js-strength");

            filterStrength.addEventListener("click", function() {
              if (crystalContainer.classList.contains("strength")) {
                crystalContainer.style.background = "white";
              } else {
                crystalContainer.style.background = "none";
              }
            });

                  // filter by pink 29
      var filterCommunication = document.querySelector(".js-communication");

      filterCommunication.addEventListener("click", function() {
        if (crystalContainer.classList.contains("communication")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

            // filter by pink 30
            var filterWillpower = document.querySelector(".js-willpower");

            filterWillpower.addEventListener("click", function() {
              if (crystalContainer.classList.contains("willpower")) {
                crystalContainer.style.background = "white";
              } else {
                crystalContainer.style.background = "none";
              }
            });

                  // filter by pink 31
      var filterSurrender = document.querySelector(".js-surrender");

      filterSurrender.addEventListener("click", function() {
        if (crystalContainer.classList.contains("surrender")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

            // filter by pink 32
            var filterRelaxation = document.querySelector(".js-relaxation");

            filterRelaxation.addEventListener("click", function() {
              if (crystalContainer.classList.contains("relaxation")) {
                crystalContainer.style.background = "white";
              } else {
                crystalContainer.style.background = "none";
              }
            });

                  // filter by pink 33
      var filterLuck = document.querySelector(".js-luck");

      filterLuck.addEventListener("click", function() {
        if (crystalContainer.classList.contains("luck")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

            // filter by pink 34
            var filterUplifting = document.querySelector(".js-uplifting");

            filterUplifting.addEventListener("click", function() {
              if (crystalContainer.classList.contains("uplifting")) {
                crystalContainer.style.background = "white";
              } else {
                crystalContainer.style.background = "none";
              }
            });

                  // filter by pink 35
      var filterNobility = document.querySelector(".js-nobility");

      filterNobility.addEventListener("click", function() {
        if (crystalContainer.classList.contains("nobility")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

            // filter by pink 36
            var filterAdaptability = document.querySelector(".js-adaptability");

            filterAdaptability.addEventListener("click", function() {
              if (crystalContainer.classList.contains("adaptability")) {
                crystalContainer.style.background = "white";
              } else {
                crystalContainer.style.background = "none";
              }
            });

                  // filter by pink 37
      var filterProtection = document.querySelector(".js-protection");

      filterProtection.addEventListener("click", function() {
        if (crystalContainer.classList.contains("protection")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

            // filter by pink 38
            var filterProtector = document.querySelector(".js-protector");

            filterProtector.addEventListener("click", function() {
              if (crystalContainer.classList.contains("protector")) {
                crystalContainer.style.background = "white";
              } else {
                crystalContainer.style.background = "none";
              }
            });

                  // filter by pink 39
      var filterAwakening = document.querySelector(".js-awakening");

      filterAwakening.addEventListener("click", function() {
        if (crystalContainer.classList.contains("awakening")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

            // filter by pink 40
            var filterContentment = document.querySelector(".js-contentment");

            filterContentment.addEventListener("click", function() {
              if (crystalContainer.classList.contains("contentment")) {
                crystalContainer.style.background = "white";
              } else {
                crystalContainer.style.background = "none";
              }
            });

                  // filter by pink 41
      var filterProtective = document.querySelector(".js-protective");

      filterProtective.addEventListener("click", function() {
        if (crystalContainer.classList.contains("protective")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

            // filter by pink 42
            var filterFocus = document.querySelector(".js-focus");

            filterFocus.addEventListener("click", function() {
              if (crystalContainer.classList.contains("focus")) {
                crystalContainer.style.background = "white";
              } else {
                crystalContainer.style.background = "none";
              }
            });

                  // filter by pink 43
      var filterPositivity = document.querySelector(".js-positivity");

      filterPositivity.addEventListener("click", function() {
        if (crystalContainer.classList.contains("positivity")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

            // filter by pink 44
            var filterVisioning = document.querySelector(".js-visioning");

            filterVisioning.addEventListener("click", function() {
              if (crystalContainer.classList.contains("visioning")) {
                crystalContainer.style.background = "white";
              } else {
                crystalContainer.style.background = "none";
              }
            });

                  // filter by pink 45
      var filterImagination = document.querySelector(".js-imagination");

      filterImagination.addEventListener("click", function() {
        if (crystalContainer.classList.contains("imagination")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

            // filter by pink 46
            var filterSpiritual = document.querySelector(".js-spiritual");

            filterSpiritual.addEventListener("click", function() {
              if (crystalContainer.classList.contains("spiritual")) {
                crystalContainer.style.background = "white";
              } else {
                crystalContainer.style.background = "none";
              }
            });

                  // filter by pink 47
      var filterAwareness = document.querySelector(".js-awareness");

      filterAwareness.addEventListener("click", function() {
        if (crystalContainer.classList.contains("awareness")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

            // filter by pink 48
            var filterShielding = document.querySelector(".js-shielding");

            filterShielding.addEventListener("click", function() {
              if (crystalContainer.classList.contains("shielding")) {
                crystalContainer.style.background = "white";
              } else {
                crystalContainer.style.background = "none";
              }
            });

                  // filter by pink 49
      var filterGrowth = document.querySelector(".js-growth");

      filterGrowth.addEventListener("click", function() {
        if (crystalContainer.classList.contains("growth")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

            // filter by pink 50
            var filterHappiness = document.querySelector(".js-happiness");

            filterHappiness.addEventListener("click", function() {
              if (crystalContainer.classList.contains("happiness")) {
                crystalContainer.style.background = "white";
              } else {
                crystalContainer.style.background = "none";
              }
            });

                  // filter by pink 51
      var filterForgiveness = document.querySelector(".js-forgiveness");

      filterForgiveness.addEventListener("click", function() {
        if (crystalContainer.classList.contains("forgiveness")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

            // filter by pink 52
            var filterNurturing = document.querySelector(".js-nurturing");

            filterNurturing.addEventListener("click", function() {
              if (crystalContainer.classList.contains("nurturing")) {
                crystalContainer.style.background = "white";
              } else {
                crystalContainer.style.background = "none";
              }
            });

                  // filter by pink 53
      var filterIntegration = document.querySelector(".js-integration");

      filterIntegration.addEventListener("click", function() {
        if (crystalContainer.classList.contains("integration")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

            // filter by pink 54
            var filterEnergy = document.querySelector(".js-energy");

            filterEnergy.addEventListener("click", function() {
              if (crystalContainer.classList.contains("energy")) {
                crystalContainer.style.background = "white";
              } else {
                crystalContainer.style.background = "none";
              }
            });

                  // filter by pink 55
      var filterObservation = document.querySelector(".js-observation");

      filterObservation.addEventListener("click", function() {
        if (crystalContainer.classList.contains("observation")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

            // filter by pink 56
            var filterClarity = document.querySelector(".js-clarity");

            filterClarity.addEventListener("click", function() {
              if (crystalContainer.classList.contains("clarity")) {
                crystalContainer.style.background = "white";
              } else {
                crystalContainer.style.background = "none";
              }
            });

                  // filter by pink 57
      var filterPersistence = document.querySelector(".js-persistence");

      filterPersistence.addEventListener("click", function() {
        if (crystalContainer.classList.contains("persistence")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

            // filter by pink 58
            var filterInsight = document.querySelector(".js-insight");

            filterInsight.addEventListener("click", function() {
              if (crystalContainer.classList.contains("insight")) {
                crystalContainer.style.background = "white";
              } else {
                crystalContainer.style.background = "none";
              }
            });

                  // filter by pink 59
      var filterMeditation = document.querySelector(".js-meditation");

      filterMeditation.addEventListener("click", function() {
        if (crystalContainer.classList.contains("meditation")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

            // filter by pink 60
            var filterLeadership = document.querySelector(".js-leadership");

            filterLeadership.addEventListener("click", function() {
              if (crystalContainer.classList.contains("leadership")) {
                crystalContainer.style.background = "white";
              } else {
                crystalContainer.style.background = "none";
              }
            });


                  // filter by pink 61
      var filterWholeness = document.querySelector(".js-wholeness");

      filterWholeness.addEventListener("click", function() {
        if (crystalContainer.classList.contains("wholeness")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

            // filter by pink 62
            var filterJoy = document.querySelector(".js-joy");

            filterJoy.addEventListener("click", function() {
              if (crystalContainer.classList.contains("joy")) {
                crystalContainer.style.background = "white";
              } else {
                crystalContainer.style.background = "none";
              }
            });

                  // filter by pink 63
      var filterSecurity = document.querySelector(".js-security");

      filterSecurity.addEventListener("click", function() {
        if (crystalContainer.classList.contains("security")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });


     // filter reset
     var filterReset = document.querySelector(".js-reset");
     filterReset.addEventListener("click", function() {
       crystalContainer.style.background = "none";
     });
  });
}




