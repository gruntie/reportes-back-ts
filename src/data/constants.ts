export const ALTA_USUARIO: string = "INSERT INTO T_USUARIOS (nombre, login, password) VALUES (?,?,?);";
export const CARGA_USUARIO: string = "SELECT id_usuario, nombre, login, password, estatus " +
    "FROM T_USUARIOS WHERE login = ? AND estatus = 1;";
export const CARGA_USUARIOS_TODOS: string = "SELECT * FROM T_USUARIOS;";
export const EDITA_USUARIO: string = "";
export const BAJA_USUARIO: string = "";
export const BORRA_USUARIO: string = "";
