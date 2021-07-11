import ConnectionDatabaseHelper from "../databaseHelper/ConnectionDatabaseHelper";
import { OrderInterface } from "../interfaces/OrderInterface";

class OrderService {
    public save(dataOrder: OrderInterface) :any {
        // for example: get connection, add new query insert and return it (dataOrder)
        const saveOrder = ConnectionDatabaseHelper.getConnection().sql("INSERT INTO order bla..bla..")
        return {
            query: saveOrder,
            data: dataOrder
        };
    }
}

export default OrderService;