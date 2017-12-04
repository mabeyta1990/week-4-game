//FUNCTION THAT STARTS GAME
  $(document).ready(function() {

    //VARIABLE OF THE CHARACTER AND GAME FUNCTIONS
    let character;
    let opponent;
    selectedCharacter = false;
    let selectedEnemyCharacter = false;
    let health;
    let attack;
    let counterAttack;
    let counter = 0;
    let currCharacter;
    let currOpponent;
    let fighter1 = $(`<div class="fighter1Enemy"><img src="./assets/images/yoda.jpg" alt="yoda" height="150px" width="250px"><span>Yoda - HP 150</span></div>`);
    let fighter2 = $(`<div class="fighter2Enemy"><img src="./assets/images/ObiWanKenobi.jpg" alt="obiwankenobi" height="150px" width="250px"><span>Obi Wan Kenobi - HP 125</span></div>`);
    let fighter3 = $(`<div class="fighter3Enemy"><img src="./assets/images/DarthMaul.jpg" alt="darthmaul" height="150px" width="250px"><span>Darth Maul - HP 120</span></div>`);
    let fighter4 = $(`<div class="fighter4Enemy"><img src="./assets/images/DarthVader.jpg" alt="darthvader" height="150px" width="250px"><span>Darth Vader - HP 140</span></div>`);

    //ARRAY WITH ALL OF MY PLAYABLE CHARACTERS
    const characters = {
    yoda: {
        name: 'Yoda',
        health: 150,
        attack: 15,
        counterAttack: 20,
    },
    obiwankenobi: {
        name: 'Obi Wan Kenobi',
        health: 125,
        attack: 9,
        counterAttack: 6,
    },
    darthmaul: {
        name: 'Darth Maul',
        health: 120,
        attack: 10,
        counterAttack: 5,
    },
    darthvader: {
        name: 'Darth Vader',
        health: 140,
        attack: 20,
        counterAttack: 15,
    }
    };


//START GAME FUNCTION ON START BUTTON
$('#start').on('click', function () {
    alert("May The Force Be With You ");

    $('#start').hide();
    playGame();
});

//PLAY GAME FUNCTION
function playGame () {
    choseCharacter();
    choseEnemyCharacter();
    attackFunction();
}

//CHOOSE CHARACTER FUNCTION
function choseCharacter (char) {
//FIGHTER 1 FUNCTIONS
    $('.fighter1').on('click', function (){
        if(selectedCharacter == false) {
            selectedCharacter = true;
        };
        choseCharacter('yoda');
        $('.fighterContainer').empty("slow");
        $(".yourCharacter").append(`<div class="fighter1"><img src="./assets/images/yoda.jpg" alt="yoda" height="150px" width="250px"><span>Yoda - HP 150</span></div>`);
        $('.enemyCharacter').append(fighter2, fighter3, fighter4);
        currCharacter = characters.yoda;
    });
//FIGHTER 2
    $('.fighter2').on('click', function (){
        if(selectedCharacter == false) {
            selectedCharacter = true;
        };
        choseCharacter('obiwankenobi');
        $('.fighterContainer').empty("slow");
        $('.yourCharacter').append(`<div class="fighter2"><img src="./assets/images/ObiWanKenobi.jpg" alt="obiwankenobi" height="150px" width="250px"><span>Obi Wan Kenobi - HP 125</span></div>`);
        $('.enemyCharacter').append(fighter1, fighter3, fighter4);    
        currCharacter = characters.obiwankenobi;
    });
//FIGHTER 3
    $('.fighter3').on('click', function (){
        if(selectedCharacter == false) {
            selectedCharacter = true;
        };
        choseCharacter('darthmaul');
        $('.fighterContainer').empty("slow");
        $('.yourCharacter').append(`<div class="fighter3"><img src="./assets/images/DarthMaul.jpg" alt="darthmaul" height="150px" width="250px"><span>Darth Maul - HP 120</span></div>`);
        $('.enemyCharacter').append(fighter1, fighter2, fighter4);
        currCharacter = characters.darthmaul;
    });
//FIGHTER4
    $('.fighter4').on('click', function (){
        if(selectedCharacter == false) {
            selectedCharacter = true;
        };
        $('.fighterContainer').empty("slow");
        $('.yourCharacter').append(`<div class="fighter4"><img src="./assets/images/DarthVader.jpg" alt="darthvader" height="150px" width="250px"><span>Darth Vader - HP 140</span></div>`)
        $('.enemyCharacter').append(fighter1, fighter2, fighter3);
        currCharacter = characters.darthvader;
    });
    character = char;
    console.log(character);
    console.log(selectedCharacter);
};   


//CHOOSE ENEMY CHARACTER FUNCTION
function choseEnemyCharacter (char1) {
    fighter1.on('click', function() {
        console.log('yoda');
                if (selectedEnemyCharacter == false) {
                    selectedEnemyCharacter = true;
                }
                choseEnemyCharacter('yoda');
                $('.enemyCharacter').empty();
                $('.enemyCharacter').append(fighter1);
                $('.yourCharacter h2').contents().first().replaceWith('BATTLE');
                $('body').css({'margin-left': '10%'});
                currOpponent = characters.yoda;    
            });
        fighter2.on('click', function() {
        console.log('Obi Wan');
                if (selectedEnemyCharacter == false) {
                    selectedEnemyCharacter = true;
                }
                choseEnemyCharacter('obiwankenobi');
                $('.enemyCharacter').empty();
                $('.enemyCharacter').append(fighter2);
                $('.yourCharacter h2').contents().first().replaceWith('BATTLE');
                $('body').css({'margin-left': '10%'});
                currOpponent = characters.obiwankenobi;
            });
        fighter3.on('click', function() {
        console.log('Darth Maul');
                if (selectedEnemyCharacter == false) {
                    selectedEnemyCharacter = true;
                }
                choseEnemyCharacter('darthmaul');
                $('.enemyCharacter').empty();
                $('.enemyCharacter').append(fighter3);
                $('.yourCharacter h2').contents().first().replaceWith('BATTLE');
                $('body').css({'margin-left': '10%'});
                currOpponent = characters.darthmaul;

            });    
        fighter4.on('click', function() {
            console.log('Darth Vader');
                    if (selectedEnemyCharacter == false) {
                        selectedEnemyCharacter = true;
                    }
                    choseEnemyCharacter('darthvader');
                    $('.enemyCharacter').empty();
                    $('.enemyCharacter').append(fighter4);
                    $('.yourCharacter h2').contents().first().replaceWith('BATTLE');
                    $('body').css({'margin-left': '10%'});
                    currOpponent = characters.darthvader;
                });
            opponent = char1;
            console.log(opponent);
            console.log(selectedEnemyCharacter);    
            };
//ATTACK FUNCTION
function attackFunction () {
    $('#attackButton').on('click', function() {  
        currOpponent.health = currOpponent.health - currCharacter.attack;
        console.log(currOpponent.name, currOpponent.health);
        $('.yourCharacter span').contents().first().replaceWith(currCharacter.name + ' - HP ' + currCharacter.health);
        if(currOpponent.health <= 0){
            alert('The Force Was Strong With You');
            playGame();
        }
        currCharacter.health = currCharacter.health - currOpponent.counterAttack;
        console.log(currCharacter.name, currCharacter.health);
        $('.enemyCharacter span').contents().first().replaceWith(currOpponent.name + ' - HP ' + currOpponent.health);
        if (currCharacter.health <= 0){
            alert('The Force was Not With you!');
            playGame();
        };
    });
    
}; 


});