import { Datos } from "../data/datos";

export class Reportes {
    public datos: Datos = new Datos();

    public obtenerReportes = (n: number) => {
        return n * 2;
    }

    public altaUsuario = (datos: any[]): boolean => {
        return this.datos.AltaUsuario(datos);
    }
}
