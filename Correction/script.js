$(document).ready(function() {
/* Exo 1
-Attribuez la taille de police, la famille de polices et la couleur d'arrière-plan à une balise <p> à l'aide de JQuery.

Exo 2
-Créez une balise div et elle doit afficher un message de bienvenue (en utilisant JQuery)
-Créez deux balises div et attribuez-leur du jaune comme couleur d'arrière-plan à l'aide de JQuery.
-Afficher et masquer le message affiché dans la balise div en cliquant sur deux boutons "afficher" et "masquer". Vous pouvez utiliser Jquery show hide.
-Afficher et masquer le message à l'aide d'un seul bouton. Vous pouvez utiliser Jquery toggle().
-Créez une balise div et, en cliquant sur un bouton, elle devrait afficher votre nom.

Exo 3
-Créez une zone de texte et un bouton. En cliquant sur le bouton, la longueur du texte saisi dans la zone de texte sera affichée.
-Dans le code ci-dessus, affichez le compteur au fur et à mesure de la saisie du texte.
-Utilisez une barre de progression pour afficher le nombre de texte saisi.

Exo 1*/

$("p:first").css('font-size', '40px').css('font-family', 'Georgia, serif').css('background-color', 'red');

/*Exo 2*/
$("div:first").html('Bienvenue exercice 2');
$(".bgyellow").css('background-color', 'yellow');

$("#btnAfficher").on( "click", function() {
    $("div:first").show();
});
$("#btnMasquer").on( "click", function() {
    $("div:first").hide();
});

$("#btnAfficherMasquer").on( "click", function() {
    $("#enUnBouton").toggle();
});

$("#afficherNom").on( "click", function() {
    $("#monNom").append("Philippe Garcia<br>");
});

/*Exo 3*/
$("textarea").attr('maxlength', '50');
$("textarea").keyup(function(){
    let valeurTextarea2 = $("textarea").val();
    $("#d1").html(valeurTextarea2.length);
    $("progress").attr("value", valeurTextarea2.length);
})

$("progress").attr({
    value:0,
    max:50
})


})