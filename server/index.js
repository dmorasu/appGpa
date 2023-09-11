const express=require("express");
const app=express();
const mysql=require("mysql");
const cors=require("cors");

app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"bd_inmobiliario"
});

app.post("/create",(req,res)=>{
    const identificacion=req.body.identificacion;
    const nombre=req.body.nombre;
    const email=req.body.email;
    const telefono=req.body.telefono;
    const honorarios=req.body.honorarios;
    const proceso=req.body.proceso;
    const fAsignacion=req.body.fAsignacion;
    const caso=req.body.caso;
    const notaria=req.body.notaria;
    const vFinanciado=req.body.vFinanciado;
    const valorAvaluo=req.body.valorAvaluo
    const matricula=req.body.matricula;
    const estado=req.body.estado;
    const subclasificacion=req.body.subclasificacion;
    const hipoteca=req.body.hipoteca;
    const hipotecaCon=req.body.hipotecaCon;
    const regional=req.body.regional;
    const responsable=req.body.responsable;
    const estadoEtapa=req.body.estadoEtapa;
    const comercial=req.body.comercial;
    const fSolicitudDoc=req.body.fSolicitudDoc;
    const fEntregaHonorarios=req.body.fpagoHonorarios;
    const fElaboracionTitulo=req.body.fElaboracionTM;
    const motivoSuspension=req.body.motivoSuspension;
    const fvistoBuenoBanco=req.body.fVistoBuenoBanco;
    const fEnvioDocNotaria=req.body.fEnvioDocNotaria;
    const fRecepcionEscrituraNotaria=req.body.fRecepcionEscrituraNotaria;
    const fVistoBuenoEscrituraBanco=req.body.fVistoBuenoEscrituraBanco;
    const fRevisionFirmaEscritura=req.body.fRevisionFirmaEscritura;
    const fRemisionEscrituraFirmadaNotaria=req.body.fRemisionEscrituraFirmadaNotaria;
    const fProtocoloIngresoRegistro=req.body.fProtocoloEntregaRegistro;
    const fEscrituraRegistrada=req.body.fEscrituraRegistrada;
    const fNovedadRegistro=req.body.fNovedadRegistro;
    const fSubsanacion=req.body.fSubsanacionNovedad;
    const fEntregaNotaria=req.body.fEntregaNotaria;
    const fEnvioControlGarantiaBanco=req.body.fEnvioControlGarantiaBanco;
    const fCierre=req.body.fCierre;
    const resumenGestion=req.body.resumenGestion;

    db.query('INSERT INTO leasginfinanciero (identificacion,nombre,email,telefono,honorarios,tipo_proceso,fechaAsignacion,caso,notaria,vFinanciado,valorAvaluo,matricula,estado,subclasificacion,hipoteca,hipotecaCon,regional,responsable,estadoEtapa,comercial,fechaSolicitudDoc,fechaPagoHonorarios,fechaElaboracionTitulo,motivoSuspension,fechaVistoBuenoBanco,fechaEnvioDocNotaria,fechaRecepcionEscrituraNotaria,fechaVistoBuenoEscrituraBanco,fechaRevisionFirmaEscritura,fechaRemisionEscrituraFirmadaNotaria,fechaProtocoloEntregaRegistro,fechaEscrituraFirmada,fechaNovedadRegistro,fechaSubsanacionNovedad,fechaEntregaNotaria,fechaControlGarantiaBanco,fechaCierre,resumenGenstion) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [identificacion,nombre,email,telefono,honorarios,proceso,fAsignacion,caso,notaria,vFinanciado,valorAvaluo,matricula,estado,subclasificacion,hipoteca,hipotecaCon,regional,responsable,estadoEtapa,comercial,fSolicitudDoc,fEntregaHonorarios,fElaboracionTitulo,motivoSuspension,fvistoBuenoBanco,fEnvioDocNotaria,fRecepcionEscrituraNotaria,fVistoBuenoEscrituraBanco,fRevisionFirmaEscritura,fRemisionEscrituraFirmadaNotaria,fProtocoloIngresoRegistro,fEscrituraRegistrada,fNovedadRegistro,fSubsanacion,fEntregaNotaria,fEnvioControlGarantiaBanco,fCierre,resumenGestion],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Proceso Registrado con Exito");
        }
    });
    
});

app.get("/procesos",(req,res)=>{
    

    db.query('SELECT * FROM leasginfinanciero ',
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
    
});


app.listen(3002,()=>{
    console.log("Ingresamos a NodeJS por el puerto 3002")
})
