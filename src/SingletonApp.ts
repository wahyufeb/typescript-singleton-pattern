import { OrderInterface, DetailOrderInterface } from "./interfaces/OrderInterface";
import OrderService from "./services/OrderService";
import OrderDetailService from "./services/OrderDetailService";

class SingletonApp {
    constructor() {}

    private getOrderData() :OrderInterface {
        return {
            id: 1,
            name: "June Wanwimol Jaenasavamethee",
            products: ["Laptop", "Tas"]
        }
    }

    private getDetailOrderData() :DetailOrderInterface {
        return {
            id: 1,
            name: "June Wanwimol Jaenasavamethee",
            products: ["Laptop", "Tas"],
            details: ["Laptop RAM 16GB", "Tas Gucci Gang"]
        }
    }

    public saveAction() :any {
        const orderService = new OrderService()
        const saveOrder = orderService.save(this.getOrderData());

        const detailOrderService = new OrderDetailService()
        const saveDetailOrder = detailOrderService.save(this.getDetailOrderData());

        return {
            saveOrder,
            saveDetailOrder
        }
    }
}

export default SingletonApp;