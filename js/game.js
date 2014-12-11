$(document).ready(function() {
    
    
    $('#sock-wrapper img').hide();
    
    reloadMessage();
    $('#game-message').show();
    
   
    $('#sock-wrapper').hover(function() {
        var posVal = $('#sock-wrapper').position();
        var topVal = posVal.top;
        var leftVal = posVal.left;
        var winHeight = $('#game-container').height()
        var winWidth = $('#game-container').width()
        while((topVal>posVal.top-150 && topVal<posVal.top+150) || (leftVal>posVal.left-150 && leftVal<posVal.left+150)) 
        { 
            topVal = (posVal.top + Math.random()*winHeight)%(winHeight-150);
            leftVal = (posVal.left + Math.random()*winWidth)%(winWidth-150);
        }
        $('#sock-wrapper').css('top',topVal);        
        $('#sock-wrapper').css('left',leftVal);
        
    });
    
    
    //Timer function
    var timeLeft = 30;
    
    function updateTime() {
        timeLeft = timeLeft - 1;
        $('#lbl-timer').text(timeLeft);
        if(timeLeft <= 10) {
            $('#lbl-timer').css('color','red');
        }
        if(timeLeft == 0) {
            $('#lbl-timer').css('color','white');
            timeLeft = 30;
            $('#lbl-timer').text(timeLeft);
            $('#sock-wrapper img').hide();
            clearInterval(timerFunction);
            gameOverMessage();
            $('#game-message').show();
        }
    }
    
    var timerFunction;
    
    $('#play-btn').click(function() {
        $('#game-message').hide();
        $('#sock-wrapper img').show();
        clearInterval(timerFunction);
        timerFunction = setInterval(updateTime, 1000);
    });
    
    $('#restart-btn').click(function() {
        clearInterval(timerFunction);
        timeLeft = 30;
        timerFunction = setInterval(updateTime, 1000);
    });
    
    function reloadMessage() {
        $('#game-message h1').text("Spot the stocking");
        $('#game-message p').html("Click on the stacking to win attractive prizes.<br/><br/>Click play to start. ");
    }
    
    function gameOverMessage() {
        $('#game-message h1').text("Game Over");
        $('#game-message p').text("Better luck next time... :)");
    }
    
    
});