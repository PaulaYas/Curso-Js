var diaEstaEnsolarado = true;
var ehFinalDeSemana = true;
diaEstaEnsolarado && ehFinalDeSemana;
var vouPraPraia = diaEstaEnsolarado && ehFinalDeSemana;

var diaEstaEnsolarado = true;
var ehFinalDeSemana = false;
diaEstaEnsolarado && ehFinalDeSemana;

var diaEstaEnsolarado = false;
var ehFinalDeSemana = true;
diaEstaEnsolarado && ehFinalDeSemana;
 
var diaEstaEnsolarado = false
var ehFinalDeSemana = false
diaEstaEnsolarado && ehFinalDeSemana;

var euTenhoGasolinaNoCarro = false;
var euTenhoDinheiroParaAbastecer = true;
euTenhoGasolinaNoCarro || euTenhoDinheiroParaAbastecer;

var vouPraPraia = euTenhoGasolinaNoCarro || euTenhoDinheiroParaAbastecer;

var euTenhoGasolinaNoCarro = true;
var euTenhoDinheiroParaAbastecer = false;

var euTenhoGasolinaNoCarro = true;
var euTenhoDinheiroParaAbastecer = true;

var euTenhoGasolinaNoCarro = false;
var euTenhoDinheiroParaAbastecer = false;
console.log (euTenhoGasolinaNoCarro || euTenhoDinheiroParaAbastecer);