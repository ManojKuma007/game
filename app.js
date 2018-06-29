var app = angular.module("MYApp", []);
app.controller("GameController", ['$scope', function ($scope) {

    var words = ["bossbaby", "babydriver", "interstellar", "quiteplace","gonegirl","inception","sanju"];
    $scope.incorrectLettersChosen = [];
    $scope.correctLettersChosen = [];
    $scope.guess = 6;
    $scope.displayWord = '';
    $scope.input = function () {
        letter: ''
    }
    var selectRandomWord = function () {
        var index = Math.floor(Math.random() * words.length);
        return words[index];
    }
    var newGame = function () {
        $scope.incorrectLettersChosen = [];
        $scope.correctLettersChosen = [];
        $scope.guess = 6;
        $scope.displayWord = '';
        selectedWord = selectRandomWord();
        console.log(selectedWord);
        var tempDisplayWord = '';
        for (var i = 0; i < selectedWord.length; i++) {
            tempDisplayWord += '*';
        }
        console.log(tempDisplayWord);
        $scope.displayWord = tempDisplayWord;


    }
    $scope.letterChosen = function () {
        //        console.log("iam called");
        for (var i = 0; i < $scope.correctLettersChosen.length; i++) {
            if ($scope.correctLettersChosen[i].toLowerCase() == $scope.input.letter.toLowerCase()) {
                $scope.input.letter = "";
                return;
            }
        }
        for (var i = 0; i < $scope.incorrectLettersChosen.length; i++) {
            if ($scope.incorrectLettersChosen[i].toLowerCase() == $scope.input.letter.toLowerCase()) {
                $scope.input.letter = "";
                return;
            }
        }
        var correct = false;
        for (var i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i].toLowerCase() == $scope.input.letter.toLowerCase()) {
                $scope.displayWord = $scope.displayWord.slice(0, i) + $scope.input.letter.toLowerCase() + $scope.displayWord.slice(i+1);
                console.log( $scope.displayWord);
                correct = true;
            }
        }
        if(correct){
            $scope.correctLettersChosen.push($scope.input.letter.toLowerCase());
            console.log("im called");
        }else{
            $scope.guess--;
            $scope.incorrectLettersChosen.push($scope.input.letter.toLowerCase());
        }
        $scope.input.letter = "";
        if($scope.guess==0){
            alert("you are doomed");
            newGame();
        }
        if($scope.displayWord.indexOf("*")==-1){
            alert("you won!!");
             newGame();
        }
    }
    newGame();
}]);