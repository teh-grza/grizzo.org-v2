//============================================================================
// Grizzo's Simple Blackjack Script
// GRZ_blackjack.js
// Version 0.1
// Free for any use
//============================================================================
//============================================================================
/*:
 * @plugindesc v0.4 Adds a basic Blackjack screen
 * @author Grizzo
 * @version 0.1
 *
 *
 * @param ---Suits---
 * @default
 *
 * @param Suit 1 Name
 * @desc Rename suit 1
 * Default: Spades
 * @default Spades
 *
 * @param Suit 2 Name
 * @desc Rename suit 2
 * Default: Clubs
 * @default Clubs
 *
 * @param Suit 3 Name
 * @desc Rename suit 3
 * Default: Hearts
 * @default Hearts
 *
 * @param Suit 4 Name
 * @desc Rename suit 4
 * Default: Diamonds
 * @default Diamonds
 *
 *
 * @param ---Face cards---
 * @default
 *
 *
 * @param Ace Name
 * @desc Rename aces
 * Default: Ace
 * @default Ace
 *
 * @param Jack Name
 * @desc Rename jack
 * Default: Jack
 * @default Jack
 *
 * @param Queen Name
 * @desc Rename queen
 * Default: Queen
 * @default Queen
 *
 * @param King Name
 * @desc Rename king
 * Default: King
 * @default King
 *
 *
 *
 * @param ---Images---
 * @default
 *
 *
 * @param Enable Images
 * @desc Set to true to show faces for the player and dealer
 * Default: true
 * @default true
 *

 *
 *
 *@help Plugin Command: Blackjack
 *
 *
 *
 */
