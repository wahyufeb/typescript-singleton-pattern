import Connection from "../connections/Connection";

class ConnectionDatabaseHelper {
    private static connection :Connection

    public static getConnection(): Connection {
        // Implements Singleton for Connection
        if(!this.connection){
            this.connection = new Connection("localhost", "root", "", 2000)
        }

        return this.connection
    }
}

export default ConnectionDatabaseHelper;