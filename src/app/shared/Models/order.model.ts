import { OrderDetailModel } from "./order-detail.model";

export class OrderModel {

    public orderId: number;
    public customerId: number;
    public orderNumber: string;
    public createDate: Date;
    public totalTax: number;
    public totalDiscount: number;
    public totalOrder: number;
    public orderDetail: Array<OrderDetailModel>
}