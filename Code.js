function doGet() {
  const html = HtmlService.createTemplateFromFile('Pedido')
  .evaluate();
  return html;
}

function getPedidos() {
  const SS = SpreadsheetApp.getActiveSpreadsheet();
  const sheetPedidos = SS.getSheetByName("files");
  const pedidos = sheetPedidos.getRange("A2:A").getValues().flat().filter(Boolean); 
  pedidos.reverse();
  console.log("getPedido=",pedidos)
  return pedidos;
}

function buscarPedido(pedidoNumero) {
  const SS = SpreadsheetApp.getActiveSpreadsheet();
  const sheetPedidos = SS.getSheetByName("files");
  const pedidos = sheetPedidos.getDataRange().getDisplayValues();
  let pedidoEncontrado = null;
  pedidos.forEach(pedido => {
    if (pedido[0] === pedidoNumero) {
      pedidoEncontrado = pedido;
      return; 
    }
  });
  console.log("pedidoEncontrado", pedidoEncontrado);
  return pedidoEncontrado;
}

function enviarPedidoAHoja(pedido) {
  const libroId = "1nYiZguT11wWQRJ4Vurt3YytyHw7sErxbz_ZJ_BYgwkE"; 
  const hoja = SpreadsheetApp.openById(libroId).getSheetByName("fileDownLoad");
  
  hoja.getRange("A2").setValue(pedido[0]);
}


function obtenerEnlaceDescarga() {
  const BD_ID = '1nYiZguT11wWQRJ4Vurt3YytyHw7sErxbz_ZJ_BYgwkE';
  const SS = SpreadsheetApp.openById(BD_ID);
  const rangeDataDow = SS.getSheetByName('linkDonwload').getRange('E1');
  return rangeDataDow.getValue();
}