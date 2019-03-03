import bcrypt from "bcryptjs";
import { Datos } from "../data/datos";
import { Response } from "../entities/response";
import { Usuario } from "../entities/usuario";

export class Usuarios {
    public datos: Datos = new Datos();

    public obtenerUsuariosTodos = async (): Promise<any> => {
        try {
            return await this.datos.ConsultaUsuariosTodos();
        } catch (e) {
            const resp = new Response();
            resp.status = 500;
            resp.response = null;
            if (e instanceof RangeError) {
                resp.message = "Error en el payload";
                return resp;
            } else {
                resp.message = "Error en el servicio";
                return resp;
            }
        }
    }

    public altaUsuario = async (reqdatos: any[]): Promise<any> => {
        try {
            const salt = bcrypt.genSaltSync(10);
            reqdatos[2] = bcrypt.hashSync(reqdatos[2], salt);
            return await this.datos.AltaUsuario(reqdatos);
        } catch (e) {
            const resp = new Response();
            resp.status = 500;
            resp.response = null;
            if (e instanceof RangeError) {
                resp.message = "Error en el payload";
                return resp;
            } else {
                resp.message = "Error en el servicio";
                return resp;
            }
        }
    }

    public verificaLogin = async (reqdatos: any[]): Promise<any> => {
        try {
            return await this.datos.CargaUsuario(reqdatos[0]).then((resp: Usuario) => {
                if (resp === undefined) {
                    return false;
                } else {
                    if (bcrypt.compareSync(reqdatos[1], resp.password)) {
                        resp.password = null;
                        return resp;
                    } else {
                        return false;
                    }
                }
            });
        } catch (e) {
            const resp = new Response();
            resp.status = 500;
            resp.response = null;
            if (e instanceof RangeError) {
                resp.message = "Error en el payload";
                return resp;
            } else {
                resp.message = "Error en el servicio";
                return resp;
            }
        }
    }
}
