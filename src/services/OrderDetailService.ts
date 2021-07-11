import ConnectionDatabaseHelper from "../databaseHelper/ConnectionDatabaseHelper";
import { DetailOrderInterface } from "../interfaces/OrderInterface"

class OrderDetailService {
    public save(dataDetailOrder: DetailOrderInterface) :any {
        // for example: get connection, add new query insert and return it (dataDetailOrder)
        const saveDetailService = ConnectionDatabaseHelper.getConnection().sql("INSERT INTO order_detail bla...bla..");
        return {
            query: saveDetailService,
            data: dataDetailOrder
        };
    }
}

export default OrderDetailService;