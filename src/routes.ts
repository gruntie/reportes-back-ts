import { Example } from "./entities/example";
import { Response } from "./entities/response";
import { Reportes } from "./func/reportes";
import { Usuarios } from "./func/usuarios";

export const Routes = (app: any, cors: any) => {
    const rFuncs = new Reportes();
    const uFuncs = new Usuarios();
    const corsOptions = {
        optionsSuccessStatus: 200,
        origin: "*"
    };
    const failResp: Response = {
        message: "",
        response: null,
        status: 500
    };

    app.get( "/", (req: any, res: any) => {
        res.send( "Home page!" );
    });

    app.get("/test", cors(corsOptions), (req: any, res: any) => {
        res.set({"Content-Type": "application/json"});
        res.json(new Example());
    });

    // app.get("/url", (req: any, res: any, next: any) => {
    //    let exp: Example = new Example();
    //    exp = {
    //        result: 964,
    //        value: "this issue has been resolved :)"
    //    };
    //    res.json(exp);
    // });

    // app.post("/upload", cors(corsOptions), (req: any, res: any) => {
    //    res.set({"Content-Type": "application/json"});
    //    res.json({val1: req.body.value, val2: req.body.result, val3: rFuncs.obtenerReportes(req.body.result)});
    // });

    app.post("/altaUsuario", cors(corsOptions), (req: any, res: any) => {
        try {
            const datos = [ req.body.nombre, req.body.login, req.body.password ];
            const result = rFuncs.altaUsuario(datos);
            res.send(result);
        } catch (err) {
            res.status(500);
            if (err instanceof RangeError) {
                failResp.message = "Error en payload";
                res.send(failResp);
            } else {
                res.send(false);
            }
        }
    });

    app.get("/usuarios", (req: any, res: any, next: any) => {
        uFuncs.obtenerUsuariosTodos().then((value: any) => {
            res.set({"Content-Type": "application/json"});
            res.json(value);
        });
    });
};
