import { Datos } from "../data/datos";

export class Usuarios {
    public datos: Datos = new Datos();

    public obtenerUsuariosTodos = async (): Promise<any> => {
        return await this.datos.ConsultaUsuariosTodos();
    }
}
