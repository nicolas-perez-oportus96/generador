const { fromFileAsync } = require ('xlsx-populate');
const { ipcRenderer } = require('electron')

const {getTrabajadores} = require('../database');

const step1btn = document.getElementById('step1');
const step2btn = document.getElementById('step2');
const step3btn = document.getElementById('step3');
const excelBtn = document.getElementById('excel');

step1btn.addEventListener('click', (event) => {
    ipcRenderer.send('show-login')
})

step2btn.addEventListener('click', (event) => {
    ipcRenderer.send('show-info')
})

step3btn.addEventListener('click', (event) => {
    ipcRenderer.send('show-trabajadores')
})

// async function excel() {
//     var workbook = new ExcelJS.Workbook();
//     await workbook.xlsx.readFile('formato_masivo.xlsx')
//     var worksheet = await workbook.getWorksheet('LISTADO Personas ');
//     // console.log(worksheet)
//     // await worksheet.eachRow({ includeEmpty: false }, function (row, rowNumber) {
//     //     const fila = row;
//     //     console.log(fila);
//     // });

//     const trabajadores = getTrabajadores();
//     console.log(trabajadores)

//     // await worksheet.addRow({
//     //     NOMBRES: "VICTOR EDUARDO",
//     //     APELLIDO_1: "PEREZ",
//     //     APELLIDO_2: "ISLA",
//     //     TIPO_DOCUMENTO: "Run",
//     //     PAIS_DOCUMENTO: "CHILE",
//     //     NUMERO_DOCUMENTO___RUN: "10741751",
//     //     DV: "6",
//     //     FECHA_NACIMIENTO: "11/05/1966",
//     //     DOMICILIO: "Avenida 123",
//     //     COMUNA: "SAN PEDRO DE LA PAZ",
//     //     EMAIL: "villasureventos@gmail.com",
//     //     GENERO: "M",
//     //     PATENTE: "",
//     //     FUNCION_DEL_TRABAJADOR: "REPARTIDOR",
//     //     FUNCION_ESENCIAL: "Si",
//     //     PERMITE_INTERREGIONALES: "Si",
//     //     AREA_EN_LA_QUE_TRABAJA: "Labores operativas"
//     // });

//     // // Save Excel on Hard Disk
//     // await workbook.xlsx.writeFile("formato_masivo.xlsx").then(function () {
//     //     // Success Message
//     //     alert("User Saved");
//     // });
//     await worksheet.addRow(["asd", 'Sam', "adasd"]);
//     await workbook.xlsx.writeFile('formato_masivo.xlsx');
//     await alert("User Saved");
// }

function excel2(){
    fromFileAsync('formato_masivo.xlsx').then(workbook => {
        let ws=workbook.sheet("LISTADO Personas ");
        ws.cell("A2").value("NICOLAS SEBASTIAN");
        ws.cell("B2").value("PEREZ");
        ws.cell("C2").value("OPORTUS");
        ws.cell("D2").value("Run");
        ws.cell("E2").value("CHILE");
        ws.cell("F2").value("19266154");
        ws.cell("G2").value("4");
        ws.cell("H2").value("12/01/1996");
        ws.cell("I2").value("AVENIDA LAS INDUSTRIAS 3756");
        ws.cell("J2").value("SAN PEDRO DE LA PAZ");
        ws.cell("K2").value("nicolas.perez.oportus96@gmail.com");
        ws.cell("L2").value("M");
        ws.cell("M2").value("");
        ws.cell("N2").value("REPARTIDOR");
        ws.cell("O2").value("Si");
        ws.cell("P2").value("Si");
        ws.cell("Q2").value("Labores operativas");
        return workbook.toFileAsync('input.xlsx');
    });

    
    // const datos = {
    //     "NOMBRES": "NICOLAS SEBASTIAN",
    //     "APELLIDO_1": "PEREZ",
    //     "APELLIDO_2": "OPORTUS",
    //     "TIPO_DOCUMENTO": "Run",
    //     "PAIS_DOCUMENTO": "CHILE",
    //     "NUMERO DOCUMENTO / RUN": "19266154",
    //     "DV": 4,
    //     "FECHA_NACIMIENTO": "12/01/1996",
    //     "DOMICILIO": "AVENIDA LAS INDUSTRIAS 3756",
    //     "COMUNA": "SAN PEDRO DE LA PAZ",
    //     "EMAIL": "nicolas.perez.oportus96",
    //     "GENERO": "M",
    //     "PATENTE": "",
    //     "FUNCION_DEL_TRABAJADOR": "REPARTIDOR",
    //     "FUNCION_ESENCIAL": "Si",
    //     "PERMITE_INTERREGIONALES": "SI",
    //     "AREA EN LA QUE TRABAJA": "C",
    // }
}

excelBtn.addEventListener('click', async (event) => {
    excel2()
    
})
