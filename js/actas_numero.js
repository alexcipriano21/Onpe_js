
function buscarDepartamentos_actas(tip_elec) {
    if (tip_elec != '') {
        getPageWeb('', 'ubigeo', 'getDepartamentos', 'departamentos', '&tip_elec=' + tip_elec + '&tipoC=acta');
        window.document.getElementById("cdgoProv").value = "";
        window.document.getElementById("cdgoProv").disabled = true;
        window.document.getElementById("cdgoDist").value = "";
        window.document.getElementById("cdgoDist").disabled = true
        window.document.getElementById("actas_ubigeo").value = "-1?-1";
        window.document.getElementById("actas_ubigeo").disabled = true
        getPageWeb('', 'actas', 'limpiarDiv', 'divDetalle', '');
    }
}


function getProvinciasDepa_acta(tip_elec, modElec, dep_id) {
    if (dep_id != '') {
        getPageWeb('', 'ubigeo', 'getProvincias', 'provincias', '&tipoC=acta&tipoElec=' + tip_elec + '&modElec=' + modElec + '&dep_id=' + dep_id);
		window.document.getElementById("cdgoProv").value = "";
		window.document.getElementById("cdgoProv").disabled = false;
	}
	else
	{
		window.document.getElementById("cdgoProv").value = "";
		window.document.getElementById("cdgoProv").disabled = true;
	}
	
    window.document.getElementById("cdgoDist").value = "";
    window.document.getElementById("cdgoDist").disabled = true;
	if (window.document.getElementById("actas_ubigeo"))
	{
		window.document.getElementById("actas_ubigeo").value = "-1?-1";
		window.document.getElementById("actas_ubigeo").disabled = true;
	}
    getPageWeb('', 'actas', 'limpiarDiv', 'divDetalle', '');
}

function buscarProvincia_actas(ubigeo, tipoElec, modElec) {

    getPageWeb('', 'ubigeo', 'getDistritos', 'distritos', '&tipoC=acta&prov_id=' + ubigeo + '&tipoElec=' + tipoElec + '&modElec=');

	if (window.document.getElementById("actas_ubigeo"))
	{
		window.document.getElementById("actas_ubigeo").value = "-1?-1";
		window.document.getElementById("actas_ubigeo").disabled = true
	}
    getPageWeb('', 'actas', 'limpiarDiv', 'divDetalle', '');
}
function actas_porUbigeo_verActsPr(form, tipoElec, tipoProc, page) {
    ubigeoProv = document.getElementById("cdgoProv").value;
    ubigeoDis = document.getElementById("cdgoDist").value;
    ubigeo = ubigeoDis;
    ArrayValue = (document.getElementById("actas_ubigeo").value).split("?");
    if (ubigeoDis == '' && ubigeoProv != '') {
        ubigeo = ubigeoProv;
    }
    actasPor = ArrayValue[0];
    ubigeoLocal = ArrayValue[1];
    if (actasPor == "-1") {
        getPageWeb('', 'actas', 'limpiarDiv', 'divDetalle', '');

    } else {
		valores = "&tipoElec=" + tipoElec;
		valores += "&ubigeo=" + ubigeo;
        valores += "&actasPor=" + actasPor; 
        valores += "&ubigeoLocal=" + ubigeoLocal + '&page=' + page;
        getPageWeb('', 'actas', 'displayActas', 'divDetalle', valores);
    }
}

function verDetalleMesa(ubigeo, nroMesa, tipoElec, page) {
    parametros = "&ubigeo=" + ubigeo + "&nroMesa=" + nroMesa + '&tipoElec=' + tipoElec + '&page=' + page + '&pornumero=1';
    getPageWeb('', 'mesas', 'displayMesas', 'divDetalle', parametros)
}

function actas_bscarPrNmroMesa(form) {
    nroMesa = form["nroMesa"].value;

    if (nroMesa == "") {
        alert("Ingrese un número de acta");
        return;
    }
    if (isNaN(nroMesa)) {
        alert("Ingrese un número de acta válido");
        return;
    }
    if (nroMesa.length < 6) {
        alert("No es un número de acta válido");
        return;
    }
    parametros = "&nroMesa=" + nroMesa + "&pornumero=1&tipoElec=10&boopornumero=1";
    getPageWeb('', 'mesas', 'displayMesas', 'divDetalle', parametros);}