(function() {

  //Initialize parameter values
  var parameters = PluginManager.parameters('GRZ_blackjack');
  var suits = new Array;
  var faces = new Array;
  var betVal = new Array;
  suits[0] = String(parameters['Suit 1 Name'] ||  "Spades");
  suits[1] = String(parameters['Suit 2 Name'] || "Clubs");
  suits[2] = String(parameters['Suit 3 Name'] || "Hearts");
  suits[3] = String(parameters['Suit 4 Name'] || "Diamonds");
  faces[0] = String(parameters['Ace Name'] || "Ace");
  faces[1] = String(parameters['Jack Name'] || "Jack");
  faces[2] = String(parameters['Queen Name'] || "Queen");
  faces[3] = String(parameters['King Name'] || "King");
  betVal[0] = 100;
  betVal[1] = 500;
  betVal[2] = 1500;
  var enable_images = parameters['Enable Images'] || true;
  var graphic_name = 'CardPlayerFaces'
  var player_score, dealer_score = 0;
  var debugging = 0;

  var Blackjack_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function (command, args) {
  	Blackjack_Interpreter_pluginCommand.call(this, command, args);
  	if (command === "Blackjack") {
      // woot
      SceneManager.push(Scene_Blackjack);
    }
  }

  function deckOfCards() {
    var suit, face;
    var deck = new Array;
    var c = 0;

    for (i = 0; i < 4; i++) {
      suit = suits[i];
      for (ii = 0; ii < 13; ii++) {
        var value = ii + 1;
        face = value;
        if (ii >= 10) {
          value = 10;
          face = faces[ii - 9];
        }
        if (value == 1) {
          value = 11;
          face = faces[0];
        }
        deck[c] = new card(String(face), i, suits[i], value);
        c++;
      }
    }
    return deck;
  };

  function shuffle(deck) {
    var i, j, k;
    var temp;
    for (i = 0; i < 30; i++) {
      for (j = 0; j < deck.length; j++) {
        k = Math.floor(Math.random() * deck.length);
        temp = deck[j];
        deck[j] = deck[k];
        deck[k] = temp;
      }
    }
    return deck;
  }

  function card(name,suit_id,suit,value) {
		this.name = name;
		this.suit_id = suit_id;
		this.suit = suit;
		this.value = value;
  }


  //-----------------------------------------------------------------------------
  // Scene_Blackjack
  //
  // Scene for the Match Card Lottery minigame
  //-----------------------------------------------------------------------------

  function Scene_Blackjack() {
  	this.initialize.apply(this, arguments);
  }

  Scene_Blackjack.prototype = Object.create(Scene_Base.prototype);
  Scene_Blackjack.prototype.constructor = Scene_Blackjack;

  Scene_Blackjack.prototype.initialize = function () {
  	Scene_Base.prototype.initialize.call(this);
  };

  Scene_Blackjack.prototype.create = function () {
    this.betIndex = 0;
    this.bet = betVal[this.betIndex];
  	Scene_Base.prototype.create.call(this);
  	this.createWindowLayer();
    this.createBlackjackWindows();
    this.deck = new deckOfCards();
    shuffle(this.deck);
  };

  Scene_Blackjack.prototype.createBlackjackWindows = function () {

    this._dealerWindow = new Window_Blackjack_Dealer();
    this._dealerWindow.x = Graphics.width - this._dealerWindow.width;
    this._dealerWindow.parent_scene = this;
    this.addWindow(this._dealerWindow);
    this._dealerWindow.drawExpression();

    this._playerWindow = new Window_Blackjack_Player();
    this._playerWindow.parent_scene = this;
    this.addWindow(this._playerWindow);

    this._commandWindow = new Window_Blackjack_Command();
    this._commandWindow.setHandler('deal', this.dealCommand.bind(this));
    this._commandWindow.setHandler('bet', this.betCommand.bind(this));
    this._commandWindow.setHandler('walk', this.walkCommand.bind(this));
    this._commandWindow.x = Graphics.width - this._commandWindow.width;
    this.addWindow(this._commandWindow);

    this._playCommandWindow = new Window_Blackjack_PlayCommand();
    this._playCommandWindow.setHandler('hit', this.hitCommand.bind(this));
    this._playCommandWindow.setHandler('stay', this.stayCommand.bind(this));
    this._playCommandWindow.setHandler('double',this.doubleCommand.bind(this));
    this._playCommandWindow.setHandler('split',this.splitCommand.bind(this));
    this._playCommandWindow.setHandler('insurance',this.insuranceCommand.bind(this));
    this._playCommandWindow.x = Graphics.width - this._playCommandWindow.width;
    this.addWindow(this._playCommandWindow);

    this._gold_window = new Window_Gold(0,0);
    this._gold_window.y = Graphics.height - 165;
    this.addWindow(this._gold_window);

    this._outcome_window = new Window_Outcome(Graphics.width - this._gold_window.width,Graphics.height / 2 - 70, this._gold_window.width);
    this.addWindow(this._outcome_window);

    this.game_count = 0;

  }


  Scene_Blackjack.prototype.resetAllVars = function () {

    this.bet = this._commandWindow._bet;
    this.hasInsurance = false;
    this._outcome_window.visible = false;
    this._playCommandWindow._hitAllow = true;
    this._playCommandWindow.splitAllow = false;
    this._playCommandWindow.ddAllow = false;

    this._playerWindow.resetVars();
    this._dealerWindow.resetVars();
  }

  Scene_Blackjack.prototype.dealCommand = function () {
    this.game_count++;

    this.resetAllVars();
    this.game_in_progress = true;
    $gameParty.gainGold(-(this.bet));
    this._gold_window.refresh();
    this._commandWindow.deactivate();
    this._commandWindow.close();
    // player draw card 1
    if (this.game_count > 0) {
      this._playerWindow.takeCard(this.deck.shift());
    } else {
      var drawarama = new card("Test", 1, "Test", 10);
      this._playerWindow.takeCard(drawarama);
      this.deck.shift();
    }

    // dealer draw card 1
    this._dealerWindow.takeCard(this.deck.shift());
    if (this._dealerWindow.hand[0].value == 11) {
      this._dealerWindow.showing_ace = true;
      this._playCommandWindow.insuranceAllow = true;
    }
    // player draw card 2
    if (this.game_count > 0) {
      this._playerWindow.takeCard(this.deck.shift());
    } else {
      var drawarama = new card("Test", 1, "Test", 10);
      this._playerWindow.takeCard(drawarama);
      this.deck.shift();
    }

    if (this._playerWindow.handValue == 21) {
      this._playerWindow.blackjack = 1;
    }
    if (this._playerWindow.hands[0][0].name == this._playerWindow.hands[0][1].name) {
      this._playCommandWindow.splitAllow = true;
      this._playCommandWindow.refresh();
    }
    if (this._playerWindow.handValue >= 9 && this._playerWindow.handValue <= 11) {
      this._playCommandWindow.ddAllow = true;
      this._playCommandWindow.refresh();
    }
    this._playerWindow.refresh();
    // dealer draw card 2
    this._dealerWindow.takeCard(this.deck.shift());
    if ((this._dealerWindow.handValue == 21)) {
      this._dealerWindow.blackjack = 1;
    }
    this._dealerWindow.refresh();

    if (this._playerWindow.blackjack == 1) {
      this.checkEndgame();
    } else if (this._playCommandWindow.insuranceAllow == false && this._dealerWindow.blackjack) {
      this.checkEndgame();
    } else {
      this._playerWindow.logVars();
      this._dealerWindow.logVars();
      this._playCommandWindow.select(0);
      this._playCommandWindow.activate();
    	this._playCommandWindow.open();
    }
  }

  Scene_Blackjack.prototype.doubleCommand = function () {
    this._playCommandWindow.deactivate();
    $gameParty.gainGold(-(this.bet));
    this.bet = this.bet * 2;
    this.hitCommand();
    this.checkEndgame();
  }

  Scene_Blackjack.prototype.insuranceCommand = function () {
    this._playCommandWindow.deactivate();
    $gameParty.gainGold(-(this.bet/2));
    this._gold_window.refresh();
    this._playCommandWindow.insuranceAllow = false;
    this._playCommandWindow.refresh();
    this._playCommandWindow.select(0);
    this._playCommandWindow.activate();
  }

  Scene_Blackjack.prototype.splitCommand = function () {
    this._playCommandWindow.splitAllow = false;
    this._playCommandWindow.deactivate();
    $gameParty.gainGold(-(this.bet));
    this._gold_window.refresh();
    this._playerWindow.hands[1] = Array(this._playerWindow.hands[0].pop());
    this._playerWindow.hands[0].splice(1,1);
    this._playerWindow.handValue = this._playerWindow.hands[0][0].value;
    this._playerWindow.splitHands = true;
    this._playerWindow.refresh();
    this._playCommandWindow.refresh();
    this._playCommandWindow.select(0);
    this._playCommandWindow.activate();
  }

  Scene_Blackjack.prototype.hitCommand = function () {
    if (this._dealerWindow.blackjack !== 1) {
      this._playCommandWindow.insuranceAllow = false;
      this._playCommandWindow.splitAllow = false;
      this._playCommandWindow.ddAllow = false;
        this._playCommandWindow.deactivate();
        this._playerWindow.takeCard(this.deck.shift());
        this._playerWindow.refresh();
        if (this._playerWindow.handValue > 21) {
          if (this._playerWindow.ace_count > 0) {
            ace_found = false;
            for (i = 0; i < this._playerWindow.hands[0].length; i++) {
              if (this._playerWindow.hands[0][i].value == 11 && !ace_found) {
                this._playerWindow.hands[0][i].value = 1;
                this._playerWindow.handValue -= 10;
                ace_found = true;
                this._playerWindow.ace_count -= 1;
                this._playerWindow.refresh();
              }
            }
          }
          if (this._playerWindow.handValue > 21) {
            this._playerWindow.bust = true;
          }
        }
        else if (this._playerWindow.handValue == 21) {
          this._playerWindow.stay = true;
        }
    } else {
      // dealer has blackjack
      this._playerWindow.stay = true;
      // player can't draw here; instead checkEndgame() will see if they took insurance
    }

    if (this._playerWindow.bust == false && this._playerWindow.stay == false) {
      this._playerWindow.logVars();
      this._dealerWindow.logVars();
      this._playCommandWindow.refresh();
      this._playCommandWindow.select(0);
      this._playCommandWindow.activate();
    } else {
      this.checkEndgame();
    }
  }

  Scene_Blackjack.prototype.stayCommand = function () {
    this.checkEndgame();
  }

  Scene_Blackjack.prototype.checkEndgame = function () {
    this._playerWindow.logVars();
    this._dealerWindow.logVars();
    if (this._playerWindow.splitHands == true) {
      this._playerWindow.splitValue = this._playerWindow.handValue;
      var split_hand = this._playerWindow.hands.pop();
      this._playerWindow.hands = new Array();
      this._playerWindow.hands[0] = split_hand;
      this._playerWindow.splitHands = false;
      this._playerWindow.handValue = this._playerWindow.hands[0][0].value;
      this._playerWindow.refresh();
      this._playCommandWindow.refresh();
      this._playCommandWindow.select(0);
      this._playCommandWindow.activate();
      this._playCommandWindow.open();
    } else {
      this._playCommandWindow.close();
      this._outcome_window.contents.clear();
      this._dealerWindow.gamePhase = 1;

      // dealer has two aces:
      if (this._dealerWindow.handValue > 21) {
        this._dealerWindow.hand[1].value = 1;
        this._dealerWindow.handValue -= 10;
      }
      if (this._dealerWindow.handValue < 17 && this._playerWindow.bust == false && this._playerWindow.blackjack == false) {
        while (this._dealerWindow.handValue < 17) {
          this._dealerWindow.takeCard(this.deck.shift());
          if (this._dealerWindow.handValue > 21) {
            if (this._dealerWindow.ace_count > 0) {
              ace_found = false;
              for (i = 0; i < this._dealerWindow.hand.length; i++) {
                if (this._dealerWindow.hand[i].value == 11 && !ace_found) {
                  this._dealerWindow.hand[i].value = 1;
                  this._dealerWindow.handValue -= 10;
                  ace_found = true;
                  this._dealerWindow.ace_count -= 1;
                }
              }
            }
          }
        }
      }
      this._dealerWindow.refresh();

      if (this._dealerWindow.handValue > 21) {
        this._dealerWindow.bust = true;
      }
      if (this._dealerWindow.blackjack == true && this._playerWindow.blackjack == false) {
        if (this.insurance == true) {
          this._outcome_window.text = "Insured for "+this.bet;
          $gameParty.gainGold(this.bet);
          this._gold_window.refresh();
        } else {
          this._outcome_window.text = "Dealer wins";
        }
      }
      if ((this._dealerWindow.handValue > this._playerWindow.handValue && this._dealerWindow.bust == false) || this._playerWindow.bust == true) {
        this._outcome_window.text = "Dealer wins";
      } else if (this._dealerWindow.handValue == this._playerWindow.handValue) {
        this._outcome_window.text = "Push | Bet refund";
        $gameParty.gainGold(this.bet);
        this._gold_window.refresh();
      } else {
        if (this._playerWindow.blackjack) {
          this._outcome_window.text = "You win! +"+(this.bet * 2.5);
          $gameParty.gainGold(this.bet * 2.5);
          this._gold_window.refresh();
        } else {
          this._playerWindow.expression_index = 0;
          this._outcome_window.text = "You win! +"+(this.bet * 2);
          $gameParty.gainGold(this.bet * 2);
          this._gold_window.refresh();
          this._playerWindow.refresh();
        }
      }
      if ((this._playerWindow.splitValue > this._dealerWindow.handValue) || (this._dealerWindow.bust == true && this._playerWindow.splitValue > 0)) {
        this._playerWindow.bonus = "BONUS +"+(this.bet * 2);
        $gameParty.gainGold(this.bet * 2);
        this._gold_window.refresh();
        this._playerWindow.refresh();
      }
      if (this._playerWindow.splitValue == this._dealerWindow.handValue) {
        this._playerWindow.bonus = "PUSH +"+(this.bet);
        $gameParty.gainGold(this.bet);
        this._gold_window.refresh();
        this._playerWindow.refresh();
      }
      this._gold_window.refresh();
      this._outcome_window.refresh();

      this._outcome_window.visible = true;

      this.deck = new deckOfCards();
      shuffle(this.deck);

      this._commandWindow.select(0);
      this._commandWindow.refresh();
      this._commandWindow.activate();
      this._commandWindow.open();
    }

  }

  Scene_Blackjack.prototype.betCommand = function () {
    this.betIndex++;
    if (this.betIndex >= betVal.length) {
      this.betIndex = 0;
    }
    this.bet = betVal[this.betIndex];
    this._commandWindow._bet = this.bet;
    this._commandWindow.refresh();
    this._commandWindow.activate();
  }

  Scene_Blackjack.prototype.walkCommand = function () {
  	this.popScene();
  }


  //-----------------------------------------------------------------------------
  // Dealer Window
  //-----------------------------------------------------------------------------

  function Window_Blackjack_Dealer() {
    this.initialize.apply(this, arguments);
  }

  Window_Blackjack_Dealer.prototype = Object.create(Window_Base.prototype);
  Window_Blackjack_Dealer.prototype.constructor = Window_Blackjack_Dealer;

  Window_Blackjack_Dealer.prototype.initialize = function() {
    var width = Graphics.width;
  	var height = 225;
    this.face_index = 4;
  	Window_Base.prototype.initialize.call(this, 0, 0, width, height);
    this.resetVars();
  };

  Window_Blackjack_Dealer.prototype.draw = function() {
    this.contents.clear();
    this.drawExpression();
  };

  Window_Blackjack_Dealer.prototype.drawExpression = function() {
    if (enable_images) {
      var face_image = this._graphicBitmap = ImageManager.loadFace(graphic_name);
      face_image.addLoadListener(function() {
        this.drawFace(graphic_name, this.face_index, 0, 50);
      }.bind(this));
    } else {
      this.drawText("Dealer Cards", 0, 0, this.width, 'center');
    }
  };

  Window_Blackjack_Dealer.prototype.takeCard = function(card) {
    this.hand[this.hand.length] = card;
    this.handValue += card.value;
    if (card.value == 11) {
      this.ace_count++;
    }
  };

  Window_Blackjack_Dealer.prototype.drawCardName = function(card, x, y, width) {

    this.contents.fontSize = 11;
		this.drawText(card.name + " of", x-10, y-40, width, 'center');
		this.drawText(card.suit, x-10, y-28, width, 'center');
    this.contents.fontSize = this.standardFontSize();

    var card_name = card.name.toLowerCase();
    var card_suit = card.suit.toLowerCase();
    var card_picture = ImageManager.loadNormalBitmap('img/cards/'+ card_name + "_of_" + card_suit +'.png', 0);// this.parent_scene.showCard(card,73,108,x,y);
    card_picture.addLoadListener(function() {
     this.contents.blt(card_picture, 0, 0, 73, 108, x, y);
    }.bind(this));
  };


  Window_Blackjack_Dealer.prototype.resetVars = function() {
    this.hand = new Array();
    this.handValue = 0;
    this.blackjack = false;
    this.bust = false;
    this.gamePhase = 0;
    this.showing_ace = false;
    this.ace_count = 0;
  };

  Window_Blackjack_Dealer.prototype.logVars = function () {
    if (debugging) {
      console.log("dealer hand: "+this.hand);
      console.log("dealer handValue: "+this.handValue);
      console.log("dealer blackjack: "+this.blackjack);
      console.log("dealer bust: "+this.bust);
      console.log("dealer gamePhase: "+this.gamePhase);
      console.log("dealer showing_ace: "+this.showing_ace);
      console.log("dealer ace_count: "+this.ace_count);
    }
  }

  Window_Blackjack_Dealer.prototype.refresh = function() {
  	this.contents.clear();
    this.showCards(this.hand);
    this.drawExpression();
  };

  Window_Blackjack_Dealer.prototype.showCards = function(hand) {
    var card_value = 0;
    var width = 90;
    for (c = 0; c < hand.length; c++) {
      card_value += hand[c].value;
      x = (Graphics.width / 2) - (hand.length*(width*.5)-10) + (c * width);
      if (c == 1 && this.gamePhase == 0) {
         this.drawText("---", x, 110, width, 'center');
      } else {
        this.drawCardName(hand[c], x, 80, width);
      }
    }
    if (this.handValue > 0) {
      this.contents.fontSize = 40;
      var tempVal = this.handValue;
      if (this.gamePhase == 0 && hand.length > 1 && this.blackjack == 0) {
        tempVal -= hand[1].value;
        tempVal = String(tempVal) + "+";
      }
      this.drawText(tempVal, 8, 0, 100);
      this.resetFontSettings();
      if (this.showing_ace == 1 && this.gamePhase == 0) {
        this.changeTextColor( this.textColor(14) );
        this.drawText("ACE SHOWING", 8, 20, 120);
        this.resetTextColor();
      }
      if (this.blackjack == 1 && this.gamePhase == 1) {
        this.changeTextColor( this.textColor(2) );
        this.drawText("BLACKJACK", 8, 20, 120);
        this.resetTextColor();
      }
      if (this.handValue > 21 && this.gamePhase == 1) {
        this.changeTextColor( this.textColor(10) );
        this.drawText("BUST", 8, 24, 120);
        this.resetTextColor();
      }
    }
  }


  //-----------------------------------------------------------------------------
  // Window_Blackjack_Player
  //-----------------------------------------------------------------------------

  function Window_Blackjack_Player() {
    this.initialize.apply(this, arguments);
  }

  Window_Blackjack_Player.prototype = Object.create(Window_Base.prototype);
  Window_Blackjack_Player.prototype.constructor = Window_Blackjack_Player;

  Window_Blackjack_Player.prototype.initialize = function() {
    this.handValue = 0;
    var width = Graphics.width;
  	var height = 225;
  	Window_Base.prototype.initialize.call(this, 0, Graphics.height - height - 92, width, height);
    this.resetVars();
    this.expression_index = 0;
    this.drawExpression();
  };

  Window_Blackjack_Player.prototype.drawExpression = function() {
    if (enable_images) {
      var face_image = this._graphicBitmap = ImageManager.loadFace(graphic_name);
      face_image.addLoadListener(function() {
        this.drawFace(graphic_name, this.expression_index, this.width - (150 + this.padding), 50);
      }.bind(this));
    } else {
    	this.drawText("Your cards", 0, 0, this.width, 'center');
    }
  };

  Window_Blackjack_Player.prototype.resetVars = function() {
    this.hands = new Array();
    this.handCount = 1;
    this.hands[0] = new Array();
    this.handValue = 0;
    this.blackjack = false;
    this.bust = false;
    this.stay = false;
    this.splitHands = false;
    this.splitValue = 0;
    this.split_win = 0;
    this.ace_count = 0;
    this.bonus = 0;
  };

  Window_Blackjack_Player.prototype.logVars = function () {
    if (debugging) {
      console.log("player hands: "+this.hands);
      console.log("player handCount: "+this.handCount);
      console.log("player handValue: "+this.handValue);
      console.log("player blackjack: "+this.blackjack);
      console.log("player bust: "+this.bust);
      console.log("player stay: "+this.stay);
      console.log("player splitHands: "+this.splitHands);
      console.log("player splitValue: "+this.splitValue);
      console.log("player split_win: "+this.split_win);
      console.log("player ace_count: "+this.ace_count);
      console.log("player bonus: "+this.bonus);
    }
  }

  Window_Blackjack_Player.prototype.takeCard = function(card) {
    this.expression_index = 1;
    this.hands[0][this.hands[0].length] = card;
    this.handValue += card.value;
    if (card.value == 11) {
      this.ace_count++;
    }
  };

  Window_Blackjack_Player.prototype.drawCardName = function(card, x, y, width) {

    this.contents.fontSize = 12;
		this.drawText(card.name + " of", x-10, y-40, width, 'center');
		this.drawText(card.suit, x-10, y-28, width, 'center');
    this.contents.fontSize = this.standardFontSize();

    var card_name = card.name.toLowerCase();
    var card_suit = card.suit.toLowerCase();
    var card_picture = ImageManager.loadNormalBitmap('img/cards/'+ card_name + "_of_" + card_suit +'.png', 0);// this.parent_scene.showCard(card,73,108,x,y);
    card_picture.addLoadListener(function() {
     this.contents.blt(card_picture, 0, 0, 73, 108, x, y);
    }.bind(this));
  };

  Window_Blackjack_Player.prototype.refresh = function() {
  	this.contents.clear();
    this.showCards(this.hands[0]);

    if (this.handValue > 0) {
      this.contents.fontSize = 40;
      this.drawText(this.handValue , 8, 0, 100);
      this.resetFontSettings();
    }
    if (this.blackjack == true) {
      this.expression_index = 2;
      this.changeTextColor( this.textColor(2) );
      this.drawText("BLACKJACK", 8, 24, 120);
      this.resetTextColor();
    } else if (this.splitHands == true || this.splitValue > 0) {
      this.changeTextColor( this.textColor(2) );
      var string = "SPLIT HAND";
      if (this.splitValue > 0) {
        string = "SPLIT - "+this.splitValue;
      }
      this.drawText(string, 8, 24, 120);
      this.resetTextColor();
    } else if (this.handValue > 21) {
      this.expression_index = 3;
      this.changeTextColor( this.textColor(10) );
      this.drawText("BUST", 8, 24, 120);
      this.resetTextColor();
    }
    if (this.bonus) {
      this.changeTextColor( this.textColor(2) );
      this.drawText(this.bonus, 8, 42, 120);
      this.resetTextColor();
    }
    this.drawExpression();
  };

  Window_Blackjack_Player.prototype.showCards = function(hand) {
  //  var card_value = 0;
    var width = 90;
    for (c = 0; c < hand.length; c++) {
      //card_value += hand[c].value;
      x = (Graphics.width / 2) - (hand.length*(width*.5)-10) + (c * width);
      this.drawCardName(hand[c], x, 80, width);
    }
  }


  //-----------------------------------------------------------------------------
  // Window_Outcome
  //-----------------------------------------------------------------------------

  function Window_Outcome() {
      this.initialize.apply(this, arguments);
  }

  Window_Outcome.prototype = Object.create(Window_Base.prototype);
  Window_Outcome.prototype.constructor = Window_Outcome;

  Window_Outcome.prototype.initialize = function(x, y, width) {
    this.text = "";
    height = this.fittingHeight(1);
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.visible = false;
  };
  Window_Outcome.prototype.refresh = function() {
    this.drawText(this.text, 0, 0, this.width - 28, 'center');
  };

  //-----------------------------------------------------------------------------
  // Window_Blackjack_Command
  //-----------------------------------------------------------------------------

  function Window_Blackjack_Command() {
      this.initialize.apply(this, arguments);
  }

  Window_Blackjack_Command.prototype = Object.create(Window_Command.prototype);
  Window_Blackjack_Command.prototype.constructor = Window_Blackjack_Command;

  Window_Blackjack_Command.prototype.initialize = function (x, y) {
    this._bet = betVal[0];
    this._dealAllow = true;
    this._adjustBetAllow = false;
    this.ddAllow = false;
    Window_Command.prototype.initialize.call(this, x, Graphics.height - 92);
  };

  Window_Blackjack_Command.prototype.makeCommandList = function () {
      this.addCommand("Deal", 'deal', $gameParty.gold() >= this._bet);
      this.addCommand("Bet: "+this._bet, 'bet');
      this.addCommand("Leave", 'walk');
  };

  Window_Blackjack_Command.prototype.itemTextAlign = function() {
      return 'center';
  };

  Window_Blackjack_Command.prototype.windowWidth = function () {
      return Graphics.boxWidth;
  };

  Window_Blackjack_Command.prototype.maxCols = function () {
      return 3;
  };


  //-----------------------------------------------------------------------------
  // Window_Blackjack_PlayCommand
  //-----------------------------------------------------------------------------

  function Window_Blackjack_PlayCommand() {
  	this.initialize.apply(this, arguments);
  }

  Window_Blackjack_PlayCommand.prototype = Object.create(Window_Command.prototype);
  Window_Blackjack_PlayCommand.prototype.constructor = Window_Blackjack_PlayCommand;

  Window_Blackjack_PlayCommand.prototype.initialize = function (x, y) {
    this._hitAllow = true;
    this.splitAllow = false;
    this.insuranceAllow = false;
    this.ddAllow = false;
    Window_Command.prototype.initialize.call(this, x, Graphics.height - 92)
  	this.openness = 0;
  };

  Window_Blackjack_PlayCommand.prototype.makeCommandList = function () {
    this.addCommand("Hit", 'hit', this._hitAllow);
    this.addCommand("Stay", 'stay');
    this.addCommand("Insurance", 'insurance',  this.insuranceAllow);
    this.addCommand("Split", 'split',  this.splitAllow);
    this.addCommand("Double Down", 'double', this.ddAllow);
    this.addCommand("Walk away", 'walk');
  };

  Window_Blackjack_PlayCommand.prototype.itemTextAlign = function() {  return 'center';  };
  Window_Blackjack_PlayCommand.prototype.windowWidth = function () { return Graphics.boxWidth; };
  Window_Blackjack_PlayCommand.prototype.maxCols = function () { return 3 };

})();
