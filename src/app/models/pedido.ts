export class Pedido {
    _id?: number;
    numeroPedido: number;
    mesero: { nombreMesero: string, emailMesero: string };
    cliente: { nombre: string, email: string };
    pedido: { tipo: string, nombre: string, cantidad: number }[];
    total: number;
    tipo: string;

    constructor(
        numeroPedido: number,
        mesero: { nombreMesero: string, emailMesero: string },
        cliente: { nombre: string, email: string },
        pedido: { tipo: string, nombre: string, cantidad: number }[],
        total: number,
        tipo: string,
    ) {
        this.numeroPedido = numeroPedido;
        this.mesero = mesero;
        this.cliente = cliente;
        this.pedido = pedido;
        this.total = total;
        this.tipo = tipo;
    }
}
